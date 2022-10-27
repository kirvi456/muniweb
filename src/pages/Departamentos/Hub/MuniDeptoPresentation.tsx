import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { Grid, Stack} from '@mui/material'
import { Departamento, listaDeptos } from '../../../models/Departamento';
import { Descripciones } from '../Presentacion/Descripciones';
import { Encabezado } from '../Presentacion/Encabezado';
import { SkeletonDepto } from '../Presentacion/SkeletonDepto';


export const MuniDeptoPresentation = () => {


    const [departamento, setDepartamento] = useState<Departamento  | undefined>();
    const deptoID = useParams().deptoID;

    useEffect(() => {
        const depto = listaDeptos.find(depto => depto.abreviatura === deptoID);
        if(depto === undefined){
            return;
        }
        setTimeout(()=> setDepartamento(depto), 1000);
    }, [])
    

    if(!!!departamento){
        return ( <SkeletonDepto /> )
    }

    return (
        <Stack sx={{width: '1200px', maxWidth: '95%', margin: 'auto'}}>
            <Encabezado 
                abreviatura={departamento.abreviatura}
                nombre={departamento.nombre}
                descripcion= {departamento.descripcion}
                objetivo={departamento.objetivo}
            />        
        
            <Grid container spacing={2}>

                <Grid item xs={12} md={6}>
                    <img 
                        src={departamento!.imgPresentacion}
                        alt={departamento!.nombre}
                        style={{
                            maxWidth: '70%',
                            margin: 'auto',
                            display: 'block'
                        }}
                    ></img>                
                </Grid>

                <Grid item xs={12} md={6}>        
                    <Descripciones 
                        funciones={departamento.funciones}
                        trabajadores={departamento.trabajadores}
                        contactos={departamento.contactos}
                        horarios={departamento.horarios}
                    />
                </Grid>

            </Grid>

            
            


        </Stack>
    )
}
