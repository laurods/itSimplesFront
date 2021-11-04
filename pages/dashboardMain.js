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
      // user: cookies.idUser
      user:"60a50545bf62f51177b28d56"
    }
    
    const cnpjByUser = await axios.post('/api/cnpjbyuser', {user: "60a50545bf62f51177b28d56"}).then(res => {      
      return (res.data);            
    });

    // const objCNPJ = {
    //   cnpj: cnpjByUser[0].cnpj
    // }

    // const movimentosByCNPJ = await axios.post('/api/movimentosbycnpj', objCNPJ).then(res => {  
    //   return (res.data);            
    // });

    
   
    
    
    return{
      props: {
        empresas: cnpjByUser,      
        // movimentos: movimentosByCNPJ       
        activeCNPJ:'354254',
        movimentos: []
      }
    }
  }