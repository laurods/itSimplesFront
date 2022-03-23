import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@material-ui/icons/Edit';
import PrintIcon from '@material-ui/icons/Print';
import SendIcon from '@material-ui/icons/Send';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

export default function ViewMainMobile() {
    const {
        devices,
        CNPJsByUsers,
        } = useContext(AuthContext);
    
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={1} md={1}>
        </Grid>
        <Grid item xs={2} md={2}>
            <TableContainer component={Paper} sx={{ mt: 2 }}>
            
            <Table sx={{ minWidth: 200 }} aria-label="simple table">
                <TableHead>                    
                </TableHead>
                <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
                {CNPJsByUsers.map((row) => (
                    <TableRow
                    key={row.cnpj}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                                       
                    >
                    <TableCell component="th" scope="row">{row.name}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Grid>
        <Grid item xs={8} md={8}>
        <TableContainer component={Paper} sx={{ mt: 2 }}>            
            <Table sx={{ minWidth: 200 }} aria-label="simple table">
                <TableHead>                    
                </TableHead>
                <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
                {devices.map((row) => (
                    <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                                       
                    >
                    <TableCell component="th" scope="row">{row.Grupo}</TableCell>
                    <TableCell component="th" scope="row">{row.IMEI}</TableCell>
                    <TableCell component="th" scope="row">{row.Modelo}</TableCell>
                    <TableCell component="th" scope="row">{row.VLRLOCACAO}</TableCell>
                    <TableCell component="th" scope="row">{row.Status}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Grid>
        <Grid item xs={1} md={1}>
        </Grid>             
        
      </Grid>
    </Box>

    </ThemeProvider>
  );
}
