import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import Chart1 from './chart1';

export default function Dashboard({dataQuizz}) {
    console.log('dataQuizz')
    console.log(dataQuizz)
    const totalNo = dataQuizz.reduce((sum, item) => sum + item.answerNoCount, 0);
    const totalYes = dataQuizz.reduce((sum, item) => sum + item.answerYesCount, 0);
    console.log('totalNo');
    console.log(totalNo);
    console.log('totalYes');
    console.log(totalYes);
  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <p>Dashboard</p>
          <Chart1 />
        </Grid>
                     
        
      </Grid>
      
    </Box>

    
  );
}
