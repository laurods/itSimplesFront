import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MovimentoCNPJ from './movimentoCNPJ';
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
  console.log(files);
  
  const data = new FormData();
  data.append('file', files);
  console.log(data);
  // axios.post('/api/xmlcompras', data).then(res => {
  //   console.log(res);
  //   console.log(res.data)                      
  // })
  // .catch((error) => {
  //   console.log(error.res.data);
  //   console.log(error.res.status);
  //   console.log(error.res.headers);
  // });

  //UploadServiceXML.handleUpload(files)
}

async function uploadServiceXLS(files) {
  console.log(files);
  UploadServiceXLS.handleUpload(files)
}

export default function Content() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          {/* vazio */}
        </Grid>
        <Grid item xs={3}>
          <MovimentoCNPJ />
        </Grid>
        <Grid item xs={4}>
          <UploadXML uploadXML={uploadServiceXML}/>
          <UploadXLS uploadXLS={uploadServiceXLS}/>
        </Grid>
        <Grid item xs={3}>
          <FormEmpresa />
        </Grid>
      </Grid>
    </Box>
  );
}
