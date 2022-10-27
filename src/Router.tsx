import React from 'react'
import { Construction } from './pages/Construction';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom'
import { Himno } from './pages/Home/InfoPages/Himno'
import { Patrimonio } from './pages/Home/InfoPages/Patrimonio'
import { DepartamentosPage } from './pages/Departamentos'
import { NavLayout } from './layouts/NavLayout';
import { ConsutasMultasPage } from './pages/ConsultorMultas';
import { MuniDeptoPresentation } from './pages/Departamentos/Hub/MuniDeptoPresentation';

export const Router = () => {

    return (
        <Routes>

            <Route path='/' element={<NavLayout />} >

                <Route path="/" element={<Home />} />


                <Route path="Departamentos" element={<DepartamentosPage />} />
                <Route path="/Departamento/:deptoID" element={<MuniDeptoPresentation />} />
                
                <Route path='/Patrimonio' element={<Patrimonio />} />
                <Route path='/Himno' element={<Himno />} />

                <Route path='/multas/consulta' element={<ConsutasMultasPage />} />

                <Route path='*' element={<Construction />} />

            </Route>
            
        </Routes>
    )


}
