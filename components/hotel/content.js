import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import questions from '../../data/questions' /* lista de perguntas e respostas*/
import Question from '../../components/hotel/question'


export default function Content() {
const [list, setList] = useState([questions.data[0]])
const [count, setCount] = useState(2)
const [click, setClick] = useState(0)
const [quantQuestions, setQuantQuestions] = useState(questions.data[0].questions.length)

const handleAnswer = () =>{  
  let countClick = click + 1;
  setClick(countClick)
  if(countClick == quantQuestions){    
    setCount(count + 1)
    const filteredList = questions.data.filter((item) => item.codigo.includes(count))
    setList(filteredList)
    setQuantQuestions(filteredList[0].questions.length)
    setClick(0)        
  }
}
    
  return (    
    <>
      {
        list.map(
          item => (
            <Question 
                key={item.codigo}
                codigo={item.codigo} 
                mainQuestion={item.mainQuestion}
                questions={item.questions} 
                answers={item.answers}
                handleAnswer={handleAnswer}
              />                          
              )
            )
      }
    
    </>
   
   
  );
}


