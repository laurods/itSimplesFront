import React from 'react';
import Router from 'next/router'; 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function ViewMainMobile() {
    const handleLink = (event) => {
        console.log(event.target.value)        
      Router.push(`${event.target.value}`);
    };
    
  return (
    <ThemeProvider theme={theme}>
        <Container> 
            <Box sx={{ flexGrow: 1, mt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={6}>
                        <Button          
                        fullWidth
                        size="large" 
                        variant="outlined"
                        color="success"
                        onClick={handleLink}
                        value='/ar/ventilacaoExaustao' 
                        sx={{ mt: 5 }}
                    >
                            Ventilação/Exaustão
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Button          
                            fullWidth
                            size="large" 
                            variant="outlined"
                            color="primary" 
                            sx={{ mt: 5 }}
                        >
                                Ar Condicionado
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Button          
                            fullWidth
                            size="large" 
                            variant="outlined"
                            color="error" 
                            sx={{ mt: 5 }}
                        >
                                Valores Custos Indiretos
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Button          
                            fullWidth
                            size="large" 
                            variant="outlined"
                            color="error" 
                            sx={{ mt: 5 }}
                        >
                                Resumo Custos Indiretos
                        </Button>
                    </Grid>
                    

                </Grid>
            </Box>
        </Container>
    </ThemeProvider>
  );
}
