import React, { useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../../../contexts/AuthContext';

const theme = createTheme();

export default function DasCNPJ() {
    const { all } = useContext(AuthContext);
    const dataAtual = new Date();
    const [day, setDay] = useState(dataAtual.getDate());
    const [month, setMonth] = useState(dataAtual.getMonth() + 1);
    const [year, setYear] = useState(dataAtual.getFullYear());
    const [filtered, setFiltered] = useState([]);
    
    
    const handleChangeDay = (event) => {
        setDay(event.target.value);
    };
  
    const handleChangeMonth = (event) => {
      setMonth(event.target.value);
  };
  
  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const handleFilter = () => {
       const dia = `${day}/${month}/${year}`;
       const allFiltered = all.filter((item) => item.day == dia && item.categoria =='Venda')       
        setFiltered(allFiltered)
        
  }
  return (
    <ThemeProvider theme={theme}>
        <Grid container spacing={2}>        
        <Grid item xs={6} md={6}>
          {/* datas */}
          <TextField              
              id="dia"
              label="dia"
              name="dia"
              type="number"
              value={day}
              onChange={handleChangeDay}
              autoComplete="off"
              variant="outlined"
              size="small"
              sx={{                
                maxWidth: '30%',
              }}
            />
            <TextField              
              id="mes"
              label="mes"
              name="mes"
              type="number"
              value={month}
              onChange={handleChangeMonth}
              autoComplete="off"
              variant="outlined"
              size="small"
              sx={{                
                maxWidth: '30%',
              }}
            />
            <TextField              
              id="ano"
              label="ano"
              name="ano"
              type="number"
              value={year}
              onChange={handleChangeYear}
              autoComplete="off"
              variant="outlined"
              size="small"
              sx={{                
                maxWidth: '35%',
              }}
            />
            
            
        </Grid>
        <Grid item xs={6} md={6} >
        <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              onClick={handleFilter}              
            >
              Vendas
            </Button>
        </Grid>                    
        
      </Grid>    

      <TableContainer component={Paper} sx={{ mt: 2 }}>
      
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Descricao</TableCell>
              <TableCell>Quant</TableCell>
              <TableCell>Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
            {filtered.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                
              >
                <TableCell component="th" scope="row">
                  {row.descricao}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.quantidade}
                </TableCell>
                <TableCell component="th" scope="row">
                  {(row.valor).toFixed(2)}
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
