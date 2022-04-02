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

export default function ViewDevices() {
    const {devicesManutencao} = useContext(AuthContext);

    const orderBySerial = (a, b) => {
      return a.IMEI - b.IMEI
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
                      <TableCell component="th" scope="row">{row.serial}</TableCell>                   
                      <TableCell component="th" scope="row">{row.filial}</TableCell>
                      <TableCell component="th" scope="row">{row.observacao}</TableCell>
                      <TableCell component="th" scope="row">{row.status}</TableCell>
                      <TableCell component="th" scope="row">{row.documento}</TableCell>
                      <TableCell component="th" scope="row">{row.valor}</TableCell>
                      <TableCell component="th" scope="row">{row.dia}</TableCell>
                      </TableRow>
                  ))}
                  </TableBody>
              </Table>
              </TableContainer>       
        </Grid>
        </>   
  );
}
