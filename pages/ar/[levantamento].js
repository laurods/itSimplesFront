import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router'


export default function Levantamento() {
  const router = useRouter()
  const { levantamento } = router.query
  console.log(levantamento);

  return (
    <>    
    <div> levantamento de: {levantamento} </div>
    
    </>
  );
}

