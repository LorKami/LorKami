import React, { useState, useRef, useEffect } from 'react';
import './ReproductorMusica.css';
import { IoPlayCircleSharp, IoPauseCircleSharp, IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.1); // Inicializamos el volumen a 0.1
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const songs = [
    {
      title: "Soviet Anthem",
      src: "https://cdn.discordapp.com/attachments/565077348651761664/1034362051843334236/soviet-anthem-easy-to-expert-but.mp3"
    },
    {
      title: "ENEMY LoFi Hip Hop",
      src: "https://cdn.discordapp.com/attachments/565077348651761664/1034334391897436180/Enemy_Lofi.mp3"
    },
  ];
  const audioPlayer = useRef(null);

  useEffect(() => {
    const player = audioPlayer.current;

    const handleTimeUpdate = () => {
      setCurrentTime(player.currentTime);
      setDuration(player.duration);
    };

    const handleSongEnd = () => {
      const nextSongIndex = (currentSongIndex + 1) % songs.length;
      setCurrentSongIndex(nextSongIndex);
      playSong(nextSongIndex);
    };

    player.addEventListener('timeupdate', handleTimeUpdate);
    player.addEventListener('ended', handleSongEnd);

    return () => {
      player.removeEventListener('timeupdate', handleTimeUpdate);
      player.removeEventListener('ended', handleSongEnd);
    };
  }, [currentSongIndex, songs]);

  useEffect(() => {
    const player = audioPlayer.current;

    if (isPlaying) {
      player.play().catch(error => console.error(error));
    } else {
      player.pause();
    }

    return () => {
      player.pause();
    };
  }, [isPlaying, currentSongIndex]);

  useEffect(() => {
    audioPlayer.current.volume = volume;
  }, [volume]); // Actualiza el volumen cuando cambia

  const playSong = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleTimeSeek = (event) => {
    const seekTime = event.target.value;
    audioPlayer.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleVolumeChange = (event) => {
    const volume = event.target.value;
    setVolume(volume);
  };

  const handleSkipBack = () => {
    if (currentTime > 3) {
      audioPlayer.current.currentTime = 0;
    } else {
      const newIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
      playSong(newIndex);
    }
  };

  const handleSkipForward = () => {
    const newIndex = (currentSongIndex + 1) % songs.length;
    playSong(newIndex);
  };

  return (
    <div className="player-container">
      <audio
        ref={audioPlayer}
        src={songs[currentSongIndex].src}
      ></audio>
      <div className="controls">
        <IoPlaySkipBackSharp onClick={handleSkipBack} style={{ verticalAlign: 'middle' }} size='1.3rem' />
        {isPlaying ? (
          <IoPauseCircleSharp onClick={togglePlay} style={{ verticalAlign: 'middle' }} size='1.3rem' />
        ) : (
          <IoPlayCircleSharp onClick={togglePlay} style={{ verticalAlign: 'middle' }} size='1.3rem' />
        )}
        <IoPlaySkipForward onClick={handleSkipForward} style={{ verticalAlign: 'middle' }} size='1.3rem' />
        <input
          type="range"
          value={currentTime}
          max={duration}
          onChange={handleTimeSeek}
        />
        <span>{`${Math.floor(currentTime / 60)}:${String(Math.floor(currentTime % 60)).padStart(2, '0')} / ${Math.floor(duration / 60)}:${String(Math.floor(duration % 60)).padStart(2, '0')}`}</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default Player;
