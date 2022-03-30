import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Search from './search'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

export default function Main() {
    
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Search />
      </Grid>
        
    </Box>

    </ThemeProvider>
  );
}
