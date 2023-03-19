import { Box, Grid, styled, Typography } from '@mui/material';
// import { style } from '@mui/system';
import React from 'react';
import Login from '../Login/Login';

const CustomBoxStyle = styled(Box)({
  position: 'relative',
  width: '450px',
  height: '250px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  marginBottom: '1rem',
  transform: 'rotateY(20deg)',
  boxShadow: '-10px 10px 0px rgba(0,0,0,0.1)',
  zIndex: '10',
});

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
        sx={{
          backgroundColor: '#1334B3',
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: '1500px',
        }}
      >
        <CustomBoxStyle></CustomBoxStyle>
        <Box sx={{ color: '#fff', textAlign: 'center', width: '80%' }}>
          <Typography variant='h4' fontWeight={'700'}>
            360° Solution for Asset Management
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
