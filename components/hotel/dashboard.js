import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chart from './chart'
import Chat0 from './chart0'
import Chat1 from './chart1'
import Chat2 from './chart2'
import Chat3 from './chart3'

export default function Dashboard({dataQuizz}) {
  return (
    <Box>      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Chat0 dataQuizz={dataQuizz}/>
        </Grid>
        <Grid item xs={12}>
          <Chat1 dataQuizz={dataQuizz}/>
        </Grid>
        <Grid item xs={12}>
          <Chat2 dataQuizz={dataQuizz}/>
        </Grid>
        <Grid item xs={12}>
          <Chat3 dataQuizz={dataQuizz}/>
        </Grid>
        <Grid item xs={12}>
          <Chart dataQuizz={dataQuizz}/>
        </Grid>        
      </Grid>
      
    </Box>

    
  );
}
