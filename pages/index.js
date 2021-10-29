import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Top from '../components/landpage/top';

export default function Index() {
  return (
    <Container> 
      <Grid item xs={12}>           
        <Top/>           
      </Grid> 
    </Container>
  );
}
