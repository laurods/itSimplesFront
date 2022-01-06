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
import { AuthContext } from '../../contexts/AuthContext';

const theme = createTheme();

export default function DasCNPJ() {
    const { products } = useContext(AuthContext); 

    const [nf, setNF] = useState('');
    const [productsByNF, setProductsByNF] = useState([]);
    
    const handleChangeNF = (event) => {
        setNF(event.target.value);
        const filterProductsByNF = products.filter(produto => produto.nf == event.target.value);
        setProductsByNF(filterProductsByNF);
    };

    const handlePrint = (movimento) => {
        reportByMovimentoAndCNPJ(movimento)
    }
  return (
    <ThemeProvider theme={theme}>    
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={1}>
        <TextField
              margin="normal"
              required
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              name="nf"
              label="Nota Fiscal"
              type="number"
              id="nf" 
              value={nf}
              onChange={handleChangeNF}             
              autoComplete="off"
              variant="standard"
            />
            <PrintIcon onClick={() => { handlePrint(row.movimento) }}/> 
        </Grid>

        <Grid item xs={10}>

            <TableContainer component={Paper} sx={{ mt: 2 }}>
        
                <Table sx={{ minWidth: 200 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        
                        <TableCell>Produto</TableCell>
                        <TableCell>Quant</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>IPI</TableCell>
                        <TableCell>DIFAL</TableCell>
                        <TableCell>ICMSST</TableCell>
                        <TableCell>Custo Total</TableCell>
                        <TableCell>Custo Unitário</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
                    {productsByNF.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {(row.quant)}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {(row.total)}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {(row.ipi)}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {(row.vDifICMS)}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {(row.vICMSST)}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {(row.custoTotal)}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {(row.custoUnitario)}
                        </TableCell>

                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>             
        </Grid>            
        
      </Grid>
    </Box>
      
    </ThemeProvider>
  );
}
