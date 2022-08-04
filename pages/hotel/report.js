import React, {  useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../../contexts/AuthContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@material-ui/icons/Send';
import Login from '../../components/login/login';
import ViewTenants from '../../components/hotel/adm/viewTenants';

const theme = createTheme();


export default function Report() {
  const {isAuthenticated} = useContext(AuthContext);
  const [text, setText] = useState('')   
  const [dataFeedback, setDataFeedback] = useState([]);
  const [dataSuggest, setDataSuggest] = useState([]);
  const [dataTenants, setDataTenants] = useState([]);

  

  useEffect(() => {  
    const loadAll = async() =>{      
      const FeedBack = [];
      const tenants = await axios.post('https://it-simples-front.vercel.app/api/hotel/getQuizzesAll');
      const listTenants = tenants.data;
      setDataTenants(tenants.data)
      if(listTenants.length > 0) {
        listTenants.map((tenant)=>{
          console.log('tenant')
          console.log(tenant)

          // item.map(({question, answer})=>{
          //   FeedBack.push({
          //       question: question,
          //       answer:answer            
          //   })      
          // })        
        })
        // setDataSuggest(listSuggest)
        // setDataFeedback(FeedBack)

      }
     
          
      
    }
    loadAll();
  }, []);
  
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Box sx={{ flexGrow: 1, mt: 2 }}>
              {isAuthenticated &&<div>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8}>
                    <TextField
                      margin="normal"
                      inputProps={{style: {fontSize: 40}}}
                      label="Pesquisa"
                      id="text"
                      value={text}
                      onChange={(event) => {setText(event.target.value)}}
                      fullWidth
                      variant="standard"
                      autoComplete="off"
                    />
                    
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <ViewTenants 
                    dataTenants = {dataTenants}
                    setDataFeedback = {setDataFeedback}
                    setDataSuggest = {setDataSuggest}
                    />                    
                  </Grid>
                 
                </Grid>
          
              </div>}
            {!isAuthenticated && <Login />}
          </Box>        
        </Container>
      </ThemeProvider>
    );
    
  }

 