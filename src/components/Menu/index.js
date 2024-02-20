import React, { useState } from "react";
import { Sling as Hamburger } from 'hamburger-react'
import { useNavigate } from "react-router-dom";
import "./Menu.css";

import { IoIosArrowDown } from 'react-icons/io';
import { AiFillHeart } from 'react-icons/ai';
import { MdSpeakerNotes } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';

import LorKami from "../../images/Menu/LorKami.webp";
import LorKami2 from "../../images/Menu/LorKami2.webp";
import Angelo from "../../images/Menu/Angelo.webp";
import Nico from "../../images/Menu/Nico.webp";


const Menu = () => {
  let navigate = useNavigate();
  const [isOpen, setOpen] = useState(false)
  // const [isMenuOpen, setisMenuOpen] = useState(false);
  const [morePanel, setMorePanel] = useState(false);
  function MorePanelOpen() {
    setMorePanel(!morePanel);
  }
  const [symbol, setsymbolRotate] = useState(false);
  function symbolRotate() {
    setsymbolRotate(!symbol);
  }
  const [menuOpen, setMoreMenuOpen] = useState(false);
  function MoreMenuOpen() {
    setMoreMenuOpen(!menuOpen);
  }

  return (

    <div>

      {/* <div className='SuperMenu'> */}
      <div className={"SuperMenu-" + (menuOpen ? "Open" : "Closed")}>

        <div className="MenuHeader">
          <div className="MenuLogo"><img src={LorKami2}></img></div>
          <div className="MenuHamburger" onClick={() => MoreMenuOpen()}><Hamburger toggled={isOpen} toggle={setOpen} direction="right" duration={0.8} size={30} /></div>
        </div>


        <div className="SectionDivisor">

          <div className="MenuContainer">

            <div className="MenuText">
              <a href="/"><p>Inicio <FaHome style={{ verticalAlign: 'middle' }} size='1.2rem' /></p></a>
              <a href="/Galeria"><p>Galeria <AiFillHeart style={{ verticalAlign: 'middle' }} size='1.3rem' /></p></a>
              <a href="/Guias"><p>Guias <MdSpeakerNotes style={{ verticalAlign: 'middle' }} size='1.3rem' /></p></a>
              <a href="/ProyectoDiscord"><p>Proyect Discord <MdSpeakerNotes style={{ verticalAlign: 'middle' }} size='1.3rem' /></p></a>
            </div>

            <div className="Menu">

              <div className="MenuPlus" onClick={() => { MorePanelOpen(); symbolRotate(); }}>
                <p>BiografiasRP</p>
                <span className={`Arrow-${symbol ? "up" : "down"}`}>
                  <IoIosArrowDown style={{ verticalAlign: 'middle' }} size='1.5rem' />
                </span>
              </div>

            </div>

            <div className={"MorePanel-" + (morePanel ? "Open" : "Closed")}>

              <a href="/FichaMV"><p>Mijail Volkov <BsFillFileEarmarkPersonFill style={{ verticalAlign: 'middle' }} size='1rem' /></p></a>
              <a href="/Guias"><p>Hector Vettel <BsFillFileEarmarkPersonFill style={{ verticalAlign: 'middle' }} size='1rem' /></p></a>
              <a href="/Guias"><p>Miguel Vettel <BsFillFileEarmarkPersonFill style={{ verticalAlign: 'middle' }} size='1rem' /></p></a>
            </div>

          </div>

          <div className="MenuSocial">
            <div className="SocialIco">
              <a href="/"><img src={LorKami}></img></a>
              <a className="blocked"><img src={Angelo}></img></a>
              <a href="/"><img src={Nico}></img></a>
            </div>
          </div>

        </div>



      </div>


    </div>
  )
}

export default Menu