import React, {  useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { parseCookies } from 'nookies';
import Dashboard from '../../components/hotel/dashboard';
import Login from '../../components/login/login';
import axios from 'axios';


export default function Index() { 
  const {isAuthenticated, setCNPJsByUsers, setActiveCNPJ} = useContext(AuthContext);

  useEffect(() => {
    const loadAll = async() =>{
      const cookies = parseCookies()
      const clients = await axios.post('https://it-simples-front.vercel.app/api/cnpjbyuser', { user: cookies.idUser });        
      const listClients = clients.data;
      setCNPJsByUsers(listClients)
      setActiveCNPJ(listClients[0].cnpj)
      console.log('listClients[0]')
      console.log(listClients[0])
      
    }
    loadAll();
  }, []);
  
    return (
      <>     
      {isAuthenticated &&<Dashboard />}
      {!isAuthenticated && <Login />}
      </>
    );
    
  }

 