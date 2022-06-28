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
    const [capacidadetr, setCapacidadetr] = useState(''); 

  return (
    <ThemeProvider theme={theme}>
      <Container>      
      <Box sx={{ flexGrow: 1, mt: 2 }}>

      <Grid container spacing={2} sx={{ mt: 3 }}>      
            <Grid item xs={1} md={1}>
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
                variant="outlined"
            />
            </Grid>
            <Grid item xs={1} md={1}>
            <TextField
                margin="normal"
                required
                inputProps={{style: {fontSize: 40}}}
                label="Capacidade TR"
                id="capacidadetr"
                onChange={(event => setCapacidadetr(event.target.value.toUpperCase()))}
                value={tag}
                fullWidth
                autoComplete='off'
                variant="outlined"
            />
            </Grid>
            <Grid item xs={1} md={1}>
            <Button          
                fullWidth
                size="large" 
                variant="contained" 
                sx={{ mt: 1 }}
                onClick={handleView}
                endIcon={<SaveIcon />}
                >
                    
            </Button>             
            </Grid> 
        </Grid>
        
      </Box>      
       
      </Container>
    </ThemeProvider>
  );
}
