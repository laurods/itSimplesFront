import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import quizz from '../../data/questions' /* lista de perguntas e respostas*/

export default function Chat1({dataQuizz}) {
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
    <Box>      
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="div">          
            Teste
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" component="div">          
          Sim:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" component="div">          
          Não: 
          </Typography>
        </Grid>        
      </Grid>
      
    </Box>

    
  );
}
