import Player from './Player2';
import { songsdata } from './audios2';
import { useRef, useState, useEffect } from 'react';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import "./MusicPlayer2.css";


const PlayerApp = () => {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isplaying])

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

  }

  const [isOpen, setOpen] = useState(false)
  const [moreMusic, setMenuMusic] = useState(true);
  function MenuMusicOpen() {
    setMenuMusic(!moreMusic);
  }

  const [mute, setMute] = useState(false);


  return (

    <div className="MusicSection2">
      {/* <div className="MusicBtn" onClick={() => MenuMusicOpen()}>
        <a>
          <QueueMusicIcon sx={{ fontSize: 28 }} />
        </a>
      </div> */}


      {/* <div className={"MusicBox-" + (moreMusic ? "Open" : "Closed")}> */}
      <div className="MusicBox-Open">

        <div className="App">
          <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} muted={mute} />
          <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
        </div>

      </div>
    </div>
  );
}

export default PlayerApp;