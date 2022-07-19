import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles, } from '@material-ui/core/styles';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

export default function Chat1({dataQuizz}) {        
    const totalNo = dataQuizz.reduce((sum, item) => sum + item.answerNoCount, 0);
    const totalYes = dataQuizz.reduce((sum, item) => sum + item.answerYesCount, 0);
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
    console.log('dataQuizz')
    console.log(dataQuizz.quizzes)
    
  return (
    <Box className={classes.box}>      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="div">          
            
          </Typography>                    
          <span>Sim {Math.round(((totalYes)/(totalNo + totalYes))*100)} %</span>          
          <LinearProgress 
          variant="determinate"
          color ="primary"
          value={Math.round(((totalYes)/(totalNo + totalYes))*100)} 
          classes={{
            root: classes.root,
          }}          
          />
          <span>Não {Math.round(((totalNo)/(totalNo + totalYes))*100)} %</span>
          <LinearProgress 
          variant="determinate"
          color="secondary"
          value={Math.round(((totalNo)/(totalNo + totalYes))*100)} 
          classes={{
            root: classes.root,
          }}
          />          
        </Grid>        
      </Grid>
      
    </Box>

    
  );
}
