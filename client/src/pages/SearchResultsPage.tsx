import React from 'react';
import { createUseStyles } from 'react-jss';

// Antd
import { Avatar, Col, List, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import {
  useCurrentUserFollowing,
  useFollowUser,
  useSearchUser,
  useUnfollowUser,
} from 'utils/services';
//
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
});

const SearchResultsPage = () => {
  const classes = useStyles();
  const location = useLocation();

  const { loading, error, data } = useSearchUser({
    variables: {
      query: queryString.parse(location.search).q as string,
    },
  });

  const currentUserFollowing = useCurrentUserFollowing();
  const currentUserFollowingList =
    currentUserFollowing.data?.currentUser?.userFollowersByFollowerId.nodes;

  const [followUser] = useFollowUser();
  const [unfollowUser] = useUnfollowUser();

  const handleFollow = async (userId: string) => {
    try {
      const follow = await followUser({
        variables: {
          userId,
          followerId: currentUserFollowing?.data?.currentUser?.userId,
        },
      });
      if (follow && follow.data && follow.data.createUserFollower) {
        currentUserFollowing.refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnfollow = async (userId: string) => {
    try {
      const unfollow = await unfollowUser({
        variables: {
          userId,
          followerId: currentUserFollowing?.data?.currentUser?.userId,
        },
      });
      if (
        unfollow &&
        unfollow.data &&
        unfollow.data.deleteUserFollowerByUserIdAndFollowerId
      ) {
        currentUserFollowing.refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return null;
  }

  return (
    <>
      <Col span={16}>
        <h2>Search Results for "{queryString.parse(location.search).q}"</h2>
        <List
          dataSource={data?.allUsers?.nodes}
          locale={{
            emptyText: (
              <div
                style={{
                  color: '#3E4E55',
                  fontFamily: 'Open Sans',
                  fontWeight: 700,
                  display: 'block',
                }}
              >
                <span
                  style={{
                    fontSize: '28px',
                  }}
                >
                  We didn't find any results for that.
                </span>
                <span
                  style={{
                    fontSize: '20px',
                    display: 'block',
                  }}
                >
                  Make sure everything is spelled correctly, or try different
                  keywords.
                </span>
              </div>
            ),
          }}
          renderItem={(user) => {
            let currentUser = false;
            if (
              currentUserFollowing.data?.currentUser?.userId === user?.userId
            ) {
              currentUser = true;
            }
            const exists = currentUserFollowingList?.find((u) => {
              return u?.userId === user?.userId;
            });
            const isFollowing = exists ? true : false;

            return (
              <List.Item
                actions={[
                  !currentUser &&
                    (isFollowing ? (
                      <Button onClick={() => handleUnfollow(user?.userId)}>
                        Unfollow
                      </Button>
                    ) : (
                      <Button onClick={() => handleFollow(user?.userId)}>
                        Follow
                      </Button>
                    )),
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <a href={`/${user?.username}`}>
                      <Avatar
                        src={user?.profilePicture}
                        size={64}
                        icon={<UserOutlined />}
                      />
                    </a>
                  }
                  title={<a href={`/${user?.username}`}>{user?.name}</a>}
                  description={`@${user?.username}`}
                />
              </List.Item>
            );
          }}
        />
      </Col>
      <Col span={4}></Col>
    </>
  );
};

export default SearchResultsPage;
