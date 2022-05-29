import React, {  useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import Search from '../components/dashboard/device/topSearch';
import ListDevices from '../components/dashboard/device/listDevices'



const fetchData = async () => await axios.get('https://it-simples-front.vercel.app/api/devices/getDevicesByEquipamento')
.then(res => ({
  error: false,
  allDevices: res.data,
}))
.catch(() => ({
    error: true,
    allDevices: null,
  }),
);




export default function Devices({  allDevices, error  }) { 
  const {setDevices} = useContext(AuthContext);

  useEffect(() => {
    const loadAll = async() =>{
      setDevices(allDevices)
      console.log('allDevicess')
      console.log(allDevices)      
    }
    loadAll();
  }, []);
  
    return (
      <>     
      <Search />
      <ListDevices />
      
      </>
    );
    
  }

  export const getServerSideProps = async () => {
    const data = await fetchData();
  
    return {
      props: data,
    };
  }