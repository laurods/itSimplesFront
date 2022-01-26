import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import { parseCookies } from 'nookies';
import Login from '../components/login/login.js'
import TopMobile from '../components/dashboard/topMobile';
import ViewMainMobile from '../components/dashboard/viewMainMobile';


export default function Dashboard() {
     const {
       setCNPJsByUsers, 
       setActiveCNPJ,
       setAnual,
       setMensal,
       setDiario,
       setSaldos,
       setProdutosBaixarEstoque,
       setAll, 
       isAuthenticated,       
       
       } = useContext(AuthContext);
     
    useEffect(() => {
      const loadAll = async() =>{
        const cookies = parseCookies()
        const clients = await axios.post('/api/cnpjbyuser', { user: cookies.idUser });        
        const listClients = clients.data;        
        const financeiro = await axios.post('/api/getFinanceiro', { cnpj: listClients[0].cnpj });              
        const listFinanceiro = financeiro.data;
        console.log('objFinanceiro');
        console.log(listFinanceiro);
        const {anual, diario, mensal, saldos, produtosBaixarEstoque, all } = listFinanceiro;         
        setCNPJsByUsers(listClients)
        setActiveCNPJ(listClients[0].cnpj)
        setAnual(anual)
        setMensal(mensal)
        setDiario(diario)
        setSaldos(saldos)
        setProdutosBaixarEstoque(produtosBaixarEstoque)
        setAll(all)
                       
      }
      loadAll();
    }, []);

    return (
      <>
      {!isAuthenticated && <Login />}
      {isAuthenticated && <TopMobile />}
      {isAuthenticated && <ViewMainMobile />}  
      </>
    );
    
}
