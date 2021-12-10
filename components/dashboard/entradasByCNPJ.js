import React, { useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PrintIcon from '@material-ui/icons/Print';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../../contexts/AuthContext';

const theme = createTheme();

export default function EntradasByCNPJ() {
    const { entradasByCNPJ } = useContext(AuthContext);
    console.log('componet entradas cnpj')
    console.log(entradasByCNPJ)
    const movimentosCNPJ = [];
  return (
    <ThemeProvider theme={theme}>
        <Typography variant="h6" gutterBottom component="div" align='center'>
            Créditos 
        </Typography>    
      <TableContainer component={Paper} sx={{ mt: 2 }}>
      
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Mês</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell align="right">Relatório</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movimentosCNPJ.map((row) => (
              <TableRow
                key={row.movimento}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.movimento}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.diferenca}
                </TableCell>
                <TableCell align="right">
                    <PrintIcon onClick={() => { handlePrint(row.movimento) }}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
