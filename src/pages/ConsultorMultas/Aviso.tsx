import { Stack, Typography } from '@mui/material'
import React from 'react'
import Search from '../../public/svgs/search.svg'
export const Aviso = () => {
    return (
        <Stack spacing={1} alignItems='center'>
            <img 
                src={Search}
                style={{
                    width: '300px'
                }}
            />
            <Typography variant='caption' textAlign='center'>
                Consulta tus multas de tránsito desde cualquier lugar. Nuestro horario es de lunes a viernes de 7:00am a 4:00pm.
            </Typography>
        </Stack>
    )
}
