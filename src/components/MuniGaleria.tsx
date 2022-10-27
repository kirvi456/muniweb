import React from 'react'
import ImageGallery from 'react-image-gallery';
import './MuniGaleria.css';
import { Box } from '@mui/material';


export const MuniGaleria = () => {

    const images = [
        {
          original: 'https://munisanjosepinula.gob.gt/wp-content/uploads/2022/04/Portada-FB-ABRIL-2022-WEB.jpg',
          thumbnail: 'https://munisanjosepinula.gob.gt/wp-content/uploads/2022/04/Portada-FB-ABRIL-2022-WEB.jpg',
        },
        {
        original: 'https://munisanjosepinula.gob.gt/wp-content/uploads/2022/04/Portada-FB-ABRIL-2022-WEB.jpg',
        thumbnail: 'https://munisanjosepinula.gob.gt/wp-content/uploads/2022/04/Portada-FB-ABRIL-2022-WEB.jpg',
        },
        {
        original: 'https://munisanjosepinula.gob.gt/wp-content/uploads/2022/04/Portada-FB-ABRIL-2022-WEB.jpg',
        thumbnail: 'https://munisanjosepinula.gob.gt/wp-content/uploads/2022/04/Portada-FB-ABRIL-2022-WEB.jpg',
        },
      ];

    return(
        <>  
        <Box sx={{margin: 'auto', maxWidth: '1600px'}}>                 
            <ImageGallery 
            items={images} 
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
            autoPlay
            />
        </Box>
        </>
    );
}
