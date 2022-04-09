import React, { useContext} from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function ViewDevice() {
    const {device, setShowForm, setShowFormEdit, setDevicesManutencao, setShowDevice} = useContext(AuthContext);

    const handleGetMovimento = async () => {      
      const deviceBySerial = await axios.post('/api/devices/getMovimentoBySerial' , { 
        serial: device[0].IMEI
    }) 
      const theDevice = deviceBySerial.data;
      if (theDevice.length == 0){ // se o coletor não estiver cadastrado na manutenção
        setShowForm(true)
        document.getElementById("observacao").focus();      
      }else{ // se o coletor estiver cadastrado na manutenção
        setShowDevice(false)
        setShowFormEdit(true)
        // const allDevices = await axios.get('/api/devices/getMovimentoBy')
        // console.log('allDevices')
        // console.log(allDevices.data)
        setDevicesManutencao(deviceBySerial.data)        
      }   
    }    
  return (
    <>

        <Grid item xs={12} md={12}>
        <TableContainer component={Paper} sx={{ mt: 2 }}>            
              <Table sx={{ minWidth: 200 }} aria-label="simple table">
                  <TableHead>                    
                  </TableHead>
                  <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>                  
                      <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                                       
                      >                                        
                      <TableCell component="th" scope="row">{device[0].Grupo}</TableCell>
                      <TableCell component="th" scope="row">{device[0].Modelo}</TableCell>
                      <TableCell component="th" scope="row">{device[0].Status}</TableCell>
                      <TableCell component="th" scope="row">{device[0].VLRLOCACAO}</TableCell>
                      <TableCell component="th" scope="row">
                            <Button
                              sx={{ mt: 1 }}
                              inputProps={{style: {fontSize: 40}}}
                              size="small" 
                              variant="outlined"
                              onClick={ () => handleGetMovimento()}
                            >
                              <EditIcon />
                            </Button>
                      </TableCell>
                      </TableRow>
                  
                  </TableBody>
              </Table>
              </TableContainer> 
        </Grid>     
    </>
  );
}
