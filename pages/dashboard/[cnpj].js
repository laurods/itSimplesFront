import React, { useContext, useEffect } from 'react';
import api from '../../services/api';
import nookies from 'nookies';
import { AuthContext } from '../../contexts/AuthContext';
import Top from '../../components/dashboard/top.js';
import Content from '../../components/dashboard/content.js';

export default function Dashboard({empresas, activeCNPJ, movimentos}) {
    const { userId, isAuthenticated, setCNPJsByUsers, setActiveCNPJ, setMovimentosCNPJ } = useContext(AuthContext);
    console.log(empresas);
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
    
    const cnpjByUser = await api.post('cnpjbyuser', objUser).then(res => {  
      return (res.data);            
    });

    const objCNPJ = {
      cnpj: ctx.query.cnpj
    }

    const movimentosByCNPJ = await api.post('dashboard/movimentosbycnpj', objCNPJ).then(res => {  
      return (res.data);            
    });

    
   
    
    
    return{
      props: {
        empresas: cnpjByUser,
        activeCNPJ:ctx.query.cnpj,        
        movimentos: movimentosByCNPJ
      }
    }
  }