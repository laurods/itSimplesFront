import React, { useEffect } from 'react';
import axios from 'axios';
import TopMobile from '../../../components/dashboard/topMobile';
import Itens from '../../../components/dashboard/product/itens';

export default function Diario() {

    useEffect(() => {
        const loadAll = async() =>{            
          const allProductsBasics = await axios.get('/api/produtos/getAllProductsBasics');              
          const listAllProductsBasics = allProductsBasics.data;
          console.log('listAllProductsBasics');
          console.log(listAllProductsBasics);
        }
        loadAll();
      }, []);
  
    return (
      <>
      <TopMobile />
      <Itens />
      </>
    );
    
  }
