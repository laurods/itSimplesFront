import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Main from './main'
import ViewDevices from './viewDevices';
import ViewManutencaoByFilial from './viewManutencaoByFilial';

const theme = createTheme();

export default function ViewMainDevice() {
  const { isUserADM } = useContext(AuthContext);

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {isUserADM && <Grid item xs={12} md={12}>
          <Main />    
        </Grid>}     
        
        </Grid>
        {!isUserADM && <Grid container spacing={2} sx={{ margin: 2 }}>
        <Grid item xs={6} md={6}>
          <ViewDevices />    
        </Grid>
        <Grid item xs={6} md={6}>
          <ViewManutencaoByFilial />    
        </Grid>             
        
      </Grid>}
    </Box>

    </ThemeProvider>
  );
}
