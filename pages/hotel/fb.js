import React, {  useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { parseCookies } from 'nookies';
import Login from '../../components/login/login';
import Initial from '../../components/hotel/initial'
import axios from 'axios';


export default function Index() { 
  const {isAuthenticated, setCNPJsByUsers, setActiveCNPJ, activeCNPJ, setTenantName} = useContext(AuthContext);
  

  useEffect(() => {
    const loadAll = async() =>{
      const cookies = parseCookies()
      const clients = await axios.post('https://it-simples-front.vercel.app/api/cnpjbyuser', { user: cookies.idUser });              
      const listClients = clients.data;
      setCNPJsByUsers(listClients)
      setActiveCNPJ(listClients[0].cnpj)
      setTenantName(listClients[0].name)
    }
    loadAll();
  }, []);
  
    return (
      <>     
      {isAuthenticated &&<Initial activeCNPJ={activeCNPJ}/>}
      {!isAuthenticated && <Login />}
      </>
    );
    
  }

 