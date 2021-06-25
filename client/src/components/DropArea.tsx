import React from 'react';
import { useDrop } from 'react-dnd';
import { constants } from 'short-uuid';
import { ItemTypes } from 'constants/ItemTypes';
import { createUseStyles } from 'react-jss';
import { Upload, Button } from 'antd';
import { RcFile } from 'antd/lib/upload';

const useStyles = createUseStyles({
  hoverable: {
    '&:hover $upload': {
      display: 'flex',
      justifyContent: 'center',
    },
    height: '32px',
    margin: '2px 0',
  },
  upload: {
    display: 'none',
  },
});
const style: React.CSSProperties = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
};

export interface DropAreaProps {
  index: number;
  onDrop: (item: any) => void;
  handleUpload: (file: RcFile, index: number) => boolean;
  showAddImage?: boolean;
}

const DropArea: React.FC<DropAreaProps> = ({
  index,
  onDrop,
  handleUpload,
  showAddImage,
}) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: [ItemTypes.TEXT, ItemTypes.IMAGE],
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const classes = useStyles();

  const isActive = canDrop && isOver;
  let backgroundColor = '#222';
  let display = 'none';
  if (isActive) {
    display = 'flex';
    backgroundColor = '#8E8181';
  } else if (canDrop) {
    display = 'flex';
    backgroundColor = '#DCD0D0';
  }

  return (
    <>
      {!showAddImage && (
        <div ref={drop} className={classes.hoverable}>
          <div
            style={{
              display,
              backgroundColor,
              border: '1px dashed black',
              fontFamily: 'Open Sans',
              fontWeight: 600,
              fontSize: '14px',
              padding: '5px',
              justifyContent: 'center',
            }}
          >
            {isActive ? 'Release to drop' : 'Drop here!'}
          </div>
          {!isActive && !canDrop && (
            <Upload
              showUploadList={false}
              className={classes.upload}
              beforeUpload={(file) => handleUpload(file, index)}
            >
              <Button>Add Image</Button>
            </Upload>
          )}
        </div>
      )}
      {showAddImage && (
        <>
          <div
            style={{
              display,
              backgroundColor,
              border: '1px dashed black',
              fontFamily: 'Open Sans',
              fontWeight: 600,
              fontSize: '14px',
              padding: '5px',
              justifyContent: 'center',
            }}
            ref={drop}
          >
            {isActive ? 'Release to drop' : 'Drop here!'}
          </div>
          {!isActive && !canDrop && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Upload
                showUploadList={false}
                style={{ display: 'flex', justifyContent: 'center' }}
                beforeUpload={(file) => handleUpload(file, index)}
              >
                <Button>Add Image</Button>
              </Upload>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default DropArea;
