import React, {  useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { parseCookies } from 'nookies';
import Top from '../../components/hotel/adm/top';
import Main from '../../components/hotel/adm/main';
import Login from '../../components/login/login';
import axios from 'axios';


export default function Index() { 
  const {isAuthenticated, setCNPJsByUsers, setActiveCNPJ} = useContext(AuthContext);
  

  useEffect(() => {
    const loadAll = async() =>{
      const cookies = parseCookies()
      const clients = await axios.post('https://it-simples-front.vercel.app/api/cnpjbyuser', { user: cookies.idUser });
      const tenants = await axios.post('https://it-simples-front.vercel.app/api/tenant/getTenantByUserId', { user: cookies.idUser });              
      const listClients = clients.data;
      const listTenants = tenants.data;
      console.log('listTenants')
      console.log(listTenants)
      setCNPJsByUsers(listClients)
      setActiveCNPJ(listClients[0].cnpj)     
      
    }
    loadAll();
  }, []);
  
    return (
      <>
      {isAuthenticated && <Top/>}     
      {isAuthenticated && <Main/>}
      {!isAuthenticated && <Login />}
      </>
    );
    
  }

 