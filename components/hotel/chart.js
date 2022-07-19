import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Chat1({dataQuizz}) {
    console.log('dataQuizz')
    console.log(dataQuizz)    
    const yes =[];
    const no = [];
    const feedback = [];
    const listDataQuiz = dataQuizz.map(({quizzes})=>{      
      quizzes.map(({question, answer})=>{
        feedback.push({
            question: question,
            answer:answer            
        })        
      })      
      });
      const q1Yes = feedback.reduce((accumulator, obj) => {
        if (obj.question =='Você se sentiu bem-vindo(a)?' && obj.answer=='Sim') {
          return accumulator + 1;
        }
      
        return accumulator;
      }, 0);
   console.log('feedback')
   console.log(feedback)

   console.log('q1Yes')
   console.log(q1Yes)
    
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
