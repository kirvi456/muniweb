import React from 'react'
import { Stack, Container } from '@mui/material'

import { ImgInfo } from '../../components/ImgInfo';

import { MuniPrincipios } from '../../components/MuniPrincipios';
import { MuniGaleria } from '../../components/MuniGaleria';
import { Principio } from '../../models/Principio';
import { MuniInfoBanner } from './MuniInfoBanner';

import PagoIsui from '../../public/svgs/pagar.svg';
import drivefine from '../../public/svgs/drivefine.svg';
import { MuniFooter } from '../../components/MuniFooter';

export const Home = () => {

    const misPrincipios : Principio[] = [
        {
            titulo: 'MISIÓN',
            descripcion: 'Llegar a ser la institución municipal que dé respuesta inmediata, transparente y objetiva a las necesidades de infraestructura, servicios y asistencia social a cada familia de San José Pinula.'
        },
        {
            titulo: 'VISIÓN',
            descripcion: 'Servir a cada familia pinulteca, con transparencia y equidad de género para establecer un municipio seguro, próspero y en desarrollo integral y así alcanzar una mejor calidad de vida para todos sus habitantes.'
        },
    ];


    return (
        <>

        

            <MuniGaleria />


            <Container>

                <Stack 
                
                >
                    
                
                <MuniInfoBanner></MuniInfoBanner>
                

                <ImgInfo 
                    titulo='PAGA EL IUSI'
                    texto={`El IUSI es el Impuesto Único Sobre Inmuebles que es recaudado por el estado de Guatemala sobre el valor fiscal que tienen bienes como terrenos, construcciones, edificios, estructuras, etc.
                    
                    Cualquier persona que es la propietaria de un inmueble deberá pagar el IUSI. Este pago es anual, sin embargo, según lo establece la ley, el contribuyente deberá cancelar de forma trimestral durante los siguientes meses: abril, julio, octubre y enero del año siguiente.
                    
                    El pago del IUSI se puede pagar en cualquiera de las cajas disponibles en el territorio del Municipio de San José Pinula.`}
                    img={PagoIsui}
                    alt='IUSI-PAGO'
                    primeroTexto
                />

                <ImgInfo 
                    titulo='MULTAS DE TRÁNSITO'
                    texto={`Una infracción de tránsito es un incumplimiento de la normativa de circulación de vehículos que acarrea una sanción administrativa. En el caso de las infracciones de tránsito más graves, la sanción puede ser de orden penal, hasta el punto de acarrear penas privativas de libertad.
                    
                    Es importante respetar la ley de tránsito para evitar ser sancionado, en este portal es posible consultar las multas de tŕansito impuestas dentro del municipio de San José Pinula.
                    `}
                    img={drivefine}
                    alt='IUSI-PAGO'
                    primeroTexto={false}
                    link={{ text: 'Consultar multas', url : '/multas/consulta' }}
                />

                <MuniPrincipios principios={misPrincipios}/>


            

            </Stack>

            </Container>
            <MuniFooter complete={true} />
        </>
)
}
