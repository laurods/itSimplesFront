import React, { useState, useEffect, useContext } from 'react';
import PrintIcon from '@material-ui/icons/Print';
import SaveIcon from '@material-ui/icons/Save';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const theme = createTheme();
export default function TelaLevantamento(props) {
    const [tag, setTag] = useState(''); 

  return (
    <ThemeProvider theme={theme}>
      <Container>      
      <Box sx={{ flexGrow: 1, mt: 2 }}>

      <Grid container spacing={2} sx={{ mt: 3 }}>
      
         <Grid item xs={12} md={5}>
          <TextField
            margin="normal"
            required
            inputProps={{style: {fontSize: 40}}}
            label="TAG"
            id="tag"
            onChange={(event => setTag(event.target.value.toUpperCase()))}
            value={tag}
            fullWidth
            autoComplete='off'
            variant="standard"
          />
        </Grid>
        
      
       {/* <Grid item xs={9} md={4}>
          <TextField
            label="Rua"
            id="rua"
            onChange={handleRua}
            value={rua}
            fullWidth
            autoComplete='off'
            variant="outlined"
          />
        </Grid>
      

      <Grid item xs={3} md={1}>
          <TextField
            label="Numero"
            id="numero"
            type="number"
            onChange={handleNumero}
            value={numero}
            fullWidth
            variant="outlined"
          />
        </Grid>
      
        <Grid item xs={6} md={2}>
          <TextField
            label="Complemento"
            id="complemento"
            onChange={handleComplemento}
            value={complemento} 
            fullWidth
            autoComplete='off'
            variant="outlined"
          />
        </Grid>
        
        <Grid item xs={6} md={3}>
          <TextField
            label="Bairro" 
            id="bairro"
            onChange={handleBairro}
            value={bairro}
            fullWidth
            autoComplete='off'
            variant="outlined"
          />
        </Grid>
      
       <Grid item xs={4} md={1}>
          <TextField            
            label="Entrega"
            id="txEntrega"
            type="number"
            onChange={handleTxEntrega}
            value={txEntrega}
            fullWidth
            variant="outlined"
          />
        </Grid>
         <Grid item xs={12} md={1}>
          <Button          
            fullWidth
            size="large" 
            variant="contained" 
            sx={{ mt: 1 }}
            onClick={handleView}
            endIcon={<SaveIcon />}
            >
                   
          </Button>             
         </Grid>        */}
           
        </Grid>
        
      </Box>      
       
      </Container>
    </ThemeProvider>
  );
}
