import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { MuniNavBar } from './MuniNavBar';

import MenuIcon from '@mui/icons-material/Menu';

export const AppNavBar = () => {

    const [open, setOpen] = useState(false);

    const handleOpenChange = () => {
        setOpen(!open);
    }


    return (
        <>
            <AppBar position="fixed" sx={{bgcolor: 'background.paper'}}>
            <Toolbar variant="dense">
                <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }} onClick={handleOpenChange}>
                <MenuIcon />
                </IconButton>
            </Toolbar>
            </AppBar>
            <MuniNavBar open={open} handleOpenChange={handleOpenChange} />
        </>
    )
}
