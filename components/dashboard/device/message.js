import React from 'react';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Message() {
  const { msg } = useContext(AuthContext);
  return (
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={3} md={3}>
        </Grid>
        <Grid item xs={6} md={6}>
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="info">{msg}</Alert>
          </Stack>
        </Grid>
      </Grid>
  );
}
