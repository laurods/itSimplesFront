import React, {  useState, useEffect } from 'react';
import axios from 'axios';
import TopMobile from '../../../components/dashboard/topMobile';
import Itens from '../../../components/dashboard/product/itens';

export default function Diario() {
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        const loadAll = async() =>{            
          const allProductsBasics = await axios.get('/api/produtos/getAllProductsBasics');              
          const listAllProductsBasics = allProductsBasics.data;
          setProdutos(listAllProductsBasics)
        }
        loadAll();
      }, []);
  
    return (
      <>
      <TopMobile />
      <Itens produtos={produtos} />
      </>
    );
    
  }
