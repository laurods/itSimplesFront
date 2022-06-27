import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function ViewMainMobile() {
    
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} md={4}>
             <div>Sistema de Ventilação/Exaustão</div>
        </Grid>
        <Grid item xs={4} md={4}>
             <div>Sistema de Ar Condicionado</div>
        </Grid>
        <Grid item xs={4} md={4}>
             <div>Indiretos</div>
        </Grid>
        <Grid item xs={4} md={4}>
             <div>Resumo Custos Indiretos</div>
        </Grid>
        

      </Grid>
    </Box>

    </ThemeProvider>
  );
}
