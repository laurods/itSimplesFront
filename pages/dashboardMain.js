import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import { parseCookies } from 'nookies'
import Top from '../components/dashboard/top.js';
import Content from '../components/dashboard/content.js';

export default function Dashboard() {
     const {setCNPJsByUsers, setActiveCNPJ, setMovimentosCNPJ, setEntradasByCNPJ } = useContext(AuthContext);
     
    useEffect(() => {
      const loadAll = async() =>{
        const cookies = parseCookies()
        const clients = await axios.post('/api/cnpjbyuser', { user: cookies.idUser });        
        const listClients = clients.data;
        console.log('cnpj');
        console.log(listClients[0].cnpj);
        const movimentosByCNPJ = await axios.post('/api/movimentosbycnpj', { cnpj: listClients[0].cnpj });
        const listMovimentos = movimentosByCNPJ.data;
        const entradasByCNPJ = await axios.post('/api/entradasbycnpj', { cnpj: listClients[0].cnpj });        
        const listEntradasByCNPJ = entradasByCNPJ.data;
        const vendasByCNPJ = await axios.post('/api/salesBycnpj', { cnpj: listClients[0].cnpj });        
        const listVendasByCNPJ = vendasByCNPJ.data;
        console.log(listVendasByCNPJ)
        setCNPJsByUsers(listClients)
        setActiveCNPJ(listClients[0])
        setMovimentosCNPJ(listMovimentos)
        setEntradasByCNPJ(listEntradasByCNPJ)        
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
