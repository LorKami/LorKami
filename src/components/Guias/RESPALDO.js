import { useState } from 'react';
import { saveAs } from 'file-saver';
import "./Guias.css";
import "./Grid.css"
import "./Borders.css"
import "./Barras.css"

import { Link, animateScroll as scroll } from "react-scroll";
import ProgressBar from 'react-bootstrap/ProgressBar';

import { FaTwitter, FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';

import CrearProyecto from './CodeBox/CrearProyecto';
import LibreriasMasUsadas from './CodeBox/LibreriasMasUsadas';
import ReactDomNuevo from './CodeBox/ReactDomNuevo';
import ReactDomAntiguoFuncional from './CodeBox/ReactDomAntiguoFuncional';
import ReactCMDGithub from './CodeBox/ReactCMDGithub';
import CodigoGithub from './CodeBox/CodigoGithub';
import NpmRunDeploy from './CodeBox/NpmRunDeploy';
import GitPush from './CodeBox/GitPush';
import GitPull from './CodeBox/GitPull';
import ReactIcons from './CodeBox/ReactIcons';
import ColoresYEstilosCodigo from './CodeBox/ColoresYEstilosCodigo';
import ColoresYEstilosCSS from './CodeBox/ColoresYEstilosCSS';
import MetadataOrganizada from './CodeBox/MetadataOrganizada';
import MetadataEdicionRapida from './CodeBox/MetadataEdicionRapida';
import LinkCode from './CodeBox/LinkCode';
import ActiveClass from './CodeBox/ActiveClass';
import FontPersonalizada from './CodeBox/FontPersonalizada';
import ScrollBar from './CodeBox/ScrollBar';
import Responsive from './CodeBox/Responsive';
import JSSticky from './CodeBox/JSSticky';
import JSStickyCSS from './CodeBox/JSStickyCSS';
import GridCode from './CodeBox/GridCode';
import GridCSS from './CodeBox/GridCSS';
import BordersCSS from './CodeBox/BordersCSS';
import BarraProgreso from './CodeBox/BarraProgreso';

import MuestraDNS from '../../images/ReactPages/Muestras/DNS.webp'
import DNSCheck from '../../images/ReactPages/Muestras/DNSCheck.webp'
import DNSInProgress from '../../images/ReactPages/Muestras/DNSInProgress.webp'
import Https from '../../images/ReactPages/Muestras/Https.webp'

import image1 from '../../images/Grid/example1.webp';
import image2 from '../../images/Grid/example2.webp';
import image3 from '../../images/Grid/example3.webp';
import image4 from '../../images/Grid/example4.webp';
import image5 from '../../images/Grid/example5.webp';
import image6 from '../../images/Grid/example6.webp';
import image7 from '../../images/Grid/example7.webp';
import image8 from '../../images/Grid/example8.webp';
import image9 from '../../images/Grid/example9.webp';
import image10 from '../../images/Grid/example10.webp';

const Guias = () => {

  const ProgressBar = ({ label, value }) => {
    return (
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${value}%` }}>
          <span className="progress-label">{label}</span>
        </div>
      </div>
    );
  };

  const progresos = [
    { nombre: 'Daño', valor: 25 },
    { nombre: 'Alcance', valor: 50 },
    { nombre: 'Cadencia', valor: 75 },
    { nombre: 'Recarga', valor: 100 }
  ];


  const GridCodeTexto = `
  <div className="gallery">
    {images.map((image, index) => (
      <img key={index} className="gallery-image" src={image} alt={'Image $\{index + 1\}'} />
    ))}
  </div>
  `;

  ///// --------------------- Link Action --------------------- /////
  const [activeSection, setActiveSection] = useState(null);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };
  ///// --------------------- Link Action --------------------- /////

  ///// --------------------- Descargar archivo --------------------- /////

  const handleDownload = () => {
    const fileUrl = 'https://lorkami.vercel.app/descargas/Base-inicial-para-React.rar';

    saveAs(fileUrl, 'Base-inicial-para-React.rar');
  };

  ///// --------------------- Descargar archivo --------------------- /////

  ///// --------------------- Cuadro Colores CSS --------------------- /////

  function ColorBox({ color, code }) {
    return (
      <div className="color-box">
        <div className="color">
          <div className="color-swatch" style={{ backgroundColor: color }}></div>
          <p className="color-code">{code}</p>
        </div>
      </div>
    );
  }

  ///// --------------------- Cuadro Colores CSS --------------------- /////

  ///// --------------------- Imagenes Grid --------------------- /////
  const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10
  ];
  ///// --------------------- Imagenes Grid --------------------- /////

  return (
    <div>
      <div className="Monitor">
        <div className="Banner"></div>
        <div className="WhitePapperSection">
          <div className="InfoLeft">

            <div className="InfoSection" id="PasoUno">
              <h2>Crear pagina web en React</h2>
              <h3>Paso 1: Crear el proyecto</h3>
              <p>
                - Crea una carpeta con el nombre de proyecto, en el VsCode, abrir la terminal y poner el siguente comando remplazando "nombre" por el nombre del proyecto.
              </p>
              <CrearProyecto />

              <h3>Paso 2: Instalar las librerias mas utilizadas</h3>
              <LibreriasMasUsadas />

              <h3 id="Recursos">Paso 3: Eliminar y modificar los archivos dentro de la carpeta src</h3>
              <p>- Eliminar todos los archivos dentro de la carpeta src, exceptuando index.js, index.css, App.js y App.css</p>
              <p>- Dentro del archivo index.js en la carpeta src, eliminar la linea 5 y 14 las cuales son de reportWebVitals</p>
              <p>- Dentro de la carpeta src, crear las sub-carpetas components, images y pages</p>
              <p className='INegrita'>- (Opcional pero muy util) Tengo una carpeta de archivos ya seteados de src y public.</p>
              <div className='BotonDescargaSeccion'>
                <p className='BotonDescarga' onClick={handleDownload}>DESCARGAR RECURSOS <MdDownload style={{ verticalAlign: 'middle' }} size='1.4rem' /></p>
              </div>

              <h3>Paso 4: Configurar ReactDOM</h3>
              <p>Al hacer esta pagina, me percate que el codigo que pablo me proporciono no me esta reedirecciónando como quisiera, asi que pondre los dos codigos.</p>
              <br />
              <p className='INegrita'>* OJO este paso me lo puedo saltar si anteriormente use los archivos ya seteados de src y public *</p>
              <br />
              <p className='INegrita'>(Este lo uso actualmente en casi todo)</p>
              <p>Codigo (HashRouter) nuevo</p>
              <ReactDomNuevo />
              <br />
              <p className='INegrita'>Codigo (BrowserRouter) antiguo y funcional</p>
              <ReactDomAntiguoFuncional />

              {/* <div className="IntroductionImage">
                <img src={Gozuko}></img>
              </div> */}

            </div>

            <div className="Deployar" id="Deployar">
              <h2>Deployar con Github Pages y dominio comprado</h2>
              <h3>Paso 1:</h3>
              <p>- Asegurarse que que este instalado gh-pages de Github</p>

              <h2>Paso 2: Setear datos dentro de los archivos de la pagina</h2>
              <p>- Abrir el archivo package.json</p>
              <p>- En la linea 3 crear "homepage": "",</p>
              <p>Dentro de las comillas de homepage poner el link de la pagina web. Si se tiene dominio propio, poner el link con su https (https://pagina.xyz/)</p>
              <p>En caso de no tener pagina web, se puede deployar directamente con Github <span className='INegrita'>* OJO no esta testeado y puede no funcionar *</span> usar directamente el link de github (https://lorkami.github.io/Proyecto)</p>
              <p>- Dentro del mismo package.json en la sección scripts debajo de la linea 31 setear lo siguente:</p>
              <ReactCMDGithub />

              <h2>Paso 3: Nuevo archivo</h2>
              <p>- Dentro de la carpeta public crear un archivo sin extension, llamado CNAME <span className='INegrita'>Es obligatorio que el nombre sea en mayusculas</span></p>
              <p>- Dentro del archivo CNAME solo poner el link de la pagina por ejemplo (pagina.xyz) o (https://lorkami.github.io/Proyecto)</p>

              <h2>Pago 4: Configurar DNS</h2>
              <p>Si se esta utilizando GoDaddy, al entrar en la sección de configuración de los DNS, se deben borrar todos los datos posibles</p>
              <p>- Crear una nueva entrada. Tipo: CNAME. Nombre: www. Datos: lorkami.github.io</p>
              <p>- Crear cuatro nuevas entradas de Tipo: A. Nombrer: @. con las siguentes cuatro ip</p>
              <p><span className='INegrita'>185.199.108.153</span></p>
              <p><span className='INegrita'>185.199.109.153</span></p>
              <p><span className='INegrita'>185.199.110.153</span></p>
              <p><span className='INegrita'>185.199.111.153</span></p>
              <br />
              <p><span className='INegrita'>- MUESTRA GRAFICA</span></p>
              <img src={MuestraDNS} />
              <br />
              <h2>Paso 5: Crear Repositorio</h2>
              <p>- Entra a Github y crea un nuevo proyecto</p>
              <p>Copiar todas las lineas de codigo, omitiendo "echo "# Proyecto" >> README.md" y en "git add README.md" borrar el "README.md" y solo dejar un punto</p>
              <CodigoGithub />
              <p><span className='INegrita'>Si se copia este codigo directamente, cambiar la penultima linea, la del link del Github, la parte final donde dice "Proyecto.git" por el nombre del proyecto actual</span></p>
              <br />
              <h2>Pago 6: Deployar</h2>
              <p>Finalmente, siguiendo todos los pasos anteriores, en la misma consola del VsCode, usar el comando <span className='INegrita'>"npm run deploy"</span> esperar hasta que termine de crear y acomodar los archivos en la carpeta "Build" y te muestre un mensaje en la consola que diga <span className='INegrita'>"Published"</span></p>
              <NpmRunDeploy />
              <br />
              <h2>Paso 7: Configurar GithubPages</h2>
              <p>- En Github dentro de Settings y Pages, ir hasta la seccion "Custom domain" en donde se podra observar en un color amarillo, que la DNS se esta revisando.</p>
              <p>- Debajo hay que activar la casilla de "Enforce HTTPS"</p>
              <img src={DNSInProgress} />
              <img src={DNSCheck} />
              <img src={Https} />
              <br />
              <h2 id='Extra'>Paso extra:</h2>
              <p>Comandos para cargar y descargar el proyecto a Github</p>
              <p>Actualizar archivos de PC a Github:</p>
              <GitPush />
              <p>Actualizar de Github a PC:</p>
              <GitPull />
            </div>

            <div className="DeployarVercel" id="DeployarVercel">
              <h2 id='DeployarVercel'>Deployar con Vercel</h2>
              <h2>Paso 1: Setear datos dentro de los archivos de la pagina</h2>
              <p>- Abrir el archivo package.json</p>
              <p>- En la linea 3 crear "homepage": "",</p>
              <p>Dentro de las comillas de homepage poner el link de la pagina web. Si se tiene dominio propio, poner el link con su https (https://pagina.vercel.app/) o en este caso (https://usuario.github.io/)</p>
              <p>En caso de no tener pagina web, se puede deployar directamente con Github <span className='INegrita'>* OJO no esta testeado y puede no funcionar *</span> usar directamente el link de github (https://lorkami.github.io/Proyecto)</p>
              <p>- Dentro del mismo package.json en la sección scripts debajo de la linea 31 setear lo siguente:</p>
              <ReactCMDGithub />
              <h2>Paso 2: Crear Repositorio</h2>
              <p>- Entra a Github y crea un nuevo proyecto</p>
              <p>Copiar todas las lineas de codigo, omitiendo "echo "# Proyecto" >> README.md" y en "git add README.md" borrar el "README.md" y solo dejar un punto</p>
              <CodigoGithub />
              <p><span className='INegrita'>Si se copia este codigo directamente, cambiar la penultima linea, la del link del Github, la parte final donde dice "Proyecto.git" por el nombre del proyecto actual</span></p>
              <br />
              <h2>Pago 3: Deployar</h2>
              <p>Finalmente, siguiendo todos los pasos anteriores, en la misma consola del VsCode, usar el comando <span className='INegrita'>"npm run deploy"</span> esperar hasta que termine de crear y acomodar los archivos en la carpeta "Build" y te muestre un mensaje en la consola que diga <span className='INegrita'>"Published"</span></p>
              <NpmRunDeploy />
              <h2>Paso 4: Instalar CLI Vercel</h2>
              <p>En la consola poner el siguente comando: </p><span className='INegrita'>npm i -g -vercel</span>
              <h2>Paso 5: Iniciar sesion</h2>
              <p>En la consola poner el siguente comando: <span className='INegrita'>vercel login</span> Esto abrira una ventana en el explorador en donde iniciaremos sesion en la pagina de Vercel.</p>
              <h2>Pago 6: Configurar Vercel</h2>
              <p>Poner el siguente comando: <span className='INegrita'>vercel</span></p>
              <span className='IRojo'>* Puede que se reciba un mensaje de error en la consola al utilizar el comandos "vercel" El error que se muestra indica que la ejecución de scripts está deshabilitada en el sistema y, por lo tanto, no se puede cargar el archivo vercel.ps1 necesario para ejecutar el comando vercel *</span>
              <h3>Para solucionar este problema, se debe hacer lo siguente:</h3>
              <p>- Abre la terminal o el símbolo del sistema como administrador. Haz clic derecho en el icono de la terminal y selecciona "Ejecutar como administrador".</p>
              <p>- Ejecuta el siguiente comando para habilitar la ejecución de scripts sin restricciones:</p>
              <span className='INegrita'>Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser</span>
              <p>- Para restaurar la protección de ejecuación de script:</p>
              <span className='IRojo'>Set-ExecutionPolicy -ExecutionPolicy Restricted -Scope CurrentUser</span>
              <br />
              <p>En la ventana de configuración, selecciona el proyecto de React.</p>
              <p>Cuando se te solicite el directorio de la aplicación, asegúrate de especificar la carpeta de compilación de tu proyecto de React. Por lo general, es <span className='INegrita'>build o dist</span></p>
              <p>A lo largo de las configuraciónes te pedira usar configuraciónes predeterminadas o personalizadas.</p>
              <p>Después de completar la configuración, se desplegará el proyecto en Vercel.</p>
              <h2>Pago 7: Deployar</h2>
              <p>Despues de deployar el proyecto por primera vez, y cuando hagas algun cambio el cual quieras actualizar puedes usar el comando <span className='INegrita'>vercel --prod</span></p>
            </div>

            <div className='MasUsados' id='ReactIcons'>
              <h2>Codigos mas usados</h2>
              <h2>React-Icons:</h2>
              <a href='https://react-icons.github.io/react-icons/' target='_blank'>Link React Icons</a>
              <br />
              <span className='INegrita'>Area import:</span>
              <br />
              <ReactIcons />
              <br />
              <p>Dentro del import, si el icono pertenece a la misma familia ya sea, fa, bs, si,
                se pueden poner todos juntos, por ejemplo: <code>{`import { FaBeer, FaAndroid, FaBootstrap, FaCloudflare } from 'react-icons/fa';`}</code></p>
              <p>Mientras que dentro del codigo que llama al icono, se puede integra el "style" como se ve en el ejemplo. Esto hara que el icono de alinie. <span className='INegrita'>*OJO* No siempre es necesario.</span></p>
              <br />
              <h2>Colores mas utilizados para los iconos:</h2>

              <ColorBox color="#1DA1F2" code="#1DA1F2 | Twitter" />
              <ColorBox color="#7289DA" code="#7289DA | Discord" />
              <ColorBox color="#269fde" code="#269fde | Telegram" />

              <br />

              <div className='ReactIconsSecEjemplo'>
                <FaTwitter style={{ verticalAlign: 'middle' }} size='3rem' className='BTNTwitter' />
                <FaDiscord style={{ verticalAlign: 'middle' }} size='3rem' className='BTNDiscord' />
                <FaTelegramPlane style={{ verticalAlign: 'middle' }} size='3rem' className='BTNTelegram' />
              </div>

              <h2>React-Icons con colores y estilos independientes:</h2>

              <div className='ReactIconsSec'>
                <a className='BTNTwitEje'><FaTwitter style={{ verticalAlign: 'middle' }} size='3rem' /></a>
                <a className='BTNDiscEje Bloqueado'><FaDiscord style={{ verticalAlign: 'middle' }} size='3rem' /></a>
                <a className='BTNTeleje Bloqueado'><FaTelegramPlane style={{ verticalAlign: 'middle' }} size='3rem' /></a>
              </div>

              <p>Codigo:</p>
              <ColoresYEstilosCodigo />
              <br />
              <p>CSS:</p>
              <ColoresYEstilosCSS />

            </div>

            <div className='Metadatos' id='Metadatos'>
              <h2>Metadatos:</h2>
              <p>Estos tienen que ser introducidos dentro del archivo index.html de la carpeta "public"</p>
              <br />
              <p>Metadatos Organizados:</p>
              <MetadataOrganizada />
              <br />
              <p>Metadatos de edición rapida:</p>
              <MetadataEdicionRapida />
              <br />
              <span className='INegrita'>*OJO* Este paso no afecta entre si esta organizado o no, es simplemente por practicidad y ahorrar tiempo.</span>
            </div>

            <div className='LinkSec' id='Link'>
              <h2>Uso del <code>{`<Link>`}</code> para hacer un scroll automatico a alguna sección de la pagina.</h2>
              <p>Basicamente tu funcion, es como la del menu de la derecha, el cual te lleva a una sección especifica.</p>
              <LinkCode />
              <br />
              <p>Las variables son las siguentes:</p>
              <p>smooth: Movimiento suave.</p>
              <p>duration: tiempo en milisegundos de lo que tardara en llegar a esa sección.</p>
              <p>exact: Va a llegar a la altura exacta.</p>
              <p>offset: un pequeño fix para posicionarlo mejor.</p>
              <p>activeClass: Esto define si va a detectar un estilo al estar en una sección. Y en este caso ese estilo se llama "active"</p>
              <ActiveClass />
            </div>

            <div className='FontPer' id='FontPer'>
              <h2>Font personalizada:</h2>
              <p>Se crea una carpeta llamada "fonts" dentro de la carpeta public. Ahi se ponen los archivos de la font.</p>
              <FontPersonalizada />
            </div>

            <div className='ScrollBar' id='ScrollBar'>
              <h2>ScrollBar:</h2>
              <p>Facil, codigo CSS para cambiar el diseño del scrollbar de la pagina.</p>
              <ScrollBar />
            </div>

            <div className='Responsive' id='Responsive'>
              <h2>Responsive:</h2>
              <p>Resoluciones de PC, laptop, tableta y celular.</p>
              <p className='INegrita'>- Agregar, el GRID para imagenes que use en RetroPepe. <br />- El uso de imagenes para bordes</p>
              <Responsive />
            </div>

            <div className='MenuSticky' id='MenuSticky'>
              <h2>Menu (Navbar) Sticky con JS:</h2>
              <p>Utilizando JS para crear el menu sticky, se crea un efecto menos ortopedico, a la hora de hacer scroll en la pagina.</p>
              <JSSticky />
              <JSStickyCSS />
            </div>

            <div className='GRIDGallery' id='GRID'>
              <h2>Galeria de imagenes utilizando GRID:</h2>
              <p>El grid basicamente funciona para acomodar todas las imagenes sin importar su tamaño, en un tamaño en especifico, por ejemplo 200x200, y ordenarlo en columnas ya sea de 3 o 5.</p>
              <br />

              <div className="gallery">
                {images.map((image, index) => (
                  <img key={index} className="gallery-image" src={image} alt={`Image ${index + 1}`} />
                ))}
              </div>

              <GridCode />

              <p className='INegrita'>Por si acaso el codigo lllega dar error, es por culpa del cuadro, asi que aqui lo repito:</p>
              <p>
                <code>
                  {GridCodeTexto}
                </code>
              </p>
              <br />
              <GridCSS />
              <p>En los import, se va a poner la dirección de cada imagen que vas a incluir, image1, image2, image3.......</p>
            </div>

            <div className='BorderStyle' id='BorderStyle'>
              <h2>Diseño (Imagen) para los bordes:</h2>
              <p className='Border1'>Imagen 1</p>
              <p className='Border2'>Imagen 2</p>
              <p className='Border3'>Imagen 3</p>
              <p className='Border4'>Imagen 4</p>

              <p className='Border14'>Imagen 5</p>
              <p className='Border15'>Imagen 6</p>
              <p className='Border16'>Imagen 7</p>
              <p className='Border17'>Imagen 8</p>


              <p className='Border5'>dotted</p>
              <p className='Border6'>dashed</p>
              <p className='Border7'>solid</p>
              <p className='Border8'>double</p>
              <p className='Border9'>groove</p>
              <p className='Border10'>ridge</p>
              <p className='Border11'>inset</p>
              <p className='Border12'>outset</p>
              <p className='Border13'>(mix) dotted dashed solid double</p>
              <BordersCSS />
            </div>

            <div className='BarraDeProgreso' id='BarraDeProgreso'>
              <h2>Barra de Progrso:</h2>
              <p>Pueder utilizada como una barra de carga, o barra de progreso.</p>

              <section className='column column--right'>
                <div className='skills'>
                  <div className="skills__header">
                    <span className="skills__start-label stats">0</span>
                    <span className="skills__end-label stats">25</span>
                    <span className="skills__end-label stats">50</span>
                    <span className="skills__end-label stats">75</span>
                    <span className="skills__end-label stats">100</span>
                  </div>
                  <div className='skills__item'>
                    <p className='skills__tech'>DAÑO</p>
                    <div className='skills__bar skills__bar--55'></div> {/* 0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 */}
                  </div>

                  <div className='skills__item'>
                    <p className='skills__tech'>ALCANCE</p>
                    <div className='skills__bar skills__bar--50'></div> {/* 0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 */}
                  </div>

                  <div className='skills__item'>
                    <p className='skills__tech'>CADENCIA</p>
                    <div className='skills__bar skills__bar--50'></div> {/* 0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 */}
                  </div>

                  <div className='skills__item'>
                    <p className='skills__tech'>RECARGA</p>
                    <div className='skills__bar skills__bar--70'></div> {/* 0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 */}
                  </div>

                  <div className='skills__item'>
                    <p className='skills__tech'>PRECISIÓN</p>
                    <div className='skills__bar skills__bar--75'></div> {/* 0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 */}
                  </div>

                </div>
              </section>

              <BarraProgreso />

            </div>

            <div className='ConvesorImage' id='ConvesorImage'>
              <h2>Conversor de imagenes con Magick</h2>
              <p>Con esta herramienta, permite convertir las imagenes .png .jpg y cualquier otro formato a un formato .webp, el cual es recomendable para cuando se cargan muchas imagenes, ya que esto reduce su peso de forma considerable sin perder la calidad de estas.</p>
              <h3>Paso 1:</h3>
              <p>- Instalar Magick</p>
              <a href='https://imagemagick.org/script/download.php' target='_blank'>Link Magick</a>
              <h3>Paso 2:</h3>
              <p>Reiniciar la pc para que detecte la linea de codigos.</p>
              <h3>Paso 3:</h3>
              <p>- Abrir la terminal de comandos directamente en la carpeta donde estan alojadas las imagenes y usar el siguente comando.</p>
              <p>magick mogrify -format webp *.png (El .png se puede cambiar por .jpg, .jpeg y otros.)</p>
              <p>- Despues de utilizar el comando y convertir todas las imagenes a .webp, las imagenes originales se mantendran dentro de la carpeta, para eso, ingresaresmo el siguente comando para eliminar las imagenes.</p>
              <p>del *.png (El .png se puede cambiar por .jpg, .jpeg y otros.)</p>
            </div>


          </div>

          <div className="IndexRight">
            <div className="IndexMenu">
              <p>PAGINA WEB</p>
              <Link to="PasoUno" smooth={true} duration={700} spy={true} exact="true" offset={14} activeClass="active" onSetActive={handleSetActive}><a>CREAR PROYECTO</a></Link>
              <Link to="Recursos" smooth={true} duration={700} spy={true} exact="true" offset={-10} activeClass="active" onSetActive={handleSetActive}><a>RECURSOS</a></Link>
              <Link to="Deployar" smooth={true} duration={700} spy={true} exact="true" offset={14} activeClass="active" onSetActive={handleSetActive}><a>DEPLOYAR DOMINIO</a></Link>
              <Link to="Extra" smooth={true} duration={700} spy={true} exact="true" offset={-100} activeClass="active" onSetActive={handleSetActive}><a>EXTRA</a></Link>
              <Link to="DeployarVercel" smooth={true} duration={700} spy={true} exact="true" offset={14} activeClass="active" onSetActive={handleSetActive}><a>DEPLOYAR VERCEL</a></Link>

              <p>CODIGOS MAS USADOS</p>
              <Link to="ReactIcons" smooth={true} duration={700} spy={true} exact="true" offset={0} activeClass="active" onSetActive={handleSetActive}><a>React-Icons</a></Link>
              <Link to="Metadatos" smooth={true} duration={700} spy={true} exact="true" offset={0} activeClass="active" onSetActive={handleSetActive}><a>Metadatos</a></Link>
              <Link to="Link" smooth={true} duration={700} spy={true} exact="true" offset={0} activeClass="active" onSetActive={handleSetActive}><a><code>{`<Link>`}</code></a></Link>
              <Link to="FontPer" smooth={true} duration={700} spy={true} exact="true" offset={0} activeClass="active" onSetActive={handleSetActive}><a>Font personalizada</a></Link>
              <Link to="ScrollBar" smooth={true} duration={700} spy={true} exact="true" offset={0} activeClass="active" onSetActive={handleSetActive}><a>ScrollBar</a></Link>
              <Link to="Responsive" smooth={true} duration={700} spy={true} exact="true" offset={0} activeClass="active" onSetActive={handleSetActive}><a>Responsive</a></Link>
              <Link to="MenuSticky" smooth={true} duration={700} spy={true} exact="true" offset={0} activeClass="active" onSetActive={handleSetActive}><a>Menu Sticky</a></Link>
              <Link to="GRID" smooth={true} duration={700} spy={true} exact="true" offset={0} activeClass="active" onSetActive={handleSetActive}><a>GRID Galeria</a></Link>
              <Link to="BorderStyle" smooth={true} duration={700} spy={true} exact="true" offset={0} activeClass="active" onSetActive={handleSetActive}><a>Efecto Border</a></Link>
              <Link to="BarraDeProgreso" smooth={true} duration={700} spy={true} exact="true" offset={0} activeClass="active" onSetActive={handleSetActive}><a>Barra de Progrso</a></Link>
              <Link to="ConvesorImage" smooth={true} duration={700} spy={true} exact="true" offset={0} activeClass="active" onSetActive={handleSetActive}><a>Magick Imagenes</a></Link>


            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Guias;
