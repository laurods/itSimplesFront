import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles, } from '@material-ui/core/styles';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

export default function Chat0({dataFeedback}) {
    const totalNo = [];
    const totalYes = [];
    if(dataFeedback.length > 0) {
      dataFeedback.map(({ answer })=>{      
        if(answer === 'Sim'){
          totalYes.push(answer)
        }
        if(answer === 'Não'){
          totalNo.push(answer)
        }        
      }) 
       
    } 
       
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
            Total de Respostas: {totalYes.length + totalNo.length}
          </Typography>                    
          <span>Positivas: {totalYes.length} | {Math.round(((totalYes.length)/(totalYes.length + totalNo.length))*100)}%</span>          
          <LinearProgress 
          variant="determinate"
          color ="primary"
          value={Math.round(((totalYes.length)/(totalYes.length + totalNo.length))*100)} 
          classes={{
            root: classes.root,
          }}          
          />
          <span>Negativas: {totalNo.length} | {Math.round(((totalNo.length)/(totalYes.length + totalNo.length))*100)}%</span>
          <LinearProgress 
          variant="determinate"
          color="secondary"
          value={Math.round(((totalNo.length)/(totalYes.length + totalNo.length))*100)} 
          classes={{
            root: classes.root,
          }}
          />          
        </Grid>        
      </Grid>
      
    </Box>

    
  );
}
