import React, { useContext, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SelectCNPJ from './selectCNPJ';
import { AuthContext } from '../../contexts/AuthContext';


export default function TopDashboard() {
    const { userEmail } = useContext(AuthContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AccountBalanceWalletIcon />

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DoSimples
          </Typography>          
          <Typography variant="h6" gutterBottom component="div" sx={{ flexGrow: 1 }}>          
          {userEmail}
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Empresa
          </Typography>
          <Typography variant="h6">          
          <SelectCNPJ />
          </Typography>
          <Button color="inherit">Sair</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


