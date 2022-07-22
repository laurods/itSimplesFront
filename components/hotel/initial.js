import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Top from './top';
import ImageApto from './imageApto';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const theme = createTheme();

export default function Initial({activeCNPJ}) {
    const [reserva, setReserva] = useState('')
  return (
    <ThemeProvider theme={theme}>      
      <Container>
        <Top/> 
        <Box sx={{ flexGrow: 1, mt: 2 }}>      
          <Grid spacing={2}>
            <Grid item xs={6}>
              n. reserva - cnpj {activeCNPJ}
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
                    variant="outlined" 
                    size="large"                    
                    fullWidth
                    >
                        Continuar
                </Button>
            </Grid>                          
          </Grid>         
        </Box>
        <ImageApto />
    </Container> 
    </ThemeProvider>
    
  );
}
