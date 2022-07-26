import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { AuthContext } from '../../contexts/AuthContext';
import Menu from './menu';



export default function Top() {
    const { telaCheia, tenantName, isAuthenticated } = useContext(AuthContext);
    
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
            <AccountBalanceWalletIcon onClick={telaCheia}/>

          </IconButton>                  
          <Typography variant="h5" gutterBottom component="div" sx={{ flexGrow: 1 }}>          
           {tenantName}
          </Typography>
          <Typography variant="h6">          
          {isAuthenticated && <Menu />}
          </Typography>
        </Toolbar>
      </AppBar>      
    </Box>
  );
}


