import React, { useState, useEffect } from 'react';
// Antd/Icons
import { Button, Form, Space, Input, Avatar } from 'antd';
import { LikeOutlined, LikeFilled, UserOutlined } from '@ant-design/icons';
import { IoMdClose } from 'react-icons/io';
// Utils
import Modal from 'react-modal';
import { createUseStyles } from 'react-jss';
import {
  useGetUserByUserId,
  useRepliesByParentCommentId,
  useCreateComment,
  useUpdateLikesByCommentId,
  useCreateLike,
  useHasLikedByUserIdAndCommentId,
  useUpdateHasLikedByLikeId,
  useCurrentUserId,
} from 'utils/services';

const useStyles = createUseStyles({
  hide: {
    display: 'none',
  },
  like: {
    marginRight: '20px',
  },
  liked: {
    marginRight: '20px',
  },
  comment: {},
  reply: {
    marginLeft: '50px',
  },
  textField: {
    marginTop: '20px',
    minHeight: '100px',
    backgroundColor: 'transparent',
    borderRadius: '3px',
    display: 'block',
    width: '100%',
    borderColor: 'transparent',
    color: '#000',
    '&:hover': {
      outline: 'none',
      borderColor: 'transparent',
    },
    '&:focus': {
      outline: 'none',
      borderColor: 'transparent',
    },
    '8:active': {
      outline: 'none',
      borderColor: 'transparent',
    },
  },
  replyButton: {
    '&:hover': {
      outline: 'none',
      textDecoration: 'none',
      fontWeight: 800,
    },
    '&:focus': {
      outline: 'none',
    },
    fontFamily: ['Montserrat', 'sans-serif'],
    backgroundColor: 'transparent',
    color: '#878A8C',
    fontSize: '14px',
    fontWeight: 700,
    border: 'none',
    cursor: 'pointer',
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
    fontSize: '14px',
    fontWeight: 800,
    margin: '10px',
    border: 'none',
    padding: '2px 12px',
  },
  cancel: {
    '&:hover': {
      outline: 'none',
      textDecoration: 'none',
      color: '#ABABAB',
    },
    '&:focus': {
      outline: 'none',
    },
    fontFamily: ['Montserrat', 'sans-serif'],
    backgroundColor: '#fff',
    borderRadius: '15px',
    color: '#000',
    fontSize: '14px',
    fontWeight: 800,
    margin: '10px',
    border: 'none',
    padding: '2px 12px',
    cursor: 'pointer',
  },
});

const { TextArea } = Input;

interface CommentProps {
  currentUser: any;
  journalId: string;
  comment: any;
  isReply: boolean;
  refetch: any;
}

function Comment({
  currentUser,
  journalId,
  comment,
  isReply,
  refetch,
}: CommentProps) {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);
  const { loading, error, data } = useCurrentUserId();
  const [createComment] = useCreateComment();
  const [createLike] = useCreateLike();
  const [commentId, setCommentId] = useState();
  const [updateHasLike] = useUpdateHasLikedByLikeId();
  const [reply, setReply] = useState('');

  useEffect(() => {
    setCommentId(comment?.commentId);
  }, [comment?.commentId]);

  const checkLike = useHasLikedByUserIdAndCommentId({
    variables: {
      userId: data?.currentUserId,
      commentId,
    },
  });

  const [liked, setLiked] = useState(
    checkLike.data?.allLikes?.nodes.length === 0
      ? false
      : checkLike.data?.allLikes?.nodes[0]?.isLiked
  );
  useEffect(() => {
    if (checkLike.loading === false && checkLike.data) {
      setLiked(checkLike.data?.allLikes?.nodes[0]?.isLiked);
    }
  }, [checkLike.loading, checkLike.data]);

  const [likes, setLikes] = useState(comment.likes);
  const [updateLikes] = useUpdateLikesByCommentId();

  let userId = comment?.userId;
  let getUser = useGetUserByUserId({
    variables: {
      userId,
    },
  });
  const username = getUser?.data?.userByUserId?.username;
  const profilePicture = getUser?.data?.userByUserId?.profilePicture;

  let parentCommentId = comment?.commentId;
  let replies = useRepliesByParentCommentId({
    variables: {
      parentCommentId,
    },
  });

  const onLike = async () => {
    let increment = !liked ? 1 : -1;
    let newLikes = likes + increment;
    setLikes(newLikes);
    await updateLikes({
      variables: {
        commentId: comment.commentId,
        likes: newLikes,
      },
    });
    if (checkLike.data?.allLikes?.nodes.length === 0) {
      const createdLiked = await createLike({
        variables: {
          userId: data?.currentUserId,
          commentId: parentCommentId,
          isLiked: true,
        },
      });
      if (createdLiked && createdLiked.data && createdLiked.data.createLike) {
        await checkLike.refetch();
      }
    } else {
      let likeId = checkLike.data?.allLikes?.nodes[0]?.likeId;
      await updateHasLike({
        variables: {
          likeId,
          isLiked: !liked as boolean,
        },
      });
    }
  };

  const handleSubmit = async () => {
    try {
      const newComment = await createComment({
        variables: {
          userId: data?.currentUserId,
          comment: reply,
          journalId: journalId,
          parentCommentId,
        },
      });
      setVisible(false);
      if (newComment && newComment.data && newComment.data.createComment) {
        setReply('');
        await replies.refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const disabled = /^\s*$/.test(reply);
  const cursor = /^\s*$/.test(reply) ? 'not-allowed' : 'pointer';
  const backgroundColor = /^\s*$/.test(reply) ? '#8d918e' : '#3E4E55';

  return (
    <div
      style={{ marginTop: '20px', marginBottom: '20px' }}
      className={isReply ? classes.reply : classes.comment}
    >
      <a href={`/${username}`}>
        <Avatar src={profilePicture} icon={<UserOutlined />} />
      </a>

      <a href={`/${username}`} style={{ marginLeft: '5px' }}>
        {username}
      </a>
      <div>{comment.comment}</div>
      <div style={{ display: 'flex' }}>
        <div>
          {likes}
          {!currentUser && <LikeOutlined style={{ marginLeft: '5px' }} />}
          {currentUser && (
            <Button
              className={!liked ? classes.like : classes.liked}
              shape='circle'
              icon={!liked ? <LikeOutlined /> : <LikeFilled />}
              onClick={() => {
                setLiked(!liked);
                onLike();
              }}
            />
          )}
        </div>
        {currentUser && (
          <button
            onClick={() => {
              setVisible(!visible);
            }}
            className={classes.replyButton}
          >
            Reply
          </button>
        )}
      </div>
      {visible && (
        <div>
          <TextArea
            name='comment'
            placeholder='Type comment here...'
            autoSize={{ minRows: 4, maxRows: 20 }}
            className={classes.textField}
            onChange={(e) => setReply(e.target.value)}
            value={reply}
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              className={classes.cancel}
              onClick={() => setVisible(false)}
            >
              Cancel
            </button>
            <button
              className={classes.button}
              onClick={handleSubmit}
              disabled={disabled}
              style={{
                cursor,
                backgroundColor,
              }}
            >
              Reply
            </button>
          </div>
        </div>
      )}

      <div>
        {replies?.data?.allComments?.nodes?.map((reply) => {
          return (
            <Comment
              currentUser={currentUser}
              journalId={journalId}
              comment={reply}
              isReply={true}
              refetch={refetch}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Comment;
