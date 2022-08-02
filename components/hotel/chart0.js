import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles, } from '@material-ui/core/styles';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

export default function Chat0({dataQuizz}) {
    const totalNo = [];
    const totalYes = [];
    const FeedBack = [];
    console.log("dataQuizz[0]")
    console.log(dataQuizz[0])
    if(dataQuizz.length > 0) {
      console.log("dataQuizz[0].quizzes")
      console.log(dataQuizz[0].quizzes)
      const listQuiz = dataQuizz[0].quizzes;
      listQuiz.map(({question, answer})=>{
        FeedBack.push({
            question: question,
            answer:answer            
        })        
      })    
      console.log('FeedBack');
      console.log(FeedBack);

      // console.log('totalNo.length');
      // console.log(totalNo.length);
      // console.log('totalYes.length');
      // console.log(totalYes.length);      
    } 
                
    // const totalNo = dataQuizz.reduce((sum, item) => sum + item.answerNoCount, 0);
    // const totalYes = dataQuizz.reduce((sum, item) => sum + item.answerYesCount, 0);
    const useStyles = makeStyles(theme => ({
        root: {
          height: theme.spacing(4),
          backgroundColor: theme.palette.background.default,
        },
        box: {
            backgroundColor: theme.palette.background.default,
          },
      }));
   
      const classes = useStyles();
  return (
    <Box className={classes.box}>      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" component="div">          
            Total de Respostas: {totalYes + totalNo}
          </Typography>                    
          <span>Positivas: {totalYes} | {Math.round(((totalYes)/(totalYes + totalNo))*100)}%</span>          
          <LinearProgress 
          variant="determinate"
          color ="primary"
          value={Math.round(((totalYes)/(totalYes + totalNo))*100)} 
          classes={{
            root: classes.root,
          }}          
          />
          <span>Negativas: {totalNo} | {Math.round(((totalNo)/(totalYes + totalNo))*100)}%</span>
          <LinearProgress 
          variant="determinate"
          color="secondary"
          value={Math.round(((totalNo)/(totalYes + totalNo))*100)} 
          classes={{
            root: classes.root,
          }}
          />          
        </Grid>        
      </Grid>
      
    </Box>

    
  );
}
