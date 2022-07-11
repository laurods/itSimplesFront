import React, { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';


export default function Header() {   
  
  return (
    <Box>              
    <Grid container spacing={2}>        
        <Grid item xs={12} md={12}>
        <Paper elevation={3} />
            <Typography variant="h6" align='center'>          
                Olá, ficamos felizes em ter você com a gente!                
            </Typography>
            <Typography variant="subtitle2" align='center'>
                Queremos saber como foi sua experiência.
                <br/>
                Apenas 8 etapas que você pode responder em menos de 1 minuto.
               
            </Typography>
            <Typography variant="subtitle1" align='center'>
                Vamos lá?
            </Typography>
        <Paper />     
        </Grid> 
       
    </Grid>
    </Box>
  );
}


