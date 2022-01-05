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

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../../contexts/AuthContext';

const theme = createTheme();

export default function DasCNPJ() {
    const { financeiroByCNPJ } = useContext(AuthContext);
    const { all, saldos, anual, mensal, diario } = financeiroByCNPJ;
    console.log('all ');
    console.log(all);
    
    const handlePrint = (movimento) => {
        reportByMovimentoAndCNPJ(movimento)
    }
  return (
    <ThemeProvider theme={theme}>

<Box component="form"
              sx={{
                width: '25ch',
               fexDirection: 'row',
               marginTop: 2,
            }}
            >

        <TextField              
              id="saldo"
              label="saldo"
              name="saldo"
              value={anual[0].vlrTotal}
              variant="outlined"
              size="small"
            />         
    </Box>     

      <TableContainer component={Paper} sx={{ mt: 2 }}>
      
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><PrintIcon onClick={() => { handlePrint(row.movimento) }}/></TableCell>
              <TableCell>Vendas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {diario.map((row) => (
              <TableRow
                key={row.dia}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.valor}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
