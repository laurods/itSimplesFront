import React, {  useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Dashboard({dataQuizz}) {
    console.log('dataQuizz')
    console.log(dataQuizz)
  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <p>Dashboard</p>
        </Grid>
                     
        
      </Grid>
      
    </Box>

    
  );
}
