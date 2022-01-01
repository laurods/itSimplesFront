import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AuthContext } from '../../contexts/AuthContext';
import Router from 'next/router'; 

export default function SelectCNPJ() {
  const { activeCNPJ, CNPJsByUsers, updateActiveCNPJ } = useContext(AuthContext);
  const [cnpj, setCNPJ] = useState('');
  const handleChange = (event) => {
    // setCNPJ(event.target.value);
    // updateActiveCNPJ(event.target.value)
    // Router.push(`/dashboard/${event.target.value}`);
    console.log(event.target.value)
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
