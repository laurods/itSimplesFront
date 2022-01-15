import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ViewFinanceiroSaldo from './viewFinanceiroSaldo';
import ViewFinanceiroDiario from './viewFinanceiroDiario';
import ViewFinanceiroMovimentacao from './../dashboard/financeiro/viewFinanceiroMovimetacao';
import ViewVendaDiario from './../dashboard/venda/viewVendaDiario';

const theme = createTheme();

export default function ViewMainMobile() {
    
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <ViewFinanceiroSaldo />    
        </Grid>

        <Grid item xs={12} md={12}>
          <ViewFinanceiroDiario />    
        </Grid>
        
        <Grid item xs={12} md={12}>
          <ViewVendaDiario />    
        </Grid>

        

        <Grid item xs={12} md={12}>
          <ViewFinanceiroMovimentacao />    
        </Grid>             
        
      </Grid>
    </Box>

    </ThemeProvider>
  );
}
