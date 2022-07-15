import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import Chart1 from './chart1';

export default function Dashboard({dataQuizz}) {
    const [chat1Yes, setChat1Yes] = useState('');
    const [chat1No, setChat1No] = useState('');
    const [chat1Total, setChat1Total] = useState('');
    const totalNo = dataQuizz.reduce((sum, item) => sum + item.answerNoCount, 0);
    const totalYes = dataQuizz.reduce((sum, item) => sum + item.answerYesCount, 0);
    //setChat1Total(totalNo + totalYes )
    setChat1No(totalNo)
    setChat1Yes(totalYes)
    console.log(chat1Yes)
    console.log(chat1No)
    console.log(chat1Total)
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <p>Dashboard</p>
          
        </Grid>
                     
        
      </Grid>
      
    </Box>

    
  );
}
