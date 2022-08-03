import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@material-ui/icons/Edit';
import SendIcon from '@material-ui/icons/Send';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

export default function ViewReservas({reservas}) {
    
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>            
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
            <TableHead>                    
            </TableHead>
            <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
            {reservas.map((row, index) => (
                <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                                       
                >
                    <TableCell component="th" scope="row">{row.contato}</TableCell>
                    <TableCell component="th" scope="row">{row.link}</TableCell>
                    <TableCell component="th" scope="row">{row.message}</TableCell>
                </TableRow>
                  ))}
            </TableBody>
        </Table>
    </TableContainer>       
       
  );
}
