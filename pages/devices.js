import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import { parseCookies } from 'nookies';
import Login from '../components/login/login.js'
import TopMobile from '../components/dashboard/topMobile';
import ViewMainDevice from '../components/dashboard/device/viewMainDevice';


export default function Devices() {
     const {
       setCNPJsByUsers, 
       setActiveCNPJ,
       setIsUserADM,   
       isAuthenticated,
       isLoading
       } = useContext(AuthContext);
     
    useEffect(() => {
      const loadAll = async() =>{
        const cookies = parseCookies()
        const clients = await axios.post('/api/cnpjbyuser', { user: cookies.idUser });        
        const listClients = clients.data;
        setCNPJsByUsers(listClients)
        setActiveCNPJ(listClients[0].cnpj)
        if(cookies.roleUser === "adm") {
          setIsUserADM(true)
        }                
      }
      loadAll();
    }, []);

    return (
      <>
      {!isLoading && <p>Carregando ..</p>}
      {!isAuthenticated && <Login />}
      {isAuthenticated && <TopMobile />}
      {isAuthenticated && <ViewMainDevice />}  
      </>
    );
    
}
