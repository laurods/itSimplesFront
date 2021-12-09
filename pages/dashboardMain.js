import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import Top from '../components/dashboard/top.js';
import Content from '../components/dashboard/content.js';

export default function Dashboard() {
     const { userId, isAuthenticated, setCNPJsByUsers, setActiveCNPJ, setMovimentosCNPJ } = useContext(AuthContext);
     
    useEffect(() => {
      const loadAll = async() =>{
        const clients = await axios.post('/api/cnpjbyuser', { user: userId });        
        const listClients = clients.data;
        console.log('list client')
        console.log(listClients)
        const movimentosByCNPJ = await axios.post('/api/movimentosbycnpj', { cnpj: listClients[0].cnpj });
        const listMovimentos = movimentosByCNPJ.data;
        console.log('movimentos cnpj')
        console.log(listClients)
        const entradasByCNPJ = await axios.post('/api/entradasbycnpj', { cnpj: listClients[0].cnpj });
        console.log('entradas cnpj')
        const listEntradasByCNPJ = entradasByCNPJ.data;
        console.log(listEntradasByCNPJ)


        setCNPJsByUsers(listClients)
        setActiveCNPJ(listClients[0])
        setMovimentosCNPJ(listMovimentos)        
      }
      loadAll();
    }, []);

    return (
      <>
      <Top />
      <Content />
      </>
    );
    
}
