import { CardContent, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FormButton from '../../../components/FormButton/FormButton';

function PaymentSetup() {
  return (
    <CardContent>
      <Box>
        <Box>
          <Typography variant='h5' fontWeight={'700'}>
            Payment Setup
          </Typography>
          <Typography variant='body1' color={'#686687'}>
            Set up payments for the client.
          </Typography>
        </Box>

        <Grid container sx={{ marginTop: '1rem' }} spacing={2}>
          <Grid item xs={12} md={12}>
            <TextField fullWidth label='Billing Address *' />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Select State *' />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Select Business Category *' />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Select Facility Management Company *' />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Company Email Address *' />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Mobile Number *' />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <TextField fullWidth label='Select City *' />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth label='Pincode *' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Select State *' />
          </Grid>
          <Grid item xs={12} md={6}>
            {' '}
            <TextField fullWidth label='GST Number *' />
          </Grid>

          <FormButton />
        </Grid>
      </Box>
    </CardContent>
  );
}

export default PaymentSetup;
