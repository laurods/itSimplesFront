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
import SendIcon from '@material-ui/icons/Send';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


const theme = createTheme();
export default function PDV(props) {
    const listProdutos = props.produtos;
    const [show, setShow] = useState(true);      
    const [word, setWord] = useState('');
    const [quantidade, setQuantidade] = useState(1);
    const [preco, setPreco] = useState('');   
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [dataEstoque, setDataEstoque] = useState({});

    const handleChangeQuantidade = (event) => {
        setQuantidade(event.target.value);
    };
    
    const handleFilter = (event) => {
      setShow(true)      
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
    custoUnitario,
    ficha,
    grupo,
    nome,
    preco,

    ) => {      
    console.log('item estoque')    
    const objEstoque ={
      id, 
      cean,
      cnpj,      
      custoUnitario,
      ficha,
      grupo,
      nome,
      preco,
      //quant: (-1 * (quantidade)),
    }

  console.log(objEstoque)
  setDataEstoque(objEstoque)
  setPreco(preco)
   setWord('');
   setShow(false)
   //await axios.post('/api/estoque/itens', { objEstoque })       
    
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
            />

           
        </Grid>
       

        {show && <Grid item xs={12} md={12}>
           
            
        <TableContainer component={Paper} sx={{ mt: 2 }}>
        
                <Table sx={{ minWidth: 200 }} aria-label="simple table">
                    <TableHead>                    
                    </TableHead>
                    <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
                    {productsFiltered.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        onClick={() => {handleSelectItemEstoque(
                          row._id, 
                          row.cean,
                          row.cnpj,
                          row.custoUnitario,
                          row.ficha,
                          row.grupo,
                          row.nome,
                          row.preco, 
                          )}}                 
                        >
                        <TableCell component="th" scope="row">
                            {row.nome}
                        </TableCell>                        

                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>             
        </Grid>}
        </Grid>                   
        {!show &&<Grid container spacing={2}>
          
          <Grid item xs={5} md={5}>
          <TextField
            disabled
            label="Produto"
            id="produto"
            size="small"
            value={dataEstoque.nome}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={2} md={2}>
          <TextField
            disabled
            label="Quant"
            id="quant"
            size="small"
            value={quantidade}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={2} md={2}>
          <TextField
            label="Preço"
            id="preco"
            size="small"
            value={preco.toFixed(2)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={2} md={2}>
          <TextField
            disabled
            label="Total"
            id="total"
            size="small"
            value={((preco)*(quantidade)).toFixed(2)}
            fullWidth
            variant="standard"
          />  
         </Grid>

         <Grid item xs={1} md={1}>
            <DeleteIcon sx={{ mt: 3 }}/>
         </Grid>


         </Grid>}


         {!show &&<Grid container spacing={2}>
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
            
          <Button          
          fullWidth
          size="large" 
          variant="contained" 
          sx={{ mt: 5 }}
          endIcon={<CheckCircleIcon />}>
              Salvar
        </Button>
        </Grid>       
        
         </Grid>} 
      
      </Box>      
       
      </Container>
    </ThemeProvider>
  );
}
