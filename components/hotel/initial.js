import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Top from './top';
import ImageApto from './imageApto';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Router from 'next/router';
const theme = createTheme();

export default function Initial({activeCNPJ}) {
    const [reserva, setReserva] = useState('')
    const [contato, setContato] = useState('')

    const start = () => {       
        Router.push(
            {
                pathname:`https://it-simples-front.vercel.app/hotel/${activeCNPJ}`,
                query: { reserva: reserva, cnpj: activeCNPJ },
    
            }
        )
    }

    const send = () => {
        console.log('contato')
        console.log(contato)
        console.log('reserva')
        console.log(reserva)
        console.log('cnpj')
        console.log(activeCNPJ)

    }
  return (
    <ThemeProvider theme={theme}>      
      <Container>
        <Top/> 
        <Box sx={{ flexGrow: 1, mt: 2 }}>      
          <Grid container>            
            <Grid item xs={12}>
                <Typography variant="subtitle2" component="div">          
                        Hóspede responde no hotel.
                </Typography>  
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
            <Grid item xs={12}>
                <Button
                    sx={{ mt: 5 }} 
                    variant="outlined" 
                    size="large"                    
                    fullWidth
                    onClick={start}
                    >
                        Começar
                </Button>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="subtitle2" component="div">          
                        Hóspede responde remotamente.
                </Typography>  
              <TextField
                margin="normal"
                required
                inputProps={{style: {fontSize: 25}}}
                label="Whats ou E-mail"
                id="contato"
                value={contato}
                onChange={(event) => {setContato(event.target.value)}}
                fullWidth
                variant="standard"
                autoComplete="off"
                />
            </Grid>           
            <Grid item xs={12}>
                <Button                    
                    variant="outlined" 
                    size="large"
                    color="success"                    
                    fullWidth
                    onClick={send}
                    >
                        Enviar
                </Button>
            </Grid>                          
          </Grid>
          <ImageApto />         
        </Box>
    </Container> 
    </ThemeProvider>
    
  );
}
