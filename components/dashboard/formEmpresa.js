import React, { useState, useEffect, useContext } from 'react';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
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
export default function FormEmpresa() {
    const { addEmpresa } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const values = {
        name: data.get('nome'),
        cnpj: data.get('cnpj'),
    }
    
    console.log(values);
    addEmpresa(values);
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
            Nova Empresa
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: -1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="nome"
              label="Nome"
              name="nome"
              autoComplete="none"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="cnpj"
              label="CNPJ"
              type="cnpj"
              id="cnpj"
              autoComplete="none"
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