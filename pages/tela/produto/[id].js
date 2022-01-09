import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Top from '../../../components/dashboard/top.js';
import ViewProductById from '../../../components/dashboard/product/viewProductById';

export default function Dashboard() {
  const router = useRouter()
  const { id } = router.query;
   console.log(id);
   useEffect(() => {
    const loadAll = async() =>{
        console.log(id);
      //const clients = await axios.post('/api/cnpjbyuser', { user: userId });
      //const listClients = clients.data; 
    }
    loadAll();
  }, []);

    return (
      <>
      <Top />
      <ViewProductById />
      </>
    );
    
  }
