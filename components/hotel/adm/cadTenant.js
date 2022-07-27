import React, {  useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Router from 'next/router';
const theme = createTheme();

export default function CadTenant() {
    const [cnpj, setCNPJ] = useState('')
    const [name, setName] = useState('')
    const [contato, setContato] = useState('')
    const objTenant = {}

    const save = async () => {
        console.log('CNPJ')
        console.log(cnpj)
        console.log('contato')
        console.log(contato)
        console.log('nome')
        console.log(nome)
    //   objTenant['control'] = '6236cba1ee860b11eaebadd0'         
    //   objTenant['name'] = name;
    //   objTenant['contato'] = contato;
    //   objTenant['user'] = '6236cba1ee860b11eaebadd0'
    //   await axios.post('/api/hotel/addPeople',  objPeople )
      
      

    }
  return (    
        <Box>      
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                inputProps={{style: {fontSize: 40}}}
                label="CNPJ"
                id="cnpj"
                value={name}
                onChange={(event) => {setCNPJ(event.target.value)}}
                fullWidth
                variant="standard"
                autoComplete="off"
                />
            </Grid>            
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                inputProps={{style: {fontSize: 40}}}
                label="Nome"
                id="name"
                value={name}
                onChange={(event) => {setName(event.target.value)}}
                fullWidth
                variant="standard"
                autoComplete="off"
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                inputProps={{style: {fontSize: 25}}}
                label="Whats ou E-mail"
                id="contato"
                value={contato}
                onChange={(event) => {setContato(event.target.value)}}
                fullWidth
                variant="standard"
                autoComplete="off"
                />
            </Grid>            
            <Grid item xs={12}>
                <Button
                    variant="outlined" 
                    size="large"                    
                    fullWidth
                    onClick={save}
                    >
                        Cadastrar
                </Button>
            </Grid>           
                                      
          </Grid>      
        </Box>
    
  );
}
