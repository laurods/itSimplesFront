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
    const handlePrint = (movimento) => {
      reportByMovimentoAndCNPJ(movimento)
  } 
  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom component="div" align='center'>
            Créditos Tributários
        </Typography>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                  <PrintIcon onClick={() => { handlePrint(row.movimento) }}/>
              </TableCell>
              <TableCell>Crédito</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entradasByCNPJ.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.total.toFixed(2)}
                </TableCell>                                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
