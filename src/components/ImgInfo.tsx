import React from 'react';
import { Grid, Link, Stack, Typography } from '@mui/material';
import {
    Link as RouterLink
  } from 'react-router-dom';
type ImgInfo = {
    titulo : string, 
    texto : string, 
    img : string, 
    alt : string, 
    primeroTexto : boolean,
    link?: { text: string, url: string } 
}

export const ImgInfo : React.FC<ImgInfo> = ( {titulo, texto, img, alt = 'Imagen', primeroTexto = true, link = undefined} ) => {


  return (
    <Grid container direction={primeroTexto ? 'row' : 'row-reverse'} marginTop='24px'>
        <Grid item xs={12} md={6} sx={{display: 'flex'}}>
            <Stack spacing={2} p={2}>
                <Typography variant='h6'>
                    {titulo}
                </Typography>
                <Typography variant='caption' sx={{textAlign: 'justify', whiteSpace: 'pre-line'}} paragraph >
                    {texto}
                </Typography>
                {
                    link &&
                    <Stack>
                        <Link component={RouterLink} to={link.url}>{link.text}</Link>
                    </Stack>
                }
            </Stack>
        </Grid>
        <Grid item xs={12} md={6} sx={{display: 'flex'}}>
            <img 
                src={img}
                alt={alt}
                style={{
                    maxWidth: '70%',
                    margin: 'auto',
                    textAlign: 'center',
                    display: 'block'
                }}
            ></img>
        </Grid>
    </Grid>
  )
}
