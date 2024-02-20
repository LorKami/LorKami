import React from 'react'
import '../FichaKami/FichaAgente.css'

// import MijailVolkov from '../../images/MVCHERI.webp'
import MijailVolkov from '../../images/mij9.png'
// import MijailVolkov from '../../images/Galeria/Fivem/SheriffVolkov4.webp'
import Of2 from '../../images/Insignias/oficial2.webp'

const FichaPolicialKami = () => {
    return (
        <div>

            <div className='MonitorFicha'>
                <div className='FichaAngenteMonitor'>
                    <div className='CajaFichaDatos'>
                        <div className='TituloDeCaja'>
                            <h2>FICHA DEL AGENTE</h2>
                        </div>
                        <div className='CajaDatos'>
                            <div className='CajaFotoAgente'>
                                <img src={MijailVolkov} />
                            </div>
                            <div className='CajaDatosDelAgente'>

                                <div className='CajasDeDatosInternos'>
                                    <p>NOMBRE</p>
                                    <span>Mijail</span>
                                </div>

                                <div className='CajasDeDatosInternos'>
                                    <p>APELLIDO</p>
                                    <span>Volkov</span>
                                </div>

                                <div className='CajasDeDatosInternos'>
                                    <p>GÉNERO</p>
                                    <span>Masculino</span>
                                </div>

                                <div className='CajasDeDatosInternos'>
                                    <p>NACIONALIDAD</p>
                                    <span>Estados Unidos</span>
                                </div>

                                <div className='CajasDeDatosInternos'>
                                    <p>FECHA DE NACIMIENTO</p>
                                    <span>12/01/1995 - 28 años</span>
                                </div>

                                {/* <div className='CajasDeDatosInternos'>
                            <p>ID</p>
                            <span>*</span>
                        </div>
                        
                        <div className='CajasDeDatosInternos'>
                            <p>TELÉFONO</p>
                            <span>*</span>
                        </div>
                        
                        <div className='CajasDeDatosInternos'>
                            <p>CUENTA BANCARIA</p>
                            <span>*</span>
                        </div> */}

                                <div className='CajasDeDatosInternos'>
                                    <p>JURISDICCÍON ACTUAL</p>
                                    <span>LSSD</span>
                                </div>

                            </div>
                        </div>

                        <div className='DatosAgenteAdicionales'>

                            <div className='DatosDelAgentePrimeraSeccion'>

                                <div className='MaximoRango'>
                                    <span>MAXIMO RANGO ALCANZADO</span>
                                    <p className='MaximoRangoP'>OFICIAL II <img src={Of2} className='InsigniasMaxRango' /> </p>
                                </div>
                                <div className='NumeroDePlaca'>
                                    <span>N° DE PLACA</span>
                                    <p>#1837</p>
                                </div>
                            </div>

                            <div className='DatosDelAgenteSegundaSeccion'>

                                <div className='HistoriaDelAgente'>
                                    <h2>BIOGRAFIA</h2>

                                    <p>Nacido el 12 de enero de 1995 en Liberty City, creció en un entorno humilde como hijo de padres inmigrantes rusos. Su familia poseía una modesta tienda de fotografía de bajo presupuesto en los barrios marginales. Desde muy joven, fue testigo de la lucha constante por salir adelante y aprendió el valor del trabajo duro y la determinación.</p>
                                    <p>Después de terminar sus estudios universitarios en Fotografía y Diseño, decidió seguir su pasión por la justicia y se unió a la academia de la LCPD (Liberty City Police Department) a los 21 años. Durante su entrenamiento, adquirió habilidades valiosas y conocimientos necesarios para desempeñar su futura labor como oficial de policía.</p>
                                    <p>A los 23 años, fue ascendido al rango de Oficial I, destacándose por su actitud proactiva y compromiso en cada misión. Se enorgullecía de poder servir y proteger a su comunidad, haciendo todo lo posible para mantener las calles seguras y brindar ayuda a aquellos que la necesitaban.</p>
                                    <p>Pero su búsqueda de crecimiento y desafío continuaba, y a los 26 años, se le otorgó un nuevo ascenso al rango de Oficial II. Al mismo tiempo, fue aceptada su solicitud de transferencia a la ciudad de Los Santos para continuar su carrera policial.</p>
                                    <p><span className='BioSpan'>Defectos: </span>Impulsivo, rigidez, dificultad para confiar.</p>
                                    <p><span className='BioSpan'>Virtudes: </span>Determinación, empatico, creativo.</p>
                                    <p><span className='BioSpan'>Miedos: </span>Caimanes y Pumas.</p>
                                </div>
                                <div className='Certificaciones'>
                                    <h2>CERTIFICACIÓNES Y ASIGNACIÓNES INTERESTATALES</h2>
                                    <p>*</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default FichaPolicialKami