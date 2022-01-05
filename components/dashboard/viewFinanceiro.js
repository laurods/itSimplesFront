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
    const { financeiroByCNPJ } = useContext(AuthContext);
    const { all } = financeiroByCNPJ;
    console.log('all ');
    console.log(all);
    const teste= [];
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
              <TableCell>Redução</TableCell>
              <TableCell align="right">Relatorio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teste.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.movimento}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.reducao}
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