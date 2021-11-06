import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import nookies from 'nookies';
import { AuthContext } from '../contexts/AuthContext';
import Top from '../components/dashboard/top.js';
import Content from '../components/dashboard/content.js';

export default function Dashboard() {
     const { userId, isAuthenticated, setCNPJsByUsers, setActiveCNPJ, setMovimentosCNPJ } = useContext(AuthContext);
     
    useEffect(() => {
      const loadAll = async() =>{
        const clients = await axios.post('/api/cnpjbyuser', { user: userId });
        const listClients = clients.data;
        const movimentosByCNPJ = await axios.post('/api/movimentosbycnpj', { cnpj: listClients[0].cnpj });
        const listMovimentos = movimentosByCNPJ.data;
        console.log(listClients[0].cnpj);
        console.log(listClients);        
        console.log(listMovimentos);
        setCNPJsByUsers(listClients)
        setActiveCNPJ(listClients[0])
        setMovimentosCNPJ(listMovimentos)        
      }
      loadAll();
    }, []);
    // setCNPJsByUsers(clients)
    // setActiveCNPJ('354254')
    // setMovimentosCNPJ([])
 
    return (
      <>
      <Top />
      <Content />
      </>
    );
    
}
