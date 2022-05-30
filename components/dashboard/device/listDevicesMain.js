import React, { useContext, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../../../contexts/AuthContext';
const theme = createTheme();

export default function ListDevices() { 
    const {listDevices} = useContext(AuthContext);  
  
    
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={1} md={1}></Grid>           
        <Grid item xs={10} md={10}>
          <TableContainer component={Paper} sx={{ mt: 2 }}>            
              <Table sx={{ minWidth: 200 }} aria-label="simple table">
                  <TableHead>                                   
                  </TableHead>
                  <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
                  {listDevices.map((row) => (
                      <TableRow
                      key={row._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                                       
                      >
                      <TableCell component="th" scope="row">                                          
                      </TableCell>
                      <TableCell component="th" scope="row">                                         
                      </TableCell>
                      <TableCell component="th" scope="row">{row.Grupo}</TableCell>                      
                      <TableCell component="th" scope="row">{row.Status}</TableCell>
                      <TableCell component="th" scope="row">{row.VLRLOCACAO}</TableCell>
                      <TableCell component="th" scope="row">{row.Serial}</TableCell>
                      </TableRow>
                  ))}
                  </TableBody>
              </Table>
              </TableContainer>       
        </Grid>
        <Grid item xs={1} md={1}>            
        </Grid>
      </Grid>
    </Box>

    </ThemeProvider>
  );
}
