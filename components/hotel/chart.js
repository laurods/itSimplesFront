import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Chat({listFeedBack}) {
    
    
  return (
    <Box>
      <Grid container>
      {
        listFeedBack.map(
          item => (
            <>
              <Grid item xs={12} key={item.question}>
              <Typography variant="subtitle1" component="div">          
                {item.question}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2" component="div">          
              Sim:{item.answerYes}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2" component="div">          
              Não:{item.answerNo} 
              </Typography>
            </Grid>
            </>                         
              )
            )
      }      
      </Grid>
                
      
      
    </Box>

    
  );
}
