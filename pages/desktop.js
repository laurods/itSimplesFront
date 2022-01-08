import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import { parseCookies } from 'nookies';
import Login from '../components/login/login.js'
import Top from '../components/dashboard/top.js';
import ContentMainDesktop from '../components/dashboard/contentMainDesktop';

export default function Dashboard() {
     const {
       setCNPJsByUsers, 
       setActiveCNPJ, 
       setMovimentosCNPJ, 
       setEntradasByCNPJ, 
       setDasByCNPJ, 
       isAuthenticated,
       setProducts 
      } = useContext(AuthContext);
     
    useEffect(() => {
      const loadAll = async() =>{
        const cookies = parseCookies()
        const clients = await axios.post('/api/cnpjbyuser', { user: cookies.idUser });        
        const listClients = clients.data;
        const movimentosByCNPJ = await axios.post('/api/movimentosbycnpj', { cnpj: listClients[0].cnpj });
        const listMovimentos = movimentosByCNPJ.data;
        const entradasByCNPJ = await axios.post('/api/entradasbycnpj', { cnpj: listClients[0].cnpj });        
        const listEntradasByCNPJ = entradasByCNPJ.data;
        const vendasByCNPJ = await axios.post('/api/salesBycnpj', { cnpj: listClients[0].cnpj });              
        const listVendasByCNPJ = vendasByCNPJ.data;
        const dasByCNPJ = await axios.post('/api/dasBycnpj', { cnpj: listClients[0].cnpj });              
        const listDasByCNPJ = dasByCNPJ.data;
        const products = await axios.post('/api/getAllProducts', { cnpj: listClients[0].cnpj });              
        const listProducts = products.data;
        setProducts(listProducts);        
        setCNPJsByUsers(listClients)
        setActiveCNPJ(listClients[0].cnpj)
        setMovimentosCNPJ(listMovimentos)
        setEntradasByCNPJ(listEntradasByCNPJ)
        setDasByCNPJ(listDasByCNPJ)
        
                
      }
      loadAll();
    }, []);

    return (
      <>
      {!isAuthenticated && <Login />}
      {isAuthenticated && <Top />}
      {isAuthenticated && <ContentMainDesktop />}       
      </>
    );
    
}
