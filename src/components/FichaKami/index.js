import React from 'react'
import '../FichaKami/FichaAgente.css'

import MijailVolkov from '../../images/MVCHERI.webp'

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
                        <img src={MijailVolkov}/>
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
                        
                        <div className='CajasDeDatosInternos'>
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
                        </div>
                        
                        <div className='CajasDeDatosInternos'>
                            <p>JURISDICCÍON</p>
                            <span>S.A.P.D - B.S.C.D</span>
                        </div>
                        
                    </div>
                </div>

    <div className='DatosAgenteAdicionales'>

        <div className='DatosDelAgentePrimeraSeccion'>

            <div className='MaximoRango'>
                <span>MAXIMO RANGO ALCANZADO</span>
                <p>OFICIAL I</p>
            </div>
            <div className='NumeroDePlaca'>
                <span>N° DE PLACA</span>
                <p>1837</p>
            </div>
        </div>

        <div className='DatosDelAgenteSegundaSeccion'>

            <div className='HistoriaDelAgente'>
                <h2>HISTORIA xD</h2>
                <p>Marcus tiene 37 años y un acento bastante complejo de identificar, debido a su mezcla cultural, con un padre latino y una madre Texana, siempre lleva un peinado hacia arriba, corto y tinturado de color blanco platinado, una complexión media atlética y un par de tatuajes no visibles en honor a su esposa e hija.</p>
                <p>Siempre lleva un par de guantes de cuero negro y otro par de repuesto en el maletero, para ocultar las múltiples cicatrices que tiene en las manos por sus años de combate y para disimular la pérdida de movilidad de su dedo meñique izquierdo por un disparo que recibió en un tiroteo en servicio, lesión que fue reducida de pérdida total de la movilidad en la mano izquierda a solo la pérdida de movilidad de un dedo gracias a una cirugía realizada por el Dr. Michael Gomez en el ABC Medical Center de Los Ángeles.</p>
                <p>Marcus estuvo casado con Dee Morgan una paramédico del departamento de bomberos y de esa unión nació su única hija Isabella.</p>
            </div>
            <div className='Certificaciones'>
                <h2>CERTIFICACIÓNES Y ASIGNACIÓNES INTERESTATALES</h2>
                <p>p</p>
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