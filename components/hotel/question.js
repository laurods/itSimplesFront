import React, { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function Question(
    { 
        codigo, 
        mainQuestion, 
        questions, 
        answers, 
        handleAnswer, 
        show,
        questionsLength
    }) {   
  
  return (
    <Box>              
    {!show && <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
            <Typography variant="h6" gutterBottom component="div" sx={{ flexGrow: 1 }}>          
                {codigo}/{questionsLength}. {mainQuestion}
            </Typography> 
        </Grid>        
        {questions.map(
            (item, index) => (
            <>
                <Grid item xs={12} md={12} key={item.codigo}>
                    <Typography variant="subtitle1" component="div">          
                        {item}
                    </Typography>
                </Grid>
            {answers.map(
            answer => (
            <>               
                <Grid item xs={6} md={6}>
                    <Button 
                    variant="outlined" 
                    size="large" 
                    color={answer == 'Não'? "error" : "info"}
                    onClick={() => {handleAnswer(item, answer, index)}}
                    fullWidth
                    >
                        {answer}
                    </Button>
                </Grid>               
            </> 
            )
            )}            
            </> 
            )
        )}
       
    </Grid>
    }

    {show && <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
            <Typography variant="h6" gutterBottom component="div" sx={{ flexGrow: 1 }}>          
                {codigo}/8. {mainQuestion}
            </Typography> 
        </Grid>        
        {questions.map(
            item => (
            <>
                <Grid item xs={12} md={12} key={item.codigo}>
                    <Typography variant="subtitle2" component="div">          
                        {item}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} key={item.codigo}>
                    <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    placeholder='Escreva uma ou algumas palavras...'
                    style={{ width: '100%', fontSize: '20px' }}
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Button 
                    variant="contained" 
                    size="large" 
                    color="success"
                    onClick={handleAnswer}
                    fullWidth
                    >
                       Finalizar Pesquisa 
                    </Button>
                </Grid>                        
            </> 
            )
        )}
       
    </Grid>
    }
   
    </Box>
  );
}


