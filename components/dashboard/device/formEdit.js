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
    const {devicesManutencao, setShowDevice, setWord, setMsg, setShowMsg,} = useContext(AuthContext);

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
        if(event.target.value === 'Aguardando Aprovação') {
          setShowOS(true);            
        }else{
          setShowOS(false);
        }
    }

    const handleSaveMovimento = async () => {      
        //   const deviceBySerial = await axios.post('/api/devices/updateDevice' , { 
        //     serial: word
        //     status: situacao 
        // })
        //   const deviceBySerial = await axios.post('/api/devices/insertManutencao' , { 
        //     serial: word,
        //     filial: device[0].Grupo,
        //     observacao: observacao,
        //     status: situacao,
        //     documento: documento,
        //     valor: valor,
        // })
        
        const data = {             
              serial: devicesManutencao[0].serial,
              status,
              documento,
              valor,
          }
          setShowDevice(false)
          setWord('')
          setMsg('Salvo')
          setObservacao('')
          setShowMsg(true)
          setShowOS(false);
          document.getElementById("serial").focus();
          console.log(data)
      }

  return (
    <>
      <Grid item xs={3} md={3}>
      </Grid>    
        <Grid item xs={6} md={6}>
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
        <Grid item xs={3} md={3}>
        </Grid>
       <Grid item xs={3} md={3}>
        </Grid>

        <Grid item xs={6} md={6}>
            <FormGroup>
                <RadioGroup row>
                
                <FormControlLabel onChange={handleCheck} control={<Radio />} value="Aguardando Aprovação" label="Aguardando Aprovação" />
                <FormControlLabel onChange={handleCheck} control={<Radio />} value="Reprovado" label="Reprovado" />                
                <FormControlLabel onChange={handleCheck} control={<Radio />} value="Aprovado" label="Aprovado" />
                <FormControlLabel onChange={handleCheck} control={<Radio />} value="ativo" label="Devolvido" />
                </RadioGroup>
            </FormGroup>
        </Grid>

        <Grid item xs={3} md={3}>
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
