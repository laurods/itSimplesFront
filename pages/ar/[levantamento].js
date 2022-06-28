import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router'


export default function Tenant() {
  const router = useRouter()
  const { levantamento } = router.query

  return (
    <>    
    <div> levantamento de:  ${levantamento}</div>
    
    </>
  );
}

