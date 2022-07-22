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

    const start = () => {       
        Router.push(
            {
                pathname:`https://it-simples-front.vercel.app/hotel/${activeCNPJ}`,
                query: { reserva: reserva, cnpj: activeCNPJ },
    
            }
        )
    }

    const send = () => {
        const text = `Ol&aacute;, sou assistente virtual do hotel Luar Atl&acirc;ntico. Ficamos felizes em ter voc&ecirc; com a gente!
        Queremos saber como foi sua experi&ecirc;ncia. S&atilde;o apenas 8 etapas que voc&ecirc; pode responder em menos de 1 minuto.
        Vamos l&aacute;? Clique aqui para come&ccedil;ar.`;

        Router.push(
            {
                pathname:`https://api.whatsapp.com/send?phone=5554999572366&text=${text}`,

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
            <Grid item xs={3}>
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
            <Grid item xs={3}>
                <Button
                    sx={{ mt: 5 }} 
                    variant="outlined" 
                    size="large"
                    color="success"                    
                    fullWidth
                    onClick={send}
                    >
                        Whatsapp
                </Button>
            </Grid>                          
          </Grid>
          <ImageApto />         
        </Box>
    </Container> 
    </ThemeProvider>
    
  );
}
