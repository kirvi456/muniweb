import { Grid, Stack, Typography } from '@mui/material'
import React, {useState, useLayoutEffect} from 'react'

import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


export const Himno = () => {

    
    const [audio, setAudio] = useState('');    
    useLayoutEffect(()=>{setAudio('http://192.168.242.188:4000/Himno.mp3')},[])

  return (
    <Stack sx={{width: '900px', maxWidth: '95%', margin: '24px auto'}}>
        <Typography variant='h3' color='primary.main' textAlign='center'>
            Himno de San José Pinula
        </Typography>
        <Typography variant='caption' color='text.secondary' textAlign='center'>
            Letra y Música: Prof. Donis Godoy
        </Typography>
        <Grid container >
        <Grid item xs={12} md={6}>
                <Stack spacing={2} p={2} textAlign='center'>
                    <Stack>
                        <Typography>
                            Con la esencia de mi ser,
                        </Typography>
                        <Typography>
                            yo te canto San José,
                        </Typography>
                        <Typography>
                            mis virtudes hoy te doy,
                        </Typography>
                        <Typography>
                            entre versos tu canción.
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography>
                            Aves que siempre cantan,
                        </Typography>
                        <Typography>
                            un ensamble en voz de Dios,
                        </Typography>
                        <Typography>
                            y los niños sueñan más,
                        </Typography>
                        <Typography>
                            motivados a triunfar,
                        </Typography>
                        <Typography>
                            a triunfar.
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography fontWeight='bold'>
                            CORO
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography>
                            San José Pinula,
                        </Typography>
                        <Typography>
                            tierra de Jersey por Dios,
                        </Typography>
                        <Typography>
                            hombres que luchan por trabajar,
                        </Typography>
                        <Typography>
                            sus cosechas dan amor.
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography>
                            San José Pinula,
                        </Typography>
                        <Typography>
                            tierra de gente de paz,
                        </Typography>
                        <Typography>
                            tus mujeres bellas son,
                        </Typography>
                        <Typography>
                            princesas de gran valor.
                        </Typography>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
                <Stack spacing={2} p={2} textAlign='center'>
                    <Stack>
                        <Typography>
                            Aire fresco al respirar,
                        </Typography>
                        <Typography>
                            cimas para reflexionar,
                        </Typography>
                        <Typography>
                            tus montañas bellas son,
                        </Typography>
                        <Typography>
                            para meditar con Dios.
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography>
                            Tus deportistas dan,
                        </Typography>
                        <Typography>
                            toda el alma de campeón,
                        </Typography>
                        <Typography>
                            tus artistas siempre dan,
                        </Typography>
                        <Typography>
                            lo mejor del corazón,
                        </Typography>
                        <Typography>
                            corazón.
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography fontWeight='bold'>
                            CORO
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography>
                            San José Pinula,
                        </Typography>
                        <Typography>
                            eres regalo de Dios,
                        </Typography>
                        <Typography>
                            yo te llevo en mi vida,
                        </Typography>
                        <Typography>
                            y nunca te olvidaré.
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography>
                            San José Pinula,
                        </Typography>
                        <Typography>
                            tierra de leche y pinol,
                        </Typography>
                        <Typography>
                            yo te llevo en mi alma,
                        </Typography>
                        <Typography>
                            siempre te recordaré,
                        </Typography>
                        <Typography>
                            San José Pinula.
                        </Typography>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
        <ReactAudioPlayer
            autoPlay={false}
            autoPlayAfterSrcChange={false}
            src={audio}
        />
    </Stack>
  )
}
