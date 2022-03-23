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
        const devices = await axios.get('/api/devices/getAll')
        const listDevices = devices.data;
        const cnpjs = listClients.map((item) => item.cnpj); // cnpjs das empresas dos usuarios
        const devicesByUser = ([...cnpjs]) => { // compara os devices pelo CNPJ
            return listDevices.filter(device => cnpjs.includes(device.CNPJ));
          }
          const filterDevices = await devicesByUser(cnpjs); // chama a função
        setDevices(filterDevices)       
        setCNPJsByUsers(listClients)
        setActiveCNPJ(listClients[0].cnpj)
        console.log('CNPJ')
        console.log(listClients[0].cnpj)
        console.log('List Clients')
        console.log(listClients)
        console.log('filterDevices')
        console.log(filterDevices) 
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
