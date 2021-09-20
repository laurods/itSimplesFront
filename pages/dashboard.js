import React, { useContext, useEffect } from 'react';
import api from '/services/api';
import nookies from 'nookies';
import { AuthContext } from '../contexts/AuthContext';
import Top from '../components/dashboard/top.js';

export default function Dashboard({empresas}) {
    const { userId, isAuthenticated, setCNPJsByUsers } = useContext(AuthContext);
    setCNPJsByUsers(empresas)    
    return <Top />;
    
  }

export async function getServerSideProps(ctx){
    const cookies = nookies.get(ctx)
  
    const objUser = {
      user: cookies.idUser
    }
    
    const cnpjByUser = await api.post('cnpjbyuser', objUser).then(res => {  
      return (res.data);            
    });
   
    
    
    return{
      props: {
        empresas: cnpjByUser,
      }
    }
  }