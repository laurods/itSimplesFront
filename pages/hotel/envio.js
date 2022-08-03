import React, {  useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { parseCookies } from 'nookies';
import Dashboard from '../../components/hotel/dashboard';
import Login from '../../components/login/login';
import axios from 'axios';


export default function Index() { 
  const {isAuthenticated} = useContext(AuthContext);
  const [reservas, setReservas] = useState([]);
  

  useEffect(() => {
    const loadAll = async() =>{
      const list = [];
      const reservas = await axios.post('https://it-simples-front.vercel.app/api/hotel/getReservasAll');
      const listReservas = reservas.data;
      console.log('listReservas')
      console.log(listReservas)
    //   listReservas.map((item)=>{
    //     item.map(({question, answer})=>{
    //       list.push({
    //           question: question,
    //           answer:answer            
    //       })      
    //     })        
    //   })
    //   setReservas(list) 
          
      
    }
    loadAll();
  }, []);
  
    return (
      <>     
      {isAuthenticated &&<p>List</p>}
      {!isAuthenticated && <Login />}
      </>
    );
    
  }

 