import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AuthContext } from '../../contexts/AuthContext';
import Router from 'next/router'; 
import axios from 'axios';

export default function SelectCNPJ() {
  const { setMovimentosCNPJ, setEntradasByCNPJ, setDasByCNPJ, activeCNPJ, CNPJsByUsers } = useContext(AuthContext);
  const [cnpj, setCNPJ] = useState('');
  const handleChange = async (event) => {
    // setCNPJ(event.target.value);
    // updateActiveCNPJ(event.target.value)
    // Router.push(`/dashboard/${event.target.value}`);
        const movimentosByCNPJ = await axios.post('/api/movimentosbycnpj', { cnpj: event.target.value });
        const listMovimentos = movimentosByCNPJ.data;
        const entradasByCNPJ = await axios.post('/api/entradasbycnpj', { cnpj: event.target.value });        
        const listEntradasByCNPJ = entradasByCNPJ.data;
        const dasByCNPJ = await axios.post('/api/dasBycnpj', { cnpj: event.target.value });              
        const listDasByCNPJ = dasByCNPJ.data;
        setMovimentosCNPJ(listMovimentos)
        setEntradasByCNPJ(listEntradasByCNPJ)
        setDasByCNPJ(listDasByCNPJ)
  };
  
  return (    
    <Box sx={{ minWidth: 120 }}>
     
      <FormControl fullWidth>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cnpj == '' ? activeCNPJ : cnpj }          
          onChange={handleChange}
        >
          {
                    CNPJsByUsers.map(
                        item => (<MenuItem key={item.cnpj} value={item.cnpj}>{item.cnpj}</MenuItem>)
                    )
          }
        </Select>
      </FormControl>
    </Box>
  );
}
