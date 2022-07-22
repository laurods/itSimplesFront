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
  const { reserva, cnpj } = router.query
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
               idHotel={id}
               reserva='0000'
               />                      
            </Box>
        </Container>
    </ThemeProvider>
  );

}

