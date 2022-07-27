import React, {  useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const theme = createTheme();

export default function CadPeople() {
    const [name, setName] = useState('')
    const [contato, setContato] = useState('')
    const objPeople = {}

    const save = async () => {
        console.log('contato')
        console.log(contato)
        console.log('nome')
        console.log(nome)     
    //   objPeople['name'] = name;
    //   objPeople['contato'] = contato;
    //   objPeople['password'] = '$2b$05$XyU4YgnDatraJH1KXVYUj.j3mzBZrn3JgCB1MCbrrG9X0bhAZfgqa'
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
                    color="success"                    
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
