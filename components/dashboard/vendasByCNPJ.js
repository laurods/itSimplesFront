import React, { useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PrintIcon from '@material-ui/icons/Print';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../../contexts/AuthContext';

const theme = createTheme();

export default function DasCNPJ() {
    const { dasByCNPJ } = useContext(AuthContext);
    
    const handlePrint = (movimento) => {
        reportByMovimentoAndCNPJ(movimento)
    }
  return (
    <ThemeProvider theme={theme}>    
      <TableContainer component={Paper} sx={{ mt: 2 }}>
      
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Mês</TableCell>
              <TableCell>Vendas</TableCell>
              <TableCell align="right">Relatorio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dasByCNPJ.map((row) => (
              <TableRow
                key={row.movimento}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.movimento}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.totalSales}
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
