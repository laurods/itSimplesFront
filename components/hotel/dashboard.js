import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import Chart1 from './chart1';

export default function Dashboard({dataQuizz}) {      
    const totalNo = dataQuizz.reduce((sum, item) => sum + item.answerNoCount, 0);
    const totalYes = dataQuizz.reduce((sum, item) => sum + item.answerYesCount, 0);   
    console.log(totalNo)
    console.log(totalYes)
    console.log(totalNo + totalYes )
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <Grid container spacing={2}>
        <Grid item xs={6}>            
          <p>Sim</p>
          <CircularProgress variant="determinate" value={totalYes} />          
        </Grid>
        <Grid item xs={6}>            
          <p>Não</p>
          <CircularProgress variant="determinate" value={totalNo} />          
        </Grid>
                     
        
      </Grid>
      
    </Box>

    
  );
}
