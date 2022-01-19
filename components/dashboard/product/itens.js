import React, { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import axios from 'axios';
const theme = createTheme();
export default function ComboBox(props) {
    const listProdutos = props.produtos;    
    console.log(listProdutos)
  return (
    <ThemeProvider theme={theme}>
      <Container>      
      <Box sx={{ flexGrow: 1, mt: 2 }}>      

      <Grid container spacing={2}>     

        <Grid item xs={12} md={12}>
          <TextField
              margin="normal"
              required
              inputProps={{style: {fontSize: 40}}}
              fullWidth
              name="produto"
              label="Produto"
              id="produto"                           
              autoComplete="off"
              variant="standard"
            />
               
        </Grid>  
                
        
      </Grid>
      </Box>      
       
      </Container>
    </ThemeProvider>
  );
}
