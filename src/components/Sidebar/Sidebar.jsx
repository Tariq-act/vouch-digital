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
    <Box sx={{ height: '100vh', padding: '1rem' }}>
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

      <Box sx={{ marginTop: '1rem' }}>
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
    </Box>
  );
}

export default Sidebar;
