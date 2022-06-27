import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Top from '../../components/arcondicionado/top';
import AccordionVentilacaoExaustao from '../../components/arcondicionado/accordionVentilacaoExaustao';

const theme = createTheme();

export default function ventilacaoExaustao() {
    const items = [
        {name: 'VENTILADORES'},
        {name:'FILTRAGEM'},
        {name:'COIFAS E CAPTORES'},
        {name:'FILTROS'},
        {name:'CORTINA DE AR'},
        {name:'AMORTECEDORES DE VIBRAÇÃO'},
        {name:'SUPORTES'},
        {name:'DUTOS EM CHAPA'},
        {name:'DUTOS EM MPU'},
        {name:'OUTROS'},
        {name:'DIFUSÃO DE AR'},
        {name:'PAINEIS ELETRICOS'},
        {name:'REDES ELETRICAS'},
     ]
    
  return (
    <ThemeProvider theme={theme}>
        <Top />
        <Container>             
            <Box sx={{ flexGrow: 1, mt: 2 }}>
                {
                    items.map(item => {
                        <AccordionVentilacaoExaustao name={item.name}/>
                    })
                }
                
            </Box>
        </Container>
    </ThemeProvider>
  );
}
