import React from 'react';
// Components
import CreatePostButton from 'components/CreatePostButton';
import UserInfo from 'components/UserInfo';
import Post from 'components/Journal';
// Antd
import { Row, Col } from 'antd';
// Utils
import { createUseStyles } from 'react-jss';
import { useRecentJournalsByFollowing } from 'utils/services';

const useStyles = createUseStyles({
  root: {
    margin: '80px auto 0 auto',
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
  },
  feed: {
    textTransform: 'none',
    fontFamily: ['Montserrat', 'sans-serif'],
    backgroundColor: '#000000',
    color: '#FFFFFF',
    fontSize: '24px',
    fontWeight: 800,
    borderRadius: '15px',
    alignSelf: 'center',
    width: '50%',
    textAlign: 'center',
    margin: '10px',
    boxShadow: 'none',
  },
  header: {
    textTransform: 'none',
    fontFamily: ['Montserrat', 'sans-serif'],
    backgroundColor: '#FFFFFF',
    color: '#000000',
    fontSize: '24px',
    fontWeight: 800,
    borderRadius: '15px',
    alignSelf: 'center',
    width: '40%',
    textAlign: 'center',
    margin: '10px',
    boxShadow: 'none',
  },
  headerButton: {
    '&:hover': {
      backgroundColor: '#232323',
    },
    '&:focus': {
      outline: 'none',
    },
    textTransform: 'none',
    fontFamily: ['Montserrat', 'sans-serif'],
    backgroundColor: '#000000',
    color: 'white',
    fontSize: '24px',
    fontWeight: 800,
    borderRadius: '15px',
    alignSelf: 'center',
    width: '50%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '10px',
  },
  categories: {
    minWidth: '280px',
    backgroundColor: '#232323',
    color: '#FFFFFF',
    fontFamily: ['Montserrat', 'sans-serif'],
    borderRadius: '25px',
  },
  card: {
    boxShadow: 'none',
    borderWidth: '30px',
    width: '100%',
    backgroundColor: '#373E49',
    color: '#FFFFFF',
    borderRadius: 10,
    padding: '16px 16px 24px',
  },
  name: {
    '&:hover': {
      textDecoration: 'none',
      color: '#9C9292',
    },
    '&:active': {
      outline: 'none',
      color: '#adadad',
    },
    '&:focus': {
      outline: 'none',
    },
    fontFamily: ['Montserrat', 'sans-serif'],
    fontWeight: 800,
    fontSize: '24px',
    color: '#000000',
    lineHeight: 1.5,
    margin: 0,
  },
  username: {
    color: '#000000',
    fontSize: '18px',
    fontFamily: ['Mukta Mahee', 'sans-serif'],
    fontWeight: 600,
    lineHeight: 1.5,
    margin: 0,
  },
  date: {
    fontSize: '20px',
    fontFamily: ['Mukta Mahee', 'sans-serif'],
    lineHeight: 1.5,
    margin: 0,
  },
  dateUpdated: {
    fontSize: '15px',
    fontFamily: ['Mukta Mahee', 'sans-serif'],
  },
  emptyFeed: {
    fontSize: '50px',
    fontFamily: ['Montserrat', 'sans-serif'],
    fontWeight: 700,
    marginTop: '50px',
  },
  addedTo: {
    display: 'inline',
    fontFamily: ['Montserrat', 'sans-serif'],
  },
  categoryLink: {
    '&:hover': {
      textDecoration: 'none',
      color: '#094153',
    },
    '&:active': {
      outline: 'none',
      color: '#adadad',
    },
    '&:focus': {
      outline: 'none',
    },
    textDecoration: 'none',
    color: '#094153',
    fontWeight: 700,
  },
  button: {
    '&:hover': {
      outline: 'none',
      textDecoration: 'none',
      color: '#ABABAB',
    },
    '&:focus': {
      outline: 'none',
    },
    fontFamily: ['Montserrat', 'sans-serif'],
    backgroundColor: '#3E4E55',
    borderRadius: '15px',
    color: '#FFFFFF',
    fontSize: '20px',
    fontWeight: 800,
    minHeight: 50,

    textAlign: 'center',
    boxShadow: 'none',
    margin: '100px auto 0',
    border: 'none',
    cursor: 'pointer',
  },
});

interface UserJournal {
  name: string;
  username: string;
  profilePicture: string;
  journalId: string;
  title: string;
  content?: JSON;
  createdAt: Date;
  updatedAt: Date;
}

const HomePage = () => {
  const classes = useStyles();

  const { loading, error, data } = useRecentJournalsByFollowing();

  const users = data?.currentUser?.userFollowersByFollowerId.nodes;

  let journals: UserJournal[] = [];
  users?.forEach((user) => {
    let userPost = user?.userByUserId?.journalsByUserId.nodes.map((j) => ({
      ...j,
      name: user.userByUserId?.name,
      username: user.userByUserId?.username,
      profilePicture: user.userByUserId?.profilePicture,
    }));
    journals = journals.concat(userPost as UserJournal[]);
  });

  journals = journals.sort((a, b) => {
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });

  if (loading) {
    return null;
  }

  // This might be deprecated (using post concat method now, as seen above)
  let journalCount = 0;
  users?.forEach((user) => {
    if (user?.userByUserId?.journalsByUserId.nodes.length !== 0) {
      journalCount++;
    }
  });

  return (
    <>
      <Col span={16}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={classes.feed}>Featured</div>
        </div>
        <div style={{ padding: '0 16px' }}>
          {!loading && (
            <React.Fragment>
              {journals && journals?.length >= 0 && (
                <Row gutter={[16, 24]} style={{ width: '100%', margin: 0 }}>
                  {journals.map((journal) => {
                    if (journal) {
                      return (
                        <Col key={journal.journalId} xs={12}>
                          <UserInfo
                            name={journal.name}
                            username={journal.username}
                            profilePicture={journal.profilePicture}
                          />
                          <Post journal={journal} showTopic />
                        </Col>
                      );
                    }
                  })}
                </Row>
              )}
              {users && users?.length > 0 && journalCount === 0 && (
                <p className={classes.emptyFeed}>
                  Looks like no one you followed has posted anything yet! Follow
                  some more people!
                </p>
              )}
              {(!users || users?.length === 0) && (
                <p className={classes.emptyFeed}>
                  You're not following anyone, so you won't see anything here.
                  Try following someone!
                </p>
              )}
            </React.Fragment>
          )}
        </div>
      </Col>
      <Col span={4}>
        <button
          className={classes.button}
          onClick={() => (window.location.href = '/jason')}
        >
          Click here to visit <a href='/jason'>@jason's</a> profile. Be sure to
          follow him!
        </button>
      </Col>
    </>
  );
};

export default HomePage;
