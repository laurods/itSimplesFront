import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Top from './top'
import Charts from './charts'
import Chart0 from './chart0'
import Chart1 from './chart1'
import Chart2 from './chart2'
const theme = createTheme();

export default function Dashboard({dataFeedback, dataSuggest}) {
  return (
    <ThemeProvider theme={theme}>
      <Top/>       
      <Container>        
        <Box sx={{ flexGrow: 1, mt: 2 }}>      
          <Grid spacing={2}>
            <Grid item xs={12}>
              <Chart0 dataFeedback = {dataFeedback}/>
            </Grid>
            <Grid item xs={12}>
              <Chart1 dataFeedback={dataFeedback}/>
            </Grid>
            <Grid item xs={12}>
              <Chart2 dataSuggest={dataSuggest}/>
            </Grid>                
          </Grid>
          <Charts dataFeedback={dataFeedback} />
        </Box>
    </Container> 
    </ThemeProvider>
    
  );
}
