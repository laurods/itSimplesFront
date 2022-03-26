import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ControlDevices from '../device/controlDevices'
import ViewDevices from '../device/viewDevices';

const theme = createTheme();

export default function ViewMainDevice() {
  const { userRole } = useContext(AuthContext);
  const [showControlDevice, setShowControlDevice] = useState(false);
  console.log('main')
  console.log(userRole)
  if(userRole == 'adm'){
    setShowControlDevice(true)
  }
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {showControlDevice && <Grid item xs={12} md={12}>
          <ControlDevices />    
        </Grid>}     
        

        <Grid item xs={12} md={12}>
          <ViewDevices />    
        </Grid>             
        
      </Grid>
    </Box>

    </ThemeProvider>
  );
}
