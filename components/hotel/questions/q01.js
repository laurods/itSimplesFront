import React, { useContext, useEffect } from 'react';
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
import TagFacesIcon from '@material-ui/icons/TagFaces';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';


export default function Q01() {
    
  return (
    <Box>
    <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
            <Typography variant="h6" gutterBottom component="div" sx={{ flexGrow: 1 }}>          
           1/8. Você se sentiu bem-vindo quando você entrou no nosso hotel?
            </Typography> 
        </Grid>
        <Grid item xs={6} md={6}>
            <Button variant="outlined" size="large" color="success" fullWidth startIcon={<TagFacesIcon />} >
                Sim
            </Button>
        </Grid>
        <Grid item xs={6} md={6}>
            <Button variant="outlined" size="large" color="error" fullWidth startIcon={<SentimentVeryDissatisfiedIcon />} >
                Não
            </Button>
        </Grid>
    </Grid>
    </Box>
  );
}


