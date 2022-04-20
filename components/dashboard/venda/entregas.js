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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
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
    const [showDados, setShowDados] = useState(false);
   
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
    const [valorPagar, setValorPagar] = useState('');
    const [tipoPagamento, setTipoPagamento] = useState('');    
    
    const handleWord = (event) => {
      const primeiroNumero = event.target.value.charAt(0);
      setWord(event.target.value)
      if(event.target.value.length == 0){
        setCustumer([]);
        setWord('');
        setShowDados(false)       
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
    const handleTipoPagamento = (event) => { setTipoPagamento(event.target.value) };
    const handleTxEntrega = (event) => {
      setValorPagar('')
      if(event.target.value.length != 0){
        let vlrEntrega = event.target.value;
        let vEntrega =  vlrEntrega.replace(",", ".");
        setTxEntrega(vEntrega) 
      }else{        
        setTxEntrega('')        
      }      
    };

    const handleValorPedido = (event) => {
      setValorPagar('')
      if(event.target.value.length != 0){
        let vlrPedido = event.target.value;
        let vPedido =  vlrPedido.replace(",", ".");
        setValorPedido(vPedido)        
      }else{        
        setValorPedido('')        
      }
    };

    const calcularValorPagar = () =>{
      if(valorPedido.length != 0 & txEntrega !=0 ){
        let vTxEntrega = parseFloat(txEntrega)
        let pedido = parseFloat(valorPedido)
        let totalPagar = vTxEntrega + pedido      
        setValorPagar(totalPagar)        
      }
     
    }
    
    const handleFilter = (word) => {
      const custumerFiltered = listConsumers.filter((item) => item.telefone.includes(word) )
      if(custumerFiltered.length == 0){
        setCustumer('')
        setNome('')
        setRua('')
        setNumero('')
        setComplemento('')
        setBairro('')
        setTxEntrega('')
        setShowDados(true)
      }else{
        setCustumer(custumerFiltered)
        setNome(custumerFiltered[0].nome)
        setRua(custumerFiltered[0].rua)
        setNumero(custumerFiltered[0].numero)
        setComplemento(custumerFiltered[0].complemento)
        setBairro(custumerFiltered[0].bairro)
        let vlrEntrega = custumerFiltered[0].txEntrega;
        let vEntrega =  vlrEntrega.replace(",", ".");
        setTxEntrega(vEntrega)
        setShowDados(true)
      }
           
  };

  const handleNew = async () => {
    setShow(true)
    setWord('')
    setPedido('')
    setValorPedido('')
    setValorPagar('')
   }

   const handleView = async () => {
     if(
       DDD.length !=0 &
       word.length !=0 &
       nome.length !=0 &
       rua.length !=0 &
       numero.length !=0 &
       complemento.length !=0 &
       bairro.length !=0 &
       pedido.length !=0 &
       txEntrega.length !=0 &
       valorPedido.length !=0 &
       valorPagar.length !=0 &
       tipoPagamento.length !=0
     ){
      setShow(false)
      setShowDados(false)      
      const dataPedido = {}
      dataPedido['telefone'] = `${DDD}${word}`
      dataPedido['nome'] = nome
      dataPedido['rua'] = rua
      dataPedido['numero'] = numero
      dataPedido['complemento'] = complemento
      dataPedido['bairro'] = bairro
      dataPedido['pedido'] = pedido
      dataPedido['txEntrega'] = txEntrega
      dataPedido['valorPedido'] = valorPedido
      dataPedido['valorPagar'] = valorPagar
      dataPedido['tipoPagamento'] = tipoPagamento
      dataPedido['dia'] = `${day}/${month}/${year}`
      dataPedido['mes'] = `${month}/${year}`
      console.log('dataPedido') 
      console.log(dataPedido)
      await axios.post('/api/consumidores/addPedido', { dataPedido })
  
      
     }else{
       alert('Todos os campos deve estar preenchidos')
     }
     
   }

  const handlePrint = async () => { 
    window.print()
       
  //   console.log('print')    
  //   const objCustumer ={
  //       telefone: `${DDD}${word}`,
  //       nome: nome,
  //       rua: rua,
  //       numero: numero,
  //       complemento: complemento,
  //       bairro: bairro,
  //       txEntrega: txEntrega,
  //       pedido: pedido,
  //       valorPedido: valorPedido,
  //   }
  // console.log('objCustumer')
  // console.log(objCustumer)
  //  setWord('');
  //  setShow(false)
  //  //setShowTelefone(false)
  //  //await axios.post('/api/estoque/itens', { objEstoque })       
    
};

  return (
    <ThemeProvider theme={theme}>
      <Container>      
      <Box sx={{ flexGrow: 1, mt: 2 }}>

      {show && <Grid container spacing={2} sx={{ mt: 3 }}>
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
              type="number"
              value={word} 
              onChange={handleWord}                          
              autoComplete="off"
              variant="standard"
            />
        </Grid>
        
         {showDados &&<Grid item xs={12} md={6}>
          <TextField
            margin="normal"
            required
            inputProps={{style: {fontSize: 40}}}
            label="Nome"
            id="nome"
            onChange={handleNome}
            value={nome}
            fullWidth
            variant="standard"
          />
        </Grid>
        }
      
      {showDados && <Grid item xs={9} md={6}>
          <TextField
            label="Rua"
            id="rua"
            onChange={handleRua}
            value={rua}
            fullWidth
            variant="outlined"
          />
        </Grid>
      }

      {showDados &&<Grid item xs={3} md={1}>
          <TextField
            label="Numero"
            id="numero"
            type="number"
            onChange={handleNumero}
            value={numero}
            fullWidth
            variant="outlined"
          />
        </Grid>
      }
        {showDados &&<Grid item xs={6} md={2}>
          <TextField
            label="Complemento"
            id="complemento"
            onChange={handleComplemento}
            value={complemento} 
            fullWidth
            variant="outlined"
          />
        </Grid>
        }
        {showDados &&<Grid item xs={6} md={3}>
          <TextField
            label="Bairro" 
            id="bairro"
            onChange={handleBairro}
            value={bairro}
            fullWidth
            variant="outlined"
          />
        </Grid>
      }
        {showDados && <Grid item xs={12} md={6}>
          <TextField
            margin="normal"
            inputProps={{style: {fontSize: 25}}}
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
       }
       {showDados && <Grid item xs={4} md={2}>
          <TextField
            inputProps={{style: {fontSize: 25}}}
            label="V.Pedido"
            id="valorPedido"
            type="number"
            onChange={handleValorPedido}
            value={valorPedido}
            fullWidth
            variant="outlined"
          />
        </Grid>
       }
        {showDados && <Grid item xs={4} md={2}>
          <TextField
            inputProps={{style: {fontSize: 25}}}
            label="Entrega"
            id="txEntrega"
            type="number"
            onChange={handleTxEntrega}
            value={txEntrega}
            fullWidth
            variant="outlined"
          />
        </Grid>
       }        
        
        {showDados && <Grid item xs={4} md={2}>
          <TextField
            disabled
            inputProps={{style: {fontSize: 25}}}
            label="Pagar"
            id="valorPagar"
            value={valorPagar}
            fullWidth
            variant="outlined"
          />
        </Grid>
      }
        {showDados && <Grid item xs={12} md={6}>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel onClick={handleTipoPagamento} value="dinheiro" control={<Radio />} label="Dinheiro" />
          <FormControlLabel onClick={handleTipoPagamento} value="cartao" control={<Radio />} label="Cartão" />
          <FormControlLabel onClick={handleTipoPagamento} value="pix" control={<Radio />} label="Pix" />
        </RadioGroup>
          
        </Grid>
       }
         {showDados && <Grid item xs={6} md={3}>
          <Button          
            fullWidth
            size="large" 
            variant="contained" 
            sx={{ mt: 1 }}
            onClick={calcularValorPagar}
            endIcon={<CheckCircleIcon />}
            >
            Calcular        
          </Button>             
         </Grid>
        }
         {showDados && <Grid item xs={6} md={3}>
          <Button          
            fullWidth
            size="large" 
            variant="contained" 
            sx={{ mt: 1 }}
            onClick={handleView}
            endIcon={<SendIcon />}
            >
            Visualizar        
          </Button>             
         </Grid>
       }
           
        </Grid>}
       
        {!show && <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid 
          item xs={12} md={12}>
            <div style={ 
              {
                margin: 0,
                padding: 0,
                height: '15cm',
                width: '10cm',
                displayMode: "fullscreen",
                pageBreakBefore: "always",
                                
              }
              
                            
             
              }>
                 <p>Esquina Lanches</p>
                 <p>..................................</p>
                 <p>Telefone: {DDD}{word}</p>
                 <p>Nome: {nome}</p>
                 <p>Rua: {rua}</p>
                 <p>Numero: {numero}</p>
                 <p>Complemento: {complemento}</p>
                 <p>Bairro: {bairro}</p>
                 <p>..................................</p>
                 <p>Pedido: {pedido}</p>
                 <p>Taxa Entrega: {txEntrega}</p>
                 <p>Valor Pedido: {valorPedido}</p>
                 <p>Valor Pagar: {valorPagar}</p>
                 <p>Pagamento: {tipoPagamento}</p>
                 <p>..................................</p>
                 <p>                 
                 <Button 
                 variant="text" 
                 onClick={handlePrint}
                 endIcon={<PrintIcon /> }
                 >Para Imprimir pressione CTROL P
                 </Button>          
                  </p>
                 <p>
                 <Button 
                 variant="text" 
                 onClick={handleNew}
                 endIcon={<CheckCircleIcon /> }
                 >NOVO PEDIDO
                 </Button>
                  
                   </p>
                
            </div>
            


          </Grid>
        </Grid>}
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
