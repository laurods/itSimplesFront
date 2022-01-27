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
import { AuthContext } from '../../../contexts/AuthContext';

import axios from 'axios';
const theme = createTheme();
export default function Itens(props) {
    const { produtosBaixarEstoque, setProdutosBaixarEstoque} = useContext(AuthContext);
    console.log('produtosBaixarEstoque')
    console.log(produtosBaixarEstoque)
    const listProdutos = props.produtos;    
    const [word, setWord] = useState('');
    const [showTextFieldProduct, setShowTextFieldProduct] = useState(false);
    const [idItemFinanceiro, setIdItemFinanceiro] = useState('');
    const [quantidadeItemFinanceiro, setQuantidadeItemFinanceiro] = useState('');
    const [descricaoItemFinanceiro, setDescricaoItemFinanceiro] = useState('');
    const [dayItemFinanceiro, setDayItemFinanceiro] = useState('');
    const [cnpjItemFinanceiro, setCnpjItemFinanceiro] = useState('');
    const [monthItemFinanceiro, setMonthItemFinanceiro] = useState('');    
    const [productsFiltered, setProductsFiltered] = useState([]);;

     console.log('showTextFieldProduct')
     console.log(showTextFieldProduct) 
    const handleFilter = (event) => {      
      setWord(event.target.value.toUpperCase())
      const listProductsFiltered = listProdutos.filter((item) => item.nome.includes(event.target.value.toUpperCase()) )
      setProductsFiltered(listProductsFiltered)

      if(event.target.value.length == 0){
        setProductsFiltered([]);
        setWord('');       
        } 
  };

  const handleSelectItemEstoque = async (id, nome) => {      
    console.log('item estoque')
   
    const objEstoque ={
      id, 
      nome, 
      idItemFinanceiro, 
      quant: (-1 * (quantidadeItemFinanceiro)) , 
      descricaoItemFinanceiro, 
      dayItemFinanceiro, 
      cnpjItemFinanceiro, 
      monthItemFinanceiro
    }
    
  console.log(produtosBaixarEstoque.shift());  
  setProdutosBaixarEstoque(produtosBaixarEstoque)
  console.log(objEstoque)
   setProductsFiltered([]);
   setWord('');
   setShowTextFieldProduct(false)
   await axios.post('/api/estoque/itens', { objEstoque })       
    
};


const handleBaixarEstoque = async (_id, quant, descricao, dia, cnpj, mes) => {      
  console.log('baixar estoque')
  setIdItemFinanceiro(_id)
  setQuantidadeItemFinanceiro(quant)
  setDescricaoItemFinanceiro(descricao)
  setDayItemFinanceiro(dia)
  setCnpjItemFinanceiro(cnpj)
  setMonthItemFinanceiro(mes)
  setShowTextFieldProduct(true)
   
 
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
                        <TableCell onClick={() => {handleSelectItemEstoque(row._id, row.nome )}} component="th" scope="row">
                            {row.nome}
                        </TableCell>                        

                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>             
        </Grid>

        <Grid item xs={6} md={6}>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
        
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
            <TableHead>                    
            </TableHead>
            <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
            {produtosBaixarEstoque.map((row) => (
                <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => {handleBaixarEstoque(
                  row._id,
                  row.quantidade,
                  row.descricao,
                  row.day,
                  row.cnpj,
                  row.month
                  )}}                
                >
                <TableCell  component="th" scope="row">                            
                    {row.descricao}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.quantidade}
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
