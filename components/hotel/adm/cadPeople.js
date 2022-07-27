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
    const [email, setEmail] = useState('')
    const objPeople = {}

    const save = async () => {
        if(name.length === 0 | email.length === 0){
            alert('Preencha os campos')
        }

        if(name.length !== 0 | email.length !== 0){
        objPeople['name'] = name;
        objPeople['email'] = email;
        objPeople['password'] = '$2b$05$XyU4YgnDatraJH1KXVYUj.j3mzBZrn3JgCB1MCbrrG9X0bhAZfgqa';
        const people =  await axios.post('/api/hotel/getByEmail',  objPeople)
            if(people.data.length > 0){
                alert('Email já existente')
            }else{
                const newPeople = await axios.post('/api/hotel/addPeople',  objPeople )
                console.log(newPeople.data)
                //alert(newPeople.data)
            }
             
        }
    }
  return (
        <Box>      
          <Grid container spacing={2}>            
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                inputProps={{style: {fontSize: 25}}}
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
                label="E-mail"
                id="contato"
                value={email}
                onChange={(event) => {setEmail(event.target.value)}}
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
