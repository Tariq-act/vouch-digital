import { Button } from '@mui/material';
import { Box } from '@mui/system';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReplayIcon from '@mui/icons-material/Replay';

function FormButton() {
  return (
    <Box sx={{ margin: '1rem' }}>
      <Button
        sx={{
          backgroundColor: '#153AC7',
          color: '#fff',
          textTransform: 'capitalize',
          fontWeight: '700',
          '&:hover': {
            backgroundColor: '#153AC775',
          },
        }}
      >
        Save & Continue
        <ArrowForwardIosIcon fontSize='0.8rem' />
      </Button>
      <Button
        sx={{
          color: '#686687',
          textTransform: 'capitalize',
          fontWeight: '700',
          '&:hover': {
            // backgroundColor: 'red',
          },
        }}
      >
        <ReplayIcon />
        Reset
      </Button>
    </Box>
  );
}

export default FormButton;
