import React, { useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PrintIcon from '@material-ui/icons/Print';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../../../contexts/AuthContext';

const theme = createTheme();

export default function DasCNPJ() {
    const { all } = useContext(AuthContext); 
  return (
    <ThemeProvider theme={theme}>    

      <TableContainer component={Paper} sx={{ mt: 2 }}>
      
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Descricao</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
            {all.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                
              >
                <TableCell component="th" scope="row">
                  {row.descricao}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.tipo}
                </TableCell>
                <TableCell component="th" scope="row">
                  {(row.valor).toFixed(2)}
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
