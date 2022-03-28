import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@material-ui/icons/Edit';
import PrintIcon from '@material-ui/icons/Print';
import SendIcon from '@material-ui/icons/Send';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

export default function ControlDevices() {
    const {activeCNPJ} = useContext(AuthContext);

    const [device, setDevice] = useState([]);
    const [word, setWord] = useState('');

    const handleWord = (event) => { 
      setWord(event.target.value)      
      if(event.target.value.length == 0){
      setWord('');       
      }
    };

    const handleDevice = async () => {      
      const deviceBySerial = await axios.post('/api/devices/getDeviceBySerial' , { 
        serial: word
    })
    const theDevice = deviceBySerial.data;
    console.log(theDevice)
    setDevice(theDevice)        
  }
    
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
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
            onClick={ () => handleDevice()}
          >
            OK
          </Button>
        </Grid>
        <Grid item xs={2} md={2}>            
        </Grid>           
      
      </Grid>


      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={3} md={3}>
        </Grid>

        <Grid item xs={3} md={3}>
          <TextField
            disabled
            label="Serial"
            id="serial"
            value={device[0].IMEI}
            fullWidth
            variant="standard"
          />
        </Grid> 


      </Grid>
  
    </Box>

    </ThemeProvider>
  );
}
