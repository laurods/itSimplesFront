import React, { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';


export default function Q02() {
    
  return (
    <Box>
    <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
            <Typography variant="h6" gutterBottom component="div" sx={{ flexGrow: 1 }}>          
           2/8. Por favor, avalie o processo do check-in:
            </Typography> 
        </Grid>
        <Grid item xs={6} md={6}>
        </Grid>
        <Grid item xs={3} md={3}>
            <Typography variant="subtitle2" component="div" align="center">          
                Sim
            </Typography>                       
        </Grid>
        <Grid item xs={3} md={3}>
            <Typography variant="subtitle2" component="div" align="center">          
                Não
            </Typography>            
        </Grid>
        <Grid item xs={6} md={6}>
            <Typography variant="subtitle2" component="div">          
                Foi rápido e eficiente.
            </Typography>
        </Grid>
        <Grid item xs={3} md={3}>
            <Button variant="outlined" size="large" color="success"  fullWidth startIcon={<TagFacesIcon />} >
                
            </Button>
        </Grid>
        <Grid item xs={3} md={3}>
            <Button variant="outlined" size="large" color="error" fullWidth startIcon={<SentimentVeryDissatisfiedIcon />} >
                
            </Button>
        </Grid>
        
        <Grid item xs={6} md={6}>
            <Typography variant="subtitle2" component="div">          
                Equipe foi cortês.
            </Typography>
        </Grid>
        <Grid item xs={3} md={3}>
            <Button variant="outlined" size="large" color="success"  fullWidth startIcon={<TagFacesIcon />} >
                
            </Button>
        </Grid>
        <Grid item xs={3} md={3}>
            <Button variant="outlined" size="large" color="error" fullWidth startIcon={<SentimentVeryDissatisfiedIcon />}>
                
            </Button>
        </Grid>
       
        <Grid item xs={6} md={6}>
            <Typography variant="subtitle2" component="div">          
                Registro da reserva era preciso
            </Typography>
        </Grid>
        <Grid item xs={3} md={3}>
            <Button variant="outlined" size="large" color="success" fullWidth  startIcon={<TagFacesIcon />} >
                
            </Button>
        </Grid>
        <Grid item xs={3} md={3}>
            <Button variant="outlined" size="large" color="error" fullWidth startIcon={<SentimentVeryDissatisfiedIcon />} >
                
            </Button>
        </Grid>
       
    </Grid>
    </Box>
  );
}


