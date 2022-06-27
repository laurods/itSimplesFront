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
        <Grid item xs={12} md={12}>
             <div>....</div>
        </Grid>

      </Grid>
    </Box>

    </ThemeProvider>
  );
}
