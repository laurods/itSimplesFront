import React, { useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PrintIcon from '@material-ui/icons/Print';
import { AuthContext } from '../../contexts/AuthContext';

export default function MovimentoCNPJ() {
    const { movimentosCNPJ, reportByMovimentoAndCNPJ } = useContext(AuthContext);
    console.log(movimentosCNPJ)
    const handlePrint = (movimento) => {
        reportByMovimentoAndCNPJ(movimento)
    }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Mês</TableCell>
            <TableCell>Redução</TableCell>
            <TableCell align="right">Relatorio</TableCell>
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
  );
}
