import React, { useState, useEffect } from 'react';
import { Button, Modal, Space } from 'antd';
import { useAuthenticate } from 'utils/services';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    '&:hover': {
      textDecoration: 'none',
      color: '#FFFFFF',
    },
    '&:active': {
      outline: 'none',
      color: '#adadad',
    },
    '&:focus': {
      outline: 'none',
    },
    textDecoration: 'none',
    textTransform: 'none',
    color: '#FFFFFF',
    fontFamily: ['Montserrat', 'sans-serif'],
    padding: 0,
    backgroundColor: 'transparent',
    display: 'block',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 700,
  },
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

interface LoginFormSettings {
  visible: boolean;
  invalid: boolean;
  onLogin: (values: any) => void;
  onCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

type FormInputs = {
  email: string;
  password: string;
};

const LoginForm = ({
  visible,
  invalid,
  onLogin,
  onCancel,
}: LoginFormSettings) => {
  const classes = useStyles();

  useEffect(() => {
    reset();
  }, [visible]);

  const { register, handleSubmit, errors, reset } = useForm<FormInputs>();
  return (
    <Modal visible={visible} title='Login' footer={null} onCancel={onCancel}>
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
              <span
                style={{ color: '#bf1f1f', fontWeight: 700, float: 'right' }}
              >
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
              <span
                style={{ color: '#bf1f1f', fontWeight: 700, float: 'right' }}
              >
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
          <Button onClick={onCancel}>Cancel</Button>
          <button className={classes.login} type='submit'>
            Login
          </button>
        </div>
      </form>
    </Modal>
  );
};

type LoginProps = {
  followingCount?: string;
  followerCount?: string;
};

function Login({ followingCount, followerCount }: LoginProps) {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const [authenticate] = useAuthenticate();
  const history = useHistory();

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
        login.data.authenticate &&
        login.data.authenticate.jwtToken
      ) {
        localStorage.setItem('token', login.data.authenticate.jwtToken);
        setVisible(false);
        history.push('/home'); // can change this to simply load the page the user was on before login
      } else {
        setInvalid(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {followerCount === undefined && followingCount === undefined && (
        <Button onClick={() => setVisible(true)}>Login</Button>
      )}
      {followerCount !== undefined && followingCount !== undefined && (
        <>
          <button
            onClick={() => {
              setVisible(true);
            }}
            className={classes.button}
          >
            {followingCount} Following
          </button>
          <button
            onClick={() => {
              setVisible(true);
            }}
            className={classes.button}
          >
            {followerCount} Followers
          </button>
        </>
      )}
      <LoginForm
        visible={visible}
        invalid={invalid}
        onLogin={onLogin}
        onCancel={() => {
          setVisible(false);
          setInvalid(false);
        }}
      />
    </>
  );
}
export default Login;
