import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Chart1({yes, no, total}) {
    console.log('yes')
    console.log(yes)
    console.log('no')
    console.log(no)
    console.log('total')
    console.log(total)
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      {/* <CircularProgress variant="determinate" {...total} /> */}
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(yes/total)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
