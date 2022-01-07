import React, { useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PrintIcon from '@material-ui/icons/Print';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../../contexts/AuthContext';

const theme = createTheme();

export default function DasCNPJ() {
    const { products } = useContext(AuthContext); 

    
    const [cnpjEmitente, setCnpjEmitente] = useState('');
    const [nf, setNF] = useState('');
    const [cean, setCEAN] = useState('');
    const [frete, setFrete] = useState('0.00');
    const [productsFiltered, setProductsFiltered] = useState([]);

    const handleNF = (event) => {
        setNF(event.target.value);
        const filterProducts = products.filter(produto => produto.nf == event.target.value);
        setProductsFiltered(filterProducts);
    };
    
    const handleCNPJ = (event) => {
        setCnpjEmitente(event.target.value);
        const filterProducts = products.filter(produto => produto.cnpjEmitente == event.target.value);
        setProductsFiltered(filterProducts);
    };

    const handleCEAN = (event) => {
        setCEAN(event.target.value);
        const filterProducts = products.filter(produto => produto.cean == event.target.value);
        setProductsFiltered(filterProducts);
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
              inputProps={{style: {fontSize: 30}}}
              fullWidth
              name="cnpj"
              label="CNPJ"
              id="cnpj" 
              value={cnpjEmitente}
              onChange={handleCNPJ}             
              autoComplete="off"
              variant="standard"
            />
            
        </Grid>
        <Grid item xs={1}>
        <TextField
              margin="normal"
              required
              inputProps={{style: {fontSize: 30}}}
              fullWidth
              name="nf"
              label="Nota Fiscal"
              id="nf" 
              value={nf}
              onChange={handleNF}             
              autoComplete="off"
              variant="standard"
            />
            
        </Grid>
        
        <Grid item xs={3}>
        <TextField
              margin="normal"
              required
              inputProps={{style: {fontSize: 30}}}
              fullWidth
              name="cean"
              label="Codigo Barras"
              id="cean" 
              value={cean}
              onChange={handleCEAN}             
              autoComplete="off"
              variant="standard"
            />
            
        </Grid>
        <Grid item xs={1}>
         
        </Grid>

        <Grid item xs={2}>
        <TextField
              margin="normal"
              required
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              name="frete"
              label="Frete"
              id="frete" 
              value={cean}
              onChange={handleCEAN}             
              autoComplete="off"
              variant="standard"
            />
        <Grid item xs={1}>
        <SaveIcon onClick={() => { handlePrint(row.movimento) }} />
        </Grid>
        <Grid item xs={1}>
        <PrintIcon onClick={() => { handlePrint(row.movimento) }}/>
        </Grid>
        
        

       
        </Grid>

        <Grid item xs={12}>

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
                    {productsFiltered.map((row) => (
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
                        <TableCell component="th" scope="row">
                            {(row.custoUnitario)}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <EditIcon/>
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
