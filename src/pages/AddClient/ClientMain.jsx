// ** React Imports
import { useState } from 'react';

// ** MUI Imports

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { styled } from '@mui/material/styles';
import MuiTab from '@mui/material/Tab';
import CreateProfile from './AddClientComponents/CreateProfile';
import PaymentSetup from './AddClientComponents/PaymentSetup';

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67,
  },
}));

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    // display: "none",
    marginLeft: theme.spacing(1.5),
    fontSize: '0.72rem',
  },
}));

const CustomTabList = styled(TabList)({
  '.css-1q8c8mp-MuiButtonBase-root-MuiTab-root.Mui-selected': {
    color: '#153AC7',
  },
});

export default function OnboardingPage() {
  const [value, setValue] = useState('createProfile');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ margin: '1rem' }}>
      <TabContext value={value}>
        <CustomTabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='createProfile'
            label={
              <Box fontWeight={'bold'}>
                <TabName>01 Create Profile</TabName>
              </Box>
            }
          />
          <Tab
            value='paymentSetup'
            label={
              <Box fontWeight={'bold'}>
                <TabName>02 Payment Setup</TabName>
              </Box>
            }
          />
          <Tab
            value='themeSetup'
            label={
              <Box fontWeight={'bold'}>
                <TabName>03 Theme Setup</TabName>
              </Box>
            }
          />
          <Tab
            value='modulesSetup'
            label={
              <Box fontWeight={'bold'}>
                <TabName>04 modules Setup</TabName>
              </Box>
            }
          />
        </CustomTabList>

        <TabPanel sx={{ p: 0 }} value='createProfile'>
          <CreateProfile />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='paymentSetup'>
          <PaymentSetup />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='themeSetup'></TabPanel>
        <TabPanel sx={{ p: 0 }} value='modulesSetup'></TabPanel>
      </TabContext>
    </Card>
  );
}
