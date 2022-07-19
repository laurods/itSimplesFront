import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Chat3({dataQuizz}) {     
    const qYes = [];
    const qNo = [];
    dataQuizz.map(({quizzes})=>{      
      quizzes.map(({question, answer})=>{        
        if(question === 'Registro de reserva estava correto' && answer ==='Sim') {
          qYes.push(answer)
        }
        if(question === 'Registro de reserva estava correto' && answer ==='Não') {
          qNo.push(answer)
        }
      })      
      });
   
    
  return (
    <Box>      
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="div">          
          Registro de reserva estava correto.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" component="div">          
          Sim: {qYes.length} | {Math.round(((qYes.length)/(qYes.length + qNo.length))*100)}%
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" component="div">          
          Não: {qNo.length} | {Math.round(((qNo.length)/(qYes.length + qNo.length))*100)}%
          </Typography>
        </Grid>        
      </Grid>
      
    </Box>

    
  );
}
