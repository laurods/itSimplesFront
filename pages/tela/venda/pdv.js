import React, {  useState, useEffect } from 'react';
import TopMobile from '../../../components/dashboard/topMobile';
import Pdv from '../../../components/dashboard/venda/pdv';
import { AuthContext } from '../../../contexts/AuthContext';
import axios from 'axios';

export default function Diario() {    
  const { activeCNPJ } = useContext(AuthContext);
  const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        const loadAll = async() =>{            
          const allProductsBasics = await axios.get('/api/produtos/getAllProductsBasics', { cnpj: activeCNPJ });              
          const listAllProductsBasics = allProductsBasics.data;
          console.log('listAllProductsBasics')
          console.log(listAllProductsBasics)
          setProdutos(listAllProductsBasics)
        }
        loadAll();
      }, []);
    
     
  
    return (
      <>
      <TopMobile />
      <Pdv />
      </>
    );
    
  }
