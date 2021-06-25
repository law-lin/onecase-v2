import React, { useState } from 'react';
import { Button, Form, Space, Input } from 'antd';
import { createUseStyles } from 'react-jss';
import { IoMdClose } from 'react-icons/io';
import { useCreateComment, useCurrentUserId } from 'utils/services';

import Modal from 'react-modal';

interface Comment {
  userId: any;
  postId: any;
  comment: string;
  parentCommentId?: any;
}

const { TextArea } = Input;

const useStyles = createUseStyles({
  textField: {
    marginTop: '20px',
    minHeight: '100px',
    backgroundColor: '#fff',
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
    cursor: 'pointer',
    padding: '2px 12px',
  },
});

interface CreateCommentProps {
  username: string;
  journalId: string;
  refetch: any;
}

function CreateComment({ username, journalId, refetch }: CreateCommentProps) {
  const [visible, setVisible] = useState(false);
  const { loading, error, data } = useCurrentUserId();
  const [comment, setComment] = useState('');

  const classes = useStyles();

  const [createComment] = useCreateComment();

  const handleSubmit = async () => {
    try {
      const newComment = await createComment({
        variables: {
          userId: data?.currentUserId,
          comment,
          journalId: journalId,
        },
      });
      setVisible(false);
      if (newComment && newComment.data && newComment.data.createComment) {
        setComment('');
        await refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const disabled = /^\s*$/.test(comment);
  const cursor = /^\s*$/.test(comment) ? 'not-allowed' : 'pointer';
  const backgroundColor = /^\s*$/.test(comment) ? '#8d918e' : '#3E4E55';

  return (
    <>
      <span>
        Comment as <a href={`/${username}`}>{username}</a>
      </span>
      <TextArea
        name='comment'
        placeholder='What are your thoughts?'
        autoSize={{ minRows: 4, maxRows: 20 }}
        onChange={(e) => setComment(e.target.value)}
        className={classes.textField}
        value={comment}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          className={classes.button}
          onClick={handleSubmit}
          disabled={disabled}
          style={{
            cursor,
            backgroundColor,
          }}
        >
          Comment
        </button>
      </div>
    </>
  );
}

export default CreateComment;
