import React, { useContext} from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function ViewDevice() {
    const {device} = useContext(AuthContext);    
  return (
    <>
        <Grid item xs={3} md={3}>
        </Grid>

        <Grid item xs={1} md={1}>
          <TextField
            disabled
            label="Filial"
            id="filial"
            value={device[0].Grupo}
            fullWidth
            variant="standard"
          />
        </Grid>
        

        <Grid item xs={1} md={1}>
          <TextField
            disabled
            label="Modelo"
            id="modelo"
            value={device[0].Modelo}
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={1} md={1}>
          <TextField
            disabled
            label="Situação"
            id="situacao"
            value={device[0].Status}
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={1} md={1}>
          <TextField
            disabled
            label="Locação"
            id="locacao"
            value={device[0].VLRLOCACAO}
            fullWidth
            variant="standard"
          />
        </Grid>      
    </>
  );
}
