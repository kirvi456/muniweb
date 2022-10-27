import { Stack, Typography, Paper } from '@mui/material'
import React, { useState } from 'react'

import { styled } from '@mui/material/styles';
import MapaSJP from '../../public/svgs/mapasjp.svg';
import HimnoSJP from '../../public/imgs/himnosjp.png';
import { useNavigate } from 'react-router-dom';

interface InfoCard {
    img: string,
    titulo: string,
    url: string,
    elevation: number
}

const MyPaper = styled(Paper)(({ theme }) => `  
    
        -webkit-touch-callout: none; 
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; 
        margin: 6px;
        width: 130px;
        max-width: 130px;

    :hover {
        border: 2px solid ${theme.palette.primary.main};
        cursor: pointer;
    }
    `
);

export const MuniInfoBanner = () => {

    const [cards, setCards] = useState<InfoCard[]>([
        {
            img: MapaSJP,
            titulo: 'Mapas y Estructura',
            url: '/Mapas',
            elevation: 4
        },
        {
            img: HimnoSJP,
            titulo: 'Himno oficial',
            url: '/Himno',
            elevation: 4
        },
        {
            img: HimnoSJP,
            titulo: 'Patrimonio Cultural',
            url: 'Patrimonio',
            elevation: 4
        }
    ]);

    const navigate = useNavigate();
    
    const goTo = (url : string) => {
        navigate(url);
    }

    const setElevation = (elevation : number, index : number) => {
        cards[index].elevation = elevation;
        setCards([...cards]);
    }


    return (
    <>
        <Stack direction='row' justifyContent='center' sx={{flexWrap: 'wrap'}}>
            {
                cards.map((card, index) => {
                    return (
                        <MyPaper 
                            key={'card' + index} 
                            sx={{p: '8px'}} 
                            onMouseEnter={() => setElevation(10, index)}
                            onMouseLeave={() => setElevation(4, index)}
                            elevation={card.elevation} 
                            onClick={() => goTo(card.url)}    
                        >
                            <Stack alignItems='center'>
                                <img
                                    src={card.img}
                                    alt={card.titulo}
                                    style={{
                                        maxWidth: '56px'
                                    }}
                                >
                                
                                </img>
                                <Typography textAlign='center' fontWeight='bold'>
                                    {card.titulo}
                                </Typography>
                            </Stack>
                        </MyPaper>
                    )
                })
            }
        </Stack>
    </>
  )
}
