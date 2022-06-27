import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Top from '../../components/arcondicionado/top';
import TableVentilacaoExaustao from '../../components/arcondicionado/tableVentilacaoExaustao';


const theme = createTheme();

export default function ventilacaoExaustao() {
   
    
  return (
    <ThemeProvider theme={theme}>
        <Top />
        <Container>             
            <Box sx={{ flexGrow: 1, mt: 2 }}>
            <TextField id="outlined-basic" label="Tela" variant="outlined" defaultValue="Ventilação Exaustão" disabled />
            <TableVentilacaoExaustao />
            </Box>
        </Container>
    </ThemeProvider>
  );
}
