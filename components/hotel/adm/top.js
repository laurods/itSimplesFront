import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Menu from './menu';

export default function Top() {
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AccountBalanceWalletIcon/>

          </IconButton>                  
          <Typography variant="h5" gutterBottom component="div" sx={{ flexGrow: 1 }}>          
           Gerencial
          </Typography>
          <Typography variant="h6">          
           <Menu />
          </Typography>
        </Toolbar>
      </AppBar>      
    </Box>
  );
}


