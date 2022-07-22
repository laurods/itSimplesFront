import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Top from './top';
import ImageApto from './imageApto'
const theme = createTheme();

export default function Dashboard({dataQuizz}) {
  return (
    <ThemeProvider theme={theme}>      
      <Container>
        <Top/> 
        <Box sx={{ flexGrow: 1, mt: 2 }}>      
          <Grid spacing={2}>
            <Grid item xs={12}>
              n. reserva
            </Grid>
            <Grid item xs={12}>
              button
            </Grid>                          
          </Grid>         
        </Box>
        <ImageApto />
    </Container> 
    </ThemeProvider>
    
  );
}
