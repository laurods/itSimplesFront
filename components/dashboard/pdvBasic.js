import React, { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../../contexts/AuthContext';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

import axios from 'axios';

const theme = createTheme();
export default function FormLancamento() {
  const {activeCNPJ } = useContext(AuthContext);
    const dataAtual = new Date();
    const [day, setDay] = useState(dataAtual.getDate());
    const [month, setMonth] = useState(dataAtual.getMonth() + 1);
    const [year, setYear] = useState(dataAtual.getFullYear());
    const [quantidade, setQuantidade] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [isAlert, setIsAlert] = useState(false);
    const [isAlertSave, setIsAlertSave] = useState(false);

    const handleChangeQuantidade = (event) => {
        setQuantidade(event.target.value);
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
    if (descricao =='' || valor == ''){
        setIsAlert(true)
        return
    }
    

        const values = {
            quantidade: parseFloat(quantidade.replace(",", ".")),
            descricao,
            valor : parseFloat(valor.replace(",", ".")),
            tipo: 'entrada',
            conta: 'caixa', 
            day: `${day}/${month}/${year}`,
            month: `${month}@${year}`,
            year, 
            cnpj: activeCNPJ,            
            }        
        console.log(values);
        await axios.post('/api/addFinanceiro', { values })
        setDescricao('');
        setValor('');
        setQuantidade('');
        setIsAlertSave(true)
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>      
      <Box sx={{ flexGrow: 1 }}>
      <Grid>
        <Grid item xs={8}>
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
        <Grid item xs={4}>
          {/* botão salvar */}
            <Button
              type="submit"
              variant="contained"
              size="large"
              onClick={handleSubmit}              
            >
              Salvar
            </Button>      
        </Grid>                      
        
      </Grid>

      <Grid>
        <Grid item xs={6}>
        <TextField
              margin="normal"
              required
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              name="quantidade"
              label="Quantidade"
              type="number"
              id="quantidade" 
              value={quantidade}
              onChange={handleChangeQuantidade}             
              autoComplete="off"
              variant="standard"
            />
          
        </Grid>
        <Grid item xs={6}>
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
        
      </Grid>    
      {isAlert && <Alert severity="warning" onClose={() => {setIsAlert(false)}}>Todos os campos devem ser preenchidos!</Alert>}
      {isAlertSave && <Alert severity="success" onClose={() => {setIsAlertSave(false)}}>Salvo com Sucesso!</Alert>}
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

      </Box>      
       
      </Container>
    </ThemeProvider>
  );
}