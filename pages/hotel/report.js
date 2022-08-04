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
import Charts from '../../components/hotel/charts'
import Chart0 from '../../components/hotel/chart0'
import Chart1 from '../../components/hotel/chart1'
import Chart2 from '../../components/hotel/chart2'

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
    }
    loadAll();
  }, []);
  
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Box sx={{ flexGrow: 1, mt: 2 }}>
              {isAuthenticated &&<div>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
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
                  <Grid item xs={8}>
                    <ViewTenants 
                    dataTenants = {dataTenants}
                    setDataFeedback = {setDataFeedback}
                    setDataSuggest = {setDataSuggest}
                    />                    
                  </Grid>
                  <Grid item xs={12}>
                      <Chart0 dataFeedback = {dataFeedback}/>                  
                  </Grid>
                  <Grid item xs={12}>
                    <Chart1 dataFeedback={dataFeedback}/>
                  </Grid>
                <Grid item xs={12}>
                   <Chart2 dataSuggest={dataSuggest}/>
                </Grid>                
                <Grid>
                  <Charts dataFeedback={dataFeedback} />
                </Grid>
                </Grid>
          
              </div>}
            {!isAuthenticated && <Login />}
          </Box>        
        </Container>
      </ThemeProvider>
    );
    
  }

 