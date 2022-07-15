import React, {  useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { parseCookies } from 'nookies';
import Dashboard from '../../components/hotel/dashboard';
import Login from '../../components/login/login';
import axios from 'axios';


export default function Index() { 
  const {isAuthenticated, setCNPJsByUsers, setActiveCNPJ} = useContext(AuthContext);

  useEffect(() => {
    const loadAll = async() =>{
      const cookies = parseCookies()
      const clients = await axios.post('https://it-simples-front.vercel.app/api/cnpjbyuser', { user: cookies.idUser });              
      const listClients = clients.data;
      const quizzes = await axios.post('https://it-simples-front.vercel.app/api/hotel/getAnswersById', { id: listClients[0].cnpj });              
      const listQuizzes = quizzes.data;
      setCNPJsByUsers(listClients)
      setActiveCNPJ(listClients[0].cnpj)
      
      
    }
    loadAll();
  }, []);
  
    return (
      <>     
      {isAuthenticated &&<Dashboard quizzes = {listQuizzes}/>}
      {!isAuthenticated && <Login />}
      </>
    );
    
  }

 