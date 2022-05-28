import React, {  useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import Seach from '../components/dashboard/device/topSearch'



const fetchData = async () => await axios.get('https://it-simples-front.vercel.app/api/devices/getAll')
.then(res => ({
  error: false,
  devices: res.data,
}))
.catch(() => ({
    error: true,
    devices: null,
  }),
);

export default function Devices({  devices, error  }) { 
  const {setDevices} = useContext(AuthContext);

  useEffect(() => {
    const loadAll = async() =>{      
      setDevices(devices)
      console.log('setDevices')
      console.log(devices)      
    }
    loadAll();
  }, []);
  
    return (
      <>     
      <Seach />
      
      </>
    );
    
  }

  export const getServerSideProps = async () => {
    const data = await fetchData();
  
    return {
      props: data,
    };
  }