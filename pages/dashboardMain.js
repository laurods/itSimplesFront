import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import nookies from 'nookies';
import { AuthContext } from '../contexts/AuthContext';
import Top from '../components/dashboard/top.js';
import Content from '../components/dashboard/content.js';

export default function Dashboard() {
    const { userId, isAuthenticated, setCNPJsByUsers, setActiveCNPJ, setMovimentosCNPJ } = useContext(AuthContext);
    const loadAll = async() =>{
      const clients = await axios.post('/api/cnpjbyuser', { user: userId });
      const listClients = await clients.data;
      console.log(listClients);  
    } 
    loadAll();
    setCNPJsByUsers([])
    setActiveCNPJ('354254')
    setMovimentosCNPJ([])
    return (
      <>
      <Top />
      <Content />
      </>
    );
    
}
