import React, {  useState, useEffect, useContext } from 'react';
import TopMobile from '../../../components/dashboard/topMobile';
import Pdv from '../../../components/dashboard/venda/pdv';
import { AuthContext } from '../../../contexts/AuthContext';
import axios from 'axios';

export default function Diario() {    
  const { activeCNPJ } = useContext(AuthContext);
  const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        const loadAll = async() =>{  
          console.log('activeCNPJ')
          console.log(activeCNPJ)           
          const allProductsBasics = await axios.post('/api/produtos/getAllProductsBasics', { cnpj: activeCNPJ });              
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
