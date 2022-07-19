import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Chat1({dataQuizz}) {
    const qYes = [];
    const qNo = [];
    console.log('dataQuizz')
    console.log(dataQuizz)
    dataQuizz.map(({quizzes})=>{      
      quizzes.map(({question, answer})=>{        
        if(question === 'Você se sentiu bem-vindo(a)?' && answer ==='Sim') {
          qYes.push(answer)
        }
        if(question === 'Você se sentiu bem-vindo(a)?' && answer ==='Não') {
          qNo.push(answer)
        }
      })      
      });
   
    
  return (
    <Box>      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="div">          
            Você se sentiu bem-vindo(a)?
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" component="div">          
          Sim: {qYes.length} | {Math.round(((qYes.length)/(qYes.length + qNo.length))*100)}%
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" component="div">          
          Não: {qNo.length} | {Math.round(((qNo.length)/(qYes.length + qNo.length))*100)}%
          </Typography>
        </Grid>        
      </Grid>
      
    </Box>

    
  );
}
