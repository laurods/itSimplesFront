import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles, } from '@material-ui/core/styles';

export default function Chat({listFeedBack}) { 
  const useStyles = makeStyles(theme => ({
    root: {      
      backgroundColor: theme.palette.background.default,
    },
    box: {
        borderRadius:'solid, 1px, black'
      },
  }));

  const classes = useStyles();  
    
  return (
    <Box>
      <Grid container>
      {
        listFeedBack.map(
          item => (
            <>
              <Grid item xs={12} key={item.question} sx={{ mt: 2 }} className={classes.root}>
              <Typography variant="subtitle1" component="div">          
                {item.question}
              </Typography>
            </Grid>            
            <Grid item xs={6}>
              <Typography variant="subtitle2" component="div">          
              Sim: {item.answerYes} | {Math.round(((item.answerYes)/(item.answerYes + item.answerNo))*100)}% 
              </Typography>
            </Grid>
            {item.answerNo > 0 &&<Grid item xs={6}>
              <Typography variant="subtitle2" component="div">          
              Não: {item.answerNo} | {Math.round(((item.answerNo)/(item.answerYes + item.answerNo))*100)}%
              </Typography>
            </Grid>}
            </>                         
              )
            )
      }      
      </Grid>
                
      
      
    </Box>

    
  );
}
