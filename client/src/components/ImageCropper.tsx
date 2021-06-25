import { useState, useEffect, useCallback } from 'react';
import { Slider } from 'antd';
import { createUseStyles } from 'react-jss';
import Modal from 'react-modal';
import Cropper from 'react-easy-crop';
import { Area } from 'react-easy-crop/types';

const useStyles = createUseStyles({
  modal: {
    backgroundColor: '#E4E4E4',
    borderRadius: '15px',
    width: 'calc(100% - 64px)',
    display: 'flex',
    maxHeight: 'calc(100% - 64px)',
    flexDirection: 'column',
    boxShadow:
      '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
    maxWidth: '1280px',
    minHeight: '80vh',
  },
  header: {
    backgroundColor: '#4B4B4B',
    flex: '0 0 auto',
    margin: 0,
    padding: '10px 15px',
    borderRadius: '15px 15px 0 0 ',
  },
  portal: {},
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
  content: {
    width: '100%',
    flex: '1 1 auto',
    padding: '24px',
    overflowY: 'auto',
  },
  container: {
    color: '#C8C8C8',
    backgroundColor: '#3E4E55',
    alignItems: 'center',
    justifyContent: 'center',
    height: '75px',
    borderRadius: '10px',
    padding: '0 24px',
  },
  sliderContainer: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
  },
  save: {
    '&:hover': {
      outline: 'none',
      backgroundColor: '#52bf75',
    },
    '&:focus': {
      outline: 'none',
    },
    fontFamily: ['Montserrat', 'sans-serif'],
    alignSelf: 'center',
    textTransform: 'none',
    fontSize: '20px',
    backgroundColor: '#05872e',
    color: '#FFFFFF',
    borderRadius: '15px',
    height: '25%',
    marginRight: '1.5%',
    border: 'none',
    cursor: 'pointer',
  },
  cancel: {
    '&:hover': {
      outline: 'none',
      backgroundColor: '#f07171',
    },
    '&:focus': {
      outline: 'none',
    },
    fontFamily: ['Montserrat', 'sans-serif'],
    alignSelf: 'center',
    textTransform: 'none',
    fontSize: '20px',
    backgroundColor: '#f03737',
    color: '#FFFFFF',
    borderRadius: '15px',
    height: '25%',
    marginRight: '1.5%',
    border: 'none',
    cursor: 'pointer',
  },
});

interface PixelCrop {
  width: number;
  height: number;
  x: number;
  y: number;
}
interface ImageCropperProps {
  visible: boolean;
  source: string;
  imageSrcUrl: string;
  onSave: (
    imageSrc: string,
    croppedAreaPixels: PixelCrop,
    rotation: number,
    source: string
  ) => void;
  onCancel: () => void;
}

const ImageCropper = ({
  visible,
  source,
  imageSrcUrl,
  onSave,
  onCancel,
}: ImageCropperProps) => {
  const [imageSrc, setImageSrc] = useState<string>();

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<PixelCrop>();

  const classes = useStyles();

  useEffect(() => {
    setCrop({ x: 0, y: 0 });
    setRotation(0);
    setZoom(1);
    setImageSrc(imageSrcUrl);
  }, [visible, imageSrc]);

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  return (
    <Modal
      isOpen={visible}
      portalClassName={classes.portal}
      overlayClassName={{
        base: classes.overlayBase,
        afterOpen: classes.overlayAfterOpen,
        beforeClose: classes.overlayBeforeClose,
      }}
      className={classes.modal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => {}}
      closeTimeoutMS={225}
      ariaHideApp={false}
    >
      <div style={{ flex: 1 }}>
        <div style={{ position: 'relative', width: '100%', height: '70vh' }}>
          <Cropper
            image={imageSrc}
            crop={crop}
            rotation={rotation}
            zoom={zoom}
            aspect={source === 'cover_image' ? 9 / 3 : 3 / 3}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onRotationChange={setRotation}
            onZoomChange={setZoom}
          />
        </div>
      </div>
      <div style={{ padding: '24px', backgroundColor: '#242424' }}>
        <span
          style={{ color: '#FFFFFF', fontFamily: 'Open Sans', fontWeight: 600 }}
        >
          Rotation
        </span>
        <Slider
          value={rotation}
          min={0}
          max={360}
          step={1}
          onChange={(value: number) => setRotation(value)}
        />

        <span
          style={{ color: '#FFFFFF', fontFamily: 'Open Sans', fontWeight: 600 }}
        >
          Zoom
        </span>
        <Slider
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          onChange={(value: number) => setZoom(value)}
        />
        <div style={{ textAlign: 'right', marginTop: '30px' }}>
          <button onClick={onCancel} className={classes.cancel}>
            Cancel
          </button>
          <button
            onClick={() =>
              onSave(
                imageSrc as string,
                croppedAreaPixels as PixelCrop,
                rotation,
                source
              )
            }
            className={classes.save}
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ImageCropper;
