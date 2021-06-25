import React from 'react';
import { Col, Input, Row, Layout } from 'antd';

import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';
import { ReactComponent as LinkedinIcon } from 'assets/icons/linkedin.svg';

import lightbulb from 'assets/images/lightbulb.png';
import scrapbook from 'assets/images/scrapbook.png';
import community from 'assets/images/community.png';

import one from 'assets/images/one.png';
import two from 'assets/images/two.png';
import three from 'assets/images/three.png';
import newbackground from 'assets/images/newbackground.png';

import { createUseStyles } from 'react-jss';
import WaitlistForm from 'components/WaitlistForm';

const { Content, Footer } = Layout;

const useStyles = createUseStyles({
  button: {
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
    },
    '&:active': {
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(38, 143, 255, 0.5)',
      outline: 'none',
    },
    color: '#FFFFFF',
    display: 'inline-block',
    backgroundColor: '#007bff',
    fontFamily: ['Mukta Mahee', 'san-serif'],
    border: '1px solid transparent',
    borderColor: '#007bff',
    padding: '0.5rem 1rem',
    fontSize: '1.25rem',
    lineHeight: 1.5,
    borderRadius: '15px',
    transition:
      'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    fontWeight: 400,
    textTransform: 'none',
  },
  input: {
    padding: 5,
    fontSize: '24px',
    borderRadius: '5px',
    fontFamily: ['Mukta Mahee', 'sans-serif'],
    fontWeight: 700,
  },
  labelRoot: {
    fontFamily: ['Mukta Mahee', 'sans-serif'],
    fontSize: '24px',
    color: '#9F9F9F',
    left: '10px',
    '&$labelFocused': {
      color: '#3E4E55',
    },
  },
  heroContainer: {
    minHeight: '530px',
    background: `url(${newbackground}) no-repeat center/cover`,
    '@media (max-width: 750px)': {
      minWidth: '0px',
      background: `url(${newbackground}) no-repeat left center/1000px 500px`,
      maxWidth: '750px',
      overflow: 'hidden',
    },
  },
  heroContent: {
    maxWidth: '475px',
    marginLeft: '222px',
    padding: '125px 5px 0',
    '@media (max-width: 750px)': {
      maxWidth: '320px',
      marginLeft: '165px',
    },
  },
  showcasePassions: {
    color: '#FFFFFF',
    fontSize: '48px',
    textAlign: 'center',
    fontFamily: ['Montserrat', 'sans-serif'],
    fontWeight: 800,
    '@media (max-width: 750px)': {
      fontSize: '32px',
    },
  },
  oneLiner: {
    marginTop: '20px',
    color: '#FFFFFF',
    fontSize: '22px',
    textAlign: 'center',
    fontFamily: ['Montserrat', 'sans-serif'],
    fontWeight: 800,
    '@media (max-width: 750px)': {
      fontSize: '16px',
    },
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
  },
});

function LandingPage(props: any) {
  const classes = useStyles();

  return (
    <>
      <Content
        className={props.screen}
        style={{ maxWidth: '1400px', margin: '0 auto', paddingBottom: '100px' }}
      >
        <div className={classes.heroContainer} style={{}}>
          <div className={classes.heroContent}>
            <p className={classes.showcasePassions}>Share your passions</p>
            <p className={classes.oneLiner}>
              Productive Journaling With Friends
            </p>
            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <WaitlistForm />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '150px',
            }}
          >
            <p
              style={{
                backgroundColor: '#232323',
                padding: '25px 10px',
                borderRadius: 9,
                color: '#7B7B7B',
                fontFamily: 'Montserrat',
                fontWeight: 800,
                width: '75%',
                fontSize: 30,
                textAlign: 'center',
              }}
            >
              We're an{' '}
              <span style={{ color: '#FFFFFF' }}>online scrapbook</span> or{' '}
              <span style={{ color: '#FFFFFF' }}>journal</span>, with{' '}
              <span style={{ color: '#FFFFFF' }}>friends</span>
            </p>
          </div>
          <Row style={{ marginTop: '150px' }}>
            <Col
              xs={24}
              sm={8}
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                style={{ width: '100px', height: '100px' }}
                src={scrapbook}
                alt='scrapbook'
              />
              <div
                style={{
                  backgroundColor: '#3E4E55',
                  borderRadius: 9,
                  width: '90%',
                  minHeight: 150,
                }}
              >
                <p
                  style={{
                    fontFamily: 'Montserrat',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    padding: 15,
                    fontSize: 25,
                  }}
                >
                  Your Own Page
                </p>
                <p
                  style={{
                    fontFamily: 'Mukta Mahee',
                    color: '#FFFFFF',
                    padding: 10,
                    fontSize: 16,
                  }}
                >
                  Let OneCase serve as your one-stop shop to keep your friends
                  and family up-to-date on the work you're doing
                </p>
              </div>
            </Col>
            <Col
              xs={24}
              sm={8}
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                style={{ width: '100px', height: '100px' }}
                src={lightbulb}
                alt='lightbulb'
              />
              <div
                style={{
                  backgroundColor: '#3E4E55',
                  borderRadius: 9,
                  width: '90%',
                  minHeight: 150,
                }}
              >
                <p
                  style={{
                    fontFamily: 'Montserrat',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    padding: 15,
                    fontSize: 25,
                  }}
                >
                  Interest Oriented
                </p>
                <p
                  style={{
                    fontFamily: 'Mukta Mahee',
                    color: '#FFFFFF',
                    padding: 10,
                    fontSize: 16,
                  }}
                >
                  Upload content based on your interests and explore what other
                  people are into
                </p>
              </div>
            </Col>
            <Col
              xs={24}
              sm={8}
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                style={{ width: '100px', height: '100px' }}
                src={community}
                alt='community'
              />
              <div
                style={{
                  backgroundColor: '#3E4E55',
                  borderRadius: 9,
                  width: '90%',
                  minHeight: 150,
                }}
              >
                <p
                  style={{
                    fontFamily: 'Montserrat',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    padding: 15,
                    fontSize: 25,
                  }}
                >
                  Creative Motivation
                </p>
                <p
                  style={{
                    fontFamily: 'Mukta Mahee',
                    color: '#FFFFFF',
                    padding: 10,
                    fontSize: 16,
                  }}
                >
                  Get inspo from your friends/strangers, collaborate, and
                  try/learn new things
                </p>
              </div>
            </Col>
          </Row>
          {/* <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '150px',
            }}
          >
            <p
              style={{
                color: '#232323',
                fontFamily: 'Montserrat',
                fontWeight: 800,
                fontSize: 60,
              }}
            >
              TLDR...
            </p>
          </div>
          <Row style={{ marginTop: '150px' }}>
            <Col xs={12} sm={8}>
              <p
                style={{
                  color: '#FFFFFF',
                  backgroundColor: '#232323',
                  fontFamily: 'Montserrat',
                  fontWeight: 800,
                  fontSize: 36,
                  borderRadius: 9,
                  width: '80%',
                  padding: 10,
                }}
              >
                Pick A Theme
              </p>
              <img
                src={one}
                style={{ width: '100%', maxWidth: '300px', marginTop: '40px' }}
                alt='pick a theme'
              />
            </Col>
            <Col xs={12} sm={8}>
              <p
                style={{
                  color: '#FFFFFF',
                  backgroundColor: '#232323',
                  fontFamily: 'Montserrat',
                  fontWeight: 800,
                  fontSize: 36,
                  borderRadius: 9,
                  width: '80%',
                  padding: 10,
                }}
              >
                Create Cards
              </p>
              <img
                src={two}
                style={{ width: '95%', maxWidth: '300px', marginTop: '40px' }}
                alt='create cards'
              />
            </Col>
            <Col xs={12} sm={8}>
              <p
                style={{
                  color: '#FFFFFF',
                  backgroundColor: '#232323',
                  fontFamily: 'Montserrat',
                  fontWeight: 800,
                  fontSize: 36,
                  borderRadius: 9,
                  width: '80%',
                  padding: 10,
                }}
              >
                Display Them
              </p>
              <img
                src={three}
                style={{ width: '100%', maxWidth: '300px', marginTop: '40px' }}
                alt='display them'
              />
            </Col>
          </Row> */}
        </div>
      </Content>
      <Footer style={{ backgroundColor: '#232323', padding: '24px 200px' }}>
        <Row
          style={{
            minHeight: '150px',
            color: '#FFFFFF',
            fontSize: 20,
          }}
        >
          <Col
            xs={24}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <p
              style={{
                color: '#FFFFFF',
                fontFamily: 'Montserrat',
                fontWeight: 800,
                fontSize: 36,
                padding: 10,
              }}
            >
              How do I try it out?
            </p>
            <p
              style={{
                color: '#FFFFFF',
                fontFamily: 'Mukta Mahee',
                fontWeight: 500,
                fontSize: 24,
                padding: 10,
              }}
            >
              Sign up here to join the waitlist, you won't regret it.
            </p>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <WaitlistForm />
            </div>
          </Col>
          <Col xs={24}>
            <Row>
              <Col xs={24} sm={16}>
                {/* <Row>
                  <Col xs={24} sm={4}>
                    <span className={classes.footerLinks}>About Us</span>
                  </Col>
                  <Col xs={24} sm={4}>
                    <span className={classes.footerLinks}>
                      Terms of Service
                    </span>
                  </Col>
                  <Col xs={24} sm={4}>
                    <span className={classes.footerLinks}>Privacy Policy </span>
                  </Col>
                  <Col xs={24} sm={4}>
                    <span className={classes.footerLinks}>Contact</span>
                  </Col>
                </Row> */}
              </Col>
              <Col xs={24} sm={6} />
              <Col xs={24} sm={2}>
                {/* Icons provided by https://icons8.com */}
                <a
                  target='_window'
                  href='https://twitter.com/onecaseapp'
                  className='social-media-icons'
                >
                  <TwitterIcon />
                </a>
                <a
                  target='_window'
                  href='https://www.instagram.com/onecaseapp/'
                  className='social-media-icons'
                >
                  <InstagramIcon />
                </a>
                <a
                  target='_window'
                  href='https://www.linkedin.com/company/onecaseapp/'
                  className='social-media-icons'
                >
                  <LinkedinIcon />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Footer>
    </>
  );
}

export default LandingPage;
