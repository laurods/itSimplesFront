import React, { useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import EditIcon from '@material-ui/icons/Edit';

const items = [
    {id: '1', name: 'VENTILADORES'},
    {id: '2', name:'FILTRAGEM'},
    {id: '3', name:'COIFAS E CAPTORES'},
    {id: '4', name:'FILTROS'},
    {id: '5', name:'CORTINA DE AR'},
    {id: '6', name:'AMORTECEDORES DE VIBRAÇÃO'},
    {id: '7', name:'SUPORTES'},
    {id: '8', name:'DUTOS EM CHAPA'},
    {id: '9', name:'DUTOS EM MPU'},
    {id: '10', name:'OUTROS'},
    {id: '11', name:'DIFUSÃO DE AR'},
    {id: '12', name:'PAINEIS ELETRICOS'},
    {id: '13', name:'REDES ELETRICAS'},
 ]
export default function TableVentilacaoExaustao() {
   
    const [text, setText] = useState(''); 
    const [data, setData] = useState(items);
  
     const handleFilter = (event) => {
        setText(event.target.value.toUpperCase())
      const filteredData = items.filter((item) => 
      item.name.includes(event.target.value.toUpperCase())
      || item.id.includes(event.target.value)      
      )
    
     setData(filteredData)
           
  };   
   
  return (   
    <>
          <TextField 
            sx={{ flexGrow: 1, mt: 2 }}  
            type="search"  
            variant="filled" 
            fullWidth margin="normal" 
            color="info" autoFocus={true} 
            autoComplete="off"
            value={text}
            onChange={handleFilter}
            />
           <TableContainer component={Paper} sx={{ mt: 2 }}>        
                <Table sx={{ minWidth: 200 }} aria-label="simple table">                   
                    <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
                    {data.map((row) => (
                        <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                
                        >
                        <TableCell component="th" scope="row">
                            {`${row.id} - ${row.name}`}
                        </TableCell>

                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>  
    
    </>
                   
     
  );
}
