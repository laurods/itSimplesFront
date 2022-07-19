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
  return (
    <Box className={classes.box}>      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" component="div">          
            Total de respostas: {totalYes + totalNo}
          </Typography>                    
          <span>Avaliações Positivas: {totalYes} | {Math.round(((totalYes)/(totalYes + totalNo))*100)}%</span>          
          <LinearProgress 
          variant="determinate"
          color ="primary"
          value={Math.round(((totalYes)/(totalYes + totalNo))*100)} 
          classes={{
            root: classes.root,
          }}          
          />
          <span>Avaliações Negativas: {totalNo} | {Math.round(((totalNo)/(totalYes + totalNo))*100)} %</span>
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
