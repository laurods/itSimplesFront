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
    const [textSearch, setTextSearch] = useState('');
    const [qtProprio, setQtProprio] = useState('0');
    const [qtLocado, setQtLocado] = useState('0');
    const [totalColetores, setTotalColetores] = useState('0');
    const [totalLocacao, setTotalLocacao] = useState('0');   

    const handleTextSearch = (event) => { 
        setTextSearch(event.target.value.toUpperCase())
        const filteredDevicesByTextSearch = devices.filter((item) =>
        item.Serial.includes(event.target.value) 
        || item.CNPJ.includes(event.target.value) 
        || item.Grupo.includes(event.target.value.toUpperCase())
        )         

        setListDevices(filteredDevicesByTextSearch)

        const filteredLocados = filteredDevicesByTextSearch.filter((item) => item.Status.includes('LOCADO') )
        const filteredProprio = filteredDevicesByTextSearch.filter((item) => item.Status.includes('PROPRIO') )
        const sumLocacao = filteredLocados.reduce(function (total, currentValue) {
          return total + currentValue.VLRLOCACAO;
      }, 0);
        setQtLocado(filteredLocados.length)
        setQtProprio(filteredProprio.length)
        setTotalLocacao(sumLocacao.toFixed(2))
        const sumColetores = (parseInt(filteredProprio.length) + parseInt(filteredLocados.length))
        setTotalColetores(sumColetores)
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
              name="total"
              label="TOTAL COLETORES"
              id="total"
              type="number"
              value={totalColetores}                      
              autoComplete="off"
              variant="standard"
            />
        </Grid>
        <Grid item xs={1} md={1}>
         <TextField
              margin="normal"
              disabled              
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              name="proprios"
              label="PROPRIOS"
              id="proprios"
              type="number"
              value={qtProprio}                      
              autoComplete="off"
              variant="standard"
            />
        </Grid>

         <Grid item xs={1} md={1}>
         <TextField
              margin="normal"
              disabled              
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              name="locados"
              label="LOCADOS"
              id="locados"
              type="number"
              value={qtLocado}                     
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
              value={totalLocacao}                     
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
