import React, {  useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Dashboard from '../../components/hotel/dashboard';
import Login from '../../components/login/login';
import axios from 'axios';


export default function Report() {
  const {isAuthenticated} = useContext(AuthContext);   
  const [dataFeedback, setDataFeedback] = useState([]);
  const [dataSuggest, setDataSuggest] = useState([]);
  useEffect(() => {  
    const loadAll = async() =>{      
      const FeedBack = [];
      const tenants = await axios.post('https://it-simples-front.vercel.app/api/hotel/getQuizzesAll');
      const listTenants = quizzes.data;
      console.log('listTenants')
      console.log(listTenants)
      // const listQuiz = quizzes.data.quizzes;
      // const listSuggest = quizzes.data.suggests;
      // if(listQuiz.length > 0) {
      //   listQuiz.map((item)=>{
      //     item.map(({question, answer})=>{
      //       FeedBack.push({
      //           question: question,
      //           answer:answer            
      //       })      
      //     })        
      //   })
      //   setDataSuggest(listSuggest)
      //   setDataFeedback(FeedBack)

      // }
     
          
      
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

 