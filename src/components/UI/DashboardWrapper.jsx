import { Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

function DashboardWrapper() {
  return (
    <Grid container>
      <Grid item md={3}>
        <Sidebar />
      </Grid>
      <Grid item md={9} sx={{ backgroundColor: '#F8F9FD' }}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default DashboardWrapper;
