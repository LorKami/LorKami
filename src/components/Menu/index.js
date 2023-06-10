import React, { useState } from "react";
import { Sling as Hamburger } from 'hamburger-react'
import { useNavigate } from "react-router-dom";
import "./Menu.css";

import { IoIosArrowDown } from 'react-icons/io';
import { AiFillHeart } from 'react-icons/ai';
import { MdSpeakerNotes } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';

import LorKami from "../../images/Menu/LorKami.png";
import LorKami2 from "../../images/Menu/LorKami2.png";
import Angelo from "../../images/Menu/Angelo.png";
import Nico from "../../images/Menu/Nico.png";


const Menu = () => {
    let navigate = useNavigate();
    const [isOpen, setOpen] = useState(false)
    // const [isMenuOpen, setisMenuOpen] = useState(false);
    const [morePanel, setMorePanel] = useState(false);
    function MorePanelOpen(){
      setMorePanel(!morePanel);
    }
    const [symbol, setsymbolRotate] = useState(false);
    function symbolRotate(){
      setsymbolRotate(!symbol);
    }
    const [menuOpen, setMoreMenuOpen] = useState(false);
    function MoreMenuOpen(){
      setMoreMenuOpen(!menuOpen);
    }

  return (
    
    <div>

<link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
        
    {/* <div className='SuperMenu'> */}
    <div className={"SuperMenu-" + (menuOpen ? "Open" : "Closed")}>

        <div className="MenuHeader">
          <div className="MenuLogo"><img src={LorKami2}></img></div>
          <div className="MenuHamburger" onClick={() => MoreMenuOpen()}><Hamburger toggled={isOpen} toggle={setOpen} direction="right" duration={0.8} size={30} /></div>
        </div>


        <div className="SectionDivisor">

        <div className="MenuContainer">
          <div className="Menu">
          <a href="/"><p>Inicio <FaHome style={{ verticalAlign: 'middle' }} size='1.3rem'/></p></a>
            <div className="MenuPlus" onClick={() => MorePanelOpen()}><span onClick={() => symbolRotate ()} class={"Arrow-" + (symbol ? "up" : "down")}> <IoIosArrowDown style={{ verticalAlign: 'middle' }} size='1.8rem'/> </span></div>
          </div>

          <div className={"MorePanel-" + (morePanel ? "Open" : "Closed")}>

        <a href="/Guias"><p>Guias <MdSpeakerNotes style={{ verticalAlign: 'middle' }} size='1.3rem'/></p></a>

        </div>

        <div className="MenuText">
          <a href="/Galeria"><p>Galeria <AiFillHeart style={{ verticalAlign: 'middle' }} size='1.3rem'/></p></a>
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