import React, {  useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Router from 'next/router';
const theme = createTheme();

export default function CadVinculo() {
    const [txtPeople, setTxtPeople] = useState('')
    const [txTenant, setTexTenant] = useState('')
    const [idPeople, setIdPeople] = useState('')
    const [namePeople, setNamePeople] = useState('')
    const [email, setEmail] = useState('')    
    const [cnpj, setCNPJ] = useState('')
    const [idTenant, setIdTenant] = useState('')
    const [nameTenant, setNameTenant] = useState('')
    const [contato, setContato] = useState('')
    const objTenant = {}

    const searchPeople = async () => {
        console.log(txtPeople)

    }

    const searchTenant = async () => {
        console.log(txTenant)
    }

    const save = async () => {
        // if(idPeople.length === 0 | idTenant.length === 0){
        //     alert('Preencha os campos')
        // }

        // if(cnpj.length !== 0 | nameTenant.length !== 0 | contato.length === 0 ){
        //    objTenant['control'] = `${idPeople}.${cnpj}`
        //    objTenant['cnpj'] = cnpj;         
        //    objTenant['name'] = nameTenant;
        //    objTenant['contato'] = contato;
        //    objTenant['user'] = idPeople
        // const tenant =  await axios.post('/api/hotel/getTenantByControl',  objTenant)
        //     if(tenant.data.length > 0){
        //         alert('CNPJ control já existente')
        //     }else{
        //         console.log('cadastrar')                
        //         // const newTenant = await axios.post('/api/hotel/addTenant',  objTenant )
        //         // alert(newTenant.data.msg)
        //         // setCNPJ('');
        //         // setName('');
        //         // setContato('');
        //     }
        // }
    }
  return (    
        <Box>      
          <Grid container spacing={2}>         
            <Grid item xs={10}>
              <TextField
                margin="normal"
                required
                inputProps={{style: {fontSize: 25}}}
                label="People"
                id="people"
                value={txtPeople}
                onChange={(event) => {setTxtPeople(event.target.value)}}
                fullWidth
                variant="standard"
                autoComplete="off"
                />
            </Grid>            
            <Grid item xs={2}>
                <Button
                    sx={{mt: 5}}
                    variant="outlined" 
                    size="large"                    
                    fullWidth
                    onClick={searchPeople}
                    
                    >
                        <SendIcon />
                </Button>
            </Grid>

            <Grid item xs={10}>
              <TextField
                margin="normal"
                required
                inputProps={{style: {fontSize: 25}}}
                label="Tenant"
                id="tenant"
                value={txTenant}
                onChange={(event) => {setTexTenant(event.target.value)}}
                fullWidth
                variant="standard"
                autoComplete="off"
                />
            </Grid>            
            <Grid item xs={2}>
                <Button
                    sx={{mt: 5}}
                    variant="outlined" 
                    size="large"                    
                    fullWidth
                    color='success'
                    onClick={searchTenant}
                    >
                        <SendIcon />
                </Button>
            </Grid>           
                                      
          </Grid>      
        </Box>
    
  );
}
