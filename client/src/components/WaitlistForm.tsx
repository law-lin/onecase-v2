import React from 'react';
import { Input } from 'antd';
import { createUseStyles } from 'react-jss';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const useStyles = createUseStyles({
  button: {
    padding: '3px 12px',
    backgroundColor: '#00A1E5',
    fontFamily: ['Mukta Mahee', 'sans-serif'],
    color: '#FFFFFF',
    fontSize: '24px',
    borderRadius: 10,
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#005173',
    },
    '&:focus': {
      outline: 'none',
    },
  },
});
const WaitlistForm = () => {
  const classes = useStyles();
  return (
    <MailchimpSubscribe
      url='https://gmail.us7.list-manage.com/subscribe/post?u=700e7fb6f77bcf01fea26a4d1&amp;id=53fcfc960d'
      render={({ subscribe, status, message }) => (
        <>
          <form
            onSubmit={(e: any) => {
              e.preventDefault();
              subscribe({ EMAIL: e.target.email.value });
            }}
          >
            <Input
              type='email'
              name='email'
              style={{
                padding: 2,
                borderRadius: 5,
                backgroundColor: '#FFFFFF',
                marginBottom: '20px',
              }}
            />
            <button type='submit' className={classes.button}>
              Join Waitlist
            </button>
            {status === 'sending' && (
              <div style={{ color: 'blue' }}>sending...</div>
            )}
            {status === 'error' && (
              <div
                style={{ color: 'red' }}
                dangerouslySetInnerHTML={{
                  __html: message as string,
                }}
              />
            )}
            {status === 'success' && (
              <div style={{ color: 'green' }}>Subscribed !</div>
            )}
          </form>
        </>
      )}
    />
  );
};

export default WaitlistForm;
