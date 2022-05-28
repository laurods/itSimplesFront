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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../../../contexts/AuthContext';
const theme = createTheme();

export default function ListDevices() { 
    const {listDevices} = useContext(AuthContext);   
    
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>

      <Grid container spacing={2}>          
        <Grid item xs={8} md={12}>
          <TableContainer component={Paper} sx={{ mt: 2 }}>            
              <Table sx={{ minWidth: 200 }} aria-label="simple table">
                  <TableHead>                    
                  </TableHead>
                  <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
                  {listDevices.map((row) => (
                      <TableRow
                      key={row.telefone}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                                       
                      >
                      <TableCell component="th" scope="row">                                          
                      </TableCell>
                      <TableCell component="th" scope="row">                                         
                      </TableCell>
                      <TableCell component="th" scope="row">{row.Grupo}</TableCell>
                      <TableCell component="th" scope="row">{row.Serial}</TableCell>
                      <TableCell component="th" scope="row">{row.Equipamento}</TableCell>
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
