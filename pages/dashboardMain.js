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
        const list = clients.data;
        const movimentosByCNPJ = await axios.post('/api/movimentosbycnpj', { cnpj: list[0].cnpj });
        console.log(list[0].cnpj);
        console.log(list);        
        console.log(movimentosByCNPJ);
        setCNPJsByUsers(list)
        setActiveCNPJ(list[0])
        setMovimentosCNPJ([])        
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
