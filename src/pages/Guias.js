import React from 'react';
import Menu from "../components/Menu";
import Player from "../components/Player";
import Guias from "../components/Guias"
import Footer from '../components/Footer'

const GuiasInfo = () => {
  return (
    <div>
        <Menu />
        <Guias />
        <Player />
        <Footer />
    </div>
  )
}

export default GuiasInfo