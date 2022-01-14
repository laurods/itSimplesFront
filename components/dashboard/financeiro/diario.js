import React, { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../../../contexts/AuthContext';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';

import axios from 'axios';

const theme = createTheme();
export default function FormLancamento() {
  const {activeCNPJ } = useContext(AuthContext);
    const dataAtual = new Date();
    const [day, setDay] = useState(dataAtual.getDate());
    const [month, setMonth] = useState(dataAtual.getMonth() + 1);
    const [year, setYear] = useState(dataAtual.getFullYear());
    const [tipo, setTipo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [isAlert, setIsAlert] = useState(false);
    const [isAlertSave, setIsAlertSave] = useState(false);

    const handleChangeTipo = (event) => {
      setTipo(event.target.value);
    };

    const handleChangeDescricao = (event) => {
        const desc = event.target.value;
        const descUpCase = desc.toUpperCase();
        setDescricao(descUpCase);
    };

    const handleChangeValor = (event) => {
        setValor(event.target.value);
    };

    const handleChangeDay = (event) => {
      setDay(event.target.value);
  };

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
};

const handleChangeYear = (event) => {
  setYear(event.target.value);
};


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (tipo =='' || descricao =='' || valor == ''){
        setIsAlert(true)
        return
    }
    
    if (tipo == 'saida'){
      const vlr = (parseFloat(valor.replace(",", "."))) * (-1);
      console.log(vlr)
      setValor(vlr)
  }

        const values = {
            quantidade: 0,
            descricao,
            valor,
            tipo,
            conta: 'caixa', 
            day: `${day}/${month}/${year}`,
            month: `${month}@${year}`,
            year, 
            cnpj: activeCNPJ,            
            }        
        console.log(values);
        
        setDescricao('');
        setValor('');
        setTipo('');
        setIsAlertSave(true)
        setTimeout(() => {
          setIsAlertSave(false)
        }, 1000);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>      
      <Box sx={{ flexGrow: 1, mt: 2 }}>
      {isAlert && <Alert severity="warning" onClose={() => {setIsAlert(false)}}>Todos os campos devem ser preenchidos!</Alert>}
      {isAlertSave && <Alert severity="success" onClose={() => {setIsAlertSave(false)}}>Salvo com Sucesso!</Alert>}
      <Grid container spacing={2}>        
        <Grid item xs={6} md={6}>
          {/* datas */}
          <TextField              
              id="dia"
              label="dia"
              name="dia"
              type="number"
              value={day}
              onChange={handleChangeDay}
              autoComplete="off"
              variant="outlined"
              size="small"
              sx={{                
                maxWidth: '30%',
              }}
            />
            <TextField              
              id="mes"
              label="mes"
              name="mes"
              type="number"
              value={month}
              onChange={handleChangeMonth}
              autoComplete="off"
              variant="outlined"
              size="small"
              sx={{                
                maxWidth: '30%',
              }}
            />
            <TextField              
              id="ano"
              label="ano"
              name="ano"
              type="number"
              value={year}
              onChange={handleChangeYear}
              autoComplete="off"
              variant="outlined"
              size="small"
              sx={{                
                maxWidth: '35%',
              }}
            />
            
        </Grid>
        <Grid item xs={6} md={6} >
        <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              onClick={handleSubmit}              
            >
              Salvar
            </Button>
        </Grid>                    
        
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
        <FormLabel component="legend">Tipo</FormLabel>
        <RadioGroup 
        row aria-label="tipo" 
        name="row-radio-buttons-group"
        value={tipo}
        onChange={handleChangeTipo}
        >
          <FormControlLabel value="saida" control={<Radio />} label="Saida" />
          <FormControlLabel value="entrada" control={<Radio />} label="Entrada" />          
        </RadioGroup>
          
        </Grid>

        <Grid item xs={6} md={6}>
          <TextField
              margin="normal"
              required
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              name="valor"
              label="Valor"
              type="number"
              id="valor" 
              value={valor}
              onChange={handleChangeValor}             
              autoComplete="off"
              variant="standard"
            />
               
        </Grid>   
        <Grid item xs={12} md={12}>
        <TextField
              margin="normal"
              required
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              id="descricao"
              label="Descrição"
              name="descricao"
              value={descricao}
              onChange={handleChangeDescricao}
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