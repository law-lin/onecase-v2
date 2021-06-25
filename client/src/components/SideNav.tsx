import React from 'react';

import { ImHome3 } from 'react-icons/im';
import { ImSearch } from 'react-icons/im';
import { FaSuitcase } from 'react-icons/fa';
import { IoCreate } from 'react-icons/io5';
import { RiAdminFill } from 'react-icons/ri';
import { UserOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';

import { Col, Avatar } from 'antd';
import { createUseStyles } from 'react-jss';
import { useCurrentUser, useCurrentUserRole } from 'utils/services';

const useStyles = createUseStyles({
  root: {
    '&:hover': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
    fontFamily: ['Montserrat', 'sans-serif'],
    fontWeight: 600,
    color: '#FFFFFF',
    textDecoration: 'none',
    textTransform: 'none',
    fontSize: '20px',
    width: '270px',
    justifyContent: 'left',
  },
  noText: {
    '&:hover': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
    color: '#3E4E56',
    justifyContent: 'center',
  },
  noTextIcon: {
    width: '50px',
    height: '50px',
  },
  button: {
    '&:hover': {
      outline: 'none',
      textDecoration: 'none',
      color: '#7699a8',
      backgroundColor: '#FFFFFF',
    },
    '&:focus': {
      outline: 'none',
    },
    fontFamily: ['Montserrat', 'sans-serif'],
    borderRadius: '15px',
    color: '#000000',
    fontSize: '20px',
    fontWeight: 700,
    height: '80px',
    padding: '10px 0',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    width: '50px',
    height: '50px',
    marginRight: '20px',
  },
  bottomNavButton: {
    '&:hover': {
      outline: 'none',
      textDecoration: 'none',
      color: '#7699a8',
      backgroundColor: '#FFFFFF',
    },
    '&:focus': {
      outline: 'none',
    },
    borderRadius: '15px',
    color: '#000000',
    fontSize: '20px',
    fontWeight: 700,
    height: '40px',
    alignItems: 'center',
    flex: 1,
    padding: '6px 12px 8px',
    display: 'inline-flex',
    justifyContent: 'center',
  },
  bottomNavIcon: {
    width: '35px',
    height: '35px',
  },
});

function LeftNavbar() {
  const { loading, error, data } = useCurrentUser();
  const role = useCurrentUserRole();

  const isAdmin = role.data?.currentUserRole === 'onecase_admin';

  const classes = useStyles();

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const username = data?.currentUser?.username;
  const profilePictureUrl = data?.currentUser?.profilePicture as string;

  if (loading || role.loading) {
    return null;
  }
  return (
    <React.Fragment>
      {!isTabletOrMobile && (
        <Col span={4}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '25vh',
              position: 'fixed',
            }}
          >
            <React.Fragment>
              {username && (
                <React.Fragment>
                  <a href={'/home'} className={classes.button}>
                    <ImHome3 className={classes.icon} />
                    Home
                  </a>
                  {/* <a href={'/explore'} className={classes.button}>
                   <ImSearch className={classes.icon} />
                   Explore
                 </a> */}
                  <a href={'/incubator'} className={classes.button}>
                    <IoCreate className={classes.icon} />
                    Incubator
                  </a>
                  <a href={`/${username}/cases`} className={classes.button}>
                    <FaSuitcase className={classes.icon} />
                    Cases
                  </a>
                  <a href={`/${username}`} className={classes.button}>
                    {!loading && (
                      <Avatar
                        style={{
                          marginRight: '20px',
                        }}
                        size={50}
                        src={profilePictureUrl}
                        icon={<UserOutlined />}
                      />
                    )}
                    Profile
                  </a>
                  {isAdmin && (
                    <a href={'/admin'} className={classes.button}>
                      <RiAdminFill className={classes.icon} />
                      Admin
                    </a>
                  )}
                </React.Fragment>
              )}
            </React.Fragment>
          </div>
        </Col>
      )}
      {isTabletOrMobile && username && (
        <div
          style={{
            bottom: 0,
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            backgroundColor: '#ffffff',
            zIndex: 1,
          }}
        >
          <a href={'/home'} className={classes.bottomNavButton}>
            <ImHome3 className={classes.bottomNavIcon} />
          </a>
          <a href={'/incubator'} className={classes.bottomNavButton}>
            <IoCreate className={classes.icon} />
          </a>
          <a href={`/${username}/cases`} className={classes.bottomNavButton}>
            <FaSuitcase
              className={classes.icon}
              style={{ width: '40px', height: '40px' }}
            />
          </a>
          <a href={`/${username}`} className={classes.bottomNavButton}>
            {!loading && (
              <Avatar
                style={{
                  marginRight: '20px',
                }}
                size={35}
                src={profilePictureUrl}
                icon={<UserOutlined />}
              />
            )}
          </a>
          {isAdmin && (
            <a href={'/admin'} className={classes.bottomNavButton}>
              <RiAdminFill
                className={classes.icon}
                style={{ width: '40px', height: '40px' }}
              />
            </a>
          )}
        </div>
      )}
    </React.Fragment>
  );
}

export default LeftNavbar;
