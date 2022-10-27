import { Divider, Paper, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { getDateString } from '../../utils/Formats'
import { Boleta } from './types'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import PersonIcon from '@mui/icons-material/Person';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';

type BoletaCardProps = {
    boleta : Boleta
}

export const BoletaCard : React.FC<BoletaCardProps> = ({ boleta }) => {
    return (
        <Paper
            elevation={10}
            sx={{
                p: 2, 
                width: '600px',
                maxWidth: '100%',
                position: 'relative',
                overflow: 'hidden',

            }}
        >
            <Box 
                sx={{
                    position: 'absolute',
                    background: '#0B5D1E',
                    color: 'white',
                    p: 1,
                    top: 0,
                    left: 0,
                    borderRadius: '0 0 .5em 0' 
                }}
            >
                <Typography sx={{fontWeight: 'bold'}}>
                    Boleta No.{boleta.noboleta}
                </Typography>

            </Box>
            <Stack spacing={1}>
                <Stack direction='row' justifyContent='end' alignItems='center' spacing={1}>
                    <CalendarMonthIcon />
                    <Typography variant='caption'>
                        { getDateString( boleta.fecha ) }
                    </Typography>
                </Stack>
                <Stack justifyContent='center'>
                    <Typography variant='h4' fontWeight='800' textAlign='center'>
                        {boleta.vehiculo.tipoPlaca.tipo} - {boleta.vehiculo.noPlaca}
                    </Typography>
                    <Typography variant='caption' textAlign='center' sx={{fontSize: '0.65em', fontWeight: 'bold'}}>
                        TIPO: {boleta.vehiculo.tipo.tipo} / COLOR: {boleta.vehiculo.color.color} / MARCA: {boleta.vehiculo.marca.marca}
                    </Typography>
                </Stack>
                <Stack direction='row'>
                    <PlaceIcon />
                    <Typography textAlign='justify'>
                        <strong>Lugar: </strong>{boleta.lugar}
                    </Typography>
                </Stack>
                <Stack direction='row'>
                    <PersonIcon />
                    <Typography textAlign='justify'>
                        <strong>Infractor: </strong>{boleta.conductor.nombre}
                    </Typography>
                </Stack>
                <Stack direction='row'>
                    <LocalPoliceIcon />
                    <Typography>
                        <strong>Agente: </strong>{boleta.agente.chapa}
                    </Typography>
                </Stack>
                <Divider />
                <Typography>
                    <strong>{boleta.articulo.no}</strong> {boleta.articulo.desc}
                </Typography>
                <Typography sx={{fontWeight: '800', textAlign: 'end'}}>
                    TOTAL: Q{boleta.articulo.valor}.00
                </Typography>
            </Stack>
        </Paper>
    )
}
