import { Box, Grid } from '@mui/material';
import React from 'react';
import Login from '../Login/Login';

const LoginPage = () => {
  return (
    <Grid container sx={{ display: 'flex' }}>
      <Grid md='5'>
        <Login />
      </Grid>
      <Grid
        item
        md='7'
        sx={{ backgroundColor: '#1334B3', height: '100vh', width: '100%' }}
      ></Grid>
    </Grid>
  );
};

export default LoginPage;
