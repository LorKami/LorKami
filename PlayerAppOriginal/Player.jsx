import React, { useRef, useEffect, useState } from 'react';
import './player.scss';
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill} from 'react-icons/bs';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const Player = ({audioElem, isplaying, setisplaying, currentSong, setCurrentSong, songs})=> {

  const clickRef = useRef();

  const PlayPause = ()=>
  {
    console.log('playpouse1' + isplaying)
    setisplaying(!isplaying);
    console.log('playpouse2' + isplaying)
  }


  const checkWidth = (e)=>
  {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * currentSong.length;

  }

  const skipBack = ()=>
  {
    const index = songs.findIndex(x=>x.title == currentSong.title);
    if (index == 0)
    {
      setCurrentSong(songs[songs.length - 1])
    }
    else
    {
      setCurrentSong(songs[index - 1])
    }
    audioElem.current.currentTime = 0;
    
  }


 const skiptoNext = ()=>
 {
   console.log('skip' + isplaying)
   const index = songs.findIndex(x=>x.title == currentSong.title);

   if (index == songs.length-1)
   {
     setCurrentSong(songs[0])
   }
   else
   {
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

  const [volume, setVolume] = useState(30);
  const [mute, setMute] = useState(false);

  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect (() => {
    if (audioElem){
      audioElem.current.volume = volume / 100;
    }
    if (isplaying){
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
    if(time && !isNaN(time)){
        const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
        const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);

        return `${minutes}:${seconds}`;
    }
    return '00:00';
}

  function VolumeBtns(){
    return mute
        ? <VolumeOffIcon sx={{color: 'white', '&:hover': {color: 'white'}}} />
        : volume <= 0 ? <VolumeOffIcon sx={{color: 'white', '&:hover': {color: 'white'}}} />
        : volume <= 15 ? <VolumeMuteIcon sx={{color: 'white', '&:hover': {color: 'white'}}} />
        : volume <= 55 ? <VolumeDown sx={{color: 'white', '&:hover': {color: 'white'}}} />
        : <VolumeUp sx={{color: 'white', '&:hover': {color: 'white'}}} />
}

  return (
    <div className='player_container'>
      {console.log ('putavariable' + isplaying)}
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
          <div className="seek_bar" style={{width: `${currentSong.progress+"%"}`}}></div>
          <div className='time'>
            <p>{formatTime(elapsed)}</p>
            <p>{formatTime(duration)}</p>
          </div>
        </div>
      </div>
      <div className="controls">
        <SkipPreviousIcon className='btn_action' onClick={skipBack}/>
        {isplaying ? <BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause}/> : <BsFillPlayCircleFill className='btn_action pp' onClick={PlayPause}/>}
        <SkipNextIcon className='btn_action' onClick={skiptoNext}/>
        
        <Box sx={{ width: 200 }}>
      <Stack spacing={1} direction="row" sx={{ mb: 0 }} alignItems="center">
        <VolumeBtns />
        <Slider  aria-label="Volume"
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
                      width: 15,
                      height: 15,
                    },
                  },
                }}
                 />
        {/* <VolumeUp /> */}
      </Stack>
    </Box>
      </div>
    </div>
  
  )
}

export default Player