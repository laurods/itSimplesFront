import React from 'react';
import TopMobile from '../../../components/dashboard/topMobile';
import Pdv from '../../../components/dashboard/venda/pdv';
import { AuthContext } from '../../../contexts/AuthContext';
import axios from 'axios';

export default function Diario() {
  const { activeCNPJ } = useContext(AuthContext);
    const dataProdutos = await axios.post('/api/produtos/getAllProductsBasics', { cnpj: activeCNPJ });
    const listProdutos = dataProdutos.data;
    console.log('listProdutos');
    console.log(listProdutos);  
  
    return (
      <>
      <TopMobile />
      <Pdv />
      </>
    );
    
  }
