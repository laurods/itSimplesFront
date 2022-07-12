import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Top from '../../components/hotel/top';
import Content from '../../components/hotel/content';


const theme = createTheme();

export default function Levantamento() {
  const router = useRouter()
  const { id } = router.query
  console.log(id)

  return (
    <ThemeProvider theme={theme}>
        <Top />
        <Container>                         
            <Box sx={{ flexGrow: 1, mt: 2 }}>            
               <Content 
               idHotel={id}
               reserva='0001'
               />                      
            </Box>
        </Container>
    </ThemeProvider>
  );

}

