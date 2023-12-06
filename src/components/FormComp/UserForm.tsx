import {
  FormControl,
  FormGroup,
  FormLabel,
  TextField,
  Button,
} from '@mui/material';

import { useState } from 'react';

const UserForm = () => {
  const [inputData, setInputData] = useState<any>({
    userName: '',
    userEmail: '',
    userNumber: '',
  });

  const [err, setErr] = useState({
    nameErr: '',
    emailErr: '',
    numErr: '',
  });

  //
  const handleChange = (e: any) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  console.log(inputData);
  //
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputData.userName == '' || !/^[a-zA-Z ]+$/.test(inputData.userName)) {
      setErr({ ...err, nameErr: 'Please write your proper name' });
    } else if (
      inputData.userNumber == '' ||
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        inputData.userNumber
      )
    ) {
      setErr({ ...err, numErr: 'Please write your 10 digit mobile number' });
    } else if (
      inputData.userEmail == '' ||
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        inputData.userEmail
      )
    ) {
      setErr({ ...err, emailErr: 'Please write proper email address' });
    } else {
      localStorage.setItem('data', JSON.stringify(inputData));
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '9%',
      }}
    >
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <FormControl
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '19px',
            borderRadius: '17px',
            height: '480px',
            width: '480px',
            backgroundColor: 'hsl(207, 33%, 95%)',
          }}
        >
          <FormGroup sx={{ display: 'flex', gap: '12px' }}>
            <FormLabel sx={{ color: ' hsl(230, 29%, 20%)', fontWeight: '600' }}>
              Enter your name.
            </FormLabel>
            <TextField
              sx={{
                color: 'black',
                width: '400px',
                fontSize: '17px',
                fontWeight: '600',
              }}
              type='text'
              name='userName'
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {}
            <FormLabel sx={{ color: ' hsl(230, 29%, 20%)', fontWeight: '600' }}>
              Enter your phone number.
            </FormLabel>
            <TextField
              sx={{
                color: 'black',
                width: '400px',
                fontSize: '17px',
                fontWeight: '600',
              }}
              type='number'
              name='userNumber'
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {}
            <FormLabel sx={{ color: ' hsl(230, 29%, 20%)', fontWeight: '600' }}>
              Enter your email.
            </FormLabel>
            <TextField
              sx={{
                color: 'black',
                width: '400px',
                fontSize: '17px',
                fontWeight: '600',
              }}
              type='email'
              name='userEmail'
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {}
          </FormGroup>
          <Button
            sx={{
              color: 'black',
              height: '49px',
              width: '150px',
              border: '1px solid black',
              fontWeight: '600',
              fontSize: '17px',
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
