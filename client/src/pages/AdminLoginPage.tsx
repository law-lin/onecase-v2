import React, { useState } from 'react';

import { Button, Space } from 'antd';
import { useForm } from 'react-hook-form';
import { createUseStyles } from 'react-jss';
import { useAuthenticateAdmin } from 'utils/services';
import { useHistory } from 'react-router-dom';

const useStyles = createUseStyles({
  input: {
    width: '100%',
    border: '1px solid #d9d9d9',
    padding: '4px 11px',
    '&:hover': {
      borderColor: '#40a9ff',
    },
    '&:focus': {
      outline: 'none',
      borderColor: '#40a9ff',
      boxShadow: '0 0 0 2px rgba(24, 144, 255, 0.2)',
    },
  },
  login: {
    padding: '4px 15px',
    border: '1px solid transparent',
    background: '#1890ff',
    borderColor: '#1890ff',
    color: '#FFFFFF',
    marginLeft: '7px',
    cursor: 'pointer',
    '&:hover': {
      background: '#40a9ff',
      borderColor: '#40a9ff',
    },
    '&:focus': {
      outline: 'none',
      borderColor: '#40a9ff',
    },
    '&:active': {
      background: '#096dd9',
      borderColor: '#096dd9',
    },
  },
});

type FormInputs = {
  email: string;
  password: string;
};

const AdminLoginPage = () => {
  const [invalid, setInvalid] = useState(false);
  const history = useHistory();

  const classes = useStyles();
  const [authenticate] = useAuthenticateAdmin();
  const onLogin = async (values: FormInputs) => {
    try {
      const login = await authenticate({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
      if (
        login &&
        login.data &&
        login.data.authenticateAdmin &&
        login.data.authenticateAdmin.jwtToken
      ) {
        localStorage.setItem('token', login.data.authenticateAdmin.jwtToken);
        history.go(0);
      } else {
        setInvalid(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const { register, handleSubmit, errors, reset } = useForm<FormInputs>();

  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <Space direction='vertical' style={{ width: '100%' }}>
        <div>
          <label htmlFor='email' title='Email'>
            Email
          </label>
          <input
            type='text'
            name='email'
            ref={register({
              required: true,
            })}
            className={classes.input}
          />
          {errors.email?.type === 'required' && (
            <span style={{ color: '#bf1f1f', fontWeight: 700, float: 'right' }}>
              Email cannot be empty!
            </span>
          )}
        </div>
        <div>
          <label htmlFor='password' title='Password'>
            Password
          </label>
          <input
            type='password'
            name='password'
            ref={register({
              required: true,
            })}
            className={classes.input}
          />
          {errors.password?.type === 'required' && (
            <span style={{ color: '#bf1f1f', fontWeight: 700, float: 'right' }}>
              Password cannot be empty!
            </span>
          )}
        </div>
        {invalid && (
          <span style={{ color: '#bf1f1f', fontWeight: 700 }}>
            Invalid email or password.
          </span>
        )}
      </Space>
      <div
        style={{
          marginTop: '20px',
          textAlign: 'right',
          borderTop: '1px solid #F0F0F0',
          borderRadius: '0 0 2px 2px',
          padding: '10px 0',
        }}
      >
        <button className={classes.login} type='submit'>
          Login
        </button>
      </div>
    </form>
  );
};

export default AdminLoginPage;
