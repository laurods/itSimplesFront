import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import { parseCookies } from 'nookies';
import Login from '../components/login/login.js'
import ListDevicesMain from '../components/dashboard/device/listDevicesMain';


export default function Devices() {
     const {setIsUserADM, isAuthenticated } = useContext(AuthContext);
     
    useEffect(() => {
      const loadAll = async() =>{
        const cookies = parseCookies()
        if(cookies.roleUser === "adm") {
          setIsUserADM(true)
        }                
      }
      loadAll();
    }, []);

    return (
      <>
      {!isAuthenticated && <Login />}      
      <ListDevicesMain /> 
      </>
    );
    
}
