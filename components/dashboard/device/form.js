import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import axios from 'axios';
import Message from './message';
import Grid from '@mui/material/Grid';;
import SaveIcon from '@material-ui/icons/Save';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';

export default function Form () {
    const {device, setShowDevice, setMsg, setWord, setShowMsg } = useContext(AuthContext);
    const dataAtual = new Date();
    const [day, setDay] = useState(dataAtual.getDate());
    const [month, setMonth] = useState(dataAtual.getMonth() + 1);
    const [year, setYear] = useState(dataAtual.getFullYear());
   
    const [observacao, setObservacao] = useState('');
    const [documento, setDocumento] = useState('');
    const [valor, setValor] = useState('');
    const [situacao, setSituacao] = useState('');
    const [showOS, setShowOS] = useState(false);


    const handleObservacao = (event) => {
      setObservacao(event.target.value) 
    };

    const handleDocumento = (event) => {
      setDocumento(event.target.value) 
    };

    const handleValor = (event) => {
      setValor(event.target.value) 
    };

    const handleCheck = async (event) => {
      setSituacao(event.target.value)
      if(event.target.value === "Aguardando Aprovação") {
        setShowOS(true);
        document.getElementById("documento").focus();
      }else{
        document.getElementById("observacao").focus();
      }
      
    };


  const handleSaveMovimento = async () => {      
  //   const deviceBySerial = await axios.post('/api/devices/updateDevice' , { 
  //     serial: word
  //     status: situacao 
  // })
  //   const deviceBySerial = await axios.post('/api/devices/insertManutencao' , { 
  //     serial: word,
  //     filial: device[0].Grupo,
  //     observacao: observacao,
  //     status: situacao,
  //     documento: documento,
  //     valor: valor,
  // })
  
  const data = {
        dia: `${day}/${month}/${year}`, 
        serial: device[0].IMEI,
        filial: device[0].Grupo,
        observacao: observacao,
        status: situacao,
        documento: documento,
        valor: valor,
    }
    setShowDevice(false)
    setWord('')
    setMsg('Salvo')
    setObservacao('')
    setShowOS(false);
    setShowMsg(true)
    //document.getElementById("serial").focus();
    console.log(data)
}


    
  return (
      <>
      <Grid container spacing={2} sx={{ mt: 3 }}>
      <Grid item xs={3} md={3}>
        </Grid>
      <Grid item xs={9} md={9}>
        <FormGroup>
            <RadioGroup row>
              <FormControlLabel onChange={handleCheck} control={<Radio />} value="Aguardando Orçamento" label="Aguardando Orçamento" />
              <FormControlLabel onChange={handleCheck} control={<Radio />} value="Aguardando Aprovação" label="Aguardando Aprovação" />
              <FormControlLabel onChange={handleCheck} control={<Radio />} value="Aprovado" label="Aprovado" />
              <FormControlLabel onChange={handleCheck} control={<Radio />} value="ativo" label="Devolvido" />
            </RadioGroup>
          </FormGroup>
        </Grid>

        </Grid>


        <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={3} md={3}>
        </Grid>
        <Grid item xs={4} md={4}>
          <TextField
            label="Observação"
            id="observacao"
            value={observacao}
            fullWidth
            onChange={handleObservacao}
            variant="filled"
          />
        </Grid>

        {showOS && <Grid item xs={1} md={1}>
          <TextField
            label="OS"
            id="documento"
            value={documento}
            fullWidth
            onChange={handleDocumento}
            variant="filled"
            autoComplete="off"
          />
        </Grid>}
        {showOS && <Grid item xs={1} md={1}>
          <TextField
            label="Valor OS"
            id="valor"
            value={valor}
            fullWidth
            onChange={handleValor}
            variant="filled"
            autoComplete="off"
          />
        </Grid>}
        <Grid item xs={1} md={1}>
        <Button
            sx={{ mt: 1 }}
            inputProps={{style: {fontSize: 40}}}          
            fullWidth
            size="large" 
            variant="contained"
            onClick={ () => handleSaveMovimento()}
          >
            <SaveIcon />
          </Button>
        </Grid>

      </Grid>
    
    </>
  );
}
