import React, { useState, useEffect, Suspense } from 'react';

import "./Galeria.css";
import "./GaleriaMenu.css";

import { Link, animateScroll as scroll } from "react-scroll";

import { FaHatCowboy } from 'react-icons/fa';
import { FaGun } from "react-icons/fa6";
import { SiApplearcade } from "react-icons/si";
import { TbBrandMinecraft } from "react-icons/tb";
import { GiPirateFlag, GiPerspectiveDiceSixFacesRandom, GiGamepad } from 'react-icons/gi';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsXCircleFill } from 'react-icons/bs';


const Galeria = () => {

  ///// --------------------- Link Action --------------------- /////
  const [activeSection, setActiveSection] = useState(null);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };
  ///// --------------------- Link Action --------------------- /////

  const importAll = (r) => r.keys().map(r);

  const imagesRedDead = importAll(require.context('../../images/Galeria/RedDeadRedemption2', false, /\.(webp|gif)$/));
  const imagesFivem = importAll(require.context('../../images/Galeria/Fivem', false, /\.(webp|gif)$/));
  const imagesFortnite = importAll(require.context('../../images/Galeria/Fortnite', false, /\.(webp|gif)$/));
  const imagesSea = importAll(require.context('../../images/Galeria/SeaOfThieves', false, /\.(webp)$/));
  const imagesMine = importAll(require.context('../../images/Galeria/Minecraft', false, /\.(webp)$/));
  const imagesOtros = importAll(require.context('../../images/Galeria/OtrosJuegos', false, /\.(webp)$/));

  const RedDeadRedemption = imagesRedDead;
  const Fivem = imagesFivem;
  const Fornique = imagesFortnite;
  const SeaOfThieves = imagesSea;
  const Minecraft = imagesMine;
  const OtrosJuegos = imagesOtros;

  const [imagenAbierta, setImagenAbierta] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(0);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const abrirImagen = (imagen, index) => {
    setImagenAbierta(imagen);
    setImagenIndex(index);
    setOverlayVisible(true);
  };

  const cambiarImagen = (direccion) => {
    let totalImagenes;
    let nuevoIndex;
    let imagenes;

    switch (activeSection) {
      case 'RedDead':
        imagenes = RedDeadRedemption;
        break;
      case 'GtaFivem':
        imagenes = Fivem;
        break;
      case 'Fortnite':
        imagenes = Fornique;
        break;
      case 'SeaOfThieves':
        imagenes = SeaOfThieves;
        break;
      case 'Minecraft':
        imagenes = Minecraft;
        break;
      case 'OtrosJuegos':
        imagenes = OtrosJuegos;
        break;
      default:
        imagenes = [];
    }

    totalImagenes = imagenes.length;
    nuevoIndex = imagenIndex;

    if (direccion === 'anterior') {
      nuevoIndex = (imagenIndex - 1 + totalImagenes) % totalImagenes;
    } else if (direccion === 'siguiente') {
      nuevoIndex = (imagenIndex + 1) % totalImagenes;
    }

    setImagenIndex(nuevoIndex);
    setImagenAbierta(imagenes[nuevoIndex]);
  };

  const cerrarImagen = () => {
    setImagenAbierta(null);
    setOverlayVisible(false);
  };

  useEffect(() => {
    if (imagenAbierta) {
      setOverlayVisible(true);
    } else {
      setOverlayVisible(false);
    }
  }, [imagenAbierta]);


  return (
    <div>

      <div className="GaleriaSeccion">
        <div className="BannerGaleria"></div>
        <div className="GaleriaSeccionInterior">
          <div className="GaleriaInfoLeft">

            <div className='GaleriaAncho' id='RedDead'>
              <div className='GaleriaTitulo'>
                <h2>RedM <FaHatCowboy style={{ verticalAlign: 'middle' }} size='2rem' /></h2>
              </div>

              <div className="galeria">
                {RedDeadRedemption.map((imagen, index) => (
                  <img
                    key={index}
                    className="imagen-thumbnail BorderRedm"
                    src={imagen}
                    alt={`Imagen ${index + 1}`}
                    onClick={() => abrirImagen(imagen, index)}
                  />
                ))}
                {overlayVisible && (
                  <div className={`imagen-overlay ${overlayVisible ? 'mostrar' : ''}`}>
                    <img className="imagen-completa" src={imagenAbierta} alt="Imagen Completa" />
                    <div className='BotonesDeImagen'>
                      <BsFillArrowLeftCircleFill className="boton-anterior" onClick={() => cambiarImagen('anterior')} />
                      <BsFillArrowRightCircleFill className="boton-siguiente" onClick={() => cambiarImagen('siguiente')} />
                      <BsXCircleFill className="icono-cerrar" onClick={cerrarImagen} />
                    </div>
                  </div>
                )}
              </div>

            </div>

            <div className='GaleriaAncho' id='GtaFivem'>
              <div className='GaleriaTitulo'>
                <h2>Fivem <FaGun style={{ verticalAlign: 'middle' }} size='2rem' /></h2>
              </div>

              <div className="galeria">
                {Fivem.map((imagen, index) => (
                  <img
                    key={index}
                    className="imagen-thumbnail BorderFivem"
                    src={imagen}
                    alt={`Imagen ${index + 1}`}
                    onClick={() => abrirImagen(imagen, index)}
                  />
                ))}
                {overlayVisible && (
                  <div className={`imagen-overlay ${overlayVisible ? 'mostrar' : ''}`}>
                    <img className="imagen-completa" src={imagenAbierta} alt="Imagen Completa" />
                    <div className='BotonesDeImagen'>
                      <BsFillArrowLeftCircleFill className="boton-anterior" onClick={() => cambiarImagen('anterior')} />
                      <BsFillArrowRightCircleFill className="boton-siguiente" onClick={() => cambiarImagen('siguiente')} />
                      <BsXCircleFill className="icono-cerrar" onClick={cerrarImagen} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className='GaleriaAncho' id='Fortnite'>
              <div className='GaleriaTitulo'>
                <h2>Fortnite <SiApplearcade style={{ verticalAlign: 'middle' }} size='2rem' /></h2>
              </div>

              <div className="galeria">
                {Fornique.map((imagen, index) => (
                  <img
                    key={index}
                    className="imagen-thumbnail BorderFortnite"
                    src={imagen}
                    alt={`Imagen ${index + 1}`}
                    onClick={() => abrirImagen(imagen, index)}
                  />
                ))}
                {overlayVisible && (
                  <div className={`imagen-overlay ${overlayVisible ? 'mostrar' : ''}`}>
                    <img className="imagen-completa" src={imagenAbierta} alt="Imagen Completa" />
                    <div className='BotonesDeImagen'>
                      <BsFillArrowLeftCircleFill className="boton-anterior" onClick={() => cambiarImagen('anterior')} />
                      <BsFillArrowRightCircleFill className="boton-siguiente" onClick={() => cambiarImagen('siguiente')} />
                      <BsXCircleFill className="icono-cerrar" onClick={cerrarImagen} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className='GaleriaAncho' id='SeaOfThieves'>
              <div className='GaleriaTitulo'>
                <h2>Sea Of Thieves <GiPirateFlag style={{ verticalAlign: 'middle' }} size='2rem' /></h2>
              </div>

              <div className="galeria">
                {SeaOfThieves.map((imagen, index) => (
                  <img
                    key={index}
                    className="imagen-thumbnail BorderSeaOfThieves"
                    src={imagen}
                    alt={`Imagen ${index + 1}`}
                    onClick={() => abrirImagen(imagen, index)}
                  />
                ))}
                {overlayVisible && (
                  <div className={`imagen-overlay ${overlayVisible ? 'mostrar' : ''}`}>
                    <img className="imagen-completa" src={imagenAbierta} alt="Imagen Completa" />
                    <div className='BotonesDeImagen'>
                      <BsFillArrowLeftCircleFill className="boton-anterior" onClick={() => cambiarImagen('anterior')} />
                      <BsFillArrowRightCircleFill className="boton-siguiente" onClick={() => cambiarImagen('siguiente')} />
                      <BsXCircleFill className="icono-cerrar" onClick={cerrarImagen} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className='GaleriaAncho' id='Minecraft'>
              <div className='GaleriaTitulo'>
                <h2>Minecaft <TbBrandMinecraft style={{ verticalAlign: 'middle' }} size='2rem' /></h2>
              </div>

              <div className="galeria">
                {Minecraft.map((imagen, index) => (
                  <img
                    key={index}
                    className="imagen-thumbnail BorderMinecraft"
                    src={imagen}
                    alt={`Imagen ${index + 1}`}
                    onClick={() => abrirImagen(imagen, index)}
                  />
                ))}
                {overlayVisible && (
                  <div className={`imagen-overlay ${overlayVisible ? 'mostrar' : ''}`}>
                    <img className="imagen-completa" src={imagenAbierta} alt="Imagen Completa" />
                    <div className='BotonesDeImagen'>
                      <BsFillArrowLeftCircleFill className="boton-anterior" onClick={() => cambiarImagen('anterior')} />
                      <BsFillArrowRightCircleFill className="boton-siguiente" onClick={() => cambiarImagen('siguiente')} />
                      <BsXCircleFill className="icono-cerrar" onClick={cerrarImagen} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className='GaleriaAncho' id='OtrosJuegos'>
              <div className='GaleriaTitulo'>
                <h2>Otros Juegos <GiPerspectiveDiceSixFacesRandom style={{ verticalAlign: 'middle' }} size='2rem' /></h2>
              </div>

              <div className="galeria">
                {OtrosJuegos.map((imagen, index) => (
                  <img
                    key={index}
                    className="imagen-thumbnail BorderOtros"
                    src={imagen}
                    alt={`Imagen ${index + 1}`}
                    onClick={() => abrirImagen(imagen, index)}
                  />
                ))}
                {overlayVisible && (
                  <div className={`imagen-overlay ${overlayVisible ? 'mostrar' : ''}`}>
                    <img className="imagen-completa" src={imagenAbierta} alt="Imagen Completa" />
                    <div className='BotonesDeImagen'>
                      <BsFillArrowLeftCircleFill className="boton-anterior" onClick={() => cambiarImagen('anterior')} />
                      <BsFillArrowRightCircleFill className="boton-siguiente" onClick={() => cambiarImagen('siguiente')} />
                      <BsXCircleFill className="icono-cerrar" onClick={cerrarImagen} />
                    </div>
                  </div>
                )}
              </div>
            </div>



          </div>

          <div className="MenuDerecha">
            <div className="IndexMenuDerecha">
              <p>JUEGOS <GiGamepad style={{ verticalAlign: 'middle' }} size='2rem' /></p>
              <Link to="RedDead" smooth={true} duration={700} spy={true} exact="true" offset={15} activeClass="active" onSetActive={() => handleSetActive('RedDead')}><a>REDM</a></Link>
              <Link to="GtaFivem" smooth={true} duration={700} spy={true} exact="true" offset={15} activeClass="active" onSetActive={() => handleSetActive('GtaFivem')}><a>FIVEM</a></Link>
              <Link to="Fortnite" smooth={true} duration={700} spy={true} exact="true" offset={15} activeClass="active" onSetActive={() => handleSetActive('Fortnite')}><a>FORTNITE</a></Link>
              <Link to="SeaOfThieves" smooth={true} duration={700} spy={true} exact="true" offset={15} activeClass="active" onSetActive={() => handleSetActive('SeaOfThieves')}><a>SEA OF THIEVES</a></Link>
              <Link to="Minecraft" smooth={true} duration={700} spy={true} exact="true" offset={15} activeClass="active" onSetActive={() => handleSetActive('Minecraft')}><a>MINECRAFT</a></Link>
              <Link to="OtrosJuegos" smooth={true} duration={700} spy={true} exact="true" offset={15} activeClass="active" onSetActive={() => handleSetActive('OtrosJuegos')}><a>OTROS</a></Link>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Galeria