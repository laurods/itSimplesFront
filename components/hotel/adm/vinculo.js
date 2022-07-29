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
    const [idPeople, setIdPeople] = useState('')
    const [namePeople, setNamePeople] = useState('')
    const [email, setEmail] = useState('')    
    const [cnpj, setCNPJ] = useState('')
    const [idTenant, setIdTenant] = useState('')
    const [nameTenant, setNameTenant] = useState('')
    const [contato, setContato] = useState('')
    const objTenant = {}

    const searchPeople = async () => {

    }

    const save = async () => {
        if(idPeople.length === 0 | idTenant.length === 0){
            alert('Preencha os campos')
        }

        if(cnpj.length !== 0 | nameTenant.length !== 0 | contato.length === 0 ){
           objTenant['control'] = `${idPeople}.${cnpj}`
           objTenant['cnpj'] = cnpj;         
           objTenant['name'] = nameTenant;
           objTenant['contato'] = contato;
           objTenant['user'] = idPeople
        const tenant =  await axios.post('/api/hotel/getTenantByControl',  objTenant)
            if(tenant.data.length > 0){
                alert('CNPJ control já existente')
            }else{
                console.log('cadastrar')                
                // const newTenant = await axios.post('/api/hotel/addTenant',  objTenant )
                // alert(newTenant.data.msg)
                // setCNPJ('');
                // setName('');
                // setContato('');
            }
        }
    }
  return (    
        <Box>      
          <Grid container spacing={2}>         
            <Grid item xs={10}>
              <TextField
                margin="normal"
                required
                inputProps={{style: {fontSize: 25}}}
                label="E-mail"
                id="email"
                value={email}
                onChange={(event) => {setEmail(event.target.value)}}
                fullWidth
                variant="standard"
                autoComplete="off"
                />
            </Grid>            
            <Grid item xs={2}>
                <Button
                    variant="outlined" 
                    size="large"                    
                    fullWidth
                    onClick={searchPeople}
                    >
                        Buscar
                </Button>
            </Grid>

            <Grid item xs={10}>
              <TextField
                margin="normal"
                required
                inputProps={{style: {fontSize: 25}}}
                label="E-mail"
                id="email"
                value={email}
                onChange={(event) => {setEmail(event.target.value)}}
                fullWidth
                variant="standard"
                autoComplete="off"
                />
            </Grid>            
            <Grid item xs={2}>
                <Button
                    variant="outlined" 
                    size="large"                    
                    fullWidth
                    onClick={searchPeople}
                    >
                        Buscar
                </Button>
            </Grid>           
                                      
          </Grid>      
        </Box>
    
  );
}
