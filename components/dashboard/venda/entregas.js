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
    const [showTelefone, setShowTelefone] = useState(true);
    const [DDD, setDDD] = useState('54');      
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
    
    
    const handleWord = (event) => {
      setWord(event.target.value)
      if(event.target.value.length == 0){
        setProductsFiltered([]);
        setWord('');       
        }
    };
    
    const handleFilter = (word) => {      
      const listProductsFiltered = listConsumers.filter((item) => item.telefone.includes(word) )
      setProductsFiltered(listProductsFiltered)      
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
  setDataCustumer(objCustumer)
   setWord('');
   setShow(false)
   setShowTelefone(false)
   //await axios.post('/api/estoque/itens', { objEstoque })       
    
};

  return (
    <ThemeProvider theme={theme}>
      <Container>      
      <Box sx={{ flexGrow: 1, mt: 2 }}>      

      <Grid container spacing={2}>     

      {showTelefone && <Grid container>
      <Grid item xs={2} md={2}>
          <TextField
            inputProps={{style: {fontSize: 40}}}
            label="DDD"
            id="ddd"
            value={DDD}
            fullWidth
            type="number"
            autoComplete="off"
            variant="standard"
          />
        </Grid>
        <Grid item xs={9} md={9}>
         <TextField
              margin="normal"
              required
              autoFocus
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              name="telefone"
              label="Telefone"
              type="number"
              id="telefone"
              value={word} 
              onChange={handleWord}                          
              autoComplete="off"
              variant="standard"
            />
        </Grid>

        <Grid item xs={1} md={1}>
          <Button
            inputProps={{style: {fontSize: 40}}}          
            fullWidth
            size="large" 
            variant="contained"
            color="success" 
            onClick={ () => handleFilter(word)}
          >
            OK
          </Button>
        </Grid>
           
        </Grid>
       }

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
        {!show &&<Grid container spacing={2} sx={{ mt: 3 }}>
          
        <Grid item xs={3} md={3}>
          <TextField
            disabled
            label="Telefone"
            id="telefone"
            value={dataCustumer.telefone}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={9} md={9}>
          <TextField
            label="Nome"
            id="nome"
            value={dataCustumer.nome}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={9} md={9}>
          <TextField
            label="Rua"
            id="rua"
            value={dataCustumer.rua}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={3} md={3}>
          <TextField
            label="Numero"
            id="numero"
            value={dataCustumer.numero}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            label="Complemento"
            id="complemento"
            value={dataCustumer.complemento}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            label="Bairro"
            id="bairro"
            value={dataCustumer.bairro}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Pedido"
            id="pedido"
            multiline
            maxRows={3}
            value={dataCustumer.pedido}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            label="Taxa Entrega"
            id="txEntrega"
            value={dataCustumer.txEntrega}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            label="Valor Pedido"
            id="valorPedido"
            value={dataCustumer.valorPedido}
            fullWidth
            variant="standard"
          />
        </Grid>

         <Grid item xs={12} md={12}>
          <Button          
            fullWidth
            size="large" 
            variant="contained" 
            sx={{ mt: 1 }}
            onClick={addListProducts}
            endIcon={<PrintIcon />}
            >
            Imprimir        
          </Button>             
         </Grid>


         </Grid>}
      </Box>      
       
      </Container>
    </ThemeProvider>
  );
}
