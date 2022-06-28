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
    {id: '../../arcondicionado', name: 'Principal'}, 
    {id: '/ar/levantamento/splitao', name: 'Splitao'},
    {id: '/ar/splits', name: 'Splits'}, 
    {id: '/ar/vrf', name: 'VRF'}, 
    {id: '/ar/ventilacao', name:'Dutos Ventilação'},
    {id: '/ar/arcondicionado', name:'Dutos Ar'},
    {id: '/ar/pvc', name:'Pvc & Flex '},
    {id: '/ar/giroval', name:'Giroval '},
    {id: '/ar/rede', name:'Hidraulica Rede '},
    {id: '/ar/cavalete', name:'Hidraulica Cavalete '},
    {id: '/ar/painel', name:'Painel Eletrico '},
    {id: '/ar/infra', name:'Infra Eletrica '},
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
