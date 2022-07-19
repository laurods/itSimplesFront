import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Chat1({dataQuizz}) {
    console.log('dataQuizz')
    console.log(dataQuizz)
    const listDataQuiz = dataQuizz.map(({quizzes})=>{      
      quizzes.map(({question, answer})=>{
        return [question, answer];

      })      
      });
   console.log('listDataQuiz')
   console.log(listDataQuiz)
    
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
