import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
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
      {id: '../../desktop', name: 'Principal'}, 
      {id: '/tela/pdv/basic', name: 'Vendas'}, 
      {id: '/tela/arquivo/uploadXMS', name: 'Arquivo Compras'}, 
      {id: '/tela/arquivo/uploadXLS', name:'Arquivo Vendas'},
      {id: '/tela/produto/compra', name:'Entrada Produtos'},
      {id: '/tela/usuario/perfil', name:'Perfil'},
      {id: '/tela/uteis/sair', name:'Sair'}
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
                        item => (<MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)
                    )
          }
        </Select>
      </FormControl>
    </Box>
  );
}
