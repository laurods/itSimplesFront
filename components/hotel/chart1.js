import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles, } from '@material-ui/core/styles';

export default function Chat1({dataQuizz}) {
    const qRuim = [];
    const qRegular = [];
    const qBom = [];
    const qOtimo = [];
    dataQuizz.map(({quizzes})=>{      
      quizzes.map(({question, answer})=>{        
        if(question === 'Como foi sua experiência em nosso hotel:') {
          if(answer ==='Ruim'){
            qRuim.push(answer)
          }
          if(answer ==='Regular'){
            qRegular.push(answer)
          }
          if(answer ==='Boa'){
            qBom.push(answer)
          }
          if(answer ==='Ótima'){
            qOtimo.push(answer)
          }          
          
        }        
      })      
      });

      const useStyles = makeStyles(theme => ({
        root: {      
          backgroundColor: theme.palette.background.default,
        },
      }));
    
      const classes = useStyles(); 
   
    
  return (
    <Box>      
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Typography variant="h6" component="div">          
          Como foi sua experiência em nosso hotel:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="div">          
          Avaliações: {(qRuim.length + qRegular.length + qBom.length + qOtimo.length)} 
          </Typography>
        </Grid>
        {qRuim.length > 0 && <Grid item xs={6} className={classes.root}>
          <Typography variant="subtitle2" component="div">          
          Ruim: {qRuim.length} | {Math.round(((qRuim.length)/(qRuim.length + qRegular.length + qBom.length + qOtimo.length))*100)}%
          </Typography>
        </Grid>}
        {qRegular.length> 0 && <Grid item xs={6}>
          <Typography variant="subtitle2" component="div">          
          Regular: {qRegular.length} | {Math.round(((qRegular.length)/(qRuim.length + qRegular.length + qBom.length + qOtimo.length))*100)}%
          </Typography>
        </Grid>}
        {qBom.length > 0 && <Grid item xs={6}>
          <Typography variant="subtitle2" component="div">          
          Boa: {qBom.length} | {Math.round(((qBom.length)/(qRuim.length + qRegular.length + qBom.length + qOtimo.length))*100)}%
          </Typography>
        </Grid>}
        {qOtimo.length > 0 && <Grid item xs={6} className={classes.root}>
          <Typography variant="subtitle2" component="div">          
          Ótima: {qOtimo.length} | {Math.round(((qOtimo.length)/(qRuim.length + qRegular.length + qBom.length + qOtimo.length))*100)}%
          </Typography>
        </Grid>}
               
      </Grid>
      
    </Box>

    
  );
}
