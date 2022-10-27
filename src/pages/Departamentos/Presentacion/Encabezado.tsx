import { Stack, Box, Typography } from '@mui/material'
import React from 'react'

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


interface PropsType {
    abreviatura: string,
    nombre: string,
    descripcion: string,
    objetivo: string
}

export const Encabezado = ({abreviatura, nombre, descripcion, objetivo} : PropsType) => {
    
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));

    return (
    <>
        <Box
            boxShadow={3}
            sx={{
                position: 'absolute',
                bgcolor: 'primary.main',
                borderRadius: '0 0 8px 8px',
                padding: '6px 12px',
                color: 'background.default',
                top: '42px' 
            }}
        >
            <Typography variant={matches ? 'h2': 'h4'}  fontWeight='bold'>
                {abreviatura}
            </Typography>
        </Box>
        <Stack paddingTop={matches ? '3.75rem' : '2.125rem'}>
            <Typography 
                variant='h4' 
                color='primary' 
                sx={{textAlign: 'center', fontWeight: 'bold', margin: '12px 0'}}
            >
                {nombre}
            </Typography>            
            <Typography variant='caption' sx={{textAlign: 'justify'}} paragraph >
                {descripcion}
            </Typography> 
            <Typography 
                variant='h5' 
                fontWeight='bold'
                marginBottom='6px'
            >
                Objetivo
            </Typography>            
            <Typography variant='caption' sx={{textAlign: 'justify'}} paragraph >
                {objetivo}
            </Typography> 
        </Stack>
    </>
    
    )
}
