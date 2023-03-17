import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  FormControl,
  Button,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutline from '@mui/icons-material/PersonOutline';
import styled from '@emotion/styled';
import { LoginApi } from '../../services/ApiCall';
import { useNavigate } from 'react-router-dom';

const CustomTextField = styled(TextField)({
  width: '100%',
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#b9b9b9',
  },
  '.Mui-focused': {
    borderColor: 'red',
  },
  '.MuiOutlinedInput-notchedOutline': {
    border: '1px solid #e6e6e6',
    borderRadius: '8px',
    width: '100%',
  },
});

function Login() {
  const [state, setState] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await LoginApi(state);
      navigate('/dashboard/viewClient');
    } catch (error) {
      console.log(error);
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: 'auto',
        gap: '0.5rem',
        padding: '0 6rem',
      }}
    >
      <Typography variant='h4' fontWeight={'bold'}>
        Welcome
      </Typography>
      <Typography variant='p' color='#686687'>
        Enter your Username and Password.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          gap: '.5rem',
        }}
      >
        <FormControl
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <CustomTextField
            placeholder='Username'
            name='email'
            value={state.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <PersonOutline sx={{ color: '#B8BABC' }} />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <FormControl variant='outlined' sx={{ width: '100%' }}>
          <CustomTextField
            name='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            value={state.password}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LockOutlinedIcon sx={{ color: '#B8BABC' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={handleClickShowPassword} edge='end'>
                    {showPassword ? (
                      <VisibilityOffOutlinedIcon sx={{ color: '#B8BABC' }} />
                    ) : (
                      <VisibilityOutlinedIcon sx={{ color: '#B8BABC' }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <Button
          variant='contained'
          onClick={handleSubmit}
          sx={{
            backgroundColor: '#1334B3',
            display: 'block',
            width: '100%',
            textTransform: 'capitalize',
          }}
        >
          Login
        </Button>

        <Button sx={{ textTransform: 'capitalize', color: '#686687' }}>
          Forget Password?
        </Button>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '1rem',
          color: '#233244',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            fontSize: '0.5rem',
          }}
        >
          <Typography variant='body2'>Terms of Use</Typography>
          <Typography variant='body2'>Privacy Policy</Typography>
        </Box>
        <Typography fontSize={'0.8rem'}>
          © Punctualiti 2022. All rights reserved
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
