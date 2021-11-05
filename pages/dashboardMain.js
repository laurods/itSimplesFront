import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import nookies from 'nookies';
import { AuthContext } from '../contexts/AuthContext';
import Top from '../components/dashboard/top.js';
import Content from '../components/dashboard/content.js';

export default function Dashboard() {
     const { userId, isAuthenticated, setCNPJsByUsers, setActiveCNPJ, setMovimentosCNPJ } = useContext(AuthContext);
     const [clients, setClients] = useState([]);
     console.log(clients);
    
    useEffect(() => {
      const loadAll = async() =>{
        const clients = await axios.post('/api/cnpjbyuser', { user: userId });
        const list = clients.data;
        console.log(list); 
        setClients(list)
        setCNPJsByUsers(list)        
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
