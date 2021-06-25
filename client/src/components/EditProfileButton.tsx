import { useState, useEffect, useRef } from 'react';
import { Button, Space } from 'antd';
import { createUseStyles } from 'react-jss';
import { IoMdClose } from 'react-icons/io';
import { UserOutlined } from '@ant-design/icons';
import Modal from 'react-modal';
import { useCurrentUserIdQuery } from 'generated/graphql';
import { useUpdateUserByUserId } from 'utils/services';
import { FaCamera } from 'react-icons/fa';
import Avatar from 'antd/lib/avatar/avatar';
import { useForm } from 'react-hook-form';
import * as REGEXP from 'constants/regexp';
import ImageCropper from 'components/ImageCropper';
import { getOrientation } from 'get-orientation/browser';
import { getCroppedImg, getRotatedImage } from 'utils/canvasUtils';
import isProd from 'utils/isDev';

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
    maxHeight: '65vh',
    overflowY: 'auto',
  },
  container: {
    color: '#C8C8C8',
    backgroundColor: '#3E4E55',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    padding: '5px 24px 10px 24px',
  },
  title: {
    width: 'fit-content',
    color: '#FFFFFF',
    fontFamily: ['Montserrat', 'sans-serif'],
    fontSize: '26px',
    fontWeight: 800,
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  label: {
    color: '#C8C8C8',
    fontFamily: ['Mukta Mahee', 'sans-serif'],
    fontSize: '20px',
  },
  save: {
    '&:hover': {
      outline: 'none',
      backgroundColor: '#52bf75',
    },
    '&:focus': {
      outline: 'none',
    },
    fontFamily: ['Mukta Mahee', 'sans-serif'],
    alignSelf: 'center',
    textTransform: 'none',
    fontSize: '20px',
    backgroundColor: '#242424',
    color: '#FFFFFF',
    borderRadius: '15px',
    height: '25%',
    display: 'inline-block',
    verticalAlign: 'middle',
    padding: '3px 10px',
    borderStyle: 'none',
    cursor: 'pointer',
  },
  close: {
    '&:hover': {
      outline: 'none',
      backgroundColor: '#ad2121',
    },
    '&:focus': {
      outline: 'none',
    },
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'middle',
    padding: '6px',
    borderStyle: 'none',
    borderRadius: '9999px',
    cursor: 'pointer',
  },
  imageUpload: {
    '&:hover': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
    color: '#FFFFFF',
    border: 'none',
  },
  textArea: {
    '&:focus': {
      outline: 'none',
    },
    backgroundColor: '#ADB0B1',
    borderRadius: '3px',
    fontSize: '18px',
    resize: 'none',
    width: '100%',
    color: '#FFFFFF',
    padding: '4px 11px',
  },
  textField: {
    '&:focus': {
      outline: 'none',
    },
    backgroundColor: '#ADB0B1',
    borderRadius: '3px',
    display: 'block',
    color: '#FFFFFF',
    fontFamily: ['Mukta Mahee', 'sans-serif'],
    width: '100%',
    border: 'none',
    fontSize: '18px',
    padding: '4px 11px',
  },
  bio: {
    color: '#C8C8C8',
    backgroundColor: '#3E4E55',
    alignItems: 'center',
    justifyContent: 'center',
    height: '150px',
    // width: "410px",
    borderRadius: '10px',
  },
});
interface EditProfileFormSettings {
  props: any;
  visible: boolean;
  onSave: (
    values: FormInputs,
    profilePictureUrl: string,
    coverImageUrl: string
  ) => void;
  onCancel: () => void;
}

type FormInputs = {
  name?: string;
  username?: string;
  biography?: string;
};

const EditProfileForm = ({
  props,
  visible,
  onSave,
  onCancel,
}: EditProfileFormSettings) => {
  const [profilePictureUrl, setProfilePictureUrl] = useState<string>();
  const [coverImageUrl, setCoverImageUrl] = useState<string>();

  const [bioCharsLeft, setBioCharsLeft] = useState<number>();

  // image uploads
  const [imageSrc, setImageSrc] = useState<string>();
  const [source, setSource] = useState<string>();
  const [cropVisible, setCropVisible] = useState(false);
  const [inputKey, setInputKey] = useState<number>();

  const {
    register,
    handleSubmit,
    errors,
    reset,
    setValue,
  } = useForm<FormInputs>();

  const classes = useStyles();

  useEffect(() => {
    reset({
      name: props.name,
      username: props.username,
      biography: props.biography,
    });
    setProfilePictureUrl(props.profilePictureUrl);
    setCoverImageUrl(props.coverImageUrl);
  }, [
    visible,
    props.name,
    props.username,
    props.profilePictureUrl,
    props.coverImageUrl,
  ]);

  useEffect(() => {
    if (props.biography) {
      setBioCharsLeft(200 - props.biography.length);
    } else {
      setBioCharsLeft(200);
    }
  }, [props.biography]);

  function readFile(file: File): Promise<string> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener(
        'load',
        () => resolve(reader.result as string),
        false
      );
      reader.readAsDataURL(file);
    });
  }

  const ORIENTATION_TO_ANGLE: any = {
    '3': 180,
    '6': 90,
    '8': -90,
  };

  const handleImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    source: string
  ) => {
    if (e.target.files?.length === 1) {
      const file = e.target.files[0];
      if (file.size > 5242880) {
        alert('5 MB file size limit exceeded!');
        return;
      }
      let image: string = await readFile(file);
      // const url = URL.createObjectURL(image);
      const orientation = await getOrientation(file);
      const rotation = ORIENTATION_TO_ANGLE[orientation];
      if (rotation) {
        image = await getRotatedImage(image, rotation);
      }
      setSource(source);
      setImageSrc(image);
      setCropVisible(true);
    }
  };

  interface PixelCrop {
    width: number;
    height: number;
    x: number;
    y: number;
  }

  const handleImageSave = async (
    imageSrc: string,
    croppedAreaPixels: PixelCrop,
    rotation: number,
    source: string
  ) => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      );

      if (source === 'profile_picture') {
        setProfilePictureUrl(croppedImage as string);
      } else if (source === 'cover_image') {
        setCoverImageUrl(croppedImage as string);
      }
      setCropVisible(false);
    } catch (e) {
      console.error(e);
      setCropVisible(false);
    }
  };

  const onBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBioCharsLeft(200 - e.target.value.length);
  };

  const profilePictureUpload = useRef<HTMLInputElement | null>(null);
  const coverImageUpload = useRef<HTMLInputElement | null>(null);

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
      onRequestClose={() => {
        onCancel();
      }}
      closeTimeoutMS={225}
      ariaHideApp={false}
    >
      <form
        onSubmit={handleSubmit((values) =>
          onSave(values, profilePictureUrl as string, coverImageUrl as string)
        )}
      >
        <div className={classes.header}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <div style={{ minWidth: 60 }}>
              <button
                type='button'
                className={classes.close}
                onClick={() => {
                  onCancel();
                }}
              >
                <span
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'inherit',
                    justifyContent: 'inherit',
                    fontSize: '1.5rem',
                  }}
                >
                  <IoMdClose />
                </span>
              </button>
            </div>
            <div style={{ flexGrow: 1 }}>
              <span className={classes.title}>Edit Profile</span>
            </div>
            <div style={{ marginLeft: 20 }}>
              <button type='submit' className={classes.save}>
                Save
              </button>
            </div>
          </div>
        </div>
        <Space className={classes.content} direction='vertical' size={25}>
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <img
                src={coverImageUrl}
                style={{
                  opacity: 0.5,
                  borderRadius: '6px',
                  height: '150px',
                  width: '100%',
                }}
              />
              <input
                type='file'
                name='coverImage'
                accept='image/jpg, image/jpeg, image/png, .heic'
                key={inputKey}
                ref={(ref) => {
                  coverImageUpload.current = ref;
                  register(ref);
                }}
                style={{ display: 'none' }}
                onChange={(e) => handleImageChange(e, 'cover_image')}
              />

              <Button
                icon={<FaCamera />}
                type='ghost'
                shape='circle'
                className={classes.imageUpload}
                onClick={() => coverImageUpload.current?.click()}
              />
            </div>

            <div
              style={{
                display: 'flex',
                marginTop: '-50px',
                paddingLeft: '10px',
              }}
            >
              <span
                style={{
                  backgroundColor: '#FFFFFF',
                  height: '110px',
                  width: '110px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    backgroundColor: '#3E4E55',
                    height: '100px',
                    width: '100px',
                    borderRadius: '50%',
                    display: 'inline-block',
                  }}
                >
                  <Avatar
                    size={100}
                    style={{
                      position: 'relative',
                      opacity: 0.5,
                    }}
                    src={profilePictureUrl}
                    icon={<UserOutlined />}
                  />
                  <input
                    type='file'
                    name='profilePicture'
                    accept='image/jpg, image/jpeg, image/png, .heic'
                    key={inputKey}
                    ref={(ref) => {
                      profilePictureUpload.current = ref;
                      register(ref);
                    }}
                    style={{ display: 'none' }}
                    onChange={(e) => handleImageChange(e, 'profile_picture')}
                  />
                  <Button
                    icon={<FaCamera />}
                    type='ghost'
                    shape='circle'
                    className={classes.imageUpload}
                    onClick={() => profilePictureUpload.current?.click()}
                  />
                  <ImageCropper
                    visible={cropVisible}
                    source={source as string}
                    imageSrcUrl={imageSrc as string}
                    onSave={handleImageSave}
                    onCancel={() => {
                      setCropVisible(false);
                      setInputKey(Date.now());
                    }}
                  />
                </span>
              </span>
            </div>
          </div>
          <div style={{ padding: '0 24px' }}>
            <div className={classes.container}>
              <span className={classes.label}>Name</span>
              <input
                type='text'
                name='name'
                ref={register({
                  required: true,
                  pattern: REGEXP.nameRegexp,
                })}
                className={classes.textField}
              />
            </div>
            {errors.name?.type === 'required' && (
              <span
                style={{ color: '#bf1f1f', fontWeight: 700, float: 'right' }}
              >
                Name cannot be empty!
              </span>
            )}
            {errors.name?.type === 'pattern' && (
              <span
                style={{ color: '#bf1f1f', fontWeight: 700, float: 'right' }}
              >
                Please use only letters (a-z/A-Z), numbers, underscores, and
                periods. (1-50 characters)
              </span>
            )}
          </div>

          <div style={{ padding: '0 24px' }}>
            <div className={classes.container}>
              <span className={classes.label}>Username</span>
              <input
                type='text'
                name='username'
                ref={register({
                  required: true,
                  pattern: REGEXP.usernameRegexp,
                })}
                className={classes.textField}
              />
            </div>
            {errors.username?.type === 'required' && (
              <span
                style={{ color: '#bf1f1f', fontWeight: 700, float: 'right' }}
              >
                Username cannot be empty!
              </span>
            )}
            {errors.username?.type === 'pattern' && (
              <span
                style={{ color: '#bf1f1f', fontWeight: 700, float: 'right' }}
              >
                Please use only lowercase letters (a-z), numbers, underscores,
                and periods. (1-20 characters)
              </span>
            )}
          </div>
          <div style={{ padding: '0 24px' }}>
            <div className={classes.container}>
              <span className={classes.label}>Bio</span>
              <textarea
                name='biography'
                ref={register({
                  maxLength: 200,
                })}
                rows={3}
                maxLength={200}
                className={classes.textArea}
                onChange={onBioChange}
              />
            </div>
            {(bioCharsLeft as number) > 0 ? (
              <span
                style={{
                  color: '#C8C8C8',
                  fontWeight: 700,
                  float: 'right',
                }}
              >
                {bioCharsLeft} character(s) remaining
              </span>
            ) : (
              <span
                style={{ color: '#bf1f1f', fontWeight: 700, float: 'right' }}
              >
                {bioCharsLeft} characters remaining
              </span>
            )}
          </div>
        </Space>
      </form>
    </Modal>
  );
};
const EditProfileButton = (props: any) => {
  const [visible, setVisible] = useState(false);
  const { loading, error, data } = useCurrentUserIdQuery();
  const [updateUser] = useUpdateUserByUserId();

  const onSave = async (
    values: FormInputs,
    profilePictureUrl: string,
    coverImageUrl: string
  ) => {
    try {
      // Create form data for multi-part/form spec
      let formData = new FormData();

      let urls = [];
      let profilePictureSent = false;
      let coverImageSent = false;

      if (profilePictureUrl !== undefined || coverImageUrl !== undefined) {
        if (
          profilePictureUrl !== props.profilePictureUrl &&
          profilePictureUrl !== undefined
        ) {
          profilePictureSent = true;
          const res = await fetch(profilePictureUrl);
          const blob = await res.blob();
          const file = new File([blob], 'unknown.png', { type: 'image/png' });
          formData.append('images', file);
        }
        if (
          coverImageUrl !== props.coverImageUrl &&
          coverImageUrl !== undefined
        ) {
          coverImageSent = true;
          const res = await fetch(coverImageUrl);
          const blob = await res.blob();
          const file = new File([blob], 'unknown.png', { type: 'image/png' });
          formData.append('images', file);
        }
        const uploadUrl = isProd() ? '/upload' : 'http://localhost:8080/upload';
        // Send POST request to store images in s3 and generate urls
        const response = await fetch(uploadUrl, {
          method: 'POST',
          body: formData,
        });
        urls = await response.json();
      }
      // Save newly generated urls in contents json
      const updatedUser = await updateUser({
        variables: {
          input: {
            userId: data?.currentUserId,
            userPatch: {
              name: values.name,
              username: values.username,
              biography: values.biography,
              updatedAt: new Date(
                Date.now() + 1000 * 60 * -new Date().getTimezoneOffset()
              )
                .toISOString()
                .replace('T', ' ')
                .replace('Z', ''),
              profilePicture: profilePictureSent ? urls[0] : undefined,
              coverImage:
                profilePictureSent && coverImageSent
                  ? urls[1]
                  : coverImageSent
                  ? urls[0]
                  : undefined,
            },
          },
        },
      });
      if (
        updatedUser &&
        updatedUser.data &&
        updatedUser.data.updateUserByUserId
      ) {
        if (values.username !== props.username) {
          window.location.href = `/${values.username}`;
        } else {
          props.refetch();
          setVisible(false);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        Edit Profile
      </Button>
      <EditProfileForm
        props={props}
        visible={visible}
        onSave={onSave}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

export default EditProfileButton;
