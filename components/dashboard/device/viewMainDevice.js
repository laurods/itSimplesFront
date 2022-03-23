import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

export default function ViewMainMobile() {
    
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={1} md={1}>
        </Grid>
        <Grid item xs={3} md={3}>           
        </Grid>
        <Grid item xs={7} md={7}>           
        </Grid>
        <Grid item xs={1} md={1}>
        </Grid>             
        
      </Grid>
    </Box>

    </ThemeProvider>
  );
}
