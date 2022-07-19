import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles, } from '@material-ui/core/styles';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

export default function Chat2({dataQuizz}) { 
    const useStyles = makeStyles(theme => ({
        root: {
          height: theme.spacing(4),
          backgroundColor: theme.palette.background.default,
        },
        box: {
            backgroundColor: theme.palette.background.default,
          },
      }));
    
    const qYes = [];
    const qNo = [];
    const classes = useStyles();
    dataQuizz.map(({quizzes})=>{      
      quizzes.map(({question, answer})=>{        
        if(question === 'O processo do check-in foi rápido e eficiente.' && answer ==='Sim') {
          qYes.push(answer)
        }
        if(question === 'O processo do check-in foi rápido e eficiente.' && answer ==='Não') {
          qNo.push(answer)
        }
      })      
      });
   
    
  return (
    <Box className={classes.box}>      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="div">          
          O processo do check-in foi rápido e eficiente.
          </Typography>                    
          <span>Sim {Math.round(((qYes.length)/(qYes.length + qNo.length))*100)} %</span>          
          <LinearProgress 
          variant="determinate"
          color ="primary"
          value={Math.round(((qYes.length)/(qYes.length + qNo.length))*100)} 
          classes={{
            root: classes.root,
          }}          
          />
          <span>Não {Math.round(((qNo.length)/(qYes.length + qNo.length))*100)} %</span>
          <LinearProgress 
          variant="determinate"
          color="secondary"
          value={Math.round(((qNo.length)/(qYes.length + qNo.length))*100)} 
          classes={{
            root: classes.root,
          }}
          />          
        </Grid>        
      </Grid>
      
    </Box>

    
  );
}
