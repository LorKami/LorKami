import React from 'react';
import Menu from "../components/Menu";
import PlayerApp from "../components/PlayerApp";
import Guias from "../components/Guias"
import Footer from '../components/Footer'

const GuiasInfo = () => {
  return (
    <div>
      <Menu />
      <Guias />
      <PlayerApp />
      <Footer />
    </div>
  )
}

export default GuiasInfo