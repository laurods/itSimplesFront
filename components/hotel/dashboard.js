import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chat0 from './chart0'
import Chat1 from './chart1'

export default function Dashboard({dataQuizz}) {
  return (
    <Box>      
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Chat0 dataQuizz={dataQuizz}/>
        </Grid>
        <Grid item xs={6}>
          <Chat1 dataQuizz={dataQuizz}/>
        </Grid>        
      </Grid>
      
    </Box>

    
  );
}
