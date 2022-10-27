import { Typography, Box, Paper, Skeleton } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const MyPaper = styled(Paper)(({ theme }) => `  
        
    overflow: hidden;                
    -webkit-touch-callout: none; 
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; 
    
    
    :hover {
        border: 2px solid ${theme.palette.primary.main};
        cursor: pointer;

        
    }
    `
);

interface PropsType {
    abreviatura : string,
    imgPresentacion : string,
    nombre : string
}

export const MuniDeptoCard = ({abreviatura, imgPresentacion, nombre } : PropsType) => {
    
    const navigate = useNavigate();
    const [elevation, setElevation] = useState(4);
    const [imgLoaded, setImgLoaded] = useState(false);

    const handleImgLoaded = (loaded : boolean) => {
        setImgLoaded(loaded);
    }

    const handleElevation = (_elevation: number) => {        
        setElevation(_elevation);
    }

    const goToDetails = (index : string) => {
        navigate(`/Departamento/${index}`);
    }

    return (
        <MyPaper        
            onMouseOver={() => handleElevation(12)} 
            onMouseOut={() => handleElevation(4)} 
            onClick={() => goToDetails(abreviatura)}
            elevation={elevation}
            style={{
                maxWidth: '200px',
                position: 'relative',
                overflow: 'hidden',
                margin: 'auto'
            }}    


        >
            <Box
                className='etiqueta'
                sx={{
                    bgcolor: 'primary.main',
                    position: 'absolute',
                    left: '0',
                    p: '2px 6px',
                    borderRadius: '0 0 4px 0',
                    
                }}
            >
                <Typography fontWeight='bold' color='background.default'>
                    {abreviatura}
                </Typography>
            </Box>
            
            <img
                src={imgPresentacion} 
                alt={nombre}
                style={{
                    display: imgLoaded ? 'block' : 'none',
                    maxWidth: '200px',
                    maxHeight: '200px',
                    border: '1px solid rgba(0, 0, 0, 0.12)'
                }}   
                onLoad = {() => handleImgLoaded(true)}
            / >  
            { !imgLoaded && <Skeleton variant="rectangular" width='200px' height='200px' /> }
            
            
            <Typography variant='body2' padding={1} fontWeight='bold'>
                {nombre}
            </Typography>
        </MyPaper>
    )
}
