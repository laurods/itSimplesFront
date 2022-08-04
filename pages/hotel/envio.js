import React, {  useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { AuthContext } from '../../contexts/AuthContext';
import ViewReservas from '../../components/hotel/adm/viewReservas';
import Login from '../../components/login/login';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();


export default function Index() { 
  const {isAuthenticated} = useContext(AuthContext);
  const [reservas, setReservas] = useState([]);
  

  useEffect(() => {
    const loadAll = async() =>{
      const list = [];
      const reservas = await axios.post('https://it-simples-front.vercel.app/api/hotel/getReservasAll');
      const listReservas = reservas.data;
      listReservas.map(({reservas})=>{
        reservas.map(({idControl, idHotel, contato, link,reserva, message, status})=>{
          list.push({
              idControl,
              idHotel,              
              contato,
              link,
              reserva,
              message,
              status,
          })      
        })        
      })
      setReservas(list)
      console.log('list');
      console.log(list); 
          
      
    }
    loadAll();
  }, []);
  
    return (     
       <ThemeProvider theme={theme}>
       <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={2}>          
           <Grid item xs={12} md={12}>
            {isAuthenticated &&<ViewReservas reservas={reservas} setReservas = {setReservas} />}
            {!isAuthenticated && <Login />}                  
           </Grid>           
         </Grid>
       </Box>
   
       </ThemeProvider>
    );
    
  }

 