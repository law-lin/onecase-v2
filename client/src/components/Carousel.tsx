import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import Image from 'components/Image';

const useStyles = createUseStyles({
  leftArrow: {
    justifyContent: 'center',
    alignContent: 'center',
    borderColor: 'transparent',
    '&:hover': {
      borderColor: 'transparent',
    },
    '&:active': {
      borderColor: 'transparent',
    },
    '&:focus': {
      borderColor: 'transparent',
    },
  },
  rightArrow: {
    borderColor: 'transparent',
    '&:hover': {
      borderColor: 'transparent',
    },
    '&:active': {
      borderColor: 'transparent',
    },
    '&:focus': {
      borderColor: 'transparent',
    },
  },
  currentImage: {
    marginBottom: '10px',
  },
  hide: {
    display: 'none',
  },
});

function Carousel(props: any) {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const length = props.images.length;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const nextImage = () => {
    setCurrent(current === length - 1 ? current : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? current : current - 1);
  };

  return (
    <>
      {props.images.map((image: string, index: number) => {
        return (
          <div
            className={index === current ? classes.currentImage : classes.hide}
          >
            <Image
              index={index}
              length={length}
              src={props.images[current]}
              nextImage={() => nextImage}
              prevImage={() => prevImage}
            />
          </div>
        );
      })}

      {/* <Button
        className={classes.leftArrow}
        onClick={prevImage}
        shape='circle'
        icon={<LeftOutlined />}
      />
      <Image.PreviewGroup>
        {props.images.map((image, index) => {
          return (
            <>
              <img
                className={
                  index === current ? classes.currentImage : classes.hide
                }
                onClick={showModal}
                src={image}
              ></img>
            </>
          );
        })}
        <Button
          className={classes.rightArrow}
          onClick={nextImage}
          shape='circle'
          icon={<RightOutlined />}
        />
      </Image.PreviewGroup>
      <Modal
        title={props.images[current]}
        footer={null}
        visible={isModalVisible}
        onCancel={handleCancel}
      >
        <Button
          className={classes.leftArrow}
          onClick={prevImage}
          shape='circle'
          icon={<LeftOutlined />}
        />
        <img className={classes.currentImage} src={props.images[current]}></img>
        <Button
          className={classes.rightArrow}
          onClick={nextImage}
          shape='circle'
          icon={<RightOutlined />}
        />
      </Modal> */}
    </>
  );
}

export default Carousel;
