import React, { useState } from 'react';
import Modal from 'react-modal';
import { List, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { createUseStyles } from 'react-jss';
import {
  useCurrentUser,
  useCurrentUserFollowers,
  useCurrentUserFollowing,
  useCurrentUserId,
  useFollowUser,
  useUnfollowUser,
} from 'utils/services';
import Login from './Login';

const useStyles = createUseStyles({
  modal: {
    backgroundColor: '#242424',
    borderRadius: '15px',
    width: 'calc(100% - 64px)',
    display: 'flex',
    maxHeight: 'calc(100% - 64px)',
    flexDirection: 'column',
    boxShadow:
      '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
    maxWidth: '600px',
  },
  header: {
    backgroundColor: '#4B4B4B',
    flex: '0 0 auto',
    margin: 0,
    padding: '10px 15px',
    borderRadius: '15px 15px 0 0 ',
  },
  overlayBase: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1000,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  },
  overlayAfterOpen: {
    opacity: 1,
  },
  overlayBeforeClose: {
    opacity: 0,
  },
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
  title: {
    color: '#FFFFFF',
    fontFamily: ['Montserrat', 'sans-serif'],
    fontSize: '26px',
    fontWeight: 800,
    display: 'inline-block',
    verticalAlign: 'middle',
    textAlign: 'center',
  },
});

interface User {
  userByUserId?: {
    userId: string;
    name: string;
    username: string;
    profilePicture: string;
  };
  userByFollowerId?: {
    userId: string;
    name: string;
    username: string;
    profilePicture: string;
  };
}

const FollowListModal = ({
  visible,
  onClose,
  showFollowers,
  followers,
  following,
}: any) => {
  const classes = useStyles();
  const [userId, setUserId] = useState<string>();

  const { loading, error, data } = useCurrentUserId();
  const currentUserFollowing = useCurrentUserFollowing();

  const currentUserFollowingList =
    currentUserFollowing.data?.currentUser?.userFollowersByFollowerId.nodes;

  const [followUser] = useFollowUser();
  const [unfollowUser] = useUnfollowUser();

  const followerList = followers.nodes;
  const followingList = following.nodes;

  const handleFollow = async (userId: string) => {
    try {
      const follow = await followUser({
        variables: {
          userId,
          followerId: data?.currentUserId,
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
          followerId: data?.currentUserId,
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

  if (currentUserFollowing.loading) {
    return null;
  }

  return (
    <Modal
      isOpen={visible}
      overlayClassName={{
        base: classes.overlayBase,
        afterOpen: classes.overlayAfterOpen,
        beforeClose: classes.overlayBeforeClose,
      }}
      className={classes.modal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => {
        onClose();
      }}
      closeTimeoutMS={225}
      ariaHideApp={false}
    >
      <h2 className={classes.title}>
        {showFollowers ? 'Followers' : 'Following'}
      </h2>
      <List
        dataSource={showFollowers ? followerList : followingList}
        style={{ overflowY: 'auto' }}
        locale={{
          emptyText: showFollowers ? (
            <span
              style={{
                color: '#FFFFFF',
                fontFamily: 'Open Sans',
                fontWeight: 700,
                fontSize: '16px',
              }}
            >
              You'll see all of your followers here.
            </span>
          ) : (
            <span
              style={{
                color: '#FFFFFF',
                fontFamily: 'Open Sans',
                fontWeight: 700,
                fontSize: '16px',
              }}
            >
              You'll see all of the people you're following here.
            </span>
          ),
        }}
        renderItem={(user: User) => {
          let currentUser = false;
          if (
            data?.currentUserId ===
            (showFollowers
              ? user.userByFollowerId?.userId
              : user.userByUserId?.userId)
          ) {
            currentUser = true;
          }

          const exists = currentUserFollowingList?.find((u) => {
            return (
              u?.userId ===
              (showFollowers
                ? user.userByFollowerId?.userId
                : user.userByUserId?.userId)
            );
          });
          const isFollowing = exists ? true : false;

          return (
            <List.Item
              actions={[
                !currentUser &&
                  (isFollowing ? (
                    <Button
                      onClick={() => {
                        showFollowers
                          ? handleUnfollow(
                              user?.userByFollowerId?.userId as string
                            )
                          : handleUnfollow(
                              user?.userByUserId?.userId as string
                            );
                      }}
                    >
                      Unfollow
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        showFollowers
                          ? handleFollow(
                              user?.userByFollowerId?.userId as string
                            )
                          : handleFollow(user?.userByUserId?.userId as string);
                      }}
                    >
                      Follow
                    </Button>
                  )),
              ]}
              style={{ padding: '12px' }}
            >
              <List.Item.Meta
                avatar={
                  <a
                    href={
                      showFollowers
                        ? `/${user?.userByFollowerId?.username}`
                        : `/${user?.userByUserId?.username}`
                    }
                  >
                    <Avatar
                      src={
                        showFollowers
                          ? user?.userByFollowerId?.profilePicture
                          : user.userByUserId?.profilePicture
                      }
                      size={64}
                      icon={<UserOutlined />}
                    />
                  </a>
                }
                title={
                  <a
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Open Sans',
                      fontWeight: 700,
                    }}
                    href={
                      showFollowers
                        ? `/${user?.userByFollowerId?.username}`
                        : `/${user?.userByUserId?.username}`
                    }
                  >
                    {showFollowers
                      ? user?.userByFollowerId?.name
                      : user?.userByUserId?.name}
                  </a>
                }
                description={
                  <span
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Open Sans',
                      fontWeight: 500,
                    }}
                  >
                    {showFollowers
                      ? `@${user?.userByFollowerId?.username}`
                      : `@${user?.userByUserId?.username}`}
                  </span>
                }
                style={{ color: 'white' }}
              />
            </List.Item>
          );
        }}
      />
    </Modal>
  );
};

const FollowCounts = (props: any) => {
  const [visible, setVisible] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false); // modal will show following by default
  const currentUser = useCurrentUser();

  const isAnonymous =
    currentUser.data?.currentUser === null ||
    currentUser.data?.currentUser === undefined;

  const classes = useStyles();

  return (
    <>
      {!isAnonymous && (
        <>
          <button
            onClick={() => {
              setVisible(true);
              setShowFollowers(false);
            }}
            className={classes.button}
          >
            {props.following.totalCount} Following
          </button>
          <button
            onClick={() => {
              setVisible(true);
              setShowFollowers(true);
            }}
            className={classes.button}
          >
            {props.followers.totalCount} Followers
          </button>
        </>
      )}
      {isAnonymous && (
        <Login
          followingCount={props.following.totalCount}
          followerCount={props.followers.totalCount}
        />
      )}

      <FollowListModal
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        showFollowers={showFollowers}
        {...props}
      />
    </>
  );
};
export default FollowCounts;
