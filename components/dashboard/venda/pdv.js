import React, { useState, useEffect, useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@material-ui/icons/Edit';
import PrintIcon from '@material-ui/icons/Print';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


const theme = createTheme();
export default function PDV(props) {
    const listProdutos = props.produtos;
    const [showTextFieldProduct, setShowTextFieldProduct] = useState(true);      
    const [word, setWord] = useState('');
    const [quantidade, setQuantidade] = useState('');   
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [dataEstoque, setDataEstoque] = useState({});

    const handleChangeQuantidade = (event) => {
        setQuantidade(event.target.value);
    };
    
    const handleFilter = (event) => {      
      setWord(event.target.value.toUpperCase())
      const listProductsFiltered = listProdutos.filter((item) => item.nome.includes(event.target.value.toUpperCase()) )
      setProductsFiltered(listProductsFiltered)

      if(event.target.value.length == 0){
        setProductsFiltered([]);
        setWord('');       
        } 
  };

  const handleSelectItemEstoque = async (
    id, 
    cean,
    cnpj,
    nome,
    custoUnitario,
    ficha,
    grupo,
    preco,

    ) => {      
    console.log('item estoque')    
    const objEstoque ={
      id, 
      cean,
      cnpj,
      nome,
      custoUnitario,
      ficha,
      grupo,
      preco,
      //quant: (-1 * (quantidade)),
    }

  console.log(objEstoque)
  setDataEstoque(objEstoque)
   setWord('');
   setShowTextFieldProduct(false)
   //await axios.post('/api/estoque/itens', { objEstoque })       
    
};

  return (
    <ThemeProvider theme={theme}>
      <Container>      
      <Box sx={{ flexGrow: 1, mt: 2 }}>      

      <Grid container spacing={2}>     

         <Grid item xs={12} md={12}>
         {showTextFieldProduct &&<TextField
              margin="normal"
              required
              autoFocus
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              name="produto"
              label="Produto"
              id="produto"
              value={word} 
              onChange={handleFilter}                          
              autoComplete="off"
              variant="standard"
            />}

           
        </Grid>
        <Grid item xs={6} md={6}>
            <TextField
              margin="normal"
              required
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              name="quantidade"
              label="Quantidade"
              type="number"
              id="quantidade" 
              value={quantidade}
              onChange={handleChangeQuantidade}             
              autoComplete="off"
              variant="standard"
            />
                       
        </Grid>

        <Grid item xs={6} md={6}>
           
            
        <TableContainer component={Paper} sx={{ mt: 2 }}>
        
                <Table sx={{ minWidth: 200 }} aria-label="simple table">
                    <TableHead>                    
                    </TableHead>
                    <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
                    {productsFiltered.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                
                        >
                        <TableCell onClick={() => {handleSelectItemEstoque(
                          row._id, 
                          row.cean,
                          row.cnpj,
                          row.custoUnitario,
                          row.ficha,
                          row.grupo,
                          row.nome,
                          row.preco, 
                          )}} component="th" scope="row">
                            {row.nome}
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
