import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import Header from '../../components/tenant/header';

export default function Tenant() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>    
    <Header />
    <p>Seu id é {id}</p> 
    </>
  );
}

