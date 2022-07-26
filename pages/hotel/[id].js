import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Top from '../../components/hotel/top';
import Content from '../../components/hotel/content';


const theme = createTheme();

export default function Levantamento() {
  const router = useRouter()
  const { id } = router.query
  const codigo = String(id)
  const reserva = codigo.slice(codigo.indexOf("@") + 1);
  const cnpj = codigo.slice(codigo.indexOf("@") - 14);
  console.log('id')
  console.log(id)
  console.log('codigo')
  console.log(codigo)
  console.log('reserva')
  console.log(reserva)
  console.log('cnpj')
  console.log(cnpj)


  return (
    <ThemeProvider theme={theme}>
        <Top />
        <Container>                         
            <Box sx={{ flexGrow: 1, mt: 2 }}>            
               <Content 
               idHotel={cnpj}
               reserva={reserva}
               />                      
            </Box>
        </Container>
    </ThemeProvider>
  );

}

