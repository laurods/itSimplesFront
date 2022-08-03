import React, {  useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Top from './top';
import ImageApto from './imageApto';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Router from 'next/router';
import { AuthContext } from '../../contexts/AuthContext';
const theme = createTheme();

export default function Initial({activeCNPJ}) {
  const { tenantName } = useContext(AuthContext);
    const [reserva, setReserva] = useState('')
    const [contato, setContato] = useState('')
    const message = `Olá, nós do ${tenantName} ficamos felizes em ter você com a gente!. Queremos saber como foi sua experiência. São apenas 8 etapas que você pode responder em menos de 1 minuto. Vamos lá? Clique no link abaixo para começar.`
    const objReserva = {}

    const start = () => {       
        Router.push(
            {
                pathname:`https://it-simples-front.vercel.app/hotel/${activeCNPJ}@${reserva}`
            }
        )
    }

    const send = async () => {
      if(reserva.length === 0 | contato.length === 0){
        alert('Preencha todos os campos!');
      }
      if(reserva.length > 0 & contato.length > 0){
      objReserva['idControl'] = `${activeCNPJ}-${reserva}`;
      objReserva['idHotel'] = activeCNPJ
      objReserva['reserva'] = reserva
      objReserva['contato'] = contato
      objReserva['message'] = message;
      objReserva['link'] = `https://it-simples-front.vercel.app/hotel/${activeCNPJ}@${reserva}`
      objReserva['status'] = 'Pendente';
      console.log('objReserva');
      console.log(objReserva);
      const resData = await axios.post('/api/hotel/addReserva',  objReserva )
      alert(resData.data.msg);
      setReserva('');
      setContato('');
      }
      

    }
    
  return (
    <ThemeProvider theme={theme}>
      <Top/>       
      <Container>
        <Box>      
          <Grid container spacing={2}>            
            <Grid item xs={12}>
              <TextField
                margin="normal"
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
              <TextField
                margin="normal"
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
            {/* <Grid item xs={6}>
                <Button
                    variant="outlined" 
                    size="large"                    
                    fullWidth
                    onClick={start}
                    >
                        Começar
                </Button>
            </Grid>            */}
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
