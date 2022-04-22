import React, {  useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import Entregas from '../../../components/dashboard/venda/entregas';
import Login from '../../../components/login/login.js'
import axios from 'axios';

const fetchData = async () => await axios.get('https://it-simples-front.vercel.app/api/consumidores/getAll')
.then(res => ({
  error: false,
  consumers: res.data,
}))
.catch(() => ({
    error: true,
    consumers: null,
  }),
);

export default function Diario({  consumers, error  }) { 
  const {isAuthenticated} = useContext(AuthContext);
  
    return (
      <>     
      {isAuthenticated &&<Entregas consumers={ consumers }/>}
      {!isAuthenticated && <Login />}
      </>
    );
    
  }

  export const getServerSideProps = async () => {
    const data = await fetchData();
  
    return {
      props: data,
    };
  }