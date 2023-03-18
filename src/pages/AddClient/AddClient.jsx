import { Box, Typography } from '@mui/material';
import React from 'react';
import OnboardingPage from './ClientMain';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

function AddClient() {
  return (
    <Box padding={'0.5rem 1rem'}>
      <Box
        sx={{
          display: 'flex',
          alignItem: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ marginBottom: '1rem' }}>
          <Typography variant='h6' fontWeight={'900'}>
            Add Client
          </Typography>
          <Box>
            <Typography
              variant='caption'
              display={'inline'}
              marginRight={'0.4rem'}
              color={'#030037'}
            >
              Client Master
            </Typography>
            <Typography
              variant='caption'
              marginRight={'0.4rem'}
              display={'inline'}
            >
              / Add Client
            </Typography>
            <Typography variant='caption' display={'inline'} color={'#686687'}>
              / Create Profile
            </Typography>
          </Box>
        </Box>
        <Box>
          <NotificationsNoneOutlinedIcon sx={{ color: '#686687' }} />
        </Box>
      </Box>
      <Box>
        <OnboardingPage />
      </Box>
    </Box>
  );
}

export default AddClient;
