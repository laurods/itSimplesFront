import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function SearchDevice() {
  const {
    setDevice, 
    setShowDevice,
    setShowForm,
    setShowFormEdit,
    setShowMsg, 
    word,
    setMsg, 
    setWord,
    
  } = useContext(AuthContext);

    const handleWord = (event) => {
      setShowMsg(false)
      setShowDevice(false)
      setShowForm(false)
      setShowFormEdit(false) 
      setWord(event.target.value)      
      if(event.target.value.length == 0){
      setWord('');       
      }
    };

    const handleGetDevice = async () => {      
      const deviceBySerial = await axios.post('/api/devices/getDeviceBySerial' , { 
        serial: word
    })  

    const theDevice = deviceBySerial.data;
    if (theDevice.length == 0){
      setShowMsg(true)
      setMsg('Equipamento não localizado. Verifique o código digitado!')
    }else{
      setDevice(theDevice) 
      setShowDevice(true)
      //document.getElementById("observacao").focus();
    }
    console.log(theDevice)
           
  } 
  return (
        <>
        
        <Grid item xs={12} md={12}>
          <TextField
              margin="normal"
              required
              autoFocus
              inputProps={{style: {fontSize: 30}, width: '60%'}}
              //fullWidth
              name="serial"
              label="Serial"
              id="serial"
              value={word} 
              onChange={handleWord}                          
              autoComplete="off"
              variant="standard"
            />

          <Button
            sx={{ mt: 5 }}
            // inputProps={{style: {fontSize: 40}}}          
            // fullWidth
            size="large" 
            variant="contained"
            onClick={ () => handleGetDevice()}
          >
            <SearchIcon />
          </Button>
      
        </Grid>        

        {/* <Grid item xs={1} md={1}>
        <Button
            sx={{ mt: 5 }}
            inputProps={{style: {fontSize: 40}}}          
            fullWidth
            size="large" 
            variant="contained"
            onClick={ () => handleGetDevice()}
          >
            <SearchIcon />
          </Button>
        </Grid> */}
    </>
  );
}
