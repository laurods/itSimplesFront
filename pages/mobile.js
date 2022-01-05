import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import { parseCookies } from 'nookies';
import Login from '../components/login/login.js'
import TopMobile from '../components/dashboard/topMobile';
import ViewFinanceiro from '../components/dashboard/viewFinanceiro';


export default function Dashboard() {
     const {setCNPJsByUsers, setActiveCNPJ, setMovimentosCNPJ, setEntradasByCNPJ, setDasByCNPJ, setFinanceiroByCNPJ, isAuthenticated } = useContext(AuthContext);
     
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
        const financeiro = await axios.post('/api/getFinanceiro', { cnpj: listClients[0].cnpj });              
        const listFinanceiro = financeiro.data;
        console.log('objFinanceiro');
        console.log(listFinanceiro);        
        setCNPJsByUsers(listClients)
        setActiveCNPJ(listClients[0].cnpj)
        setMovimentosCNPJ(listMovimentos)
        setEntradasByCNPJ(listEntradasByCNPJ)
        setDasByCNPJ(listDasByCNPJ)
        setFinanceiroByCNPJ(listFinanceiro)                
      }
      loadAll();
    }, []);

    return (
      <>
      {!isAuthenticated && <Login />}
      {isAuthenticated && <TopMobile />}
      {isAuthenticated && <ViewFinanceiro />}  
      </>
    );
    
}
