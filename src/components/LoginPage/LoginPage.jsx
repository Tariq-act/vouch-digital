import { Box, Grid } from '@mui/material';
import React from 'react';
import Login from '../Login/Login';

const LoginPage = () => {
  return (
    <Grid container sx={{ display: 'flex' }}>
      <Grid item sm={'12'} md='6' lg='5' width={'100%'}>
        <Login />
      </Grid>
      <Grid
        item
        sm={'12'}
        md='6'
        lg='7'
        sx={{ backgroundColor: '#1334B3', height: '100vh', width: '100%' }}
      ></Grid>
    </Grid>
  );
};

export default LoginPage;
