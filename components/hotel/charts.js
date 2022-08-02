import React, {  useState, useEffect, useContext } from 'react';
import quizz from '../../data/questions' /* lista de perguntas e respostas*/
import Chart from './chart'


export default function Charts({dataFeedback}) {
     const listFeedBack = [];

      const countFeedBack = (question) =>{
        const yes = dataFeedback.reduce((accumulator, obj) => {
            if (obj.question == question && obj.answer=='Sim') {
              return accumulator + 1;
            }
          
            return accumulator;
          }, 0);
        const no = dataFeedback.reduce((accumulator, obj) => {
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
            countFeedBack(question);
        })
    });
    
  return (
    <>
    <Chart listFeedBack={listFeedBack}/>
    </>

    
  );
}
