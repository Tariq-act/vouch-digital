import { Grid, Typography } from '@mui/material';
import React from 'react';

function AddClient() {
  return (
    <Grid container>
      <Grid item>
        <Typography variant='h5' fontWeight={'bold'}>
          View Client
        </Typography>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}

export default AddClient;
