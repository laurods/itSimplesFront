import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
import api from '../../services/api';
import nookies from 'nookies';
import Top from '../../components/dashboard/top.js';
import Content from '../../components/dashboard/content.js';

export default function Dashboard() {
  const router = useRouter()
  const { cnpj } = router.query;
   console.log(cnpj);
    // useEffect(() => {
    //   const loadAll = async() =>{        
    //     const movimentosByCNPJ = await axios.post('/api/movimentosbycnpj', { cnpj: listClients[0].cnpj });
    //     const listMovimentos = movimentosByCNPJ.data;
    //     setCNPJsByUsers(listClients)
    //     setActiveCNPJ(listClients[0])
    //     setMovimentosCNPJ(listMovimentos)        
    //   }
    //   loadAll();
    // }, []);

    return (
      <>
      <Top />
      <Content />
      </>
    );
    
  }
