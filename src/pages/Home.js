import React from 'react';
import Monitor from "../components/Monitor";
import Menu from "../components/Menu";
import Player from "../components/Player";
import ReproductorMusica from '../components/ReproductorMusica'

function Home() {

  return (
    <div>
        <Menu />
        <Monitor />
        <Player />
        <ReproductorMusica />
        </div>
  )
}

export default Home