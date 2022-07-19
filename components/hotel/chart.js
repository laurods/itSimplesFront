import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Chat1({dataQuizz}) {
    console.log('dataQuizz')
    console.log(dataQuizz)
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

          listFeedBack.push({
            question: question,
            answerYes:yes,
            answerNo: no, 
          })

      }
      countFeedBack('Você se sentiu bem-vindo(a)?');
      countFeedBack('O processo do check-in foi rápido e eficiente.');
      countFeedBack('Registro de reserva estava correto'); 

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
