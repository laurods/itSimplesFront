import React, {  useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { parseCookies } from 'nookies';
import Dashboard from '../../components/hotel/dashboard';
import Login from '../../components/login/login';
import axios from 'axios';


export default function Index() { 
  const {isAuthenticated, setCNPJsByUsers, setActiveCNPJ, setTenantName} = useContext(AuthContext);
  const [dataQuizz, setDataQuizz] = useState([]);
  

  useEffect(() => {
    const loadAll = async() =>{
      const cookies = parseCookies()
      const tenants = await axios.post('https://it-simples-front.vercel.app/api/tenant/getTenantByUserId', { user: cookies.idUser }); 
      const listTenants = tenants.data;
      const quizzes = await axios.post('https://it-simples-front.vercel.app/api/hotel/getAnswersById', { id: listClients[0].cnpj });              
      const listQuizzes = quizzes.data;      
      setDataQuizz(listQuizzes)
      setCNPJsByUsers(listTenants)
      setActiveCNPJ(listTenants[0].cnpj)
      setTenantName(listTenants[0].name)     
      
    }
    loadAll();
  }, []);
  
    return (
      <>     
      {isAuthenticated &&<Dashboard dataQuizz = {dataQuizz}/>}
      {!isAuthenticated && <Login />}
      </>
    );
    
  }

 