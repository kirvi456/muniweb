import React, { useEffect, useState } from 'react'

import { Grid, Typography, Divider } from '@mui/material'
import { Departamento, listaDeptos } from '../../../models/Departamento';
import { MuniDeptoCard } from './MuniDeptoCard';

import './MuniDeptoHub.css';

export const MuniDeptoHub = () => {
    
    const [deptos, setDeptos] = useState<( Departamento ) [] >([]);
    

    useEffect(() => {
        setDeptos(listaDeptos);
    }, []);
    

    return (
        <>
            <Typography variant='h4' textAlign='center'>DIRECCIONES Y UNIDADES DE LA MUNICIPALIDAD</Typography>
            <Divider variant='middle'/>            
            <Grid container spacing={2}  sx={{ width: '1200px', maxWidth: '95%', margin: 'auto'}}>
                {
                    deptos.map(({nombre, abreviatura, imgPresentacion}, index) => {
                        return (
                            <Grid key={abreviatura} item xs={12} md={4}>
                                <MuniDeptoCard 
                                    key={'card' + index} 
                                    imgPresentacion={imgPresentacion} 
                                    nombre={nombre} 
                                    abreviatura={abreviatura} 
                                />                      
                            </Grid>
                        )
                    })
                    
                }            
            </Grid>
        </>
    )
}
