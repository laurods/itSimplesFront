import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles, } from '@material-ui/core/styles';
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

    const useStyles = makeStyles(theme => ({
        yes: {
          height: theme.spacing(4),
          backgroundColor: 'blue',
        },

        no: {
            height: theme.spacing(4),
            backgroundColor: 'red',
          },
      }));

    const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <Grid container spacing={2}>
        <Grid item xs={12}>            
          <p>Sim</p>          
          <LinearProgress 
          variant="determinate" 
          classes={{
            root: classes.yes,
          }}
          />          
        </Grid>
        <Grid item xs={12}>            
          <p>Não</p>
          <LinearProgress 
          variant="determinate" 
          value={totalNo} 
          classes={{
            root: classes.no,
          }}
          />          
        </Grid>
                     
        
      </Grid>
      
    </Box>

    
  );
}
