import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeMute, FaVolumeDown, FaVolumeUp } from 'react-icons/fa';

const songs = [
  {
    id: 1,
    title: 'SOVIET ANTHEM ☭',
    artist: 'Pacil',
    cover: 'https://media.discordapp.net/attachments/565077348651761664/1034361821139828776/soviet.png',
    source: 'https://cdn.discordapp.com/attachments/565077348651761664/1034362051843334236/soviet-anthem-easy-to-expert-but.mp3'
  },
  {
    id: 2,
    title: 'ENEMY LoFi Hip Hop',
    artist: 'Samuel Kim Music',
    cover: 'https://media.discordapp.net/attachments/565077348651761664/1034335305018380350/jinx.png',
    source: 'https://cdn.discordapp.com/attachments/565077348651761664/1034334391897436180/Enemy_Lofi.mp3'
  },
];

const Player = () => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(80);
  
    const audioRef = useRef(null);
  
    useEffect(() => {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }, [isPlaying]);
  
    useEffect(() => {
      audioRef.current.currentTime = currentTime;
    }, [currentTime]);
  
    useEffect(() => {
      audioRef.current.volume = volume / 100;
    }, [volume]);
  
    const handlePlayPause = () => {
      setIsPlaying(!isPlaying);
    };
  
    const handleNextSong = () => {
      setCurrentSongIndex((prevIndex) => (prevIndex === songs.length - 1 ? 0 : prevIndex + 1));
      setCurrentTime(0);
      setIsPlaying(true); // Reproducir automáticamente la siguiente canción
    };
  
    const handlePreviousSong = () => {
      setCurrentSongIndex((prevIndex) => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1));
      setCurrentTime(0);
      setIsPlaying(true); // Reproducir automáticamente la canción anterior
    };
  
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
  
    const handleVolumeClick = (e) => {
      const rect = e.target.getBoundingClientRect();
      const clickPosition = e.clientX - rect.left;
      const volumePercentage = (clickPosition / rect.width) * 100;
      setVolume(volumePercentage);
    };
  
    const currentSong = songs[currentSongIndex];
  
    return (
      <div className="player">
        <div className="controls">
          <button onClick={handlePreviousSong}>
            <FaStepBackward />
          </button>
          <button onClick={handlePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={handleNextSong}>
            <FaStepForward />
          </button>
        </div>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${(currentTime / audioRef.current?.duration) * 100}%` }}
          ></div>
        </div>
        <div className="volume-bar">
          <div className="volume" style={{ width: `${volume}%` }}></div>
          <div className="volume-icon">
            {volume === 0 && <FaVolumeUp />}
            {volume === 0 && <FaVolumeMute />}
            {volume > 0 && volume <= 50 && <FaVolumeDown />}
            {volume > 50 && <FaVolumeUp />}
          </div>
        </div>
        <div className="song-details">
          <img src={currentSong.cover} alt={currentSong.title} />
          <div>
            <h3>{currentSong.title}</h3>
            <p>{currentSong.artist}</p>
          </div>
        </div>
        <audio ref={audioRef} src={currentSong.source} onTimeUpdate={handleTimeUpdate} onEnded={handleNextSong} />
      </div>
    );
  };
  
  export default Player;