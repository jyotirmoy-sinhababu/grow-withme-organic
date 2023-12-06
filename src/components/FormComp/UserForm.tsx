import {
  FormControl,
  FormGroup,
  FormLabel,
  TextField,
  Button,
} from '@mui/material';

const UserForm = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '11%',
      }}
    >
      <form style={{}}>
        <FormControl
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '19px',
            border: '2px solid black',
            borderRadius: '17px',
            height: '480px',
            width: '480px',
          }}
        >
          <FormGroup sx={{ display: 'flex', gap: '12px' }}>
            <FormLabel sx={{ color: ' hsl(230, 29%, 20%)' }}>
              Enter your name.
            </FormLabel>
            <TextField sx={{ color: 'black', width: '400px' }} type='text' />
            <FormLabel sx={{ color: ' hsl(230, 29%, 20%)' }}>
              Enter your phone number
            </FormLabel>
            <TextField sx={{ color: 'black', width: '400px' }} type='number' />
            <FormLabel sx={{ color: ' hsl(230, 29%, 20%)' }}>
              Enter your email
            </FormLabel>
            <TextField sx={{ color: 'black', width: '400px' }} type='email' />
          </FormGroup>
          <Button
            sx={{
              color: 'black',
              height: '41px',
              width: '150px',
              border: '1px solid black',
            }}
            type='submit'
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default UserForm;
