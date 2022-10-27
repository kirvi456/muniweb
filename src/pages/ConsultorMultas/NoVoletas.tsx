
import { Stack, Typography } from '@mui/material'
import React from 'react'
import Happy from '../../public/svgs/happy.svg'

export const NoVoletas = () => {
    return (
        <Stack spacing={1} alignItems='center'>
            <img 
                src={Happy}
                style={{
                    width: '300px',
                    maxWidth: '50%'
                }}
            />
            <Typography variant='caption' textAlign='center'>
                No se encontraron multas de tránsito asociadas con la ese número de placa.
            </Typography>
        </Stack>
    )
}
