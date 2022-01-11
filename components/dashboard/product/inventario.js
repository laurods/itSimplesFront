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
    const products = [];

    const addInventario = (item) => {
        products.push({
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
        })
        let listProducts = [products, ...inventario]
        console.log(listProducts)
        setInventario([products, ...inventario])
        setCEAN('');
        setQuant('');
        setDesc('');
        setPreco('');
        document.getElementById("quant").focus();
    };

    
    const saveInventario = (event) => {
       
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
        setDesc(event.target.value);
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
              autoComplete="off"
              variant="standard"
            />
         </Grid>
            
            <Grid item xs={1}>
                <Box m={2} pt={3}>
                    <Button onClick = {addInventario} variant="contained" size="small">
                        Adicionar
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
                        <TableCell>Custo Unitário</TableCell>
                        <TableCell>Total</TableCell>
                        
                    </TableRow>
                    </TableHead>
                    <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
                    {inventario.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {(row.custoUnitario)}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {(row.total)}
                        </TableCell>                    
                        <TableCell component="th" scope="row">
                            <DeleteIcon onClick={() => {handleEdit(row.name)}}/>
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
