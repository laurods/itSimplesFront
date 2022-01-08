import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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


async function uploadServiceXLS(files) {  
  UploadServiceXLS.handleUpload(files)
}

export default function Content() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* UPLOADS */}
      <Grid container spacing={2}>
        <Grid item xs={1}>
          {/* vazio */}
        </Grid>        
        <Grid item xs={10}>
        <UploadXLS uploadXLS={uploadServiceXLS}/>
        </Grid>
        <Grid item xs={1}>
          {/* vazio */}
        </Grid>               
        
      </Grid>
      
    </Box>

    
  );
}
