import React from 'react'
import { 
    SwipeableDrawer, 
    Box, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText,
    Divider  } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Escudo  from '../../public/imgs/escudo.png';

import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import HandymanIcon from '@mui/icons-material/Handyman';

interface Pagina {
    titulo : string,
    icono : any,
    url: string
};

const listaPaginas : Pagina[] = [
    {
        titulo: 'Inicio',
        icono: <HomeIcon />,
        url: '/'
    },
    {
        titulo: 'SINACIG',
        icono: <AccountBalanceIcon />,
        url: '/Servicops'
    },
    {
        titulo: 'Informacion Pública',
        icono: <ImportContactsIcon />,
        url: '/Servicops'
    },
    {
        titulo: 'Departamentos',
        icono: <ApartmentIcon />,
        url: '/Departamentos'
    },
    {
        titulo: 'Servicios',
        icono: <RoomServiceIcon />,
        url: '/Servicops'
    },
    {
        titulo: 'Noticias',
        icono: <NewspaperIcon />,
        url: '/Servicops'
    },
    {
        titulo: 'Proyectos',
        icono: <HandymanIcon />,
        url: '/Servicops'
    }
];

export const MuniNavBar = ({open, handleOpenChange} : {open: boolean, handleOpenChange : () => void}) => {
    
    
    let navigate = useNavigate();

    return (
        <SwipeableDrawer
                open={open}
                onClose={handleOpenChange}
                onOpen={handleOpenChange}
            >
            <img 
                src={Escudo}  
                alt='Escudo'
                style={{
                    margin: '12px auto',
                    width: '50%',
                    backgroundColor: '#fff'
                }}
                onClick={() => {navigate('/', { replace: true }); handleOpenChange() }}
            />
            <Divider />
            <Box sx={{minWidth: '250px'}} onClick={handleOpenChange}>
                
                {
                    listaPaginas.map( ({titulo, icono, url}, index) => (
                        <List 
                            key={'navItem' + index} 
                            onClick = { () => navigate( url, { replace: true } ) }>
                            <ListItem key={titulo} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {icono}
                                    </ListItemIcon>
                                    <ListItemText primary={titulo} />
                                </ListItemButton>
                            </ListItem>
                        </List> 
                    ))
                }
                

            </Box>
        </SwipeableDrawer>
    )
}
