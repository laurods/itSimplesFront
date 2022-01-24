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
    const { all, setAll } = useContext(AuthContext);
    const listProdutos = props.produtos;
    const [showEstoque, setShowEstoque] = useState(true);
    const [showProduto, setShowProduto] = useState(false);    
    const [word, setWord] = useState('');
    const [nomeItemEstoque, setNomeItemEstoque] = useState('');
    const [idItemFinanceiro, setIdItemFinanceiro] = useState('');
    const [quantidadeItemFinanceiro, setQuantidadeItemFinanceiro] = useState('');
    const [descricaoItemFinanceiro, setDescricaoItemFinanceiro] = useState('');
    const [dayItemFinanceiro, setDayItemFinanceiro] = useState('');
    const [cnpjItemFinanceiro, setCnpjItemFinanceiro] = useState('');
    const [monthItemFinanceiro, setMonthItemFinanceiro] = useState('');    
    const [productsFiltered, setProductsFiltered] = useState([]);;

      
    const handleFilter = (event) => {      
      setWord(event.target.value.toUpperCase())
      const listProductsFiltered = listProdutos.filter((item) => item.nome.includes(event.target.value.toUpperCase()) )
      setProductsFiltered(listProductsFiltered)

      if(event.target.value.length == 0){
        setProductsFiltered([]);
        setWord('');       
        } 
  };

  const handleSelectItemEstoque = (id, nome) => {      
    console.log('item estoque')
    setShowEstoque(false)
    setShowProduto(true)

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
    console.log('all.shift()');  
  console.log(all.shift());
  console.log('all2');
  console.log(all);
  setAll(all)
  console.log(objEstoque)
    
};


const handleBaixarEstoque = async (_id, quant, descricao, dia, cnpj, mes) => {      
  console.log('baixar estoque')
  setIdItemFinanceiro(_id)
  setQuantidadeItemFinanceiro(quant)
  setDescricaoItemFinanceiro(descricao)
  setDayItemFinanceiro(dia)
  setCnpjItemFinanceiro(cnpj)
  setMonthItemFinanceiro(mes)  
 
};
  return (
    <ThemeProvider theme={theme}>
      <Container>      
      <Box sx={{ flexGrow: 1, mt: 2 }}>      

      <Grid container spacing={2}>     

         <Grid item xs={12} md={12}>
         {!showProduto &&<TextField
              margin="normal"
              required
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

           {!showEstoque &&<TextField
              margin="normal"
              required
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              name="estoque"
              label="Estoque"
              id="estoque"
              value={nomeItemEstoque}                          
              autoComplete="off"
              variant="standard"
            />}    
        </Grid>
        <Grid item xs={6} md={6}>
        
            
        {!showProduto &&<TableContainer component={Paper} sx={{ mt: 2 }}>
        
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
            </TableContainer> }            
        </Grid>

        <Grid item xs={6} md={6}>

            <TableContainer component={Paper} sx={{ mt: 2 }}>
        
                <Table sx={{ minWidth: 200 }} aria-label="simple table">
                    <TableHead>                    
                    </TableHead>
                    <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
                    {all.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                
                        >
                        <TableCell  component="th" scope="row">
                            {row.descricao}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.quantidade}
                        </TableCell>
                        <button
                        onClick={() => {handleBaixarEstoque(
                          row._id,
                          row.quantidade,
                          row.descricao,
                          row.day,
                          row.cnpj,
                          row.month
                          )}}
                        >
                          Salvar
                        </button> 

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
