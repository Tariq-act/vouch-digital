import { Box, Drawer } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

function DashboardWrapper() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: '18%',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            borderRight: '0px',
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Sidebar />
      </Drawer>

      <Box
        sx={{
          backgroundColor: '#F8F9FD',
          flexGrow: 1,
          // bgcolor: 'background.default',
          p: 3,
        }}
        component='main'
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default DashboardWrapper;
