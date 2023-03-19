import { Box, CardContent, Grid, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FormButton from '../../../components/FormButton/FormButton';

function CreateProfile() {
  return (
    <CardContent>
      <Box>
        <Box>
          <Typography variant='h5' fontWeight={'700'}>
            Create Client Profile
          </Typography>
          <Typography variant='body1' color={'#686687'}>
            Add some basic information related to the client.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '1rem',
          }}
        >
          <Box
            component='label'
            variant='contained'
            sx={{
              padding: '1rem',
              border: '1px solid #6666',
              width: '100px',
              height: '100px',
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            htmlFor='account-settings-upload-image'
          >
            <input
              hidden
              type='file'
              accept='image/png, image/jpeg'
              id='account-settings-upload-image'
            />
            <Box>
              <AddIcon sx={{ color: '#6666' }} />
            </Box>
          </Box>
          <Box>
            <Typography fontSize={'1.2rem'} fontWeight={'700'}>
              Company Logo
            </Typography>
            <Typography variant='body2' color={'#686687'}>
              Logo ratio shoud be 1:1 and should be 120px X 120 px
            </Typography>
          </Box>
        </Box>

        <Grid container sx={{ marginTop: '1rem' }} spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Company Name *' />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Website' />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Select Business Category *' />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Select Facility Management Company *' />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Company Email Address *' />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Mobile Number *' />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Select State *' />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <TextField fullWidth label='Select City *' />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth label='Pincode *' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            {' '}
            <TextField fullWidth label='GST Number *' />
          </Grid>
          <Grid item xs={12} md={6}>
            {' '}
            <TextField fullWidth label='Fax Number' />
          </Grid>
          <FormButton />
        </Grid>
      </Box>
    </CardContent>
  );
}

export default CreateProfile;
