import { Grid, Stack, Typography,IconButton } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


export const MuniFooter = ({complete} : {complete: boolean}) => {

    const redes = [
        {
            name: 'facebook',
            url: 'https://m.facebook.com/profile.php?id=100064852264764',
            icon: <FacebookIcon />
        },
        {
            name: 'youtube',
            url: 'https://www.youtube.com/channel/UCqyKG0hIqZ2yapG2Wj-EQ5A',
            icon: <YouTubeIcon />
        },
        {
            name: 'twitter',
            url: 'https://twitter.com/munisjp',
            icon: <TwitterIcon />
        },
        {
            name: 'instagram',
            url: 'https://www.instagram.com/muni.sjp/',
            icon: <InstagramIcon />
        },
    ]

    if(!complete){
        return (            
            <Typography sx={{background: '#308100', color: '#fff', fontSize: '0.63em'}} variant='caption' textAlign='center' component='div'>
                Desarrollado por el Departamento de Tecnología de la Información - 2022 - Copyright © Muni San José Pinula
            </Typography> 
        )

    }

    return (
        <>
            <Grid container sx={{background: '#308100', color: '#fff', padding: '24px 12px', maxWidth:'100%'}} >
                <Grid item xs={6} sx={{borderRight: '1px solid'}}>
                    <Stack spacing={2} sx={{alignItems: 'end', marginRight: '8px', textAlign: 'right'}}>
                        <Stack direction='row' spacing={1} sx={{alignItems: 'center'}}>
                            <PersonIcon />
                            <Typography variant='caption' component='div'>
                                Administración de Miguel Ángel Solares Montenegro
                            </Typography>
                        </Stack>
                        <Stack direction='row' spacing={1} sx={{alignItems: 'center'}}>
                            <AccountBalanceIcon />
                            <Typography variant='caption' component='div'>
                            1era. Calle, 4-30, Zona 2, Palacio Municipal
                            </Typography>
                        </Stack>
                        <Stack direction='row' spacing={1} sx={{alignItems: 'center'}}>
                            <LocalPhoneIcon />
                            <Typography variant='caption' component='div'>
                            (+502) 6665-0202
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={6} sx={{ borderLeft: '1px solid'}}>
                    <Stack spacing={2} sx={{marginLeft: '8px', alignItems: 'start'}}>
                        <Stack spacing={1} sx={{alignItems: 'start', maxWidth: '100%'}} >
                            <Stack direction='row' spacing={1} sx={{alignItems: 'center'}}>
                                <MailIcon />
                                <Typography variant='caption' component='div'>
                                    Emails:
                                </Typography>
                            </Stack>
                            <Typography variant='caption' component='div' sx={{maxWidth: '100%', overflow: 'hidden'}}>
                                - alcaldiamunicipalsjp@gmail.com (Contacto)
                            </Typography>
                            <Typography variant='caption' component='div' sx={{maxWidth: '100%', overflow: 'hidden'}}>
                                - bryanordonezdti@gmail.com (Informática)
                            </Typography>
                        </Stack>                 
                        <Stack direction='row' sx={{flexWrap: 'wrap'}}>
                            {
                                redes.map(({icon, url}, index) => {
                                    return (
                                        <IconButton key={'icon' + index} sx={{color: '#fff'}} component="a" href={url} target='_blank'>
                                            {icon}
                                        </IconButton>
                                    )
                                })
                            }                    
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <Typography sx={{background: '#308100', color: '#fff', fontSize: '0.63em'}} variant='caption' textAlign='center' component='div'>
                Desarrollado por el Departamento de Tecnología de la Información - 2022 - Copyright © Muni San José Pinula
            </Typography>
        </>
    )
}
