import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Top from '../../../components/dashboard/top.js';
import ViewProductById from '../../../components/dashboard/product/viewProductById';

export default function Dashboard() {
  const router = useRouter()
  const { id } = router.query;
   useEffect(() => {
    const loadAll = async() =>{
        console.log(id);
      const dataProduct = await axios.post('/api/getProductById', { id: id });
      const theProduct = product.data;
      console.log('dados do produto')
      console.log(theProduct) 
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
