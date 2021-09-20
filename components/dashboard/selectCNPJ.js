import React, { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AuthContext } from '../../contexts/AuthContext';

export default function SelectCNPJ() {
  const { CNPJsByUsers } = useContext(AuthContext);
  console.log(CNPJsByUsers)
  const [cnpj, setCNPJ] = React.useState(CNPJsByUsers[0].cnpj);

  const handleChange = (event) => {
    setCNPJ(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cnpj}          
          onChange={handleChange}
        >
          {
                    CNPJsByUsers.map(
                        item => (<MenuItem key={item.cnpj} value={item.cnpj} fullWidth>{item.cnpj}</MenuItem>)
                    )
          }
        </Select>
      </FormControl>
    </Box>
  );
}
