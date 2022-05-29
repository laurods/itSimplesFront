import React, { useState, useEffect, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { AuthContext } from '../../../contexts/AuthContext';


const theme = createTheme();
export default function TopSearch(props) {
    const {devices, setListDevices} = useContext(AuthContext);
    const [serial, setSerial] = useState('');
    const [textSearch, setTextSearch] = useState('');
    const handleSerial = (event) => { 
        setSerial(event.target.value)
        const filteredDevicesBySerial = devices.filter((item) =>
        item.Serial.includes(event.target.value)
        )
        setListDevices(filteredDevicesBySerial)
    };

    const handleTextSearch = (event) => { 
        setTextSearch(event.target.value.toUpperCase())
        const filteredDevicesByTextSearch = devices.filter((item) =>
        item.Serial.includes(event.target.value) 
        || item.CNPJ.includes(event.target.value) 
        || item.Grupo.includes(event.target.value.toUpperCase())
        )
        setListDevices(filteredDevicesByTextSearch)
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
              name="filial"
              label="SERIAL| CIDADE| CNPJ"
              id="filial"
              value={textSearch}
              onChange={handleTextSearch}            
              autoComplete="off"
              variant="standard"
            />
        </Grid>

        <Grid item xs={2} md={2}>
         <TextField
              margin="normal"
              disabled              
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              name="proprios"
              label="QUANT. PROPRIOS"
              id="proprios"
              type="number"
              value="0"                     
              autoComplete="off"
              variant="standard"
            />
        </Grid>

         <Grid item xs={2} md={2}>
         <TextField
              margin="normal"
              disabled              
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              name="locados"
              label="QUANT. LOCADOS"
              id="locados"
              type="number"
              value="0"                     
              autoComplete="off"
              variant="standard"
            />
        </Grid>

        <Grid item xs={2} md={2}>
         <TextField
              margin="normal"
              disabled              
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              name="valor"
              label="VALOR LOCAÇÃO"
              id="valor"
              type="number"
              value="0"                     
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
