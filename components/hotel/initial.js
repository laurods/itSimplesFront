import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Top from './top';
import ImageApto from './imageApto';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Router from 'next/router';
const theme = createTheme();

export default function Initial({activeCNPJ}) {
    const [reserva, setReserva] = useState('')

    const send = () => {       
        Router.push(
            {
                pathname:`https://it-simples-front.vercel.app/hotel/${activeCNPJ}`,
                query: { reserva: reserva, cnpj: activeCNPJ },
    
            }
        )
    }
  return (
    <ThemeProvider theme={theme}>      
      <Container>
        <Top/> 
        <Box sx={{ flexGrow: 1, mt: 2 }}>      
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                required
                inputProps={{style: {fontSize: 40}}}
                label="N. Reserva"
                id="reserva"
                value={reserva}
                onChange={(event) => {setReserva(event.target.value)}}
                fullWidth
                variant="standard"
                autoComplete="off"
                />
            </Grid>
            <Grid item xs={6}>
                <Button
                    sx={{ mt: 5 }} 
                    variant="outlined" 
                    size="large"                    
                    fullWidth
                    onClick={send}
                    >
                        Continuar
                </Button>
            </Grid>                          
          </Grid>
          <ImageApto />         
        </Box>
    </Container> 
    </ThemeProvider>
    
  );
}
