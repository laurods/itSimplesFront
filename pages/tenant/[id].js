import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import Top from '../../components/tenant/top';

export default function Tenant() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>    
    <Top />
    
    </>
  );
}

