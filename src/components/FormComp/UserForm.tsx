import { FormControl, FormGroup, TextField } from '@mui/material';

const UserForm = () => {
  return (
    <div>
      <form>
        <FormControl>
          <FormGroup>
            <TextField type='text' />
            <TextField type='number' />
            <TextField type='email' />
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
};

export default UserForm;
