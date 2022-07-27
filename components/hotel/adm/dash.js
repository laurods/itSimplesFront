import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Top from '../top';
import ImageApto from '../imageApto';
import CadPeople from './cadPeople';
import CadTenant from './cadTenant';
const theme = createTheme();

export default function Dash() {
  return (
    <ThemeProvider theme={theme}>      
      <Container>
        <Top/> 
        <Box>      
          <Grid container spacing={2}>            
            <Grid item xs={12}>
              <CadPeople />
            </Grid>
            <Grid item xs={12}>
              <CadTenant />
            </Grid>               
          </Grid>
          <ImageApto />         
        </Box>
    </Container> 
    </ThemeProvider>
    
  );
}
