import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Top from '../components/arcondicionado/top';

const theme = createTheme();

export default function ventilacaoExaustao() {
  
    
  return (
    <ThemeProvider theme={theme}>
        <Container>
            <Top /> 
            <Box sx={{ flexGrow: 1, mt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        Ventilação Exaustão
                    </Grid>                  
                    

                </Grid>
            </Box>
        </Container>
    </ThemeProvider>
  );
}
