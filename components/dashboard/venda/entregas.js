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
   
    const [custumer, setCustumer] = useState([]);
    const [DDD, setDDD] = useState('54');      
    const [word, setWord] = useState('');
    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [pedido, setPedido] = useState('');
    const [txEntrega, setTxEntrega] = useState('');
    const [valorPedido, setValorPedido] = useState('');

  //   const addListProducts = () => {
  //     const total = preco * quantidade
  //     dataEstoque['total'] = total
  //     dataEstoque['estoque'] = (-1 * (quantidade))
  //     dataEstoque['quantidade'] = quantidade
  //     dataEstoque['categoria'] = 'Venda'
  //     dataEstoque['dia'] = `${day}/${month}/${year}`
  //     dataEstoque['mes'] = `${month}/${year}`
  //     const prevListEstoque = [dataEstoque, ...listEstoque]
  //     setListEstoque(prevListEstoque)      
  //     console.log('dataEstoque') 
  //     console.log(dataEstoque)
  //     console.log('listEstoque') 
  //     console.log(listEstoque)
  // };
    
    
    const handleWord = (event) => {
      const primeiroNumero = event.target.value.charAt(0);
      setWord(event.target.value)
      if(event.target.value.length == 0){
        setCustumer([]);
        setWord('');       
        }
      if(primeiroNumero != 9 & event.target.value.length == 8 ){ /* se primeiro numero for diferente de 9 é número fixo. Numero fixo tem 8 caracteres*/       
              handleFilter(`${DDD}${event.target.value}`) /* chama a função filter*/
        }
      if(primeiroNumero == 9 & event.target.value.length == 9){ /* se primeiro numero for igual 9 é número celular. Numero fixo tem  caracteres**/
              handleFilter(`${DDD}${event.target.value}`) /* chama a função filter*/
        }
    };

    const handleDDD = (event) => { setDDD(event.target.value) };
    const handleNome = (event) => { setNome(event.target.value) };
    const handleRua = (event) => { setRua(event.target.value) };
    const handleNumero = (event) => { setNumero(event.target.value) };
    const handleComplemento = (event) => { setComplemento(event.target.value) };
    const handleBairro = (event) => { setBairro(event.target.value) };
    const handlePedido = (event) => { setPedido(event.target.value) };
    const handleTxEntrega = (event) => { setTxEntrega(event.target.value) };
    const handleValorPedido = (event) => { setValorPedido(event.target.value) };
    
    const handleFilter = (word) => {      
      const custumerFiltered = listConsumers.filter((item) => item.telefone.includes(word) )
      setCustumer(custumerFiltered)
      setNome(custumerFiltered[0].nome)
      setRua(custumerFiltered[0].rua)
      setNumero(custumerFiltered[0].numero)
      setComplemento(custumerFiltered[0].complemento)
      setBairro(custumerFiltered[0].bairro)
      setPedido(custumerFiltered[0].pedido)
      setTxEntrega(custumerFiltered[0].txEntrega)
      setValorPedido(custumerFiltered[0].txEntrega)
      //setWord('');
      setShow(false)
      //setShowTelefone(false)
           
  };

  const handlePrint = async () => {      
    console.log('print')    
    const objCustumer ={
        telefone: custumer[0].telefone,
        nome: nome,
        rua: rua,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        txEntrega: txEntrega,
        pedido: pedido,
        valorPedido: valorPedido,
    }
  console.log('objCustumer')
  console.log(objCustumer)
   setWord('');
   setShow(false)
   //setShowTelefone(false)
   //await axios.post('/api/estoque/itens', { objEstoque })       
    
};

  return (
    <ThemeProvider theme={theme}>
      <Container>      
      <Box sx={{ flexGrow: 1, mt: 2 }}>

      {showTelefone && <Grid container spacing={2} sx={{ mt: 3 }}>
      <Grid item xs={2} md={2}>
          <TextField
            margin="normal"
            required
            inputProps={{style: {fontSize: 40}}}
            label="DDD"
            id="ddd"
            value={DDD}
            onChange={handleDDD}
            fullWidth
            variant="standard"
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={10} md={4}>
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
              onChange={handleWord}                          
              autoComplete="off"
              variant="standard"
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            inputProps={{style: {fontSize: 40}}}
            label="Nome"
            id="nome"
            onChange={handleNome}
            value={nome}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={9} md={4}>
          <TextField
            label="Rua"
            id="rua"
            onChange={handleRua}
            value={rua}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3} md={1}>
          <TextField
            label="Numero"
            id="numero"
            onChange={handleNumero}
            value={numero}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <TextField
            label="Complemento"
            id="complemento"
            onChange={handleComplemento}
            value={complemento}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <TextField
            label="Bairro"
            id="bairro"
            onChange={handleBairro}
            value={bairro}
            fullWidth
            variant="outlined"
          />
        </Grid>
        
        <Grid item xs={12} md={5}>
          <TextField
            label="Pedido"
            id="pedido"
            multiline
            maxRows={3}
            onChange={handlePedido}
            value={pedido}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} md={1}>
          <TextField
            label="Entrega"
            id="txEntrega"
            onChange={handleTxEntrega}
            value={txEntrega}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <TextField
            label="Pedido"
            id="valorPedido"
            onChange={handleValorPedido}
            value={valorPedido}
            fullWidth
            variant="outlined"
          />
        </Grid>

         <Grid item xs={12} md={2}>
          <Button          
            fullWidth
            size="large" 
            variant="contained" 
            sx={{ mt: 1 }}
            onClick={handlePrint}
            endIcon={<PrintIcon />}
            >
            Imprimir        
          </Button>             
         </Grid>

           
        </Grid>
       }

       
        {/* {!show &&<Grid container spacing={2} sx={{ mt: 3 }}>
       
        <Grid item xs={12} md={3}>
          <TextField
            label="Nome"
            id="nome"
            onChange={handleNome}
            value={nome}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={9} md={4}>
          <TextField
            label="Rua"
            id="rua"
            onChange={handleRua}
            value={rua}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3} md={1}>
          <TextField
            label="Numero"
            id="numero"
            onChange={handleNumero}
            value={numero}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <TextField
            label="Complemento"
            id="complemento"
            onChange={handleComplemento}
            value={complemento}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <TextField
            label="Bairro"
            id="bairro"
            onChange={handleBairro}
            value={bairro}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            label="Pedido"
            id="pedido"
            multiline
            maxRows={3}
            onChange={handlePedido}
            value={pedido}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} md={1}>
          <TextField
            label="Entrega"
            id="txEntrega"
            onChange={handleTxEntrega}
            value={txEntrega}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <TextField
            label="Pedido"
            id="valorPedido"
            onChange={handleValorPedido}
            value={valorPedido}
            fullWidth
            variant="outlined"
          />
        </Grid>

         <Grid item xs={12} md={2}>
          <Button          
            fullWidth
            size="large" 
            variant="contained" 
            sx={{ mt: 1 }}
            onClick={handlePrint}
            endIcon={<PrintIcon />}
            >
            Imprimir        
          </Button>             
         </Grid>


         </Grid>} */}
        
      </Box>      
       
      </Container>
    </ThemeProvider>
  );
}
