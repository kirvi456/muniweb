import React from 'react'
import { Grid, Stack, Skeleton } from '@mui/material'

export const SkeletonDepto = () => {
    return (
        <>
            <Stack  sx={{width: '1200px', maxWidth: '95%', margin: 'auto'}}>
                <Skeleton variant="rectangular" width='calc(3em * 5)' height='calc(3em + 24px)' />  
            </Stack>
            
            <Stack  sx={{width: '1200px', maxWidth: '95%', margin: '12px auto'}} spacing={2} alignItems='center'>
                <Skeleton variant="rectangular" width='80%' height='56px' />                
                <Skeleton variant="rectangular" width='100%' height='24px' />          
                <Skeleton variant="rectangular" width='100%' height='24px' />          
                <Skeleton variant="rectangular" width='100%' height='24px' />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>                           
                        <Skeleton variant="rectangular" width='500px' height='300px' sx={{maxWidth: '70%', margin: 'auto'}}/>  
                    </Grid>
                    <Grid item xs={12} md={6} >          
                        <Stack spacing={2} p='12px'>
                            <Skeleton variant="rectangular" width='100%' height='48px' /> 
                            <Skeleton variant="rectangular" width='100%' height='48px' />                         
                            <Skeleton variant="rectangular" width='100%' height='48px' />                         
                            <Skeleton variant="rectangular" width='100%' height='48px' />  
                        </Stack>                
                    </Grid>
                </Grid>
            </Stack>
        </>
    )
}
