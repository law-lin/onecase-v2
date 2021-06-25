import React, { useState } from 'react';
import { Input } from 'antd';
import { createUseStyles } from 'react-jss';
import {
  useCreateCaseComment,
  useCreateComment,
  useCurrentUserId,
} from 'utils/services';

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
  currentUser: {
    userId: string;
    username: string;
    profilePicture: string;
  };
  toolId: string;
  refetch: any;
}

function CreateCaseComment({
  currentUser,
  toolId,
  refetch,
}: CreateCommentProps) {
  const [visible, setVisible] = useState(false);

  const [comment, setComment] = useState('');

  const classes = useStyles();

  const [createCaseComment] = useCreateCaseComment();

  const handleSubmit = async () => {
    try {
      const newComment = await createCaseComment({
        variables: {
          userId: currentUser.userId,
          comment,
          toolId,
        },
      });
      setVisible(false);
      if (newComment && newComment.data && newComment.data.createCaseComment) {
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
        Comment as{' '}
        <a href={`/${currentUser.username}`}>{currentUser.username}</a>
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

export default CreateCaseComment;
