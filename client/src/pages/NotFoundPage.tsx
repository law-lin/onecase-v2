import { Col } from 'antd';
import React from 'react';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    margin: '80px auto 0 auto',
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
  },
  text: {
    width: '700px',
    fontSize: '3vh',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    fontWeight: 'bolder',
    color: 'red',
  },
});

const NotFoundPage = () => {
  const classes = useStyles();

  return (
    <>
      <Col span={16}>
        <div className={classes.center}>
          <p className={classes.text}>
            Oops, there was an
            <span className={classes.error}> error</span>. This page doesn't
            exist!
          </p>
        </div>
      </Col>
    </>
  );
};

export default NotFoundPage;
