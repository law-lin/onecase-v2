import React, { useState, useEffect } from 'react';
// import MediaQuery from 'react-responsive';
// Components
import Banner from 'components/Banner';
import ProfileJournals from 'components/ProfileJournals';
import NotFoundPage from './NotFoundPage';
import ToolDisplay from 'components/ToolDisplay';
import InfiniteScroll from 'react-infinite-scroll-component';
// Ant Design
import { Avatar, Button, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// Utils
import {
  useCurrentUser,
  useFollowUser,
  useIsFollowing,
  useUnfollowUser,
  useUserByUsername,
} from 'utils/services';
import { useParams } from 'react-router-dom';
import FollowCounts from 'components/FollowCounts';

import { createUseStyles } from 'react-jss';
import CasesList from 'components/CasesList';
import ProfileCases from 'components/ProfileCases';

const useStyles = createUseStyles({
  toolList: {
    borderRadius: '6px',
    // border: '1px solid black',
    height: '100%',
    width: '100%',
    backgroundColor: '#FFF',
    padding: '10px',
    fontFamily: 'Open Sans',
    color: '#403B3B',
    overflowY: 'auto',
    maxHeight: '60vh',
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#C4C4C4',
      borderRadius: '5px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#9E9E9E',
    },
    '&::-webkit-scrollbar-thumb:active': {
      backgroundColor: '#737373',
    },
  },
});

interface User {
  username: string;
  name: string;
  biography: string;
  followerCount: number;
  followingCount: number;
  profilePicture: string;
  coverImage: string;
}
interface Topic {
  title: string;
  notes: string;
  dateCreated?: Date;
  post: Post;
}
interface Post {
  description: string;
  content: Array<Content>;
}
interface Content {
  type: 'text' | 'image';
  order?: number;
  content?: string | Image[];
}

type Image = {
  name?: string;
  url?: string;
};

function ProfilePage() {
  const { username }: any = useParams();
  const classes = useStyles();

  const currentUserQuery = useCurrentUser();

  const currentUser = currentUserQuery.data?.currentUser;

  const user = useUserByUsername({
    variables: {
      username: username.toLowerCase(),
    },
  });

  const [followUser] = useFollowUser();
  const [unfollowUser] = useUnfollowUser();

  const getIsFollowing = useIsFollowing({
    variables: {
      userId: user.data?.userByUsername?.userId,
      followerId: currentUserQuery.data?.currentUser?.userId,
    },
  });

  const isAnonymous = currentUser === null || currentUser === undefined;

  const isFollowing = getIsFollowing.data?.userFollowerByUserIdAndFollowerId
    ?.nodeId
    ? true
    : false;

  let isOwner = false;
  if (currentUser?.userId === user.data?.userByUsername?.userId) {
    isOwner = true;
  }

  if (
    !user.loading &&
    (user.data?.userByUsername === null ||
      user.data?.userByUsername === undefined)
  ) {
    return <NotFoundPage />;
  }

  const name = user.data?.userByUsername?.name;
  const usernameData = user.data?.userByUsername?.username;
  const userId = user.data?.userByUsername?.userId;
  const biography = user.data?.userByUsername?.biography;
  const profilePictureUrl = user.data?.userByUsername?.profilePicture;
  const coverImageUrl = user.data?.userByUsername?.coverImage;

  const handleFollow = async () => {
    try {
      const follow = await followUser({
        variables: {
          userId: user.data?.userByUsername?.userId,
          followerId: currentUser?.userId,
        },
      });
      if (follow && follow.data && follow.data.createUserFollower) {
        user.refetch();
        getIsFollowing.refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnfollow = async () => {
    try {
      const unfollow = await unfollowUser({
        variables: {
          userId: user.data?.userByUsername?.userId,
          followerId: currentUser?.userId,
        },
      });
      if (
        unfollow &&
        unfollow.data &&
        unfollow.data.deleteUserFollowerByUserIdAndFollowerId
      ) {
        user.refetch();
        getIsFollowing.refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (user.loading) {
    return null;
  }

  return (
    <>
      <Col span={18}>
        <div>
          <div>
            <Banner
              isOwner={isOwner}
              name={name}
              username={usernameData}
              biography={biography}
              profilePictureUrl={profilePictureUrl}
              coverImageUrl={coverImageUrl}
              refetch={user.refetch}
            />
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1' }}>
            <div style={{ display: 'flex' }}>
              <div>
                <div style={{ paddingLeft: '10px', marginTop: '-50px' }}>
                  <span
                    style={{
                      backgroundColor: '#FFFFFF',
                      height: '110px',
                      width: '110px',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'relative',
                    }}
                  >
                    <Avatar
                      style={{ borderWidth: '2px', borderColor: 'white' }}
                      src={profilePictureUrl}
                      size={96}
                      icon={<UserOutlined />}
                    />
                  </span>
                </div>
                <div
                  style={{
                    flex: '1',
                    paddingLeft: '20px',
                    fontFamily: 'Open Sans',
                    fontWeight: 700,
                    fontSize: '20px',
                  }}
                >
                  {name}
                </div>
                <div
                  style={{
                    color: '#9E9E9E',
                    marginTop: '-5px',
                    paddingLeft: '20px',
                  }}
                >
                  {'@'}
                  {usernameData}
                </div>
              </div>
              <div
                style={{
                  marginTop: '20px',
                  color: 'white',
                  display: 'flex',
                  flex: '1',
                  justifyContent: 'flex-end',
                  marginRight: '10px',
                }}
              >
                <div
                  style={{
                    height: '55px',
                    paddingTop: '7px',
                    borderRadius: '7px',
                    textAlign: 'center',
                    minWidth: '60%',
                    backgroundColor: '#373737',
                    fontFamily: 'Open Sans',
                    fontWeight: 700,
                    fontSize: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <FollowCounts
                    following={
                      user.data?.userByUsername?.userFollowersByFollowerId
                    }
                    followers={user.data?.userByUsername?.userFollowersByUserId}
                  />
                </div>
                <div>
                  {!isAnonymous && (
                    <>
                      {!isOwner && !isFollowing && (
                        <Button
                          style={{ marginLeft: '10px' }}
                          onClick={handleFollow}
                        >
                          Follow
                        </Button>
                      )}
                      {!isOwner && isFollowing && (
                        <Button
                          style={{ marginLeft: '10px' }}
                          onClick={handleUnfollow}
                        >
                          Unfollow
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
            <div style={{ marginLeft: '20px', minHeight: '70px' }}>
              {biography}
            </div>
            <div>
              <ProfileCases
                userId={userId}
                isPrivate={isOwner ? undefined : false}
              />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flex: '1',
              flexDirection: 'column',
            }}
          >
            <ProfileJournals username={usernameData as string} />
          </div>
        </div>
      </Col>
      <Col span={2} />
    </>
  );
}

export default ProfilePage;
