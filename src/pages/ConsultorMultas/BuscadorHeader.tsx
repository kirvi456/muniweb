import { LoadingButton } from '@mui/lab'
import { MenuItem, Paper, TextField, Stack, Grid, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import useFetch from '../../hooks/useFetch';
import { URLSContext } from '../../context/URLs.context';

type TipoPlaca = {
    _id: string,
    tipo: string,
    desc: string
}

type BuscadorHeaderProps = {
    setTipoPlaca: (nuevoTipo: string) => void,
    tipoPlaca: string,
    setNoPlaca: (nuevoTipo: string) => void,
    buscarBoletas: () => void,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}


export const BuscadorHeader : React.FC<BuscadorHeaderProps> = ({ tipoPlaca, setTipoPlaca, setNoPlaca, buscarBoletas, loading, setLoading }) => {


    const [placas, setPlacas] = useState<TipoPlaca[]>([]);

    const URLS = useContext( URLSContext );

    const { data, error } = useFetch<{result: TipoPlaca[]}>( URLS.tipoPlaca );

    useEffect( () => {
        if( data?.result ) { setPlacas( [ ...data.result ] ); setLoading(false); }
    }, [data])

    const handleTipoPlacaChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTipoPlaca(e.target.value)
    }

    return (
        <Stack spacing={2} alignItems='center'>
            <Stack>                
                <Typography variant='h3' color='primary.main'>
                    Consulta de Multas de Tránsito
                </Typography>
                <Typography textAlign='center'>
                    Municipalidad de San José Pinula
                </Typography>
            </Stack>

            <Paper
                elevation={8}
                sx={{
                    p: 2,
                    m: 'auto',
                    mt: 4,
                    width: '500px',
                    maxWidth: '90%'
                }}
                >
                <Stack spacing={1}>
                    <Grid container sx={{width: '100%'}} spacing={1}>
                        <Grid item xs={4}>
                            <TextField 
                                size='small'
                                label='Tipo de Placa'
                                type='text'
                                fullWidth
                                select
                                value={tipoPlaca || ''}
                                onChange={handleTipoPlacaChange}
                            >
                                {
                                    placas.map( ( placa ) => (
                                        <MenuItem key={placa._id} value={placa._id}>
                                            { placa.tipo } - { placa.desc }
                                        </MenuItem>
                                    ))
                                }
                            </TextField>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField 
                                type='text'
                                label='No. Placa'
                                size='small'
                                fullWidth
                                onChange={ (e) => setNoPlaca( e.target.value )}
                            />
                        </Grid>
                    </Grid>

                    <LoadingButton
                        type='submit' 
                        variant='contained'
                        loadingPosition='end'
                        endIcon={<SearchIcon />}
                        onClick={buscarBoletas}
                        loading={loading}
                        >
                        Consultar
                    </LoadingButton>
                </Stack>
            </Paper>
        </Stack>
    )
}
