import React, {  useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
    const objPeople = {}

    const search = async () => {
        if(txtPeople.length === 0 | txTenant.length === 0){
            alert('Preencha os campos')
        }
        if(txtPeople.length !== 0){
        objPeople['email'] = txtPeople;
        const people =  await axios.post('/api/hotel/getByEmail',  objPeople)
            if(people.data.length > 0){
                setIdPeople(people.data[0]._id)
                setNamePeople(people.data[0].name)
                setEmail(people.data[0].email)
            }else{
                alert('Email não existente')
            }
        }
        if(txTenant.length !== 0){
        objTenant['cnpj'] = txTenant;
        const tenant =  await axios.post('/api/tenant/getTenantByCNPJ',  objTenant)
            if(tenant.data.length > 0){
                setCNPJ(tenant.data[0].cnpj)
                setNameTenant(tenant.data[0].name)
            }else{
                alert('CNPJ não existente')
            }
        }

    }

    const save = async () => {
        if(cnpj.length === 0 | idPeople.length === 0){
            alert('Preencha os campos')
        }
        if(cnpj.length !== 0 | idPeople.length !== 0 ){
           objTenant['cnpj'] = cnpj;
           objTenant['user'] = idPeople
        const updateTenant =  await axios.post('/api/tenant/updateAddUser',  objTenant)
            console.log(updateTenant.data)
         }
    }
  return (    
        <Box>      
          <Grid container spacing={2}>         
            <Grid item xs={12}>
              <TextField
                margin="normal"        
                label="E-mail"
                id="email"
                value={txtPeople}
                onChange={(event) => {setTxtPeople(event.target.value)}}
                fullWidth
                variant="standard"
                autoComplete="off"
                />
            </Grid>

            <Grid item xs={12}>
              <TextField
                margin="normal"         
                label="CNPJ"
                id="cnpj"
                value={txTenant}
                onChange={(event) => {setTexTenant(event.target.value)}}
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
                    color='primary'
                    onClick={search}
                    >
                        Buscar
                </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                disabled        
                label="Vincular People/Tenant"
                id="people"
                value={`${namePeople} - ${nameTenant}`}
                fullWidth
                variant="outlined"
                />
            </Grid>
            
            <Grid item xs={12}>
                <Button
                    variant="outlined" 
                    size="large"                    
                    fullWidth
                    color='success'
                    onClick={save}
                    >
                        Salvar
                </Button>
            </Grid>             
                                      
          </Grid>      
        </Box>
    
  );
}
