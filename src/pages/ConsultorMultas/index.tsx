import { Container } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useContext, useState } from 'react'
import { URLSContext } from '../../context/URLs.context'
import { useNotification } from '../../hooks/useNotification'
import { FetchRequest } from '../../utils/MakeRequest'
import { Aviso } from './Aviso'
import { BoletaCard } from './BoletaCard'
import { BuscadorHeader } from './BuscadorHeader'
import { NoVoletas } from './NoVoletas'
import { Boleta } from './types'

type Query = {
    tipoPlaca: string,
    noPlaca: string
}



export const ConsutasMultasPage = () => {

    const [query, setQuery] = useState<Query>({tipoPlaca : '', noPlaca: ''});
    const [boletas, setBoletas] = useState<Boleta[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);

    const { openErrorNotification } = useNotification();

    const URLS = useContext( URLSContext );

    const setTipoPlaca = ( nuevoTipo : string) => {
        setQuery( prev => ( { ...prev, tipoPlaca: nuevoTipo } ) );
    }

    const setNoPlaca = ( nuevoNo : string) => {
        setQuery( prev => ( { ...prev, noPlaca: nuevoNo.toUpperCase() } ) );
    }



    const buscarBoletas = async() => {
        setLoading( true );
        const { data, error } = await FetchRequest<{result : Boleta[]}>(`${URLS.boletas}?tipoPlaca=${query.tipoPlaca}&noPlaca=${query.noPlaca}`, 'GET', undefined);
        setLoading( false );
        if(error) {
            openErrorNotification('No se pudo realizar la consulta. Pruebe de lunes a viernes en el horario de 7:00am a 4:00pm.');
            return;
        }
        setBoletas( [ ...data?.result || [] ] );
    }

    return (
        <Container>
            <Stack spacing={3}>
                <BuscadorHeader 
                    setTipoPlaca={setTipoPlaca}
                    setNoPlaca={setNoPlaca}
                    buscarBoletas={buscarBoletas}
                    loading={loading}
                    setLoading={setLoading}
                    tipoPlaca={query.tipoPlaca}
                />
                
                <Stack spacing={1} alignItems='center'>
                {
                    boletas ?

                    boletas.length === 0 ? <NoVoletas /> 
                        : boletas.map( boleta => (
                            <BoletaCard 
                                key={ boleta._id }
                                boleta={ boleta }
                            />
                        ))
                    
                    : <Aviso />
                }
                </Stack>

            </Stack>

        </Container>
    )


}
