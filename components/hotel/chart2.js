import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Chat2({dataSuggest}) {
    
  return (
    <Box>      
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Typography variant="h6" component="div">          
          Sugestões:
          </Typography>
          {
        dataSuggest.map(
          item => (
            <>              
              <Typography variant="subtitle1" component="div">          
                {item}
              </Typography>                    
            </>                         
              )
            )
      }       


        </Grid>
                
      </Grid>


      
    </Box>

    
  );
}
