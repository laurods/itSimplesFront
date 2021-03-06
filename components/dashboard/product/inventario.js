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
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../../../contexts/AuthContext';
import ViewProductById from './viewProductById'

const theme = createTheme();

export default function DasCNPJ() {
    const { activeCNPJ } = useContext(AuthContext); 
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1;
    const ano = dataAtual.getFullYear()
    const [cean, setCEAN] = useState('');
    const [quant, setQuant] = useState('');
    const [desc, setDesc] = useState('');    
    const [preco, setPreco] = useState('');
    const [inventario, setInventario] = useState([]);
    
    const listAllProducts = localStorage.getItem('@dosimples-app/allProducts');
    console.log('listAllProducts');
    console.log(listAllProducts);
    
    
    const addInventario = () => {
        const product = {
            codigo: (inventario.length),
            cean,
            cnpjDestinatario: activeCNPJ,
            cnpjEmitente: 'inventário',
            custoTotal: parseFloat(quant * preco),
            custoUnitario: preco,
            movimento:`${mes}@${ano}`,
            name: desc,
            nf: `${dia}@${mes}@${ano}`,
            quant,
            total: parseFloat(quant * preco),
        };
        
        const listProducts = [product, ...inventario]
        console.log('listProducts')
        console.log(listProducts) 
        setInventario(listProducts)
        setCEAN('');
        setQuant('');
        setDesc('');
        setPreco('');
        document.getElementById("quant").focus();
        
    };

    const handleDelete = (codigo) => { 
        const listProducts = inventario.filter((item) => item.codigo != codigo)
        console.log('listProducts')
        console.log(listProducts) 
        setInventario(listProducts)        
    };
    
    const onKeyUp = (event) => {
        if (event.key === 'Enter') {
            addInventario()
        }
      }
    
    const saveInventario = () => {
        if (listAllProducts !== null) {
            const listAllJSON = JSON.parse(listAllProducts)
            const allProducts = [...inventario, ...listAllJSON]
            console.log('allProducts');
            console.log(allProducts);
            localStorage.setItem('@dosimples-app/allProducts', JSON.stringify(allProducts));
            
        }else{
            localStorage.setItem('@dosimples-app/allProducts', JSON.stringify(inventario));
        }
        
       
    };

    const handleCEAN = (event) => {
        setCEAN(event.target.value);
    };

    const handleQUANT = (event) => {        
        const vQuant = (event.target.value);
        const vlrQuant = vQuant.replace(",", ".");  
        setQuant(parseFloat(vlrQuant));
    };

    const handleDESC = (event) => {
        const text = event.target.value
        setDesc(text.toUpperCase());
    };

    const handlePreco = (event) => {
        const vPreco = (event.target.value);
        const vlrPreco = vPreco.replace(",", ".");  
        setPreco(parseFloat(vlrPreco));
        
    };
    const handleTotal = () => {
        
    };


    const handlePrint = (movimento) => {
    }
  return (
    <ThemeProvider theme={theme}>
    <Container>    
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
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
        <TextField
              margin="normal"
              required
              inputProps={{style: {fontSize: 30}}}
              fullWidth
              name="quant"
              label="QUANT."
              id="quant" 
              value={quant}
              onChange={handleQUANT}             
              autoComplete="off"
              variant="standard"
            />
            
        </Grid>
        <Grid item xs={6}>
        <TextField
              margin="normal"
              required
              inputProps={{style: {fontSize: 30}}}
              fullWidth
              name="desc"
              label="Descrição"
              id="desc" 
              value={desc}
              onChange={handleDESC}             
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
              name="preco"
              label="Preco"
              id="preco" 
              value={preco}
              onChange={handlePreco}
              onKeyPress={onKeyUp}             
              autoComplete="off"
              variant="standard"
            />
         </Grid>
            
            <Grid item xs={1}>
                <Box m={2} pt={3}>
                    <Button onClick = {saveInventario} variant="contained" size="small">
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
                        <TableCell>Custo</TableCell>
                        <TableCell>Total</TableCell>
                        
                    </TableRow>
                    </TableHead>
                    <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
                    {inventario.map((row) => (
                        <TableRow
                        key={row.codigo}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {(row.quant)}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {(row.custoUnitario)}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {(row.total)}
                        </TableCell>                    
                        <TableCell component="th" scope="row">
                            <DeleteIcon onClick={() => {handleDelete(row.codigo)}}/>
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
