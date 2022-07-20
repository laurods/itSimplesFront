import React, {  useState, useEffect, useContext } from 'react';
import quizz from '../../data/questions' /* lista de perguntas e respostas*/
import Chart from './chart'


export default function Charts({dataQuizz}) {
    const feedback = [];
    const listFeedBack = [];
    const listDataQuiz = dataQuizz.map(({quizzes})=>{      
      quizzes.map(({question, answer})=>{
        feedback.push({
            question: question,
            answer:answer            
        })        
      })      
      });

      const countFeedBack = (question) =>{
        const yes = feedback.reduce((accumulator, obj) => {
            if (obj.question == question && obj.answer=='Sim') {
              return accumulator + 1;
            }
          
            return accumulator;
          }, 0);
        const no = feedback.reduce((accumulator, obj) => {
            if (obj.question ==question && obj.answer=='Não') {
              return accumulator + 1;
        }
          
            return accumulator;
          }, 0);
        if(yes > 0 || no > 0  ){
            listFeedBack.push({
                question: question,
                answerYes:yes,
                answerNo: no, 
              })
        }
          

      }

      quizz.data.map(({questions})=>{ 
        questions.forEach(question =>{
            //console.log(question)
            countFeedBack(question);
        })
    });
     

   console.log('listFeedBack')
   console.log(listFeedBack)
    
  return (
    <>
    <Chart listFeedBack={listFeedBack}/>
    </>

    
  );
}
