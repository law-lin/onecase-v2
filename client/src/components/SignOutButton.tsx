import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

const SignOutButton = () => {
  const history = useHistory();
  const signOut = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <>
      <Button onClick={signOut}>Sign Out</Button>
    </>
  );
};

export default SignOutButton;
