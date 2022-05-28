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
  const {setDevices, devices} = useContext(AuthContext);
  const [list, setList] = useState([]);

  const handleFilterText = (textSearch) => {
    const filteredDevicesByTextSearch = devices.filter((item) => 
    item.CNPJ.includes(textSearch) 
    || item.Grupo.includes(textSearch)
    )
    setList(filteredDevicesByTextSearch)
    console.log('filteredDevicesByTextSearch')
    console.log(filteredDevicesByTextSearch)
  }

  const handleFilterSerial = (serial) => {
    const filteredDevicesBySerial = devices.filter((item) => item.Serial.includes(serial) )
    setList(filteredDevicesBySerial)
    console.log('filteredDevicesBySerial')
    console.log(filteredDevicesBySerial)
  }

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
      <Seach 
      handleFilterText={handleFilterText}
      handleFilterSerial={handleFilterSerial}      
      />
      
      </>
    );
    
  }

  export const getServerSideProps = async () => {
    const data = await fetchData();
  
    return {
      props: data,
    };
  }