import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
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
    const {devices} = useContext(AuthContext);

    const [listDevice, setListDevice] = useState([]);
    const orderBySerial = (a, b) => {
      return a.IMEI - b.IMEI
    }

    setListDevice(devices.filter((item) => item.Equipamento.includes('COLETOR')))
    const handleCheck = (event) => {
      console.log(event.target.value);
      const devicesFiltered = devices.filter((item) => item.Equipamento.includes(event.target.value) )
      setListDevice(devicesFiltered.sort(orderBySerial))
    };

    
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>

      <Grid container spacing={2}>
      <Grid item xs={1} md={1}>
      </Grid>
      <Grid item xs={2} md={2}>
            <FormGroup>
            <RadioGroup defaultValue="COLETOR">
              <FormControlLabel onChange={handleCheck} control={<Radio />} value="COLETOR" label="COLETOR" />
              <FormControlLabel onChange={handleCheck} control={<Radio />} value="TELEFONE" label="TELEFONE" />
            </RadioGroup>
          </FormGroup>
        </Grid>
        <Grid item xs={7} md={7}>
          <TableContainer component={Paper} sx={{ mt: 2 }}>            
              <Table sx={{ minWidth: 200 }} aria-label="simple table">
                  <TableHead>                    
                  </TableHead>
                  <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
                  {listDevice.map((row) => (
                      <TableRow
                      key={row._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                                       
                      >
                      <TableCell component="th" scope="row">{row.IMEI}</TableCell>                   
                      <TableCell component="th" scope="row">{row.Modelo}</TableCell>
                      <TableCell component="th" scope="row">{row.VLRLOCACAO}</TableCell>
                      <TableCell component="th" scope="row">{row.Status}</TableCell>
                      </TableRow>
                  ))}
                  </TableBody>
              </Table>
              </TableContainer>       
        </Grid>
        <Grid item xs={2} md={2}>            
        </Grid>
      </Grid>
    </Box>

    </ThemeProvider>
  );
}
