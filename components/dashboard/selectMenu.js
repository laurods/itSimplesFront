import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Router from 'next/router'; 

export default function SelectMenu() {
  const [menu, setMenu] = useState('Principal');
  const handleChange = (event) => {
      console.log(event.target.value)
      setMenu(event.target.innerHTML)
    Router.push(`${event.target.value}`);
  };
  
  const listMenu = [
    {id: '../../mobile', name: 'Principal'}, 
    {id: '/tela/pdv/basic', name: 'Vendas'}, 
    {id: 30, name: 'Financeiro'}, 
    {id: 40, name:'Resultado'},
    {id: '/tela/sair', name: 'Sair'}
  ]
  
  return (    
    <Box sx={{ minWidth: 120 }}>
     
      <FormControl fullWidth>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          {
            listMenu.map(
              item => (
                <MenuItem key={item.id} value={item.id}>                          
                    {item.name} 
                </MenuItem>)
              )
          }
        </Select>
      </FormControl>
    </Box>
  );
}
