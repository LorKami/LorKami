import React, { Suspense, lazy} from 'react';
// import Galeria from "../components/Galeria";
import Menu from "../components/Menu";
import Player from "../components/Player";
import Footer from '../components/Footer'

const Galeria = lazy( () => import ('../components/Galeria'))

function GaleriaPage() {

  return (
    <div>

        <Suspense fallback = { <h2>Cargando...</h2>}>
        <Menu />
        <Galeria />
        <Player />
        <Footer />
        </Suspense>
        </div>
  )
}

export default GaleriaPage