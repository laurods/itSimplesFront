import React, {  useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { parseCookies } from 'nookies';
import Dashboard from '../../components/hotel/dashboard';
import Login from '../../components/login/login';
import axios from 'axios';


export default function Index() { 
  const {isAuthenticated} = useContext(AuthContext);
  const [reservas, setReservas] = useState([]);
  

  useEffect(() => {
    const loadAll = async() =>{
      const list = [];
      const reservas = await axios.post('https://it-simples-front.vercel.app/api/hotel/getReservasAll');
      const listReservas = reservas.data;      
      listReservas.map((item)=>{
        item.map(({idControl, idHotel, contato, link,reserva})=>{
          list.push({
              idControl,
              idHotel,              
              contato,
              link,
              reserva,
          })      
        })        
      })
      setReservas(list) 
      console.log('list')
      console.log(list)    
      
    }
    loadAll();
  }, []);
  
    return (
      <>     
      {isAuthenticated &&<p>List</p>}
      {!isAuthenticated && <Login />}
      </>
    );
    
  }

 