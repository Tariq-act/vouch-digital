import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function ViewClient() {
  return (
    <Grid container>
      <Grid item>
        <Typography variant='h6' fontWeight={'bold'}>
          View Client
        </Typography>
        <Box>
          <Typography>Client Master</Typography>
          <Typography>View Clients</Typography>
        </Box>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}

export default ViewClient;
