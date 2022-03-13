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
export default function Entregas(props) {
    const listConsumers = props.consumers;
    const dataAtual = new Date();
    const [day, setDay] = useState(dataAtual.getDate());
    const [month, setMonth] = useState(dataAtual.getMonth() + 1);
    const [year, setYear] = useState(dataAtual.getFullYear());
    const [show, setShow] = useState(true);      
    const [word, setWord] = useState('');
    const [dataCustumer, setDataCustumer] = useState({});
    const [quantidade, setQuantidade] = useState(1);
    const [preco, setPreco] = useState('');   
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [dataEstoque, setDataEstoque] = useState({});
    const [listEstoque, setListEstoque] = useState([]);

    const addListProducts = () => {
      const total = preco * quantidade
      dataEstoque['total'] = total
      dataEstoque['estoque'] = (-1 * (quantidade))
      dataEstoque['quantidade'] = quantidade
      dataEstoque['categoria'] = 'Venda'
      dataEstoque['dia'] = `${day}/${month}/${year}`
      dataEstoque['mes'] = `${month}/${year}`
      const prevListEstoque = [dataEstoque, ...listEstoque]
      setListEstoque(prevListEstoque)      
      console.log('dataEstoque') 
      console.log(dataEstoque)
      console.log('listEstoque') 
      console.log(listEstoque)
  };
    
    
    const handleChangeQuantidade = (event) => {
        setQuantidade(event.target.value);
    };
    
    const handleFilter = (event) => {
      setShow(true)      
      setWord(event.target.value)
      const listProductsFiltered = listConsumers.filter((item) => item.telefone.includes(event.target.value) )
      setProductsFiltered(listProductsFiltered)

      if(event.target.value.length == 0){
        setProductsFiltered([]);
        setWord('');       
        } 
  };

  const handlePrint = async (
    _id, 
    telefone,
    nome,
    rua,
    numero,
    complemento,
    bairro,
    nascimento,
    txEntrega,
    pedido,
    valorPedido,
    ) => {      
    console.log('print')    
    const objCustumer ={
        _id, 
        telefone,
        nome,
        rua,
        numero,
        complemento,
        bairro,
        nascimento,
        txEntrega,
        pedido,
        valorPedido,
    }

  console.log(objCustumer)
  setDataCustumer(objCustumer)
  //setPreco(preco)
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
              name="telefone"
              label="Telefone"
              id="telefone"
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
                        >
                        
                        <TableCell component="th" scope="row">
                            <Button          
                            fullWidth
                            size="large" 
                            variant="contained"
                            color="success" 
                            endIcon={<PrintIcon/>}
                            onClick={() => {handlePrint(
                            row._id, 
                            row.telefone,
                            row.nome,
                            row.rua,
                            row.numero,
                            row.complemento,
                            row.bairro,
                            row.nascimento,
                            row.txEntrega,
                            row.pedido,
                            row.valorPedido, 
                            )}}
                            >
                            </Button>                        
                        </TableCell>                        
                        <TableCell component="th" scope="row">
                            <Button          
                            fullWidth
                            size="large" 
                            variant="contained"                            
                            >
                                {row.telefone}
                            </Button>
                        </TableCell>
                        <TableCell component="th" scope="row">{row.nome}</TableCell>
                        <TableCell component="th" scope="row">{row.rua}</TableCell>
                        <TableCell component="th" scope="row">{row.numero}</TableCell>
                        <TableCell component="th" scope="row">{row.complemento}</TableCell>
                        <TableCell component="th" scope="row">{row.bairro}</TableCell>    
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>             
        </Grid>}
        </Grid>                   
        {!show &&<Grid container spacing={2}>
          
        <Grid item xs={3} md={3}>
          <TextField
            disabled
            label="Telefone"
            id="telefone"
            size="small"
            value={dataCustumer.telefone}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={9} md={9}>
          <TextField
            label="Nome"
            id="nome"
            size="small"
            value={dataCustumer.nome}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={9} md={9}>
          <TextField
            label="Rua"
            id="rua"
            size="small"
            value={dataCustumer.rua}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={3} md={3}>
          <TextField
            label="Numero"
            id="numero"
            size="small"
            value={dataCustumer.numero}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            label="Complemento"
            id="complemento"
            size="small"
            value={dataCustumer.complemento}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            label="Bairro"
            id="bairro"
            size="small"
            value={dataCustumer.bairro}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Pedido"
            id="pedido"
            size="small"
            value={dataCustumer.pedido}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            label="Taxa Entrega"
            id="txEntrega"
            size="small"
            value={dataCustumer.txEntrega}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            label="Valor Pedido"
            id="valorPedido"
            size="small"
            value={dataCustumer.valorPedido}
            fullWidth
            variant="standard"
          />
        </Grid>

         <Grid item xs={12} md={12}>
          <Button          
            fullWidth
            size="large" 
            variant="outlined" 
            sx={{ mt: 1 }}
            onClick={addListProducts}
            endIcon={<PrintIcon />}
            value="Imprimir"
            >

          </Button>             
         </Grid>


         </Grid>}


         {!show &&<Grid container spacing={2}>
          <Grid item xs={4} md={4}>
              <TextField
                margin="normal"
                required
                inputProps={{style: {fontSize: 40}}}
                fullWidth
                name="quantidade"
                label="Quantidade"
                type="number"
                id="quantidade" 
                //value={quantidade}
                onChange={handleChangeQuantidade}             
                autoComplete="off"
                variant="standard"
              />
                        
          </Grid>

          <Grid item xs={8} md={8}>
              <TextField
                margin="normal"
                disabled
                inputProps={{style: {fontSize: 40}}}
                fullWidth
                name="pagar"
                label="Total a Pagar"
                type="number"
                id="pagar" 
                //value={quantidade}                          
                autoComplete="off"
                variant="standard"
              />
                        
          </Grid> 

        </Grid>}  
      </Box>      
       
      </Container>
    </ThemeProvider>
  );
}
