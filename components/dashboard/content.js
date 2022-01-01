import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import VendasByCNPJ from './vendasByCNPJ';
import DasCNPJ from './dasCNPJ';
import EntradasByCNPJ from './entradasByCNPJ';
import FormEmpresa from './formEmpresa';
import UploadXML from './uploadXML';
import UploadXLS from './uploadXLS';
import UploadServiceXML from '../../services/uploadXML';
import UploadServiceXLS from '../../services/uploadXLS';
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

async function uploadServiceXML(files) {
  UploadServiceXML.handleUpload(files)
}

async function uploadServiceXLS(files) {  
  UploadServiceXLS.handleUpload(files)
}

export default function Content() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          {/* vazio */}
        </Grid>
        <Grid item xs={4}>
          <UploadXLS uploadXLS={uploadServiceXLS}/>
        </Grid>
        <Grid item xs={4}>
          <UploadXML uploadXML={uploadServiceXML}/>
        </Grid>
        <Grid item xs={3}>
          <FormEmpresa />
        </Grid>        
        
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={1}>
          {/* vazio */}
        </Grid>
        <Grid item xs={5}>
          <VendasByCNPJ />
        </Grid>
        <Grid item xs={2}>
          <EntradasByCNPJ />          
        </Grid>
        <Grid item xs={3}>
          <FormEmpresa />
        </Grid>        
        
      </Grid>




    </Box>

    
  );
}
