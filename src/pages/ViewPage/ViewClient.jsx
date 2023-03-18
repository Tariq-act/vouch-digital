import styled from '@emotion/styled';
import {
  Button,
  InputAdornment,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  MenuItem,
  Table,
  TextField,
  Typography,
  Stack,
  Pagination,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { clientInfo, tableHead } from './tableInfoData';
import ThreeDotOption from '../../components/threeDot/ThreeDot';

const CustomTextField = styled(TextField)({
  '.MuiOutlinedInput-notchedOutline': {
    border: '1px solid #e6e6e6',
    borderRadius: '50px',
    width: '100%',
  },
  '.MuiInputBase-input': {
    padding: '0.6rem',
  },
});

const CustomSelectField = styled(TextField)({
  '.MuiOutlinedInput-notchedOutline': {
    borderRadius: '10px',
    border: '1px solid #e6e6e6',
  },
});

const CustomTableCell = styled(TableCell)({
  borderBottom: '0px',
});

const CustomPagination = styled(Pagination)({
  '& .MuiPaginationItem-root': {
    marginLeft: '16px',
  },
  '& .MuiPaginationItem-root:hover ': {
    backgroundColor: '#153AC7',
    color: '#fff',
  },
});

function ViewClient() {
  const [select, setSelect] = useState('');

  return (
    <Box padding={'0.5rem 1rem'}>
      <Box sx={{ marginBottom: '1rem' }}>
        <Typography variant='h6' fontWeight={'900'}>
          View Clients
        </Typography>
        <Box>
          <Typography variant='caption' display={'inline'} color={'#030037'}>
            Client Master
          </Typography>
          <Typography variant='caption' display={'inline'} color={'#686687'}>
            / View Clients
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.5rem 1rem',
          }}
        >
          <CustomTextField
            type={'search'}
            placeholder='Search'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon sx={{ color: '#B8BABC' }} />
                </InputAdornment>
              ),
            }}
          />
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={'0.5rem'}
          >
            <Box width={'120px'}>
              <CustomSelectField
                sx={{ borderRadius: '10px' }}
                select
                fullWidth
                label='Select'
                value={select}
                onChange={(e) => setSelect(e.target.value)}
                size='small'
              >
                <MenuItem value='Columns'>Columns</MenuItem>
                <MenuItem value='Rows'>Rows</MenuItem>
              </CustomSelectField>
            </Box>

            <Button
              sx={{
                textTransform: 'capitalize',
                backgroundColor: '#E8EBF9',
                color: '#153AC7',
              }}
            >
              <FileDownloadOutlinedIcon /> Export
            </Button>
          </Box>
        </Box>

        <TableContainer>
          <Table>
            <TableHead
              sx={{
                backgroundColor: '#F8F9FD',
                padding: '0.5rem 0',
              }}
            >
              <TableRow>
                {tableHead.map((item) => (
                  <CustomTableCell>{item}</CustomTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {clientInfo.map((item) => (
                <TableRow>
                  <CustomTableCell sx={{ borderBottom: '0px' }}>
                    <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                      <Box
                        sx={{
                          width: '20px',
                          height: '20px',
                          backgroundColor: 'blue',
                          borderRadius: '50px',
                        }}
                      ></Box>
                      {item.companyName}
                    </Box>
                  </CustomTableCell>
                  <CustomTableCell>{item.email}</CustomTableCell>
                  <CustomTableCell>{item.phoneNo}</CustomTableCell>
                  <CustomTableCell>{item.contactPerson}</CustomTableCell>
                  <CustomTableCell>{item.facilitator}</CustomTableCell>
                  <CustomTableCell>{item.sites}</CustomTableCell>
                  <CustomTableCell>{item.tenants}</CustomTableCell>
                  <CustomTableCell>{item.tenantGroup}</CustomTableCell>
                  <CustomTableCell>
                    <Button>
                      <ThreeDotOption />
                    </Button>
                  </CustomTableCell>
                </TableRow>
              ))}
              <TableRow sx={{ width: '100%' }}></TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Stack>
          <CustomPagination
            count={10}
            shape='rounded'
            // sx={{ width: '100%' }}
            // siblingCount={0}
            // boundaryCount={2}
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default ViewClient;
