import { Stack, Accordion, AccordionSummary, Typography, AccordionDetails, Box, Divider } from '@mui/material'
import React from 'react'

import { ContactoDepartamento, HorarioDepartamento, TrabajadorDepartamento } from '../../../models/Departamento';

import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BuildIcon from '@mui/icons-material/Build';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface PropsType {
    funciones: string[],
    trabajadores: TrabajadorDepartamento[],
    contactos: ContactoDepartamento[],
    horarios: HorarioDepartamento
}

export const Descripciones = ({funciones, trabajadores, contactos, horarios} : PropsType) => {
  return (
    <Stack>
        <Accordion elevation={8} sx={{margin: '6px 0'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Stack direction='row' spacing={2} sx={{alignItems: 'center'}}>
                    <BuildIcon fontSize='large' />
                    <Typography variant='h6'>Funciones</Typography>
                </Stack>
            </AccordionSummary>
            <AccordionDetails>
                <Stack sx={{marginLeft: '12px', maxHeight: '200px', overflowY: 'auto'}}>
                    {
                        funciones.map((funcion, index) => {
                            return (
                                <Box key={'funcion' + index}>
                                    <Stack direction='row' sx={{alignItems: 'center'}}>
                                        <ArrowForwardIosIcon /> 
                                        <Typography variant='caption' key={'funcion' + index}>{ funcion }</Typography>
                                    </Stack>
                                    <Divider sx={{margin: '2px 0'}} />
                                </Box>
                            )    
                        })           
                    }     
                </Stack>
            </AccordionDetails>
        </Accordion>

        <Accordion elevation={8} sx={{margin: '6px 0'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel2a-header"
            >
                <Stack direction='row' spacing={2} sx={{alignItems: 'center'}}>
                    <EngineeringIcon fontSize='large' />
                    <Typography variant='h6'>Trabajadores</Typography>
                </Stack>
            </AccordionSummary>
            <AccordionDetails>
                <Stack sx={{marginLeft: '12px'}}>
                    {
                        trabajadores.map(({nombre, puesto}, index) => {
                            return(
                                <Stack key={'trabajador' + index} direction='row' sx={{alignItems: 'center'}}>
                                    <AccountBoxIcon /> 
                                    <Typography variant='caption' key={'trabajador' + index}>{nombre + ' (' + puesto + ')'}</Typography>
                                </Stack>
                            )
                        })
                    } 
                </Stack>
            </AccordionDetails>
        </Accordion>                
    
    
        <Accordion elevation={8} sx={{margin: '6px 0'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel3a-header"
            >
                <Stack direction='row' spacing={2} sx={{alignItems: 'center'}}>
                    <LocalLibraryIcon fontSize='large' />
                    <Typography variant='h6'>Contactos</Typography>
                </Stack>
            </AccordionSummary>
            <AccordionDetails>
                <Stack sx={{marginLeft: '12px', maxHeight: '200px', overflowY: 'auto'}}>
                {
                    contactos.map(({tipo, contacto, descripcion}, index) => {
                        return(
                            <Stack key={'contacto' + index} direction='row' sx={{alignItems: 'center'}}>
                                {tipo === 'email' ? <MailIcon /> : <LocalPhoneIcon />}
                                <Typography variant='caption' key={'contacto' + index}>{contacto + (descripcion !== '' ? ' (' + descripcion + ')': '')}</Typography>
                            </Stack>
                        )
                    })
                }   
                </Stack>
            </AccordionDetails>
        </Accordion>


        <Accordion elevation={8} sx={{margin: '6px 0'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel3a-header"
            >
                <Stack direction='row' spacing={2} sx={{alignItems: 'center'}}>
                    <AccessTimeIcon fontSize='large' />
                    <Typography variant='h6'>Horarios</Typography>
                </Stack>
            </AccordionSummary>
            <AccordionDetails>
                <Stack sx={{marginLeft: '12px', maxHeight: '200px', overflowY: 'auto'}}>
                {
                    Object.keys(horarios).map( (key : string, index : number) => {
                        return(
                            <Stack key={'contacto' + index}>                                
                                <Typography variant='caption' fontWeight='bold' key={'contacto' + index}>{key.toUpperCase()}</Typography>
                                <Stack>
                                {                                       
                                    horarios[key as 'lunes'].length === 0
                                    ? <Typography key={'horario' + key + index} paddingLeft='12px'>
                                        Sin atención
                                    </Typography>
                                    : horarios[key as 'lunes'].map(({horaInicio, horaFin}, index) => {
                                        return (
                                            <Typography key={'horario' + key + index} paddingLeft='12px'>
                                                {`-${horaInicio} a ${horaFin}`}
                                            </Typography>
                                        )
                                    })                                    
                                }
                                </Stack>
                            </Stack>
                        )
                    })
                }   
                </Stack>
            </AccordionDetails>
        </Accordion>

    </Stack>
  )
}
