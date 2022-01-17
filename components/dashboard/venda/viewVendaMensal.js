import React, { useContext, useEffect, useState } from 'react';
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

export default function DasCNPJ() {
    const { mensal } = useContext(AuthContext);
    
  return (
    <ThemeProvider theme={theme}>        

<TableContainer component={Paper} sx={{ mt: 2 }}>
      
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
      
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Venda Mês</TableCell>
          </TableRow>
        </TableHead>      
        <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
          {mensal.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell component="th" scope="row">
                {(row.vlrTotal).toFixed(2)}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>    
    </ThemeProvider>
  );
}
