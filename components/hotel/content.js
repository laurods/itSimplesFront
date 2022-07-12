import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import questions from '../../data/questions' /* lista de perguntas e respostas*/
import Question from '../../components/hotel/question'
import Header from './header'
import ImageApto from './imageApto'


export default function Content({idHotel, reserva}) {
const [list, setList] = useState([questions.data[0]])
const [count, setCount] = useState(2)
const [click, setClick] = useState(0)
const [quantQuestions, setQuantQuestions] = useState(questions.data[0].questions.length)
const [showHeader, setShowHeader] = useState(true)
const [quizzes, setQuizzes] = useState([])
const [sugest, setSugest] = useState('')
const objQuizz = {}

const finish = async () => {
objQuizz['idControl'] = `${idHotel}-${reserva}`;
objQuizz['idHotel'] = idHotel
objQuizz['reserva'] = reserva
objQuizz['quizzes'] = quizzes
objQuizz['sugest'] = sugest
await axios.post('/api/hotel/addAnswer', { objQuizz })
}


const handleAnswer = (item, answer, index) =>{  
  const dataAnswer = {}  
  dataAnswer['question'] = item
  dataAnswer['answer'] = answer
  setQuizzes([...quizzes, dataAnswer] );
  list[0].questions.splice(index,1)

  let countClick = click + 1;
  setClick(countClick)
  if(countClick == quantQuestions){    
    setCount(count + 1)
    const filteredList = questions.data.filter((item) => item.codigo.includes(count))
    setList(filteredList)
    setQuantQuestions(filteredList[0].questions.length)
    setClick(0);
    setShowHeader(false)        
  }
}
  return (    
    <>
      {showHeader && <Header />}
      <Divider />
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
                show = {questions.data.length == item.codigo ? true : false }
                questionsLength = {questions.data.length}
                setSugest = {setSugest}
                finish = {finish}
              />                          
              )
            )
      }
      <ImageApto />
    </>
   
   
  );
}


