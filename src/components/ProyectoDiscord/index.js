import React, { useState } from 'react';
import './ProyectoDiscord.css'

import { Element, scroller } from 'react-scroll';

import Home from '../../components/Monitor'
import Galeria from '../../components/Galeria'
import Guias from '../../components/Guias'
import FichaMV from '../../components/FichaKami'
import GaleriaSearch from '../GaleriaSearch';
import PlayerApp from '../PlayerApp';

import { Link } from 'react-router-dom';

import LorKamiImage from '../../images/Menu/LorKami2.webp'

import { FaRegWindowMinimize, FaRegWindowMaximize, FaHome, FaWindowClose, FaHeadphonesAlt } from 'react-icons/fa';
import { PiNutFill } from 'react-icons/pi';
import { BiSolidMicrophone, BiSolidPhoneCall } from 'react-icons/bi';
import { BsFillCameraVideoFill, BsFillQuestionCircleFill, BsFillMortarboardFill, BsFillMotherboardFill } from 'react-icons/bs';
import { TbPinnedFilled } from 'react-icons/tb';
import { IoMdContact } from 'react-icons/io';
import { HiInbox } from 'react-icons/hi';
import { LuGalleryHorizontal } from 'react-icons/lu';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoCloseSharp } from "react-icons/io5";

const imagesRedDead = importAll(require.context('../../images/Galeria/RedDeadRedemption2', false, /\.(webp|gif)$/));
const imagesFivem = importAll(require.context('../../images/Galeria/Fivem', false, /\.(webp|gif)$/));
const imagesFortnite = importAll(require.context('../../images/Galeria/Fortnite', false, /\.(webp|gif)$/));
const imagesSea = importAll(require.context('../../images/Galeria/SeaOfThieves', false, /\.(webp)$/));
const imagesMine = importAll(require.context('../../images/Galeria/Minecraft', false, /\.(webp)$/));
const imagesOtros = importAll(require.context('../../images/Galeria/OtrosJuegos', false, /\.(webp)$/));
const videosRandom = importAll(require.context('../../images/Galeria/Videos', false, /\.(webp)$/));

function importAll(r) {
    return r.keys().map(r);
}

const ProyectoDiscord = () => {

    const [musicPlayerOpen, setMusicPlayerOpen] = useState(false);

    const toggleMusicPlayer = () => {
        const newMusicPlayerOpen = !musicPlayerOpen;
        setMusicPlayerOpen(newMusicPlayerOpen);
        const musicMenu = document.querySelector('.MonitorPrincipalMenuMusica');
        if (musicMenu) {
            musicMenu.style.display = newMusicPlayerOpen ? 'block' : 'none';
        }
    };

    const [searchText, setSearchText] = React.useState('');
    const [inputActive, setInputActive] = useState(false);


    // const [currentPage, setCurrentPage] = React.useState('inicio');

    const [activePage, setActivePage] = React.useState('inicio');

    // const handlePageChange = (page) => {
    //     setCurrentPage(page);
    // };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
        if (e.target.value !== '') {
            setInputActive(true);
        } else {
            setInputActive(false);
        }
    };

    const handleClearSearch = () => {
        setSearchText('');
        setInputActive(false);
    };

    const handlePageChange = (page) => {
        setActivePage(page);
    };

    return (
        <div>

            <div className='MonitorDisc'>

                <div className='MonitorTitutloSecction'>

                    <div className='MonitorTitutlo'>
                        <div className='MonTitulo'>
                            <h4>PROYECTO PERSONAL LORKAMI</h4>
                        </div>
                    </div>

                    <div className='MonitorTituloBotonesDecorativos'>
                        <div className='MonTitBotDeco'>
                            <FaRegWindowMinimize style={{ verticalAlign: 'middle' }} size='0.7rem' />
                            <FaRegWindowMaximize style={{ verticalAlign: 'middle' }} size='0.7rem' />
                            <a href='/Home'><FaWindowClose style={{ verticalAlign: 'middle' }} size='0.7rem' /></a>
                        </div>
                    </div>

                </div>

                <div className='MonitorBoxes'>

                    <div className='MonitorPrincipalSection'>

                        <div className='MonitorPrincipalMenuIzquierda'>

                            <div className='MonitorPrincipalMenu'>

                                <Link onClick={() => handlePageChange('inicio')} className={activePage === 'inicio' ? 'activeDiscord' : ''}>
                                    <div className='BoxMenu'>
                                        <div className='BoxMenuContent'>
                                            <div className='BoxMenuIcon'><FaHome style={{ verticalAlign: 'middle' }} size='1rem' /></div>
                                            <div className='BoxMenuLink'><p>Inicio</p></div>
                                        </div>
                                    </div>
                                </Link>

                                {/* <Link onClick={() => handlePageChange('galeria')} className={activePage === 'galeria' ? 'activeDiscord' : ''}>
                                    <div className='BoxMenu'>
                                        <div className='BoxMenuContent'>
                                            <div className='BoxMenuIcon'><LuGalleryHorizontal style={{ verticalAlign: 'middle' }} size='1rem' /></div>
                                            <div className='BoxMenuLink'><p>Galeria</p></div>
                                        </div>
                                    </div>
                                </Link> */}

                                <Link onClick={() => handlePageChange('galeriasearch')} className={activePage === 'galeriasearch' ? 'activeDiscord' : ''}>
                                    <div className='BoxMenu'>
                                        <div className='BoxMenuContent'>
                                            <div className='BoxMenuIcon'><LuGalleryHorizontal style={{ verticalAlign: 'middle' }} size='1rem' /></div>
                                            <div className='BoxMenuLink'><p>Galeria</p></div>
                                        </div>
                                    </div>
                                </Link>

                                <Link onClick={() => handlePageChange('guias')} className={activePage === 'guias' ? 'activeDiscord' : ''}>
                                    <div className='BoxMenu'>
                                        <div className='BoxMenuContent'>
                                            <div className='BoxMenuIcon'><BsFillMortarboardFill style={{ verticalAlign: 'middle' }} size='1rem' /></div>
                                            <div className='BoxMenuLink'><p>Guias</p></div>
                                        </div>
                                    </div>
                                </Link>

                                <Link onClick={() => handlePageChange('fichamv')} className={activePage === 'fichamv' ? 'activeDiscord' : ''}>
                                    <div className='BoxMenu'>
                                        <div className='BoxMenuContent'>
                                            <div className='BoxMenuIcon'><BsFillMotherboardFill style={{ verticalAlign: 'middle' }} size='1rem' /></div>
                                            <div className='BoxMenuLink'><p>Mijail Volkov</p></div>
                                        </div>
                                    </div>
                                </Link>

                            </div>

                            <div className='MonitorPrincipalMenuMusica'>
                                <PlayerApp musicPlayerOpen={musicPlayerOpen} />
                            </div>

                            <div className='MonitorPrincipalPerfil'>

                                <div className='MonitorPrincipalDatosPerfil'>

                                    <div className='MonitorPrincipalImagePerfil BadgeSec'>
                                        <img src={LorKamiImage} />
                                        <span class="BadgeProfile"></span>
                                    </div>

                                    <div className='MonitorPrincipalNombrePerfil'>
                                        <p>LorKami</p>
                                        <span>#1837</span>
                                    </div>

                                </div>

                                <div className='MonitorPrincipalBtnDecorativos'>
                                    <BiSolidMicrophone style={{ verticalAlign: 'middle' }} size='1.1rem' />


                                    <FaHeadphonesAlt style={{ verticalAlign: 'middle' }} onClick={toggleMusicPlayer} size='1.1rem' className='ClickHeadPhone' />


                                    <PiNutFill style={{ verticalAlign: 'middle' }} size='1.1rem' />
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='MonitorPrincipalMonitorDerecha'>

                        <div className='MonitorPrincipalDerechaTitulo'>

                            <div className='MonitorPrincipalDerechaTitulodePagina'>

                                <div className='MonitorPrincipalDerechaTitulos'>

                                    <div className='MonitorPrincipalDerechaIcono'>
                                        <img src={LorKamiImage} />
                                    </div>

                                    <p>LorKami</p>
                                    {/* <span>**Titulo de la pagina**</span> */}
                                    {activePage === 'inicio' && <span>Inicio</span>}
                                    {activePage === 'guias' && <span>Guias for dummies</span>}
                                    {activePage === 'galeria' && <span>Galeria de recuerditos ❤️</span>}
                                    {activePage === 'galeriasearch' && <span>Galeria de recuerditos ❤️</span>}
                                    {activePage === 'fichamv' && <span>Ficha y biografia de Mijail Volkov</span>}
                                </div>

                            </div>

                            <div className='MonitorPrincipalDerechaIconosDecorativos'>
                                <BiSolidPhoneCall style={{ verticalAlign: 'middle' }} size='1.1rem' />
                                <BsFillCameraVideoFill style={{ verticalAlign: 'middle' }} size='1.1rem' />
                                <TbPinnedFilled style={{ verticalAlign: 'middle' }} size='1.1rem' />
                                <IoMdContact style={{ verticalAlign: 'middle' }} size='1.1rem' />
                                <div className='CuadroDeBusqueda'>
                                    {/* <span>Buscar </span><AiOutlineSearch style={{ verticalAlign: 'middle' }} size='0.7rem' /> */}
                                    <input id='searchInput' placeholder='Buscar' type='text' maxLength={70} value={searchText} onChange={handleSearchChange} />
                                    <span className="Badge" onClick={inputActive ? handleClearSearch : null}>
                                        {inputActive ? <IoCloseSharp style={{ verticalAlign: 'middle' }} size='0.9rem' /> : <AiOutlineSearch style={{ verticalAlign: 'middle' }} size='0.9rem' />}
                                    </span>
                                </div>
                                <HiInbox style={{ verticalAlign: 'middle' }} size='1.1rem' />
                                <BsFillQuestionCircleFill style={{ verticalAlign: 'middle' }} size='0.9rem' />
                            </div>

                        </div>

                        <div className='MonitorPrincipalPaginas'>
                            {activePage === 'inicio' && <Home />}
                            {activePage === 'guias' && <Guias />}
                            {activePage === 'galeria' && <Galeria />}
                            {activePage === 'galeriasearch' && (<GaleriaSearch searchText={searchText} setSearchText={setSearchText} images={[...imagesRedDead, ...imagesFivem, ...imagesFortnite, ...imagesSea, ...imagesMine, ...imagesOtros, ...videosRandom]} />)}
                            {activePage === 'fichamv' && <FichaMV />}
                        </div>

                    </div>

                </div>


            </div>

        </div >
    )
}

export default ProyectoDiscord