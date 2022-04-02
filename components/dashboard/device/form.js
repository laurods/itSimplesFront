import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import axios from 'axios';
import Grid from '@mui/material/Grid';;
import SaveIcon from '@material-ui/icons/Save';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Form () {
    const {device, setShowDevice, setMsg, setWord, setShowMsg, setShowForm } = useContext(AuthContext);
    const dataAtual = new Date();
    const [day, setDay] = useState(dataAtual.getDate());
    const [month, setMonth] = useState(dataAtual.getMonth() + 1);
    const [year, setYear] = useState(dataAtual.getFullYear());
   
    const [observacao, setObservacao] = useState('');

    const handleObservacao = (event) => {
      setObservacao((event.target.value).toUpperCase()) 
    };

  const handleSaveMovimento = async () => {
    setShowDevice(false)
    setShowForm(false)
    setWord('')
    setMsg('Salvo')
    setObservacao('')
    setShowMsg(true)
    document.getElementById("serial").focus();
      await axios.post('/api/devices/addManutencao' , { 
            dia: `${day}/${month}/${year}`, 
            serial: device[0].IMEI,
            filial: device[0].Grupo,
            observacao: observacao,
            status: 'Aguardando Orçamento',
            documento: '',
            valor: '',
            cnpj: device[0].CNPJ
    })
   
}


    
  return (
      <>
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
