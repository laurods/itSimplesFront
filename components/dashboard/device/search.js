import React, { useContext, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function SearchDevice() {
  const {setDevice, setMsgDevice, setShowMsgDevice, setShowDevice} = useContext(AuthContext);
    //const [device, setDevice] = useState([]);
    const [word, setWord] = useState('');

    const handleWord = (event) => {
      setShowMsg(false) 
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
      setShowMsgDevice(true)
      setMsgDevice('Equipamento não localizado. Verifique o código digitado!')
    }else{
      setDevice(theDevice) 
      setShowDevice(true)
      //document.getElementById("observacao").focus();
    }
    console.log(theDevice)
           
  } 
  return (
        <>
        <Grid item xs={3} md={3}>
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
              margin="normal"
              required
              autoFocus
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              name="serial"
              label="Serial"
              id="serial"
              value={word} 
              onChange={handleWord}                          
              autoComplete="off"
              variant="standard"
            />
        </Grid>        

        <Grid item xs={1} md={1}>
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
        </Grid>
    </>
  );
}
