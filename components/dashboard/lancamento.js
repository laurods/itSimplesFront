import React, { useState, useEffect, useContext } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../../contexts/AuthContext';

const theme = createTheme();
export default function FormLancamento() {
    const { addEmpresa } = useContext(AuthContext);
    const [tipo, setTipo] = useState('');

    const handleChangeTipo = (event) => {
        setTipo(event.target.value);
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);    
    const descricao = data.get('descricao');    
    const valor = data.get('valor');
    if (descricao =='' || valor == '' || tipo == ''){
        alert('Todos os campos devem ser preenchidos')
        return
    }   
        const values = {
            descricao,
            valor,
            tipo,
            }        
        console.log(values);
    
        //addEmpresa(values);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component={Paper} maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
    
          <Typography variant="h6" gutterBottom component="div">
            Lançamento
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: -1 }}
          
          
          >
          <RadioGroup aria-label="lancamento" name="radio-buttons-group"
          defaultValue="lanche"
          value={tipo}
          onChange={handleChangeTipo}
          >
            <FormControlLabel value="lanche" control={<Radio />} sx={{ '& .MuiSvgIcon-root': {
            fontSize: 40, }, }} label="Lanche" />
            <FormControlLabel value="bebida" control={<Radio />} sx={{ '& .MuiSvgIcon-root': {
            fontSize: 40, }, }}label="Bebida" />
            <FormControlLabel value="sorvete" control={<Radio />} sx={{ '& .MuiSvgIcon-root': {
            fontSize: 40, }, }}label="Sorvete" />
            <FormControlLabel value="pagamento" control={<Radio />} sx={{ '& .MuiSvgIcon-root': {
            fontSize: 40, }, }}label="Pagamento" />
            <FormControlLabel value="particular" control={<Radio />} sx={{ '& .MuiSvgIcon-root': {
            fontSize: 40, }, }}label="Particular" />
            <FormControlLabel value="patrimonio" control={<Radio />} sx={{ '& .MuiSvgIcon-root': {
            fontSize: 40, }, }}label="Patrimonio" />
          </RadioGroup>
          

            <TextField
              margin="normal"
              required
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              id="descricao"
              label="Descrição"
              name="descricao"
              autoComplete="none"
              variant="standard"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              name="valor"
              label="Valor"
              type="number"
              id="valor"              
              autoComplete="none"
              variant="standard"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Salvar
            </Button>
            
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}