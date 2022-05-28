import React, { useState, useEffect, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


const theme = createTheme();
export default function TopSearch(props) {
    const [serial, setSerial] = useState('');
    const [textSearch, setTextSearch] = useState('');

    const handleSerial = (event) => { 
        setSerial(event.target.value)
        props.handleFilterSerial(event.target.value) 
    };

    const handleTextSearch = (event) => { 
        setTextSearch(event.target.value.toUpperCase())
        props.handleFilterText(event.target.value.toUpperCase()) 
    };    
      
    
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
              name="serial"
              label="Serial"
              id="serial"
              type="number"
              value={serial}
              onChange={handleSerial}                      
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
              name="filial"
              label="CNPJ | Cidade"
              id="filial"
              value={textSearch}
              onChange={handleTextSearch}            
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
