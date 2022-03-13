import React, {  useState, useEffect, useContext } from 'react';
import TopMobile from '../../../components/dashboard/topMobile';
import Entregas from '../../../components/dashboard/venda/entregas';
import { AuthContext } from '../../../contexts/AuthContext';
import axios from 'axios';

export default function Diario() {    
  const { activeCNPJ } = useContext(AuthContext);
  const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        const loadAll = async() =>{         
          const allConsumers = await axios.get('/api/consumidores/getAll');              
          const listAllConsumers = allConsumers.data;
          //setProdutos(listAllConsumers)
          console.log(listAllConsumers)
        }
        loadAll();
      }, []);
    
     
  
    return (
      <>
      <TopMobile />
      <Entregas produtos={produtos}/>
      </>
    );
    
  }
