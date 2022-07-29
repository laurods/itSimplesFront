import React, {  useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@material-ui/icons/Send';
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
        console.log('txtPeople')
        console.log(txtPeople)
        console.log('txTenant')
        console.log(txTenant)
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
                console.log('tenant.data[0]')
                console.log(tenant.data[0])
                // setIdPeople(people.data[0]._id)
                // setNamePeople(people.data[0].name)
                // setEmail(people.data[0].email)
            }else{
                    alert('CNPJ não existente')
            }
        }

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
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required                
                label="E-mail"
                id="email"
                value={txtPeople}
                onChange={(event) => {setTxtPeople(event.target.value)}}
                fullWidth
                variant="outlined"
                autoComplete="off"
                />
            </Grid>

            <Grid item xs={12}>
              <TextField
                margin="normal"
                required                
                label="CNPJ"
                id="cnpj"
                value={txTenant}
                onChange={(event) => {setTexTenant(event.target.value)}}
                fullWidth
                variant="outlined"
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
                label="People"
                id="people"
                value={namePeople}
                fullWidth
                variant="outlined"
                />
            </Grid>
            <Grid item xs={12}>
            <TextField
                margin="normal"
                disabled        
                label="Tenant"
                id="tenant"
                value={nameTenant}
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
