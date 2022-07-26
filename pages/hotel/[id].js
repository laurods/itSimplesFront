import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Top from '../../components/hotel/top';
import Content from '../../components/hotel/content';
import { AuthContext } from '../../contexts/AuthContext';
const theme = createTheme();

export default function Levantamento() {
  const { setTenantName } = useContext(AuthContext);
  const router = useRouter()
  const { id } = router.query
  const codigo = String(id)
  const reserva = codigo.slice(codigo.indexOf("@") + 1);
  const cnpj = codigo.slice(0, 14);
  const getName = async () => {
    const dataTenant = await axios.post('https://it-simples-front.vercel.app/api/hotel/getByCNPJ', { cnpj: cnpj });
    const tenant = dataTenant.data;
    console.log('tenantName')
    console.log(tenant)
    setTenantName(tenant[0].name)
  }
  getName();
  

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

