import React from 'react';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const ThreeDotOption = () => {
  // state variable for the anchorEl property
  const [anchorEl, setAnchorEl] = React.useState(null);

  // function to handle click event and open the menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // function to handle close event and close the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <MoreVertOutlinedIcon sx={{ color: '#000' }} />
      </IconButton>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.8rem',
          }}
        >
          <RemoveRedEyeOutlinedIcon sx={{ width: '2rem', color: '#686687' }} />
          <Typography>View Details</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ display: 'flex', gap: '0.8rem' }}>
          <EditOutlinedIcon sx={{ width: '2rem', color: '#686687' }} /> Edit
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ display: 'flex', gap: '0.8rem' }}>
          <BlockOutlinedIcon sx={{ width: '2rem', color: '#686687' }} />
          Block Access
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ display: 'flex', gap: '0.8rem' }}>
          <DeleteOutlineOutlinedIcon sx={{ width: '2rem', color: '#686687' }} />
          Delete
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ThreeDotOption;
