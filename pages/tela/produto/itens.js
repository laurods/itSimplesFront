import React, {  useState, useEffect, useContext } from 'react';
import TopMobile from '../../../components/dashboard/topMobile';
import Itens from '../../../components/dashboard/product/itens';
import { AuthContext } from '../../../contexts/AuthContext';
import axios from 'axios';

export default function Diario() {
  const { activeCNPJ } = useContext(AuthContext);
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        const loadAll = async() =>{            
          const allProductsBasics = await axios.get('/api/produtos/getAllProductsBasics', { cnpj: activeCNPJ });              
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
