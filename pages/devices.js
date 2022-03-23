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
       setDevices,        
       isAuthenticated,
       } = useContext(AuthContext);
     
    useEffect(() => {
      const loadAll = async() =>{
        const cookies = parseCookies()
        const clients = await axios.post('/api/cnpjbyuser', { user: cookies.idUser });        
        const listClients = clients.data;
        const devices = await axios.get('/api/consumidores/getAll')
        const listDevices = devices.data;
        setDevices(listDevices)       
        setCNPJsByUsers(listClients)
        setActiveCNPJ(listClients[0].cnpj)
        console.log('CNPJ')
        console.log(listClients[0].cnpj)
        console.log('List Clients')
        console.log(listClients)
        console.log('List Devices')
        console.log(listDevices)                       
      }
      loadAll();
    }, []);

    return (
      <>
      {!isAuthenticated && <Login />}
      {isAuthenticated && <TopMobile />}
      {isAuthenticated && <ViewMainDevice />}  
      </>
    );
    
}
