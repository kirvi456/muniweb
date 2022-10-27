import { Grid, Stack, Typography, Divider } from '@mui/material'
import React from 'react'
import Iglesia1 from '../../../public/imgs/iglesia1.png';
import Reloj1 from '../../../public/imgs/reloj1.png';
import Reloj2 from '../../../public/imgs/reloj2.png';

export const Patrimonio = () => {

  return (
    <Stack maxWidth='95%' width='1200px' margin='auto' spacing={2}>    
        <Typography variant='h6' color='primary.main' fontWeight='bold' textAlign='center'>
            LA IGLESIA ANTIGUA
        </Typography>
        <Divider variant='middle'  />
        <Typography textAlign='justify'>
            El departamento de Guatemala cuenta con un municipio llamado San José Pinula, 
            que se ubica a 22 kilómetros de la capital. Su nombre significa "Tierra del Pinol".
        </Typography>
        <Grid container>
            <Grid item xs={12} md={6}>
                <Stack spacing={2}>
                    <Typography textAlign='justify'>
                        Fue fundado por el ex presidente Manuel Lisandro Barillas y se constituyó como municipio el 
                        1 de octubre de 1886. Limita al norte con los municipios de Palencia y Guatemala, al sur con 
                        el municipio de Santa Rosa de Lima, del departamento de Santa Rosa, al este con Mataquescuintla, 
                        departamento de Jalapa y al oeste con los municipios de Santa Catarina Pinula y Fraijanes.
                    </Typography>
                    <Typography textAlign='justify'>
                        En el municipio existe un templo conocido como La Iglesia Antigua que según la investigación 
                        del estudiante de Arquitectura, Juan Alberto Ortiz, fue construida por los jesuitas entre 
                        finales del siglo XVII y principios del XVIII -se ignora la fecha exacta- en lo que fue 
                        la Hacienda de Canales (hoy, San José Pinula), una fértil región en la que se cultivaban 
                        alimentos que luego se transportaban a los colegios que tenían los religiosos en Santiago 
                        de los Caballeros (La Antigua Guatemala), entonces capital española de Centroamérica.
                    </Typography> 
                </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
                <img
                    src={Iglesia1}
                    alt='iglesia1'  
                    style={{                        
                        maxWidth: '100%',
                        padding: '0 24px',
                    }}          
                >
                </img>
            </Grid>
        </Grid>
               
        <Typography textAlign='justify'>
            Con la expulsión de los jesuitas de Guatemala en 1767, el templo y el convento quedaron 
            abandonados; pero en 1773, con el terremoto de Santiago de los Caballeros, fue ocupado 
            nuevamente por las Madres Clarisas. Esta iglesia fue la primera en el municipio, pero 
            después de sufrir varios daños a causa del terremoto de 1976, los pobladores 
            construyeron una nueva abandonando esta por completo.
        </Typography>        
        <Typography textAlign='justify'>
            Durante 30 años, la vieja iglesia de San José Pinula fue un conjunto de cuatro paredes 
            agrietadas sin techo que permanecía abandonada y en riesgo de desplomarse por completo.
        </Typography>
        <Typography textAlign='justify'>
            La historia del templo que alguna vez fue esplendoroso se desconocía entre los pobladores 
            hasta 1998, que fue cuando llegó al municipio Ortiz interesado en presentar una propuesta 
            para repararlo, fue hasta entonces que se supo que el edificio era una reliquia de al menos 
            300 años de antigüedad.
        </Typography>
        <Typography textAlign='justify'>
            Ortiz concluyo con su tesis en el año 2001, pero fue hasta dos años después que a través de 
            gestiones de un grupo de pinultecos representados por Luis Ramírez, que se logró el reconocimiento 
            de Patrimonio Cultural de la Nación. Con la ayuda de Ortiz y la asesoría del Instituto de 
            Antropología e Historia (IDAEH) la administración municipal inició los trabajos en agosto de 2005.
        </Typography>
        <Typography textAlign='justify'>
            Las cuatro paredes que aún quedaban de pie que están hechas de adobe, piedra y arcilla, fueron 
            reforzadas con acero y entre ellas se colocaron vigas; se rellenaron las grietas con arena amarilla 
            y cal. Se coloco nuevo techo, nueva puerta, nuevo piso y el templo quedó habilitado.
        </Typography>
        <Typography textAlign='justify'>
            El costo de la obra fue de Q600, 000.00 que fueron cubiertos con fondos propios de la municipalidad
        </Typography>
        <Typography textAlign='justify'>
            Cuando la obra fue concluida, se realizó una reinauguración del templo que fue todo un acontecimiento. 
            Actualmente es utilizada para eventos especiales tales como la Feria Titular del municipio y Semana Santa.
        </Typography>

        <Typography variant='h6' color='primary.main' fontWeight='bold' textAlign='center'>
            LA TORRE Y SU RELOJ
        </Typography>
        <Divider variant='middle'  />
        <Typography textAlign='justify'>
            La torre del reloj fue inaugurada  durante la administración del General Lázaro Chacón (1926 -1930). 
            El General tenía un especial cariño por San José Pinula, pues visitaba constantemente el municipio y 
            era propietario de varias extensiones de tierra en la región.
        </Typography>
        <Typography textAlign='justify'>
            El reloj posee en la parte superior una campana, que mide aproximadamente 30 pulgadas de alto y 25 de diámetro. 
            La cual tenía un tañido que podía escucharse en todo el pueblo. El reloj daba un campanazo cada media 
            hora y después daba el número de campanazos que correspondían a la hora que marcaba.
        </Typography>
        <Typography textAlign='justify'>
            El reloj quedó bajo la responsabilidad del Comandante del Cuartel y capacitaron al señor Sipriano Monterroso, 
            originario de la aldea El Colorado, Sargento segundo. Don Sipriano adquirió los conocimientos de darle mantenimiento: 
            ponerle aceite y darle cuerda cada cierto tiempo. Así funcionó durante casi 20 años, hasta que se averió
        </Typography>
        <Typography textAlign='justify'>
            Siendo Luis Víctor Ramírez alcalde municipal, 1958 y 1959, se intentó reparar, pero no fue posible. El Concejo Municipal 
            indicó que habían otras prioridades y necesidades que atender. Además de que se estaban arriesgando, porque un experto 
            dijo que el problema del reloj no tenía solución y que el trabajo se iba a cobrar, aunque los resultados no fueran positivos.
        </Typography>
        <Typography textAlign='justify'>
            Tiempo después la Cervecería Centroamericana mostró interés. Sin embargo no se concretó nada. Hasta la fecha continúa averiado, 
            a pesar de ser Patrimonio Cultural de la Nación. 
        </Typography>
        <Typography textAlign='justify'>
            La Torre del Reloj es parte de nuestro Patrimonio, de nuestra historia y de nuestra cultura. Nos interesa conservarlo, repararlo 
            y difundir la historia, para que continúe transmitiéndose de generación en generación. Para que sea objeto de enseñanza/aprendizaje. 
            Y de esta manera invitar a la población a apreciar y valorar nuestro patrimonio.  
        </Typography>
        <Grid container>
            <Grid item xs={12} md={6}>
                <img
                    src={Reloj1}
                    alt='Reloj1'  
                    style={{                        
                        maxWidth: '100%',
                        padding: '0 24px',
                    }}          
                >
                </img>
            </Grid>
            <Grid item xs={12} md={6}>
                <img
                    src={Reloj2}
                    alt='Reloj2'  
                    style={{                        
                        maxWidth: '100%',
                        padding: '0 24px',
                    }}          
                >
                </img>
            </Grid>
        </Grid>
        <div style={{height: '32px'}}>
        </div>
    </Stack>
  )
}
