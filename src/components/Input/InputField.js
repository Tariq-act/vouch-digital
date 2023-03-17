import React from 'react';
import { TextField } from '@mui/material';
import styled from '@emotion/styled';

const CustomTextField = styled(TextField)({
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#b9b9b9',
  },

  '.MuiOutlinedInput-notchedOutline': {
    border: '1px solid #e6e6e6',
    borderRadius: '8px',
    width: '100%',
  },
});

export default function MyTextField(props) {
  return <CustomTextField variant='outlined' {...props} />;
}
