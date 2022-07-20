import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Chat2({dataQuizz}) {     
    const listSugest = [];
    dataQuizz.map(({sugest})=>{      
        console.log('sugest')
        console.log(sugest)      
      });
   
    
  return (
    <Box>      
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="div">          
          Sugestões:
          </Typography> 
        </Grid>
                
      </Grid>


      
    </Box>

    
  );
}
