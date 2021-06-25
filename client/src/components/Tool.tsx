import React from 'react';
import { useDrag } from 'react-dnd';
import { createUseStyles } from 'react-jss';
import { Avatar } from 'antd';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import months from 'constants/months';

const useStyles = createUseStyles({
  tool: {
    '&:hover': {
      cursor: 'pointer',
      // backgroundColor: '#ABABAB',
      boxShadow: '0 2px 10px 0 rgb(21 27 38 / 10%)',
      border: '1px solid #cbd4db',
    },
    '&:hover $delete': {
      visibility: 'visible',
    },
    borderRadius: '6px',
    padding: '10px',
    marginBottom: '10px',
  },
  delete: {
    visibility: 'hidden',
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
  journal: any;
  tool: any;
  handleToolDelete: (journal: any, toolId: any) => Promise<void>;
}

const Tool: React.FC<ToolProps> = ({
  currentUser,
  journal,
  tool,
  handleToolDelete,
}) => {
  const [{ opacity }, drag] = useDrag({
    item: { type: tool.type, tool },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  });
  const classes = useStyles();

  const date = `${months[new Date(tool.createdAt).getMonth()]} ${new Date(
    tool.createdAt
  ).getDate()}`;

  console.log(tool);
  return (
    <div key={tool.id} className={classes.tool} ref={drag} style={{ opacity }}>
      <div style={{ textAlign: 'end' }}>
        <span className={classes.delete}>
          <RiDeleteBack2Fill
            style={{ width: '30px', height: '30px' }}
            onClick={() => handleToolDelete(journal, tool.id)}
          />
        </span>
      </div>
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
      {tool.type === 'text' && <div>{tool.content}</div>}
      {tool.type === 'image' && (
        <div>
          <img src={tool.content} style={{ height: '150px', width: '150px' }} />
        </div>
      )}
    </div>

    // <div ref={drag} style={{ ...style, opacity }}>
    //   {isDropped ? <s>{name}</s> : name}
    // </div>
  );
};

export default Tool;
