import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';
import Top from '../../components/dashboard/top.js';
import Content from '../../components/dashboard/content.js';

export default function Dashboard() {
  const { userId, setCNPJsByUsers, setActiveCNPJ, setMovimentosCNPJ } = useContext(AuthContext);
  const router = useRouter()
  const { cnpj } = router.query;
   console.log(cnpj);
   console.log(userId);
   useEffect(() => {
    const loadAll = async() =>{
      const clients = await axios.post('/api/cnpjbyuser', { user: userId });
      const listClients = clients.data;
      const movimentosByCNPJ = await axios.post('/api/movimentosbycnpj', { cnpj: cnpj });
      const listMovimentos = movimentosByCNPJ.data;
      setCNPJsByUsers(listClients)
      setActiveCNPJ(listClients[0])
      setMovimentosCNPJ(listMovimentos)        
    }
    loadAll();
  }, []);

    return (
      <>
      <Top />
      <Content />
      </>
    );
    
  }
