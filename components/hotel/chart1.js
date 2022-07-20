import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Chat1({dataQuizz}) {
    const qRuim = [];
    const qRegular = [];
    const qBom = [];
    const qOtimo = [];
    console.log('dataQuizz')
    console.log(dataQuizz)
    dataQuizz.map(({quizzes})=>{      
      quizzes.map(({question, answer})=>{        
        if(question === 'Como você avaliaria a sua experiência no nosso hotel:') {
          if(answer ==='Ruim'){
            qRuim.push(answer)
          }
          if(answer ==='Regular'){
            qRegular.push(answer)
          }
          if(answer ==='Bom'){
            qBom.push(answer)
          }
          if(answer ==='Ótimo'){
            qOtimo.push(answer)
          }          
          
        }        
      })      
      });
   
    
  return (
    <Box>      
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="div">          
          Como você avaliaria a sua experiência no nosso hotel:
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle2" component="div">          
          Ruim: {qRuim.length} | {Math.round(((qRuim.length)/(qRuim.length + qRegular.length + qBom.length + qOtimo.length))*100)}%
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle2" component="div">          
          Regular: {qRegular.length} | {Math.round(((qRegular.length)/(qRuim.length + qRegular.length + qBom.length + qOtimo.length))*100)}%
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle2" component="div">          
          Bom: {qBom.length} | {Math.round(((qBom.length)/(qRuim.length + qRegular.length + qBom.length + qOtimo.length))*100)}%
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle2" component="div">          
          Ótimo: {qOtimo.length} | {Math.round(((qOtimo.length)/(qRuim.length + qRegular.length + qBom.length + qOtimo.length))*100)}%
          </Typography>
        </Grid>
               
      </Grid>
      
    </Box>

    
  );
}
