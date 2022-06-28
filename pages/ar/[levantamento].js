import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Top from '../../components/arcondicionado/top';


export default function Levantamento() {
  const router = useRouter()
  const { levantamento } = router.query

  return (
    <ThemeProvider theme={theme}>
        <Top />
        <Container>             
            <Box sx={{ flexGrow: 1, mt: 2 }}>
            <TextField id="outlined-basic" label="Tela" variant="outlined" defaultValue={`Levantamento de ${levantamento}`} disabled />            
            </Box>
        </Container>
    </ThemeProvider>
  );

}

