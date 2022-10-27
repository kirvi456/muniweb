import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { AppNavBar } from '../components/Nav';

export const NavLayout = () => {

    
    return (
        <>
            <AppNavBar />
            <Outlet />            
        </>
    )
}
