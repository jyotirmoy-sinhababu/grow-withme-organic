import {
  FormControl,
  FormGroup,
  FormLabel,
  TextField,
  Button,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  ////
  const handleChange = (e: any) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  console.log(inputData);

  ////
  const handleSubmit = () => {
    if (inputData.userName == '') {
      setErr({ ...err, nameErr: 'Required' });
    } else if (!/^[a-zA-Z ]+$/.test(inputData.userName)) {
      setErr({ ...err, nameErr: 'Wrong format' });
    } else if (inputData.userNumber == '') {
      setErr({ ...err, numErr: 'Number should be 10 digits' });
    } else if (!/^[0-9]+$/.test(inputData.userNumber)) {
      setErr({ ...err, numErr: 'Wrong format' });
    } else if (inputData.userEmail == '') {
      setErr({ ...err, emailErr: ' Required' });
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        inputData.userEmail
      )
    ) {
      setErr({ ...err, emailErr: 'Wrong format' });
    } else {
      localStorage.setItem('data', JSON.stringify(inputData));
      navigate('/sec');
      console.log('done');
    }
  };
  ////

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
          e.preventDefault();
          handleSubmit();
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
            {err.nameErr && <p>{err.nameErr}</p>}
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
            {err.numErr && <p>{err.numErr}</p>}
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
            {err.emailErr && <p>{err.emailErr}</p>}
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
