import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../contexts/AuthContext';
import TopMobile from '../../components/dashboard/topMobile';
import PDV from '../../components/dashboard/pdvBasic';

export default function Dashboard() {
  const { sair } = useContext(AuthContext);
  sair();

    return (
      <>
      
      </>
    );
    
  }
