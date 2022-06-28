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
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const theme = createTheme();
export default function TelaLevantamento(props) {
    const [tag, setTag] = useState('');
    const [capacidadetr, setCapacidadetr] = useState('');
    const [ambiente, setAmbiente] = useState('');
    const [comprimentoUnitario, setComprimentoUnitario] = useState('');
    const [comprimentoTotal, setComprimentoTotal] = useState('');
    const [linhaLiq, setLinhaLiq] = useState('');
    const [linhaSuc, setLinhaSuc] = useState('');
    const [tubo, setTubo] = useState('');
    const [caboPP, setCaboPP] = useState('');
    const [maquinaPavimento, setMaquinaPavimento] = useState('');
    const [quantiadePavimento, setQuantidadePavimento] = useState('');  

  return (
    <ThemeProvider theme={theme}>
      <Container>      
      <Box sx={{ flexGrow: 1, mt: 2 }}>

      <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid item xs={6} md={6}>
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ flexGrow: 1 }}>          
                    TAG
                </Typography>
            </Grid>      
            <Grid item xs={6} md={6}>
            <TextField
                margin="normal"
                required
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
                label="Cap. TR"
                id="capacidadetr"
                onChange={(event => setCapacidadetr(event.target.value.toUpperCase()))}
                value={capacidadetr}
                fullWidth
                autoComplete='off'
                variant="outlined"
            />
            </Grid>
            <Grid item xs={1} md={1}>
            <TextField
                margin="normal"
                required
                label="Ambiente"
                id="ambiente"
                onChange={(event => setAmbiente(event.target.value.toUpperCase()))}
                value={ambiente}
                fullWidth
                autoComplete='off'
                variant="outlined"
            />
            </Grid>

            <Grid item xs={1} md={1}>
            <TextField
                margin="normal"
                required
                label="Compr. Unit"
                id="comprimentoUnitario"
                onChange={(event => setComprimentoUnitario(event.target.value.toUpperCase()))}
                value={comprimentoUnitario}
                fullWidth
                autoComplete='off'
                variant="outlined"
            />
            </Grid>

            <Grid item xs={1} md={1}>
            <TextField
                margin="normal"
                required
                label="Compr. Total"
                id="comprimentoTotal"
                onChange={(event => setComprimentoTotal(event.target.value.toUpperCase()))}
                value={comprimentoTotal}
                fullWidth
                autoComplete='off'
                variant="outlined"
            />
            </Grid>
            <Grid item xs={1} md={1}>
            <TextField
                margin="normal"
                required
                label="Linha Liq"
                id="linhaLiq"
                onChange={(event => setLinhaLiq(event.target.value.toUpperCase()))}
                value={linhaLiq}
                fullWidth
                autoComplete='off'
                variant="outlined"
            />
            </Grid>
            <Grid item xs={1} md={1}>
            <TextField
                margin="normal"
                required
                label="Linha Suc"
                id="linhaSuc"
                onChange={(event => setLinhaSuc(event.target.value.toUpperCase()))}
                value={linhaSuc}
                fullWidth
                autoComplete='off'
                variant="outlined"
            />
            </Grid>
            <Grid item xs={1} md={1}>
            <TextField
                margin="normal"
                required
                label="Tubo"
                id="tubo"
                onChange={(event => setTubo(event.target.value.toUpperCase()))}
                value={tubo}
                fullWidth
                autoComplete='off'
                variant="outlined"
            />
            </Grid>
            <Grid item xs={1} md={1}>
            <TextField
                margin="normal"
                required
                label="Cabo PP"
                id="cabopp"
                onChange={(event => setCaboPP(event.target.value.toUpperCase()))}
                value={caboPP}
                fullWidth
                autoComplete='off'
                variant="outlined"
            />
            </Grid>
            <Grid item xs={1} md={1}>
            <TextField
                margin="normal"
                required
                label="Maquina Por Pavimento"
                id="maquinaporpavimento"
                onChange={(event => setMaquinaPavimento(event.target.value.toUpperCase()))}
                value={maquinaPavimento}
                fullWidth
                autoComplete='off'
                variant="outlined"
            />
            </Grid>
            <Grid item xs={1} md={1}>
            <TextField
                margin="normal"
                required
                label="Quantidade de Pavimento"
                id="quantidadePavimento"
                onChange={(event => setQuantidadePavimento(event.target.value.toUpperCase()))}
                value={quantidadePavimento}
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
