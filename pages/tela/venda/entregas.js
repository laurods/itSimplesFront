import React, {  useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Entregas from '../../../components/dashboard/venda/entregas';
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
      {!isAuthenticated &&<Entregas consumers={ consumers }/>}
      </>
    );
    
  }

  export const getServerSideProps = async () => {
    const data = await fetchData();
  
    return {
      props: data,
    };
  }