import React, {  useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { parseCookies } from 'nookies';
import Dashboard from '../../components/hotel/dashboard';
import Login from '../../components/login/login';
import axios from 'axios';


export default function Index() { 
  const {isAuthenticated, setCNPJsByUsers, setActiveCNPJ, setTenantName} = useContext(AuthContext);
  const [dataQuizz, setDataQuizz] = useState([]);
  const [dataFeedback, setDataFeedback] = useState([]);
  const [dataSuggest, setDataSuggest] = useState([]);
  

  useEffect(() => {
    const loadAll = async() =>{
      const FeedBack = [];
      const cookies = parseCookies()
      const tenants = await axios.post('https://it-simples-front.vercel.app/api/tenant/getTenantByUserId', { user: cookies.idUser }); 
      const listTenants = tenants.data;
      //const quizzes = await axios.post('https://it-simples-front.vercel.app/api/hotel/getAnswersById', { id: listTenants[0].cnpj });              
      //const listQuizzes = quizzes.data;
      const quizzes = await axios.post('https://it-simples-front.vercel.app/api/hotel/getQuizzesByCNPJ', { cnpj: listTenants[0].cnpj });              
      const listQuizzes = quizzes.data;
      const listQuiz = quizzes.data[0].quizzes;
      const listSuggest = quizzes.data[0].suggests;
      listQuiz.map((item)=>{
        item.map(({question, answer})=>{
          FeedBack.push({
              question: question,
              answer:answer            
          })      
        })        
      })
      setDataSuggest(listSuggest)
      setDataFeedback(FeedBack)       
      setDataQuizz(listQuizzes)
      setCNPJsByUsers(listTenants)
      setActiveCNPJ(listTenants[0].cnpj)
      setTenantName(listTenants[0].name) 
          
      
    }
    loadAll();
  }, []);
  
    return (
      <>     
      {isAuthenticated &&<Dashboard dataFeedback = {dataFeedback} dataSuggest = { dataSuggest }/>}
      {!isAuthenticated && <Login />}
      </>
    );
    
  }

 