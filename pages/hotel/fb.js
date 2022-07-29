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
      const tenants = await axios.post('https://it-simples-front.vercel.app/api/tenant/getTenantByUserId', { user: cookies.idUser }); 
      const listTenants = tenants.data;
      setCNPJsByUsers(listTenants)
      setActiveCNPJ(listTenants[0].cnpj)
      setTenantName(listTenants[0].name)
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

 