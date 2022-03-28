import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
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
    const [observacao, setObservacao] = useState('');
    const [documento, setDocumento] = useState('');
    const [word, setWord] = useState('');
    const [msg, setMsg] = useState('');
    const [showMsg, setShowMsg] = useState(false);

    const handleWord = (event) => {
      setShowMsg(false) 
      setWord(event.target.value)      
      if(event.target.value.length == 0){
      setWord('');       
      }
    };

    const handleObservacao = (event) => {
      setObservacao(event.target.value) 
    };

    const handleDocumento = (event) => {
      setDocumento(event.target.value) 
    };

    const handleGetDevice = async () => {      
      const deviceBySerial = await axios.post('/api/devices/getDeviceBySerial' , { 
        serial: word
    })  

    const theDevice = deviceBySerial.data;
    if (theDevice.length == 0){
      setShowMsg(true)
      setMsg('Equipamento não localizado. Verifique o código digitado!')
    }
    console.log(theDevice)
    setDevice(theDevice)        
  }

  const handleSaveMovimento = async () => {      
  //   const deviceBySerial = await axios.post('/api/devices/getDeviceBySerial' , { 
  //     serial: word
  // })      
}

const handleCheck = async (event) => { 
// setListDevice(dataDevices.sort(orderBySerial))
};
    
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
            onClick={ () => handleGetDevice()}
          >
            OK
          </Button>
        </Grid>
        <Grid item xs={2} md={2}>            
        </Grid>           
      
      </Grid>


      {device.length > 0 && <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={3} md={3}>
        </Grid>

        <Grid item xs={1} md={1}>
          <TextField
            disabled
            label="Filial"
            id="filial"
            value={device[0].Grupo}
            fullWidth
            variant="standard"
          />
        </Grid>
        

        <Grid item xs={1} md={1}>
          <TextField
            disabled
            label="Modelo"
            id="modelo"
            value={device[0].Modelo}
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={1} md={1}>
          <TextField
            disabled
            label="Situação"
            id="situacao"
            value={device[0].Status}
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={1} md={1}>
          <TextField
            disabled
            label="Locação"
            id="locacao"
            value={device[0].VLRLOCACAO}
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>}

      {device.length > 0 &&<Grid container spacing={2} sx={{ mt: 3 }}>
      <Grid item xs={3} md={3}>
        </Grid>
      <Grid item xs={9} md={9}>
        <FormGroup>
            <RadioGroup row>
              <FormControlLabel onChange={handleCheck} control={<Radio />} value="aguardando orçamento" label="Aguardando Orçamento" />
              <FormControlLabel onChange={handleCheck} control={<Radio />} value="aguardando aprovação" label="Aguardando Aprovação" />
              <FormControlLabel onChange={handleCheck} control={<Radio />} value="aprovado" label="Aprovado" />
              <FormControlLabel onChange={handleCheck} control={<Radio />} value="ativo" label="Devolvido" />
            </RadioGroup>
          </FormGroup>
        </Grid>

        </Grid>}


        {device.length > 0 &&<Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={3} md={3}>
        </Grid>
        <Grid item xs={4} md={4}>
          <TextField
            label="Observação"
            id="observacao"
            value={observacao}
            fullWidth
            onChange={handleObservacao}
            variant="filled"
          />
        </Grid>

        <Grid item xs={1} md={1}>
          <TextField
            label="NF/OS"
            id="documento"
            value={documento}
            fullWidth
            onChange={handleDocumento}
            variant="filled"
          />
        </Grid>
        <Grid item xs={1} md={1}>
        <Button
            sx={{ mt: 1 }}
            inputProps={{style: {fontSize: 40}}}          
            fullWidth
            size="large" 
            variant="contained"
            onClick={ () => handleSaveMovimento()}
          >
            OK
          </Button>
        </Grid>

      </Grid>}


      {showMsg && <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={3} md={3}>
        </Grid>
        <Grid item xs={6} md={6}>
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="warning">{msg}</Alert>
          </Stack>
        </Grid>
      </Grid>}      
        
    </Box>

    </ThemeProvider>
  );
}
