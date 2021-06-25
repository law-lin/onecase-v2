import React from 'react';
import { useDrag } from 'react-dnd';
import { createUseStyles } from 'react-jss';
import { Avatar } from 'antd';
import { AiFillMinusCircle } from 'react-icons/ai';
import months from 'constants/months';

const useStyles = createUseStyles({
  tool: {
    borderRadius: '6px',
    padding: '10px',
    marginBottom: '10px',
    // boxShadow: '0 2px 10px 0 rgb(21 27 38 / 10%)',
    border: (noBorder) => (noBorder ? 'none' : '1px solid #cbd4db'),
    fontFamily: 'Open Sans',
  },
  delete: {
    color: '#ff0000',
    '&:hover': {
      outline: 'none',
      textDecoration: 'none',
      color: '#c20000',
    },
    '&:focus': {
      outline: 'none',
    },
    '&:active': {
      color: '#8c0000',
    },
    cursor: 'pointer',
  },
});

const style: React.CSSProperties = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
};

export interface ToolProps {
  currentUser: any;
  tool: any;
  editing?: boolean;
  noBorder?: boolean;
  handleToolDisplayDelete?: () => void;
}

const ToolDisplay: React.FC<ToolProps> = ({
  currentUser,
  tool,
  editing,
  noBorder,
  handleToolDisplayDelete,
}) => {
  const classes = useStyles(noBorder);

  const date = `${months[new Date(tool.createdAt).getMonth()]} ${new Date(
    tool.createdAt
  ).getDate()}`;

  return (
    <>
      <div key={tool.id} className={classes.tool}>
        {editing && (
          <div style={{ textAlign: 'end' }}>
            <span className={classes.delete}>
              <AiFillMinusCircle
                style={{ width: '25px', height: '25px' }}
                onClick={handleToolDisplayDelete}
              />
            </span>
          </div>
        )}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <Avatar
              size={40}
              src={currentUser?.profilePicture}
              style={{ marginRight: '5px' }}
            />
            <span>{currentUser?.username}</span>
          </div>

          <span>{date}</span>
        </div>
        <div style={{ marginTop: '10px' }}>
          {tool.type === 'text' && tool.content}
          {tool.type === 'image' && (
            <img
              src={tool.content}
              style={{ height: '150px', width: '150px' }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ToolDisplay;
