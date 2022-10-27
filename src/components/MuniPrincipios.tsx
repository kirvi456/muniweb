import React from 'react'
import { Grid, Stack, Paper, Typography, Divider, Box } from '@mui/material';
import { Principio } from '../models/Principio';

export const  MuniPrincipios = ({principios} : {principios : Principio[]}) => {
  return (
      <Box margin='12px auto'>
    <Grid container spacing={4}>
        {principios.map( ({titulo, descripcion}, index) => {
            return (
                <Grid item xs={12} md={6} key={'key' + index} >
                    <Paper elevation={6} sx={{overflow: 'hidden', border: '1px solid', borderColor: '#0000002e', }}>
                        <div style={{
                            background: 'linear-gradient(90deg, rgba(48,129,0,1) 0%, rgba(255,255,255,1) 50%, rgba(255,250,10,1) 100%)',
                            height: '4px',
                        }}>

                        </div>
                        <Stack p={2}>                            
                            <Typography color='primary' variant='h6' textAlign='center'>
                                {titulo}
                            </Typography>
                            <Divider />
                            <Typography variant='body2' marginTop={2} textAlign='justify'>
                                {descripcion}
                            </Typography>
                        </Stack>
                    </Paper>
                </Grid>
            )
        })}
        
    </Grid>
    
    </Box>
  )
}
