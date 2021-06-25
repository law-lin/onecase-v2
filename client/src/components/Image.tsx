import React from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { Image as antImage } from 'antd';

const useStyles = createUseStyles({
  leftArrow: {},
  rightArrow: {},
  hide: {
    display: 'none',
  },
});

function Image(props: any) {
  const classes = useStyles();
  return (
    <div
      style={{
        display: 'flex',
        backgroundImage: `url(${props.src}`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        height: '150px',
        width: '150px',
        alignItems: 'center',
      }}
    >
      <div
        style={{ display: 'flex', flex: 'auto', justifyContent: 'flex-start' }}
      >
        <Button
          className={props.index === 0 ? classes.hide : classes.leftArrow}
          onClick={props.prevImage()}
          size='small'
          style={{
            backgroundColor: '#C4C4C4',
            borderColor: 'transparent',
            opacity: '75%',
          }}
          shape='circle'
          icon={<LeftOutlined />}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flex: 'auto',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          className={
            props.index === props.length - 1 ? classes.hide : classes.leftArrow
          }
          onClick={props.nextImage()}
          size='small'
          style={{
            backgroundColor: '#C4C4C4',
            borderColor: 'transparent',
            opacity: '75%',
          }}
          shape='circle'
          icon={<RightOutlined style={{ verticalAlign: '0' }} />}
        />
      </div>
    </div>
  );
}

export default Image;
