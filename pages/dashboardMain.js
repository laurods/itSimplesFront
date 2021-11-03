import React, { useContext, useEffect } from 'react';
//import api from '/services/api';
import axios from 'axios';
import nookies from 'nookies';
import { AuthContext } from '../contexts/AuthContext';
import Top from '../components/dashboard/top.js';
import Content from '../components/dashboard/content.js';

export default function Dashboard({empresas, activeCNPJ, movimentos}) {
    const { userId, isAuthenticated, setCNPJsByUsers, setActiveCNPJ, setMovimentosCNPJ } = useContext(AuthContext);
    setCNPJsByUsers(empresas)
    setActiveCNPJ(activeCNPJ)
    setMovimentosCNPJ(movimentos)
    return (
      <>
      <Top />
      <Content />
      </>
    );
    
  }

export async function getServerSideProps(ctx){
    const cookies = nookies.get(ctx)
  
    const objUser = {
      user: cookies.idUser
    }
    
    // const cnpjByUser = await axios.post('cnpjbyuser', objUser).then(res => {  
    //   return (res.data);            
    // });

    // const objCNPJ = {
    //   cnpj: cnpjByUser[0].cnpj
    // }

    // const movimentosByCNPJ = await axios.post('dashboard/movimentosbycnpj', objCNPJ).then(res => {  
    //   return (res.data);            
    // });

    
   
    
    
    return{
      props: {
        // empresas: cnpjByUser,
        // activeCNPJ:cnpjByUser[0].cnpj,
        // movimentos: movimentosByCNPJ
        empresas: '12345',
        activeCNPJ:'354254',
        movimentos: []
      }
    }
  }