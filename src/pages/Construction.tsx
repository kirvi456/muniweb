import { Stack, Typography } from '@mui/material'
import React from 'react'

import  BuildingWeb  from '../public/svgs/buildingWeb.svg';

export const Construction= () => {
  return (
    <Stack spacing={2} sx={{width: '500px', maxWidth: '95%', margin: '12px auto'}}>
        <img src={BuildingWeb} alt='Construction-svg'
          style={{maxWidth: '80%', margin: 'auto'}} />
        <Typography variant='h3' textAlign='center'>
          En construccion. . .
        </Typography>
    </Stack>
  )
}
