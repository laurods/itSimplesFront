import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Router from 'next/router'; 

export default function MenuMobile() {
  const [menu, setMenu] = useState('Principal');
  const handleChange = (event) => {
      console.log(event.target.value)
      setMenu(event.target.innerHTML)
    Router.push(`${event.target.value}`);
  };
  
  const listMenu = [
    {id: '../../mobile', name: 'Principal'}, 
    {id: '/tela/venda/basico', name: 'Vendas'},
    {id: '/tela/produto/itens', name: 'Estoque'}, 
    {id: '/tela/financeiro/diario', name: 'Financeiro'}, 
    {id: '/tela/produto/movimento', name:'Compra'},
    {id: '/tela/venda/pdv', name:'PDV'},
    {id: '/tela/venda/entregas', name:'Entregas'},
    {id: '/tela/sair', name: 'Sair'}
  ]
  
  return (    
    <Box sx={{ minWidth: 120 }}>
     
      <FormControl fullWidth>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
          value={menu}
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
