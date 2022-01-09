import React, { useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import PrintIcon from '@material-ui/icons/Print';
import EditIcon from '@material-ui/icons/Edit';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../../contexts/AuthContext';
import ViewProductById from '../dashboard/product/viewProductById'

const theme = createTheme();

export default function DasCNPJ() {
    const { products } = useContext(AuthContext); 

    
    const [cnpjEmitente, setCnpjEmitente] = useState('');
    const [nf, setNF] = useState('');
    const [cean, setCEAN] = useState('');
    const [frete, setFrete] = useState('');
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [productsFilteredSelected, setProductsFilteredSelected] = useState([]);
    const [showViewProductById, setShowViewProductById] = useState(false);
    console.log(showViewProductById);

    const handleEdit = (_id) => {
        console.log(_id)
        const oneProduct = productsFiltered.filter(produto => produto._id == _id);
        console.log(oneProduct);
        setProductsFilteredSelected(oneProduct)
        setShowViewProductById(true)
    };

    const calculeFrete = (event) => {
        if (cnpjEmitente =='' || nf =='' || frete == '') {
            setCnpjEmitente('');
            setNF('');
            return alert('Para Calcular Custo informe CNPJ do fornecedor, NF e FRETE')
        }
        const totalProducts = productsFiltered.reduce((sum, product) => { // total dos produtos monofásicos vendidos
            return sum + parseFloat(product.total);
          }, 0);
        const percentualFrete = parseFloat(frete/totalProducts);

        const listProducts = productsFiltered.map((item) => {
            return {
                _id : item._id,
                name: item.name,
                quant: (parseFloat(item.quant)).toFixed(2),
                total: (parseFloat(item.total)).toFixed(2),
                ipi: item.ipi,
                vDifICMS: item.vDifICMS,
                vICMSST: item.vICMSST,
                frete: (parseFloat(item.total * percentualFrete)).toFixed(2),
                custoTotal: ((parseFloat(item.custoTotal)) + (parseFloat(item.total * percentualFrete))).toFixed(2),
                custoUnitario: ((parseFloat(item.custoTotal + (item.total * percentualFrete))) / (parseFloat(item.quant))).toFixed(2),

            }
        })
        setProductsFiltered(listProducts)
    };

    const handleFrete = (event) => {
        const vFrete = (event.target.value);
        const vlrFrete = vFrete.replace(",", ".");
        setFrete(vlrFrete);
    };

    const handleNF = (event) => {        
        if (cnpjEmitente =='') {
            return alert('Informe o CNPJ do Fornecedor')
        }
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
    <Container>
    {showViewProductById && <ViewProductById />}
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={3}>
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
        <Grid item xs={2}>
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
        

        <Grid item xs={2}>
        <TextField
              margin="normal"
              required
              inputProps={{style: {fontSize: 30}}}
              fullWidth
              name="frete"
              label="Frete"
              id="frete" 
              value={frete}
              onChange={handleFrete}             
              autoComplete="off"
              variant="standard"
            />
         </Grid>
            <Grid item xs={1}>
                <Box m={2} pt={3}>
                    <Button variant="contained" onClick={calculeFrete} size="small">
                        Calcular
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={1}>
                <Box m={2} pt={3}>
                    <Button variant="contained" size="small">
                        Salvar
                    </Button>
                </Box>
            </Grid>
        

        <Grid item xs={12}>

            <TableContainer component={Paper} sx={{ mt: 2 }}>
        
                <Table sx={{ minWidth: 200 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        
                        <TableCell>
                            
                            <PrintIcon onClick={() => { handlePrint(row.movimento) }}/>
                        </TableCell>
                        <TableCell>Quant</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>IPI</TableCell>
                        <TableCell>DIFAL</TableCell>
                        <TableCell>ICMSST</TableCell>
                        <TableCell>Frete</TableCell>
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
                            {(row.frete)}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {(row.custoTotal)}
                        </TableCell>                        
                        <TableCell component="th" scope="row">
                            {(row.custoUnitario)}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <EditIcon onClick={() => {handleEdit(row._id)}}/>
                        </TableCell>

                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>             
        </Grid>            
        
      </Grid>
    </Box>
    </Container>
    </ThemeProvider>
  );
}
