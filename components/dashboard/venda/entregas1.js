import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styles from '../../../styles.module.css'
import { AuthContext } from '../../../contexts/AuthContext';
import PrintIcon from '@material-ui/icons/Print';
import SaveIcon from '@material-ui/icons/Save';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ViewAll from '../../custumer/viewAll'


const theme = createTheme();
export default function Entregas() {
    const {CNPJsByUsers, consumers, setConsumers, setListConsumers } = useContext(AuthContext);
    const dataAtual = new Date();
    const [day, setDay] = useState(dataAtual.getDate());
    const [month, setMonth] = useState(dataAtual.getMonth() + 1);
    const [year, setYear] = useState(dataAtual.getFullYear());
    const [show, setShow] = useState(true);    
    const [showDados, setShowDados] = useState(false);
    const [showViewAll, setShowViewAll] = useState(true);
   
    //const [listConsumers, setListConsumers] = useState(consumers);
    //const [listConsumers, setListConsumers] = useState([]);
    const [custumer, setCustumer] = useState([]);
    const [DDD, setDDD] = useState('54');      
    const [word, setWord] = useState('');
    const [nomeRuaBairro, setNomeRuaBairro] = useState('');
    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [pedido, setPedido] = useState('');
    const [txEntrega, setTxEntrega] = useState('');
    const [valorPedido, setValorPedido] = useState('');
    const [AddNewCustumer, setAddNewCustumer] = useState(false);     
    
    const handleWord = (event) => {
      const primeiroNumero = event.target.value.charAt(0);
      setShowViewAll(true)
      setWord(event.target.value)       
      //handleFilterViewAll(event.target.value)     
      if(event.target.value.length == 0){        
        setCustumer([]);        
        setWord('');
        setShowDados(false)
        setShowViewAll(false)       
        }
      if(primeiroNumero != 9 & event.target.value.length == 8 ){ /* se primeiro numero for diferente de 9 é número fixo. Numero fixo tem 8 caracteres*/       
              handleFilter(`${DDD}${event.target.value}`) /* chama a função filter*/
                            
        }
      if(primeiroNumero == 9 & event.target.value.length == 9){ /* se primeiro numero for igual 9 é número celular. Numero fixo tem  caracteres**/
              handleFilter(`${DDD}${event.target.value}`) /* chama a função filter*/ 
                          
        }
        /* Valida para usuário não cadastrar consumidores com quantidade de numeros de telefone errado*/
      if(primeiroNumero == 9 & event.target.value.length != 9){ 
            setShowDados(false) 
                         
      }
      /* Valida para usuário não cadastrar consumidores com quantidade de numeros de telefone errado*/
      if(primeiroNumero != 9 & event.target.value.length != 8){ 
        setShowDados(false)
                     
      }
    };

    //const filteredDataCostumers = word.length > 0 ? consumers.filter((item) => item.telefone.includes(word) ) : []   

    const handleDDD = (event) => { setDDD(event.target.value) };
    const handleNome = (event) => { setNome(event.target.value.toUpperCase()) };
    const handleRua = (event) => { setRua(event.target.value.toUpperCase()) };
    const handleNumero = (event) => { setNumero(event.target.value) };
    const handleComplemento = (event) => { setComplemento(event.target.value.toUpperCase()) };
    const handleBairro = (event) => { setBairro(event.target.value.toUpperCase()) };
    const handleTxEntrega = (event) => {
      if(event.target.value.length != 0){
        let vlrEntrega = event.target.value;
        let vEntrega =  vlrEntrega.replace(",", ".");
        const valorEntregaFloat = parseFloat(vEntrega)
        console.log('valorEntregaFloat');
        console.log(valorEntregaFloat);
        setTxEntrega(valorEntregaFloat)        
      }else{        
        setTxEntrega('')        
      }      
      
    };  

    const listDataConsumers = word.length > 0 ? consumers.filter((item) => item.telefone.includes(word) ) : []
    console.log('listDataConsumers')
    console.log(listDataConsumers)
    
    const handleFilterViewAll = (phone) => {
        const filteredCustumer = consumers.filter((item) => item.telefone.includes(phone) )
        const dataConsumers = filteredCustumer.slice(0, 10);
        //setListConsumers(filteredCustumer)
        setListConsumers(dataConsumers)
      

    }
    
    const handleFilter = (fone) => {
      //const custumerFiltered = listConsumers.filter((item) => item.telefone.includes(word) )
      const custumerFiltered = consumers.filter((item) => item.telefone.includes(fone) )
      if(custumerFiltered.length == 0){
        setAddNewCustumer(true)
        setCustumer('')
        setNome('')
        setRua('')
        setNumero('')
        setComplemento('')
        setBairro('')
        setTxEntrega('')
        setShowDados(true)
        
      }else{
        setAddNewCustumer(false)
        setCustumer(custumerFiltered)
        setNome(custumerFiltered[0].nome)
        setRua(custumerFiltered[0].rua)
        setNumero(custumerFiltered[0].numero)
        setComplemento(custumerFiltered[0].complemento)
        setBairro(custumerFiltered[0].bairro)
        setTxEntrega(custumerFiltered[0].txEntrega)
        setShowDados(true)
      }
           
  };



  const handleFilterNomeRuaBairro = (event) => {
      setShowViewAll(true)
      setNomeRuaBairro(event.target.value.toUpperCase())
    const filteredCustumerByNomeRuaBairro = consumers.filter((item) => 
    item.nome.includes(event.target.value.toUpperCase()) 
    || item.rua.includes(event.target.value.toUpperCase())
    || item.bairro.includes(event.target.value.toUpperCase())
    )
    setListConsumers(filteredCustumerByNomeRuaBairro)
         
};

  const handleNew = async () => {
    setShow(true)
    //setShowViewAll(true)
    setWord('')   
   
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
       txEntrega.length !=0 
     ){
      setShow(false)
      setShowDados(false)
      setShowViewAll(false)      
      sendData() 
     }else{
       alert('Todos os campos deve estar preenchidos')
     }
     
   }

   const sendData = async () => {
    const dataPedido = {}
    dataPedido['telefone'] = `${word}`
    dataPedido['nome'] = nome
    dataPedido['rua'] = rua
    dataPedido['numero'] = numero
    dataPedido['complemento'] = complemento
    dataPedido['bairro'] = bairro
    dataPedido['txEntrega'] = txEntrega
    dataPedido['dia'] = `${day}/${month}/${year}`
    dataPedido['mes'] = `${month}/${year}`
   
     if(AddNewCustumer){
      await axios.post('/api/consumidores/addConsumidor', { dataPedido })

     }else{
      const resDataPedido = await axios.post('/api/consumidores/addPedido', dataPedido)
      console.log(resDataPedido.data)
     }
     const newListCustumers = await axios.get('https://it-simples-front.vercel.app/api/consumidores/getAll');
     const newListCustumersUpdated = await newListCustumers.data;           
     setConsumers(newListCustumersUpdated)

    }

   

  const handlePrint = async () => { 
    window.print()
};

const handleSetCustumer = (dataCustumer) => {
  console.log('teste')
  console.log('dataCustumer')
  console.log(dataCustumer)
  setAddNewCustumer(false)
  setWord(dataCustumer.telefone)
  setNome(dataCustumer.nome)
  setRua(dataCustumer.rua)
  setNumero(dataCustumer.numero)
  setComplemento(dataCustumer.complemento)
  setBairro(dataCustumer.bairro)
  setTxEntrega(dataCustumer.txEntrega)
  setShowDados(true)
  setShowViewAll(false)
}

const handleSetCustumerAndView = (dataCustumer) => {
  setAddNewCustumer(false)
  setWord(dataCustumer.telefone)
  setNome(dataCustumer.nome)
  setRua(dataCustumer.rua)
  setNumero(dataCustumer.numero)
  setComplemento(dataCustumer.complemento)
  setBairro(dataCustumer.bairro)
  setTxEntrega(dataCustumer.txEntrega)
      setShow(false)
      setShowDados(false)
      setShowViewAll(false)      
      sendData()

}

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
        <Grid item xs={5} md={4}>
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

        {!showDados &&<Grid item xs={5} md={5}>
         <TextField
              margin="normal"
              required
              autoFocus
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              name="nomeRuaBairro"
              label="Nome | Rua | Bairro"
              id="telefone"
              value={nomeRuaBairro} 
              onChange={handleFilterNomeRuaBairro}                          
              autoComplete="off"
              variant="standard"
            />
        </Grid>
        }
         {showDados &&<Grid item xs={12} md={5}>
          <TextField
            margin="normal"
            required
            inputProps={{style: {fontSize: 40}}}
            label="Nome"
            id="nome"
            onChange={handleNome}
            value={nome}
            fullWidth
            autoComplete='off'
            variant="standard"
          />
        </Grid>
        }
      
      {showDados && <Grid item xs={9} md={4}>
          <TextField
            label="Rua"
            id="rua"
            onChange={handleRua}
            value={rua}
            fullWidth
            autoComplete='off'
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
            autoComplete='off'
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
            autoComplete='off'
            variant="outlined"
          />
        </Grid>
      }
      
        {showDados && <Grid item xs={4} md={1}>
          <TextField            
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
        
        
        
         
         {showDados && <Grid item xs={12} md={1}>
          <Button          
            fullWidth
            size="large" 
            variant="contained" 
            sx={{ mt: 1 }}
            onClick={handleView}
            endIcon={<SaveIcon />}
            >
                   
          </Button>             
         </Grid>
       }
           
        </Grid>}
       
        {!show && <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid 
          item xs={12} md={12}>
           
              <div className={styles.page}>
                <div className={styles.pageInner}>
                 <span><b>{CNPJsByUsers[0].name}</b></span> <br/>
                 <span>..................................</span> <br/>
                 <span>Telefone: <b>{DDD}{word}</b></span> <br/>
                 <span>Nome: <b>{nome}</b></span> <br/>
                 <span>Rua:<b>{rua}</b></span> <br/>
                 <span>Numero: <b>{numero}</b></span> <br/>
                 <span>Complemento: <b>{complemento}</b></span> <br/>
                 <span>Bairro: <b>{bairro}</b></span> <br/>
                 <span>Taxa Entrega: <b>{txEntrega}</b></span> <br/>
                 <span>..................................</span><br/> 
                 <span>                 
                 <Button 
                 variant="text" 
                 onClick={handlePrint}
                 endIcon={<PrintIcon /> }
                 >Para Imprimir pressione CTROL P
                 </Button>          
                 </span> <br/> 
                  <span>
                 <Button 
                 variant="text" 
                 onClick={handleNew}
                 endIcon={<CheckCircleIcon /> }
                 >NOVO PEDIDO
                 </Button>                  
                 </span> 
                
              </div>
            </div>
            


          </Grid>
        </Grid>}

        {/* <ViewAll 
        //listConsumers={listConsumers}
        handleSetCustumer={handleSetCustumer}
        handleSetCustumerAndView={handleSetCustumerAndView}
        
        /> */}

       { word.length > 0 ? (
        <ul>
            {listDataConsumers.map(row => {
                return(
                    <li key={row.telefone}>{row.nome}</li>
                )
            }

            )

            }
        </ul>

       ): <span></span>}

    
        
      </Box>      
       
      </Container>
    </ThemeProvider>
  );
}
