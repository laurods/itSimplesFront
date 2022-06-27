import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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
                <TableVentilacaoExaustao />
            </Box>
        </Container>
    </ThemeProvider>
  );
}
