import React, {  useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import { AuthContext } from '../../contexts/AuthContext';
import Dashboard from '../../components/hotel/dashboard';
import Login from '../../components/login/login';
import axios from 'axios';


export default function Report() { 
  const {isAuthenticated, setCNPJsByUsers, setActiveCNPJ, setTenantName} = useContext(AuthContext);
  const router = useRouter()
  const { cnpj } = router.query
  console.log('cnpj')
  console.log(cnpj)
  const [dataFeedback, setDataFeedback] = useState([]);
  const [dataSuggest, setDataSuggest] = useState([]);
  const [id, setId] = useState('');

  const FeedBack = [];
    if(id.length > 0){
      const quizzes = await axios.post('https://it-simples-front.vercel.app/api/hotel/getQuizzesByCNPJ', { cnpj: id });
      const listQuiz = quizzes.data.quizzes;
      const listSuggest = quizzes.data.suggests;
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
      setCNPJsByUsers(listTenants)
      setActiveCNPJ(listTenants[0].cnpj)
      setTenantName(listTenants[0].name)
    }
       
  

  // useEffect(() => {
  //   const loadAll = async() =>{
  //     const FeedBack = [];
  //     const quizzes = await axios.post('https://it-simples-front.vercel.app/api/hotel/getQuizzesByCNPJ', { cnpj: cnpj });
  //     const listQuiz = quizzes.data.quizzes;
  //     const listSuggest = quizzes.data.suggests;
  //     listQuiz.map((item)=>{
  //       item.map(({question, answer})=>{
  //         FeedBack.push({
  //             question: question,
  //             answer:answer            
  //         })      
  //       })        
  //     })
  //     setDataSuggest(listSuggest)
  //     setDataFeedback(FeedBack)
  //     setCNPJsByUsers(listTenants)
  //     setActiveCNPJ(listTenants[0].cnpj)
  //     setTenantName(listTenants[0].name) 
          
      
  //   }
  //   loadAll();
  // }, []);
  
    return (
      <>     
      {isAuthenticated &&<Dashboard dataFeedback = {dataFeedback} dataSuggest = { dataSuggest }/>}
      {!isAuthenticated && <Login />}
      </>
    );
    
  }

 