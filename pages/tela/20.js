import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../contexts/AuthContext';
import Top from '../../components/dashboard/topMobile';
import Venda from '../../components/dashboard/venda';

export default function Dashboard() {
  const { userId, setCNPJsByUsers, setActiveCNPJ, setMovimentosCNPJ } = useContext(AuthContext);
  const router = useRouter()
  const { id } = router.query;
   console.log(id);   

    return (
      <>
      <Top />
      <Venda />
      </>
    );
    
  }
