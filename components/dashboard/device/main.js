import React , { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Search from './search'
import ViewDevice from './viewDevice'
import Form from './form'
import FormEdit from './formEdit'
import Message from './message'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

export default function Main() {
    const {showDevice, showMsg, showForm, showFormEdit } = useContext(AuthContext);
    
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={1} md={1}>
      </Grid>
      <Grid item xs={5} md={5}>
        <Search />
      </Grid>
        
        {showMsg && <Message />}
        {showDevice && <ViewDevice />}
        {showForm && <Form />}
        {showFormEdit && <FormEdit />}
      </Grid>
        
    </Box>

    </ThemeProvider>
  );
}
