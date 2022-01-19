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

import axios from 'axios';
const theme = createTheme();
export default function Itens(props) {
    const listProdutos = props.produtos; 
    const [word, setWord] = useState('');
    const [productsFiltered, setProductsFiltered] = useState([]);

    const handleFilter = (event) => {
      console.log('event.target.value.length 1');
      console.log(event.target.value.length)

      if(event.target.value.length == 0){
        console.log('event.target.value.length 2');
      console.log(event.target.value.length)
        setProductsFiltered([]);
        setWord('');
        return
        }
      setWord(event.target.value.toUpperCase())
      const listProductsFiltered = listProdutos.filter((item) => item.nome.includes(event.target.value.toUpperCase()) )
      setProductsFiltered(listProductsFiltered)
            
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>      
      <Box sx={{ flexGrow: 1, mt: 2 }}>      

      <Grid container spacing={2}>     

        <Grid item xs={12} md={12}>
          <TextField
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
            />
               
        </Grid>
        <Grid item xs={12}>

            <TableContainer component={Paper} sx={{ mt: 2 }}>
        
                <Table sx={{ minWidth: 200 }} aria-label="simple table">
                    <TableHead>                    
                    </TableHead>
                    <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
                    {productsFiltered.map((row) => (
                        <TableRow
                        key={row.codigo}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                
                        >
                        <TableCell component="th" scope="row">
                            {row.nome}
                        </TableCell>                        
                        <TableCell component="th" scope="row">
                            <EditIcon onClick={() => {handleEdit(row.codigo)}}/>
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
