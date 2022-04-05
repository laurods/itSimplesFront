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
import SaveIcon from '@material-ui/icons/Save';
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

export default function ViewDevices() {
    const {devicesManutencao, setShowDevice, setWord, setMsg, setShowMsg, setShowFormEdit} = useContext(AuthContext);

    const [showOS, setShowOS] = useState(false);
    const [status, setStatus] = useState('');
    const [documento, setDocumento] = useState('');
    const [valor, setValor] = useState('');

    const handleDocumento = (event) => {
        setDocumento(event.target.value) 
      };
  
      const handleValor = (event) => {
        setValor(event.target.value) 
      };

    const orderBySerial = (a, b) => {
      return a.IMEI - b.IMEI
    }
    
    const handleCheck = async (event) => {
        setStatus(event.target.value)
        console.log(event.target.value)
        if(event.target.value === 'Aguardando Aprovação') {
            console.log('if')
            console.log(event.target.value)
          setShowOS(true);  
        }else{
            console.log('else')
            console.log(event.target.value)
            setShowDevice(false)
            setShowFormEdit(false)
            setWord('')
            setMsg('Salvo');
            setShowMsg(true)
            setShowOS(false);
            document.getElementById("serial").focus();      
               await axios.post('/api/devices/updateStatus' , { 
                   serial: devicesManutencao[0].serial,
                   status:event.target.value,
             }) 
        }
    }

    const handleSaveMovimento = async () => {
        setShowDevice(false)
        setShowFormEdit(false)
        setWord('')
        setMsg('Salvo');
        setShowMsg(true)
        setShowOS(false);
        document.getElementById("serial").focus();      
           await axios.post('/api/devices/updateFull' , { 
               serial: devicesManutencao[0].serial,
               status,
               documento,
               valor, 
         })       
          
      }

  return (
    <>         
        <Grid item xs={5} md={5}>
          <TableContainer component={Paper} sx={{ mt: 2 }}>            
              <Table sx={{ minWidth: 200 }} aria-label="simple table">
                  <TableHead>                    
                  </TableHead>
                  <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
                  {devicesManutencao.map((row) => (
                      <TableRow
                      key={row._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                                       
                      >                                        
                      <TableCell component="th" scope="row">{row.filial}</TableCell>
                      <TableCell component="th" scope="row">{row.observacao}</TableCell>
                      <TableCell component="th" scope="row">{row.status}</TableCell>
                      <TableCell component="th" scope="row">{row.documento}</TableCell>
                      <TableCell component="th" scope="row">{row.valor}</TableCell>
                      </TableRow>
                  ))}
                  </TableBody>
              </Table>
              </TableContainer>       
        </Grid>
        <Grid item xs={6} md={6}>
            <FormGroup>
                <RadioGroup row>
                
                <FormControlLabel onChange={handleCheck} control={<Radio />} value="Aguardando Aprovação" label="Aguardando Aprovação" />
                <FormControlLabel onChange={handleCheck} control={<Radio />} value="Reprovado" label="Reprovado" />                
                <FormControlLabel onChange={handleCheck} control={<Radio />} value="Aprovado" label="Aprovado" />
                <FormControlLabel onChange={handleCheck} control={<Radio />} value="Devolvido" label="Devolvido" />
                </RadioGroup>
            </FormGroup>
        </Grid>

        {showOS && <Grid item xs={1} md={1}>
          <TextField
            label="OS"
            id="documento"
            value={documento}
            fullWidth
            onChange={handleDocumento}
            variant="filled"
          />
        </Grid>}
        {showOS && <Grid item xs={1} md={1}>
          <TextField
            label="Valor OS"
            id="valor"
            value={valor}
            fullWidth
            onChange={handleValor}
            variant="filled"
          />
        </Grid>}
        {showOS && <Grid item xs={1} md={1}>
        <Button
            sx={{ mt: 1 }}
            inputProps={{style: {fontSize: 40}}}          
            fullWidth
            size="small" 
            variant="outlined"
            onClick={ () => handleSaveMovimento()}
          >
            <SaveIcon />
          </Button>
        </Grid>}

        </>   
  );
}
