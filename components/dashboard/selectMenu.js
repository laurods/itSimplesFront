import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Router from 'next/router'; 

export default function SelectMenu() {
  const handleChange = (event) => {
      console.log(event.target.value)
    // Router.push(`/dashboard/${event.target.value}`);
  };
  
  const listMenu = [{id: 10, name: 'Principal'}, {id: 20, name: 'Vendas'}, {id: 30, name: 'Financeiro'}, {id: 40, name:'Resultado'}]
  return (    
    <Box sx={{ minWidth: 120 }}>
     
      <FormControl fullWidth>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value='Menu'         
          onChange={handleChange}
        >
          {
                    listMenu.map(
                        item => (<MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>)
                    )
          }
        </Select>
      </FormControl>
    </Box>
  );
}
