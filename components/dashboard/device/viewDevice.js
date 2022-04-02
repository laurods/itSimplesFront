import React, { useContext} from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@mui/material/Button';

export default function ViewDevice() {
    const {device, setShowForm, setShowFormEdit, setDevicesManutencao} = useContext(AuthContext);
    const handleGetMovimento = async () => {      
      const deviceBySerial = await axios.post('/api/devices/getMovimentoBySerial' , { 
        serial: device[0].IMEI
    })  

    const theDevice = deviceBySerial.data;
    if (theDevice.length == 0){ // se o coletor não estiver cadastrado na manutenção
      setShowForm(true)
      document.getElementById("observacao").focus();      
    }else{ // se o coletor estiver cadastrado na manutenção
      const allDevices = await axios.get('/api/devices/getAllManutencao')
      console.log('allDevices')
      console.log(allDevices.data)
      setDevicesManutencao(allDevices.data)
      setShowFormEdit(true)
    }
   
    }    
  return (
    <>
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
        <Grid item xs={1} md={1}>
        <Button
            sx={{ mt: 1 }}
            inputProps={{style: {fontSize: 40}}}          
            fullWidth
            size="small" 
            variant="outlined"
            onClick={ () => handleGetMovimento()}
          >
            <EditIcon />
          </Button>
        </Grid>      
    </>
  );
}
