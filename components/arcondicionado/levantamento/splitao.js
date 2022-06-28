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
    const [quantidadePavimento, setQuantidadePavimento] = useState('');  

  return (
    <ThemeProvider theme={theme}>
      <Container>      
      <Box sx={{ flexGrow: 1, mt: 2 }}>

      <Grid container spacing={2} sx={{ mt: 3 }}>                 
            <Grid item xs={6} md={2}>
            <TextField
                margin="normal"
                required
                label="TAG"
                id="tag"
                onChange={(event => setTag(event.target.value.toUpperCase()))}
                value={tag}
                autoComplete='off'
                variant="standard"
            />
            </Grid>          
            <Grid item xs={6} md={2}>
            <TextField
                margin="normal"
                required
                label="CAPACIDADE (TR)"
                id="capacidadetr"
                onChange={(event => setCapacidadetr(event.target.value.toUpperCase()))}
                value={capacidadetr}
                fullWidth
                autoComplete='off'
                variant="standard"
            />
            </Grid>         
            <Grid item xs={6} md={2}>
            <TextField
                margin="normal"
                required
                label="AMBIENTE"
                id="ambiente"
                onChange={(event => setAmbiente(event.target.value.toUpperCase()))}
                value={ambiente}
                fullWidth
                autoComplete='off'
                variant="standard"
            />
            </Grid>
            <Grid item xs={6} md={2}>
            <TextField
                margin="normal"
                required
                label="COMPRIMENTO UNITÁRIO"
                id="comprimentoUnitario"
                onChange={(event => setComprimentoUnitario(event.target.value.toUpperCase()))}
                value={comprimentoUnitario}
                fullWidth
                autoComplete='off'
                variant="standard"
            />
            </Grid>

            <Grid item xs={6} md={2}>
            <TextField
                margin="normal"
                required
                label="COMPRIMENTO TOTAL"
                id="comprimentoTotal"
                onChange={(event => setComprimentoTotal(event.target.value.toUpperCase()))}
                value={comprimentoTotal}
                fullWidth
                autoComplete='off'
                variant="standard"
            />
            </Grid>
            <Grid item xs={6} md={2}>
            <TextField
                margin="normal"
                required
                label="LINHA LIQ"
                id="linhaLiq"
                onChange={(event => setLinhaLiq(event.target.value.toUpperCase()))}
                value={linhaLiq}
                fullWidth
                autoComplete='off'
                variant="standard"
            />
            </Grid>
            <Grid item xs={6} md={2}>
            <TextField
                margin="normal"
                required
                label="LINHA SUC"
                id="linhaSuc"
                onChange={(event => setLinhaSuc(event.target.value.toUpperCase()))}
                value={linhaSuc}
                fullWidth
                autoComplete='off'
                variant="standard"
            />
            </Grid>
            <Grid item xs={6} md={2}>
            <TextField
                margin="normal"
                required
                label="TUBO"
                id="tubo"
                onChange={(event => setTubo(event.target.value.toUpperCase()))}
                value={tubo}
                fullWidth
                autoComplete='off'
                variant="standard"
            />
            </Grid>
            <Grid item xs={6} md={2}>
            <TextField
                margin="normal"
                required
                label="CABO PP"
                id="cabopp"
                onChange={(event => setCaboPP(event.target.value.toUpperCase()))}
                value={caboPP}
                fullWidth
                autoComplete='off'
                variant="standard"
            />
            </Grid>
            <Grid item xs={6} md={2}>
            <TextField
                margin="normal"
                required
                label="MAQUINA POR PAVIMENTO"
                id="maquinaporpavimento"
                onChange={(event => setMaquinaPavimento(event.target.value.toUpperCase()))}
                value={maquinaPavimento}
                fullWidth
                autoComplete='off'
                variant="standard"
            />
            </Grid>
            <Grid item xs={6} md={2}>
            <TextField
                margin="normal"
                required
                label="QUANTIDADE DE PAVIMENTOS"
                id="quantidadePavimento"
                onChange={(event => setQuantidadePavimento(event.target.value.toUpperCase()))}
                value={quantidadePavimento}
                fullWidth
                autoComplete='off'
                variant="standard"
            />
            </Grid>
            <Grid item xs={6} md={2}>           
            <Button          
                fullWidth
                size="large" 
                variant="contained" 
                sx={{ mt: 1 }}               
                endIcon={<SaveIcon />}
                >
                Salvar
                    
            </Button>
            </Grid> 
        </Grid>
        
      </Box>      
       
      </Container>
    </ThemeProvider>
  );
}
