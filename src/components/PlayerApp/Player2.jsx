import React, { useRef, useEffect, useState } from 'react';
import './MusicPlayer2.css'
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill } from 'react-icons/bs';
import { FaRadio } from "react-icons/fa6";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

import * as mm from 'music-metadata-browser';

import { radiosdata } from './radio';

async function getMetadataFromUrl(audioUrl) {
  try {
    const metadata = await mm.fetchFromUrl(audioUrl);
    return metadata.common; // Devuelve solo los metadatos comunes
  } catch (error) {
    console.error('Error al obtener los metadatos:', error);
    return null;
  }
}


const Player = ({ audioElem, isplaying, setisplaying, currentSong, setCurrentSong, songs }) => {

  const [isPaused, setIsPaused] = useState(false);

  const clickRef = useRef();
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [playlist, setPlaylist] = useState([]);

  const restartAudio = () => {
    audioElem.current.pause(); // Pausa la reproducción del audio actual
    audioElem.current.load(); // Vuelve a cargar el audio para reiniciar la conexión al enlace de la radio
  }

  useEffect(() => {
    setPlaylist(radiosdata); // Utilizar los datos de canciones importados
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const radiosWithMetadata = await Promise.all(radiosdata.map(async (radio) => {
          const metadata = await getMetadataFromUrl(radio.url); // Suponiendo que la URL de la radio contiene la metadata
          return {
            title: metadata.title || 'No Title',
            artist: metadata.artist || 'No Artist',
            musicimage: metadata.picture ? URL.createObjectURL(new Blob([metadata.picture[0].data], { type: 'image/jpeg' })) : 'https://media.discordapp.net/attachments/565077348651761664/1034335305018380350/jinx.png',
            url: radio.url
          };
        }));
        setPlaylist(radiosWithMetadata);
      } catch (error) {
        console.error('Error al cargar la lista de radios:', error);
      }
    };

    fetchData();
  }, []);

  const togglePlayPause = () => {
    setIsPaused(!isPaused); // Invierte el estado de pausa
    setisplaying(!isplaying); // Esto también puede necesitar ajustarse según cómo uses isplaying en tu lógica
    // Si está reproduciendo y no está en pausa, reinicia el audio
    if (!isPaused && isplaying) {
      restartAudio();
    }
  }

  useEffect(() => {
    if (!isPaused && isplaying) {
      const intervalId = setInterval(() => {
        setElapsed(audioElem.current.currentTime); // Actualiza el tiempo transcurrido continuamente
      }, 1000); // Actualiza cada segundo

      return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente o cambiar el estado de pausa
    }
  }, [isPaused, isplaying]);



  const togglePlaylist = () => {
    setShowPlaylist(!showPlaylist);
  };

  const selectSong = (song) => {
    setCurrentSong(song);
    setShowPlaylist(false); // Ocultar la lista después de seleccionar una canción
    audioElem.current.currentTime = 0; // Reiniciar la reproducción
  };

  // const PlayPause = () => {
  //   console.log('playpouse1' + isplaying)
  //   setisplaying(!isplaying);
  //   console.log('playpouse2' + isplaying)
  // }

  const PlayPause = () => {
    togglePlayPause();
  }


  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * currentSong.length;

  }

  const skipBack = () => {
    const index = songs.findIndex(x => x.title == currentSong.title);
    if (index == 0) {
      setCurrentSong(songs[songs.length - 1])
    }
    else {
      setCurrentSong(songs[index - 1])
    }
    audioElem.current.currentTime = 0;

  }


  const skiptoNext = () => {
    console.log('skip' + isplaying)
    const index = songs.findIndex(x => x.title == currentSong.title);

    if (index == songs.length - 1) {
      setCurrentSong(songs[0])
    }
    else {
      setCurrentSong(songs[index + 1])
    }
    audioElem.current.currentTime = 0;
    // audioElem.current.play();
    setisplaying(isplaying);
    console.log('ct=' + audioElem.current.currentTime + 'isplaying = ' + isplaying + 'index=' + index)
  }


  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const autoSkip = () => {
  //   const duration = audioElem.current.duration;
  //   const ct = audioElem.current.currentTime;
  //   if (ct==duration) {
  //     skiptoNext();
  //   } 
  // }

  // React.useEffect(() => {
  //   audioElem.current.addEventListener('ended', () => {
  //     skiptoNext();
  //      PlayPause();
  //   });
  // }, []);

  const [volume, setVolume] = useState(2);
  const [mute, setMute] = useState(false);

  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioElem) {
      audioElem.current.volume = volume / 100;
    }
    if (isplaying) {
      setInterval(() => {
        const _duration = Math.floor(audioElem?.current?.duration);
        const _elapsed = Math.floor(audioElem?.current?.currentTime);

        setDuration(_duration);
        setElapsed(_elapsed);
      }, 100);
    }
  }, [
    volume, isplaying
  ]);

  function formatTime(time) {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
      const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);

      return `${minutes}:${seconds}`;
    }
    return '00:00';
  }

  function VolumeBtns() {
    const iconSize = 20; // Tamaño deseado para los iconos

    return mute
      ? <VolumeOffIcon sx={{ color: 'white', fontSize: iconSize }} />
      : volume <= 0 ? <VolumeOffIcon sx={{ color: 'white', fontSize: iconSize }} />
        : volume <= 15 ? <VolumeMuteIcon sx={{ color: 'white', fontSize: iconSize }} />
          : volume <= 55 ? <VolumeDownIcon sx={{ color: 'white', fontSize: iconSize }} />
            : <VolumeUp sx={{ color: 'white', fontSize: iconSize }} />;
  }

  return (
    <div className='player_container'>
      {console.log('putavariable' + isplaying)}
      <div className='ImageMusic'>
        <div className='MusicPic'>
          <img src={currentSong.musicimage}></img>
        </div>

        <div className='MusicInfo'>
          <div className="title">
            <p>{currentSong.title}</p>
          </div>
          <div className="artist">
            <p>{currentSong.artist}</p>
          </div>
        </div>

      </div>
      <div className="navigation">
        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
          <div className="seek_bar" style={{ width: `${currentSong.progress + "%"}` }}></div>
          <div className='time'>
            <p>{formatTime(elapsed)}</p>
            <p>{formatTime(duration)}</p>
          </div>
        </div>
      </div>
      <div className="controls">
        <div className='Controls-Principal'>
          <FaRadio className='btn_list' onClick={togglePlaylist} />
          <SkipPreviousIcon className='btn_action' onClick={skipBack} />
          {isplaying ? <BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause} /> : <BsFillPlayCircleFill className='btn_action pp' onClick={PlayPause} />}
          <SkipNextIcon className='btn_action' onClick={skiptoNext} />
        </div>

        <Box sx={{ width: 100 }}>
          <Stack spacing={1} direction="row" sx={{ mb: 0 }} alignItems="center">
            <VolumeBtns />
            <Slider aria-label="Volume"
              min={0} max={100}
              value={volume}
              onChange={(e, v) => setVolume(v)}
              sx={{
                color: "rgba(119, 119, 119, 0.781)",
                "& .MuiSlider-track": {
                  border: "none",
                  backgroundColor: "white",
                },
                "& .MuiSlider-thumb": {
                  width: 0,
                  height: 0,
                  backgroundColor: "white",

                  "&:hover, &.Mui-focusVisible, &.Mui-active": {
                    boxShadow: "none",
                    width: 10,
                    height: 10,
                  },
                },
              }}
            />
            {/* <VolumeUp /> */}
          </Stack>
        </Box>
      </div>

      {showPlaylist && (
        <div className="playlist">


          {playlist.map((song, index) => (
            <div className='BoxMenuRadio'>
              <div className='BoxMenuContentRadio'>
                <div className='BoxMenuIcon'><FaRadio style={{ verticalAlign: 'middle' }} size='1rem' /></div>
                <div className='BoxMenuLink'>
                  <p key={index} onClick={() => selectSong(song)}>{song.title}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      )}

    </div>

  )
}

export default Player;