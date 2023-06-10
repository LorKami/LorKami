import React, { useState } from 'react';

import "./Galeria.css";
import "./GaleriaMenu.css";

import { Link, animateScroll as scroll } from "react-scroll";

import { AiFillCloseCircle } from 'react-icons/ai';
import { FaHatCowboy } from 'react-icons/fa';
import { GiPirateFlag, GiPerspectiveDiceSixFacesRandom, GiGamepad } from 'react-icons/gi';

const Galeria = () => {

     ///// --------------------- Link Action --------------------- /////
     const [activeSection, setActiveSection] = useState(null);

     const handleSetActive = (to) => {
       setActiveSection(to);
     };
     ///// --------------------- Link Action --------------------- /////

    const RedDeadRedemption = [
      require('../../images/Galeria/RedDeadRedemption2/Arboles.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Bosque.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Bosque2.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Caballo.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Descanso.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Montaña.webp'),
      require('../../images/Galeria/RedDeadRedemption2/nieve.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Nieve2.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Montaña1.webp'),
      require('../../images/Galeria/RedDeadRedemption2/paisaje.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Patrullaje1.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Patrullaje11.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Sheriff.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Sheriff2.webp'),
      require('../../images/Galeria/RedDeadRedemption2/tren.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Valentine.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Lowell.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Buffalo.webp'),
      require('../../images/Galeria/RedDeadRedemption2/kami1.webp'),
      require('../../images/Galeria/RedDeadRedemption2/kami2.webp'),
      require('../../images/Galeria/RedDeadRedemption2/kami3.webp'),
      require('../../images/Galeria/RedDeadRedemption2/kami4.webp'),
      require('../../images/Galeria/RedDeadRedemption2/kami5.webp'),
      require('../../images/Galeria/RedDeadRedemption2/cultivo.webp'),
      require('../../images/Galeria/RedDeadRedemption2/rhodes.webp'),
      require('../../images/Galeria/RedDeadRedemption2/MacFarlane.webp'),
      require('../../images/Galeria/RedDeadRedemption2/RonniPiachere.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Cerdo.webp'),
      require('../../images/Galeria/RedDeadRedemption2/CoochieCaiman.webp'),
      require('../../images/Galeria/RedDeadRedemption2/SainDenisExplosion.webp'),
      require('../../images/Galeria/RedDeadRedemption2/NoHomo.webp'),
      require('../../images/Galeria/RedDeadRedemption2/LeBug.webp'),
      require('../../images/Galeria/RedDeadRedemption2/BlackFum.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Yeehaa.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Yeehaa2.webp'),
      require('../../images/Galeria/RedDeadRedemption2/chuchu.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Lago1.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Lago2.webp'),
      require('../../images/Galeria/RedDeadRedemption2/ChuchuFum.webp'),
      require('../../images/Galeria/RedDeadRedemption2/KamiCafe.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Camino.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Camino2.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Camino3.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Camino4.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Animales.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Perro.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Valentine2.webp'),
      require('../../images/Galeria/RedDeadRedemption2/GusanoBlanco.webp'),
      require('../../images/Galeria/RedDeadRedemption2/GusanoBlanco2.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Indios1.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Indios2.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Indios3.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Indios4.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Indios5.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Indios6.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Indios7.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Indios8.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Indios9.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Indios10.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Indios11.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Indios12.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Indios13.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Indios14.webp'),
      require('../../images/Galeria/RedDeadRedemption2/volkov1.webp'),
      require('../../images/Galeria/RedDeadRedemption2/volkov2.webp'),
      require('../../images/Galeria/RedDeadRedemption2/volkov3.webp'),
      require('../../images/Galeria/RedDeadRedemption2/volkov4.webp'),
      require('../../images/Galeria/RedDeadRedemption2/volkov5.webp'),
      require('../../images/Galeria/RedDeadRedemption2/volkov6.webp'),
      require('../../images/Galeria/RedDeadRedemption2/volkov7.webp'),
      require('../../images/Galeria/RedDeadRedemption2/volkov8.webp'),
      require('../../images/Galeria/RedDeadRedemption2/volkov9.webp'),
      require('../../images/Galeria/RedDeadRedemption2/volkov10.webp'),
      require('../../images/Galeria/RedDeadRedemption2/volkov11.webp'),
      require('../../images/Galeria/RedDeadRedemption2/volkov12.webp'),
      require('../../images/Galeria/RedDeadRedemption2/volkov13.webp'),
      require('../../images/Galeria/RedDeadRedemption2/volkov14.webp'),
      require('../../images/Galeria/RedDeadRedemption2/volkov15.webp'),
      require('../../images/Galeria/RedDeadRedemption2/volkov16.webp'),
      require('../../images/Galeria/RedDeadRedemption2/volkov17.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Chill1.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Chill2.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Chill3.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Armadillo1.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Armadillo2.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Armadillo3.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Frutas.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Soledad1.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Soledad2.webp'),
      require('../../images/Galeria/RedDeadRedemption2/CoochieShasta.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Quemadura1.webp'),
      require('../../images/Galeria/RedDeadRedemption2/pkt.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Mijail1.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Agua1.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Corona.webp'),
      require('../../images/Galeria/RedDeadRedemption2/Baile1.webp'),
      require('../../images/Galeria/RedDeadRedemption2/amor.webp'),
      require('../../images/Galeria/RedDeadRedemption2/hombrestribu.webp'),
    ];

    const Fivem = [
      require('../../images/Galeria/Fivem/test1.webp'),
      require('../../images/Galeria/Fivem/crimen1.webp'),
      require('../../images/Galeria/Fivem/crimen2.webp'),
      require('../../images/Galeria/Fivem/crimen3.webp'),
      require('../../images/Galeria/Fivem/crimen4.webp'),
      require('../../images/Galeria/Fivem/crimen5.webp'),
      require('../../images/Galeria/Fivem/crimen6.webp'),
      require('../../images/Galeria/Fivem/Bomberos.webp'),
      require('../../images/Galeria/Fivem/Bombeross.webp'),
      require('../../images/Galeria/Fivem/Bomberos2.webp'),
      require('../../images/Galeria/Fivem/Bomberos3.webp'),
      require('../../images/Galeria/Fivem/Bomberos4.webp'),
      require('../../images/Galeria/Fivem/Bomberos5.webp'),
      require('../../images/Galeria/Fivem/Bomberos6.webp'),
      require('../../images/Galeria/Fivem/Bomberos7.webp'),
      require('../../images/Galeria/Fivem/Bomberos8.webp'),
      require('../../images/Galeria/Fivem/Bomberos9.webp'),
      require('../../images/Galeria/Fivem/Bomberos10.webp'),
      require('../../images/Galeria/Fivem/Bomberos11.webp'),
      require('../../images/Galeria/Fivem/Bomberos12.webp'),
      require('../../images/Galeria/Fivem/Bomberos13.webp'),
      require('../../images/Galeria/Fivem/Bomberos14.webp'),
      require('../../images/Galeria/Fivem/Bomberos15.webp'),
      require('../../images/Galeria/Fivem/Bomberos16.webp'),
      require('../../images/Galeria/Fivem/Bomberos17.webp'),
      require('../../images/Galeria/Fivem/Bomberos18.webp'),
      require('../../images/Galeria/Fivem/Bomberos19.webp'),
      require('../../images/Galeria/Fivem/Bomberos20.webp'),
      require('../../images/Galeria/Fivem/Bomberos21.webp'),
      require('../../images/Galeria/Fivem/Bomberos22.webp'),
      require('../../images/Galeria/Fivem/Bomberos23.webp'),
      require('../../images/Galeria/Fivem/Bomberos24.webp'),
      require('../../images/Galeria/Fivem/Bomberos25.webp'),
      require('../../images/Galeria/Fivem/Bomberos26.webp'),
      require('../../images/Galeria/Fivem/Rigo1.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel1.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel2.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel3.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel4.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel5.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel6.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel6-1.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel6-2.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel6-3.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel7.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel8.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel9.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel10.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel10-1.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel11.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel12.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel13.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel14.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel15.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel16.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel17.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel18.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel19.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel20.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel21.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel22.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel23.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel24.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel25.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel26.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel27.webp'),
      require('../../images/Galeria/Fivem/MiguelVettel28.webp'),
      require('../../images/Galeria/Fivem/Hub1.webp'),
      require('../../images/Galeria/Fivem/Hub2.webp'),
      require('../../images/Galeria/Fivem/Hub3.webp'),
      require('../../images/Galeria/Fivem/PerraVida.webp'),
      require('../../images/Galeria/Fivem/PerraVida2.webp'),
      require('../../images/Galeria/Fivem/PerraVida3.webp'),
      require('../../images/Galeria/Fivem/PerraVida4.webp'),
      require('../../images/Galeria/Fivem/PerraVida5.webp'),
      require('../../images/Galeria/Fivem/PerraVida6.webp'),
      require('../../images/Galeria/Fivem/PerraVida7.webp'),
      require('../../images/Galeria/Fivem/PerraVida8.webp'),
      require('../../images/Galeria/Fivem/PerraVida9.webp'),
      require('../../images/Galeria/Fivem/MexicanLife1.webp'),
      require('../../images/Galeria/Fivem/MexicanLife2.webp'),
      require('../../images/Galeria/Fivem/MexicanLife3.webp'),
      require('../../images/Galeria/Fivem/Halloween1.webp'),
      require('../../images/Galeria/Fivem/Halloween2.webp'),
      require('../../images/Galeria/Fivem/Halloween3.webp'),
      require('../../images/Galeria/Fivem/Iglesia1.webp'),
      require('../../images/Galeria/Fivem/Iglesia2.webp'),
      require('../../images/Galeria/Fivem/Iglesia3.webp'),
      require('../../images/Galeria/Fivem/Iglesia4.webp'),
      require('../../images/Galeria/Fivem/Iglesia5.webp'),
      require('../../images/Galeria/Fivem/Iglesia6.webp'),
      require('../../images/Galeria/Fivem/Iglesia7.webp'),
      require('../../images/Galeria/Fivem/Iglesia8.webp'),
      require('../../images/Galeria/Fivem/Iglesia9.webp'),
      require('../../images/Galeria/Fivem/Iglesia10.webp'),
      require('../../images/Galeria/Fivem/Iglesia11.webp'),
      require('../../images/Galeria/Fivem/Iglesia12.webp'),
      require('../../images/Galeria/Fivem/Iglesia13.webp'),
      require('../../images/Galeria/Fivem/Iglesia14.webp'),
      require('../../images/Galeria/Fivem/Iglesia15.webp'),
      require('../../images/Galeria/Fivem/Iglesia16.webp'),
      require('../../images/Galeria/Fivem/Iglesia17.webp'),
      require('../../images/Galeria/Fivem/Iglesia18.webp'),
      require('../../images/Galeria/Fivem/Ganga1.webp'),
      require('../../images/Galeria/Fivem/Ganga2.webp'),
      require('../../images/Galeria/Fivem/Ganga3.webp'),
      require('../../images/Galeria/Fivem/Ganga4.webp'),
      require('../../images/Galeria/Fivem/Ganga5.webp'),
      require('../../images/Galeria/Fivem/Ganga6.webp'),
      require('../../images/Galeria/Fivem/Ganga7.webp'),
      require('../../images/Galeria/Fivem/Ganga8.webp'),
      require('../../images/Galeria/Fivem/Ganga9.webp'),
      require('../../images/Galeria/Fivem/Ganga10.webp'),
      require('../../images/Galeria/Fivem/Ganga11.webp'),
      require('../../images/Galeria/Fivem/Ganga12.webp'),
      require('../../images/Galeria/Fivem/Ganga13.webp'),
      require('../../images/Galeria/Fivem/Ganga14.webp'),
      require('../../images/Galeria/Fivem/Ganga15.webp'),
      require('../../images/Galeria/Fivem/Ganga16.webp'),
      require('../../images/Galeria/Fivem/Ganga18.webp'),
      require('../../images/Galeria/Fivem/Ganga19.webp'),
      require('../../images/Galeria/Fivem/Ganga20.webp'),
      require('../../images/Galeria/Fivem/Ganga21.webp'),
      require('../../images/Galeria/Fivem/Ganga22.webp'),
      require('../../images/Galeria/Fivem/Ganga23.webp'),
      require('../../images/Galeria/Fivem/Ganga24.webp'),
      require('../../images/Galeria/Fivem/Ganga25.webp'),
      require('../../images/Galeria/Fivem/Ganga26.webp'),
      require('../../images/Galeria/Fivem/Ganga27.webp'),
      require('../../images/Galeria/Fivem/Ganga28.webp'),
      require('../../images/Galeria/Fivem/Ganga29.webp'),
      require('../../images/Galeria/Fivem/Otro1.webp'),
    ];

    const SeaOfThieves = [
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves1.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves2.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves3.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves4.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves5.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves6.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves7.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves8.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves9.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves10.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves11.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves12.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves13.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves14.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves15.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves16.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves17.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves18.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves19.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves20.webp'),
      require('../../images/Galeria/SeaOfThieves/SeaOfThieves21.webp'),
  ];

    const OtrosJuegos = [
      require('../../images/Galeria/OtrosJuegos/Otros1.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros2.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros3.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros4.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros5.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros6.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros7.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros8.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros9.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros10.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros11.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros12.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros13.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros14.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros15.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros16.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros17.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros18.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros19.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros20.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros21.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros22.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros23.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros24.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros25.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros26.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros27.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros28.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros29.webp'),
      require('../../images/Galeria/OtrosJuegos/Otros30.webp'),
  ];

  const Minecraft = [
    require('../../images/Galeria/Minecraft/Mine1.webp'),
    require('../../images/Galeria/Minecraft/Mine2.webp'),
    require('../../images/Galeria/Minecraft/Mine3.webp'),
    require('../../images/Galeria/Minecraft/Mine4.webp'),
    require('../../images/Galeria/Minecraft/Mine5.webp'),
    require('../../images/Galeria/Minecraft/Mine6.webp'),
    require('../../images/Galeria/Minecraft/Mine7.webp'),
    require('../../images/Galeria/Minecraft/Mine8.webp'),
    require('../../images/Galeria/Minecraft/Mine9.webp'),
    require('../../images/Galeria/Minecraft/Mine10.webp'),
    require('../../images/Galeria/Minecraft/Mine11.webp'),
    require('../../images/Galeria/Minecraft/Mine12.webp'),
    require('../../images/Galeria/Minecraft/Mine13.webp'),
    require('../../images/Galeria/Minecraft/Mine14.webp'),
    require('../../images/Galeria/Minecraft/Mine15.webp'),
    require('../../images/Galeria/Minecraft/Mine16.webp'),
    require('../../images/Galeria/Minecraft/Mine17.webp'),
    require('../../images/Galeria/Minecraft/Mine18.webp'),
    require('../../images/Galeria/Minecraft/Mine19.webp'),
    require('../../images/Galeria/Minecraft/Mine20.webp'),
];

    const [imagenAbierta, setImagenAbierta] = useState(null);

  const abrirImagen = (imagen) => {
    setImagenAbierta(imagen);
  };
  
  const cerrarImagen = () => {
    setImagenAbierta(null);
  };

  return (
    <div>

<div className="GaleriaSeccion">
        <div className="BannerGaleria"></div>
        <div className="GaleriaSeccionInterior">
          <div className="GaleriaInfoLeft">

              <div className='GaleriaAncho' id='RedDead'>
              <div className='GaleriaTitulo'>
                <h2>RedM 2023 - Lejano Oeste <FaHatCowboy style={{ verticalAlign: 'middle' }} size='2rem'/></h2>
            </div>

        <div className="galeria">
      {RedDeadRedemption.map((imagen, index) => (
        <img
          key={index}
          className="imagen-thumbnail BorderRedm"
          src={imagen}
          alt={`Imagen ${index + 1}`}
          onClick={() => abrirImagen(imagen)}
        />
      ))}
      {imagenAbierta && (
        <div className={`imagen-overlay ${imagenAbierta ? 'mostrar' : ''}`}>
          <img className="imagen-completa" src={imagenAbierta} alt="Imagen Completa" />
          <AiFillCloseCircle className="icono-cerrar" onClick={cerrarImagen} />
        </div>
)}
    </div>
              </div>

              <div className='GaleriaAncho' id='GtaFivem'>
              <div className='GaleriaTitulo'>
              <h2>Fivem <FaHatCowboy style={{ verticalAlign: 'middle' }} size='2rem'/></h2>
            </div>

        <div className="galeria">
        {Fivem.map((imagen, index) => (
        <img
          key={index}
          className="imagen-thumbnail BorderFivem"
          src={imagen}
          alt={`Imagen ${index + 1}`}
          onClick={() => abrirImagen(imagen)}
        />
      ))}
      {imagenAbierta && (
        <div className={`imagen-overlay ${imagenAbierta ? 'mostrar' : ''}`}>
          <img className="imagen-completa" src={imagenAbierta} alt="Imagen Completa" />
          <AiFillCloseCircle className="icono-cerrar" onClick={cerrarImagen} />
        </div>
)}
    </div>
              </div>

              <div className='GaleriaAncho' id='SeaOfThieves'>
              <div className='GaleriaTitulo'>
              <h2>Sea Of Thieves <GiPirateFlag style={{ verticalAlign: 'middle' }} size='2rem'/></h2>
            </div>

        <div className="galeria">
        {SeaOfThieves.map((imagen, index) => (
        <img
          key={index}
          className="imagen-thumbnail BorderSeaOfThieves"
          src={imagen}
          alt={`Imagen ${index + 1}`}
          onClick={() => abrirImagen(imagen)}
        />
      ))}
      {imagenAbierta && (
        <div className={`imagen-overlay ${imagenAbierta ? 'mostrar' : ''}`}>
          <img className="imagen-completa" src={imagenAbierta} alt="Imagen Completa" />
          <AiFillCloseCircle className="icono-cerrar" onClick={cerrarImagen} />
        </div>
)}
    </div>
              </div>

              <div className='GaleriaAncho' id='Minecraft'>
              <div className='GaleriaTitulo'>
              <h2>Minecaft <FaHatCowboy style={{ verticalAlign: 'middle' }} size='2rem'/></h2>
            </div>

        <div className="galeria">
        {Minecraft.map((imagen, index) => (
        <img
          key={index}
          className="imagen-thumbnail BorderMinecraft"
          src={imagen}
          alt={`Imagen ${index + 1}`}
          onClick={() => abrirImagen(imagen)}
        />
      ))}
      {imagenAbierta && (
        <div className={`imagen-overlay ${imagenAbierta ? 'mostrar' : ''}`}>
          <img className="imagen-completa" src={imagenAbierta} alt="Imagen Completa" />
          <AiFillCloseCircle className="icono-cerrar" onClick={cerrarImagen} />
        </div>
)}
    </div>
          </div>

              <div className='GaleriaAncho' id='OtrosJuegos'>
              <div className='GaleriaTitulo'>
              <h2>Otros Juegos <GiPerspectiveDiceSixFacesRandom style={{ verticalAlign: 'middle' }} size='2rem'/></h2>
            </div>

        <div className="galeria">
        {OtrosJuegos.map((imagen, index) => (
        <img
          key={index}
          className="imagen-thumbnail BorderOtros"
          src={imagen}
          alt={`Imagen ${index + 1}`}
          onClick={() => abrirImagen(imagen)}
        />
      ))}
      {imagenAbierta && (
        <div className={`imagen-overlay ${imagenAbierta ? 'mostrar' : ''}`}>
          <img className="imagen-completa" src={imagenAbierta} alt="Imagen Completa" />
          <AiFillCloseCircle className="icono-cerrar" onClick={cerrarImagen} />
        </div>
)}
    </div>
              </div>



          </div>

          <div className="MenuDerecha">
            <div className="IndexMenuDerecha">
            <p>JUEGOS <GiGamepad style={{ verticalAlign: 'middle' }} size='2rem' /></p>
              <Link to="RedDead" smooth={true} duration={700} spy={true} exact="true" offset={15} activeClass="active" onSetActive={handleSetActive}><a>REDM</a></Link>
              <Link to="GtaFivem" smooth={true} duration={700} spy={true} exact="true" offset={15} activeClass="active" onSetActive={handleSetActive}><a>FIVEM</a></Link>
              <Link to="SeaOfThieves" smooth={true} duration={700} spy={true} exact="true" offset={15} activeClass="active" onSetActive={handleSetActive}><a>SEA OF THIEVES</a></Link>
              <Link to="Minecraft" smooth={true} duration={700} spy={true} exact="true" offset={15} activeClass="active" onSetActive={handleSetActive}><a>MINECRAFT</a></Link>
              <Link to="OtrosJuegos" smooth={true} duration={700} spy={true} exact="true" offset={15} activeClass="active" onSetActive={handleSetActive}><a>OTROS</a></Link>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Galeria