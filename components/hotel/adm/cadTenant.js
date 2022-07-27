import React, {  useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Router from 'next/router';
const theme = createTheme();

export default function CadTenant({activeCNPJ}) {
    const [reserva, setReserva] = useState('')
    const [contato, setContato] = useState('')
    const objReserva = {}

    const start = () => {       
        Router.push(
            {
                pathname:`https://it-simples-front.vercel.app/hotel/${activeCNPJ}@${reserva}`
            }
            // {
            //   pathname:`https://it-simples-front.vercel.app/hotel/${activeCNPJ}`,
            //   query: { reserva: reserva, cnpj: activeCNPJ },
  
            // }
        )
    }

    const send = async () => {
        // console.log('contato')
        // console.log(contato)
        // console.log('reserva')
        // console.log(reserva)
        // console.log('cnpj')
        // console.log(activeCNPJ)
      objReserva['idControl'] = `${activeCNPJ}-${reserva}`;
      objReserva['idHotel'] = activeCNPJ
      objReserva['reserva'] = reserva
      objReserva['contato'] = contato
      objReserva['link'] = `https://it-simples-front.vercel.app/hotel/${activeCNPJ}@${reserva}`
      await axios.post('/api/hotel/addReserva',  objReserva )
      
      

    }
  return (    
        <Box>      
          <Grid container spacing={2}>            
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                inputProps={{style: {fontSize: 40}}}
                label="Tenant"
                id="reserva"
                value={reserva}
                onChange={(event) => {setReserva(event.target.value)}}
                fullWidth
                variant="standard"
                autoComplete="off"
                />
            </Grid>
            <Grid item xs={12}>
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
            <Grid item xs={6}>
                <Button
                    variant="outlined" 
                    size="large"                    
                    fullWidth
                    onClick={start}
                    >
                        Começar
                </Button>
            </Grid>           
            <Grid item xs={6}>
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
        </Box>
    
  );
}
