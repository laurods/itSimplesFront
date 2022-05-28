import React, { useState, useEffect, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


const theme = createTheme();
export default function Seach() {
    const [serial, setSerial] = useState('');
    const [text, setText] = useState('');
    
  return (
    <ThemeProvider theme={theme}>
      <Container>      
      <Box sx={{ flexGrow: 1, mt: 2 }}>

      <Grid container spacing={2} sx={{ mt: 3 }}>   
        <Grid item xs={6} md={6}>
         <TextField
              margin="normal"
              required
              autoFocus
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              name="telefone"
              label="Telefone"
              id="telefone"
              type="number"
              value={serial}                      
              autoComplete="off"
              variant="standard"
            />
        </Grid>

        <Grid item xs={6} md={6}>
         <TextField
              margin="normal"
              required
              autoFocus
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              name="nomeRuaBairro"
              label="CNPJ | Filial"
              id="telefone"
              value={text}            
              autoComplete="off"
              variant="standard"
            />
        </Grid> 

      </Grid>
        
      </Box>      
       
      </Container>
    </ThemeProvider>
  );
}
