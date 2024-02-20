import React from 'react';
import Monitor from "../components/Monitor";
import Menu from "../components/Menu";
import PlayerApp from "../components/PlayerApp";
// import ReproductorMusica from '../components/ReproductorMusica'

function Home() {

  return (
    <div>
      <Menu />
      <Monitor />
      <PlayerApp />
      {/* <ReproductorMusica /> */}
    </div>
  )
}

export default Home