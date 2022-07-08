import React, { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';


export default function Question({ codigo, mainQuestion, questions, handleAnswer}) {   
    
  return (
    <Box>
    <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
            <Typography variant="h6" gutterBottom component="div" sx={{ flexGrow: 1 }}>          
                {codigo}/8. {mainQuestion}
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
        {questions.map(
            item => (
            <>
                <Grid item xs={6} md={6} key={item.codigo}>
                    <Typography variant="subtitle2" component="div">          
                        {item}
                    </Typography>
                </Grid>
                <Grid item xs={3} md={3}>
                    <Button 
                    variant="outlined" 
                    size="large" color="success"  
                    fullWidth startIcon={<TagFacesIcon />}
                    onClick={handleAnswer} 
                    >
                    </Button>
                </Grid>
                <Grid item xs={3} md={3}>
                    <Button variant="outlined" size="large" color="error" fullWidth startIcon={<SentimentVeryDissatisfiedIcon />} >
                    
                    </Button>
                </Grid>
            </> 
            )
        )}
        
       
    </Grid>
    </Box>
  );
}


