import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import VendasByCNPJ from './vendasByCNPJ';
import EntradasByCNPJ from './entradasByCNPJ';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Content() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    
      
    {/* RELATORIOS */}
      <Grid container spacing={2}>
        <Grid item xs={1}>
          {/* vazio */}
        </Grid>
        <Grid item xs={5}>
          <VendasByCNPJ />
        </Grid>
        <Grid item xs={1}>
          {/* vazio */}
        </Grid>
        <Grid item xs={3}>
          <EntradasByCNPJ />          
        </Grid>              
        <Grid item xs={2}>
          {/* vazio */}
        </Grid>
      </Grid>
      
    </Box>

    
  );
}
