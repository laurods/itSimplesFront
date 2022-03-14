import React, {  useState, useEffect, useContext } from 'react';
import { GetServerSideProps } from 'next';

import TopMobile from '../../../components/dashboard/topMobile';
import Entregas from '../../../components/dashboard/venda/entregas';
import axios from 'axios';

export default function Diario({ listAllConsumers }) {   
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
     
  
    return (
      <>
      <TopMobile />
      <Entregas consumers={listAllConsumers }/>
      </>
    );
    
  }

  export async function getServerSideProps() {
    const allConsumers = await axios.get('/api/consumidores/getAll');              
    const listAllConsumers = allConsumers.data;
    return {
      props: { listAllConsumers }, // will be passed to the page component as props
    }
  }