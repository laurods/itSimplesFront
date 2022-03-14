import React, {  useState, useEffect, useContext } from 'react';

import TopMobile from '../../../components/dashboard/topMobile';
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
    
  ///const [consumers, setConsumers] = useState([]);
  /*
    useEffect(() => {
        const loadAll = async() =>{         
          const allConsumers = await axios.get('/api/consumidores/getAll');              
          const listAllConsumers = allConsumers.data;
          setConsumers(listAllConsumers)          
        }
        loadAll();
      }, []);
    */
     console.log(consumers)
  
    return (
      <>
      <TopMobile />
      <Entregas consumers={ consumers }/>
      </>
    );
    
  }

  export const getServerSideProps = async () => {
    const data = await fetchData();
  
    return {
      props: data,
    };
  }