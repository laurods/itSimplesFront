import React, {  useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { parseCookies } from 'nookies';
import Dash from '../../components/hotel/adm/dash';
import Main from '../../components/hotel/adm/main';
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
      
    }
    loadAll();
  }, []);
  
    return (
      <>     
      {isAuthenticated && <Main/>}
      {!isAuthenticated && <Login />}
      </>
    );
    
  }

 