import {
  InputAdornment,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { sidebarData } from './SidebarData';

const CustomTextField = styled(TextField)({
  width: '100%',
  marginTop: '1rem',
  '.MuiOutlinedInput-notchedOutline': {
    border: '1px solid #e6e6e6',
    borderRadius: '50px',
    width: '100%',
  },
  '.MuiInputBase-input': {
    padding: '0.6rem',
  },
});
const activeLink = {
  width: '100%',
  textDecoration: 'none',
  color: '#fff',
  backgroundColor: '#153AC7',
  padding: '0.5rem',
  borderRadius: '8px',
  boxShadow: '0px 4px 16px rgba(3, 0, 55, 0.08)',
  transition: 'all .2s ease',
};
const normalLink = {
  width: '100%',
  padding: '0.5rem',
  textDecoration: 'none',
  color: '#686687',
};

function Sidebar() {
  return (
    <Box
      sx={{
        height: '100vh',
        padding: '1rem',
        // position: 'relative',
      }}
    >
      <Box>
        <Typography fontWeight={'bold'}>Company name</Typography>
        <CustomTextField
          type={'search'}
          placeholder='Search modules'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: '#B8BABC' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box
        sx={{
          marginTop: '1rem',
        }}
      >
        <Box>
          <Typography
            variant='p'
            fontWeight={'bold'}
            textTransform={'uppercase'}
            color={'#B8BABC'}
          >
            Client Master
          </Typography>

          <List>
            {sidebarData.map((item, idx) => (
              <ListItem key={idx}>
                <NavLink
                  to={item.path}
                  style={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  {item.title}
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'absolute',
            gap: '0.5rem',
            bottom: '1rem',
            // width: '100%',
          }}
        >
          <Box
            sx={{
              width: '20px',
              height: '20px',
              borderRadius: '50px',
              backgroundColor: '#030037',
            }}
          ></Box>
          <Box>
            <Typography fontWeight={'bold'} fontSize={'1rem'}>
              James Burton
            </Typography>
            <Typography fontSize={'.8rem'}>james@thevouch.digital</Typography>
          </Box>
          <LogoutOutlinedIcon sx={{ color: '#B8BABC' }} />
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;

{
  /* <Box>
        <Typography fontWeight={'bold'}>Company name</Typography>
        <CustomTextField
          type={'search'}
          placeholder='Search modules'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: '#B8BABC' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box> */
}

{
  /* <Box>
<Typography
  variant='p'
  fontWeight={'bold'}
  textTransform={'uppercase'}
  color={'#B8BABC'}
>
  Client Master
</Typography>

<List>
  {sidebarData.map((item, idx) => (
    <ListItem key={idx}>
      <NavLink
        to={item.path}
        style={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        {item.title}
      </NavLink>
    </ListItem>
  ))}
</List>
</Box>

<Box
sx={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'absolute',
  gap: '0.5rem',
  bottom: '1rem',
  // width: '100%',
}}
>
<Box
  sx={{
    width: '20px',
    height: '20px',
    borderRadius: '50px',
    backgroundColor: '#030037',
  }}
></Box>
<Box>
  <Typography fontWeight={'bold'} fontSize={'1rem'}>
    James Burton
  </Typography>
  <Typography fontSize={'.8rem'}>james@thevouch.digital</Typography>
</Box>
<LogoutOutlinedIcon sx={{ color: '#B8BABC' }} />
</Box> */
}
