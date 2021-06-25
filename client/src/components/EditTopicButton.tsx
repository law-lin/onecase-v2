// import { useState, useEffect, useRef } from 'react';
// import { Button, Image, Input, Space, Upload, Popconfirm } from 'antd';
// import { createUseStyles } from 'react-jss';
// import { IoMdClose } from 'react-icons/io';
// import Modal from 'react-modal';
// import { useCurrentUserIdQuery } from 'generated/graphql';
// import {
//   useUpdateTopicByTitleAndUserId,
//   useDeleteTopicByTitleAndUserId,
//   useTopicByTitleAndUserId,
//   useDeletePostByPostId,
// } from 'utils/services';
// import { DashboardModal, useUppy } from '@uppy/react';
// import Uppy from '@uppy/core';
// import FileInput from '@uppy/file-input';
// import AwsS3 from '@uppy/aws-s3';
// import { FaCamera } from 'react-icons/fa';
// import { useForm } from 'react-hook-form';
// import { useParams, useHistory } from 'react-router-dom';
// import { GithubPicker } from 'react-color';
// import colors from 'constants/colors';

// const useStyles = createUseStyles({
//   modal: {
//     backgroundColor: '#242424',
//     borderRadius: '15px',
//     width: 'calc(100% - 64px)',
//     display: 'flex',
//     maxHeight: 'calc(100% - 64px)',
//     flexDirection: 'column',
//     boxShadow:
//       '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
//     maxWidth: '600px',
//   },
//   header: {
//     backgroundColor: '#4B4B4B',
//     flex: '0 0 auto',
//     margin: 0,
//     padding: '10px 15px',
//     borderRadius: '15px 15px 0 0 ',
//   },
//   portal: {},
//   overlayBase: {
//     position: 'fixed',
//     top: 0,
//     right: 0,
//     bottom: 0,
//     left: 0,
//     zIndex: 1000,
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.45)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     opacity: 0,
//     transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
//   },
//   overlayAfterOpen: {
//     opacity: 1,
//   },
//   overlayBeforeClose: {
//     opacity: 0,
//   },
//   content: {
//     width: '100%',
//     flex: '1 1 auto',
//     padding: '24px',
//     overflowY: 'auto',
//   },
//   container: {
//     color: '#C8C8C8',
//     backgroundColor: '#3E4E55',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '75px',
//     borderRadius: '10px',
//     padding: '0 24px',
//   },
//   title: {
//     width: 'fit-content',
//     color: '#FFFFFF',
//     fontFamily: ['Montserrat', 'sans-serif'],
//     fontSize: '26px',
//     fontWeight: 800,
//     display: 'inline-block',
//     verticalAlign: 'middle',
//   },
//   label: {
//     color: '#C8C8C8',
//     fontFamily: ['Mukta Mahee', 'sans-serif'],
//     fontSize: '20px',
//   },
//   save: {
//     '&:hover': {
//       outline: 'none',
//       backgroundColor: '#52bf75',
//     },
//     '&:focus': {
//       outline: 'none',
//     },
//     fontFamily: ['Mukta Mahee', 'sans-serif'],
//     alignSelf: 'center',
//     textTransform: 'none',
//     fontSize: '20px',
//     backgroundColor: '#242424',
//     color: '#FFFFFF',
//     borderRadius: '15px',
//     height: '25%',
//     display: 'inline-block',
//     verticalAlign: 'middle',
//     padding: '3px 10px',
//     borderStyle: 'none',
//     cursor: 'pointer',
//   },
//   close: {
//     '&:hover': {
//       outline: 'none',
//       backgroundColor: '#ad2121',
//     },
//     '&:focus': {
//       outline: 'none',
//     },
//     backgroundColor: 'transparent',
//     color: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     verticalAlign: 'middle',
//     padding: '6px',
//     borderStyle: 'none',
//     borderRadius: '9999px',
//     cursor: 'pointer',
//   },
//   imageUpload: {
//     '&:hover': {
//       outline: 'none',
//     },
//     '&:focus': {
//       outline: 'none',
//     },
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     bottom: 0,
//     left: 0,
//     margin: 'auto',
//     color: '#FFFFFF',
//     border: 'none',
//   },
//   textArea: {
//     '&:focus': {
//       outline: 'none',
//     },
//     backgroundColor: '#ADB0B1',
//     borderRadius: '3px',
//     fontSize: '18px',
//     resize: 'none',
//     width: '100%',
//     color: '#FFFFFF',
//     padding: '4px 11px',
//   },
//   textField: {
//     '&:focus': {
//       outline: 'none',
//     },
//     backgroundColor: '#ADB0B1',
//     borderRadius: '3px',
//     display: 'block',
//     color: '#FFFFFF',
//     fontFamily: ['Mukta Mahee', 'sans-serif'],
//     width: '100%',
//     border: 'none',
//     fontSize: '18px',
//     padding: '4px 11px',
//   },
//   bio: {
//     color: '#C8C8C8',
//     backgroundColor: '#3E4E55',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '150px',
//     // width: "410px",
//     borderRadius: '10px',
//   },
// });

// interface EditTopicFormSettings {
//   props: any;
//   visible: boolean;
//   onSave: (values: any, topicColor: string) => void;
//   onCancel: () => void;
//   onDelete: () => void;
// }

// type FormInputs = {
//   title?: string;
//   notes?: string;
//   coverImage?: File;
// };

// const EditTopicForm = ({
//   props,
//   visible,
//   onSave,
//   onCancel,
//   onDelete,
// }: EditTopicFormSettings) => {
//   const [coverImageUrl, setCoverImageUrl] = useState<string>();
//   const [topicColor, setTopicColor] = useState<string>();
//   const {
//     register,
//     handleSubmit,
//     errors,
//     reset,
//     setValue,
//   } = useForm<FormInputs>();

//   const classes = useStyles();

//   useEffect(() => {
//     reset({
//       title: props.title,
//       notes: props.notes,
//     });
//     setCoverImageUrl(props.coverImageUrl);
//     setTopicColor(props.topicColor);
//   }, [
//     visible,
//     props.title,
//     props.notes,
//     props.coverImageUrl,
//     props.topicColor,
//   ]);

//   // const uppy = useUppy(() => {
//   //   return Uppy<Uppy.StrictTypes>().use(AwsS3, {
//   //     companionUrl: 'http://localhost:8080',
//   //   });
//   // });

//   // uppy.on('complete', (result) => {
//   //   const url = result.successful[0].uploadURL;
//   //   console.log(url);
//   // });

//   const handleCoverImageChange = async (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     if (e.target.files?.length === 1) {
//       if (e.target.files[0].size > 5242880) {
//         alert('5 MB file size limit exceeded!');
//         return;
//       }
//       const url = URL.createObjectURL(e.target.files?.[0]);
//       setCoverImageUrl(url);
//     }
//   };

//   const coverImageUpload = useRef<HTMLInputElement | null>(null);

//   return (
//     <Modal
//       isOpen={visible}
//       portalClassName={classes.portal}
//       overlayClassName={{
//         base: classes.overlayBase,
//         afterOpen: classes.overlayAfterOpen,
//         beforeClose: classes.overlayBeforeClose,
//       }}
//       className={classes.modal}
//       shouldCloseOnOverlayClick={true}
//       onRequestClose={() => {
//         onCancel();
//       }}
//       closeTimeoutMS={225}
//       ariaHideApp={false}
//     >
//       <form onSubmit={handleSubmit((e) => onSave(e, topicColor as string))}>
//         <div className={classes.header}>
//           <div
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               flexDirection: 'row',
//             }}
//           >
//             <div style={{ minWidth: 60 }}>
//               <button
//                 type='button'
//                 className={classes.close}
//                 onClick={() => {
//                   onCancel();
//                 }}
//               >
//                 <span
//                   style={{
//                     width: '100%',
//                     display: 'flex',
//                     alignItems: 'inherit',
//                     justifyContent: 'inherit',
//                     fontSize: '1.5rem',
//                   }}
//                 >
//                   <IoMdClose />
//                 </span>
//               </button>
//             </div>
//             <div style={{ flexGrow: 1 }}>
//               <span className={classes.title}>Edit Topic</span>
//             </div>
//             <div style={{ marginLeft: 20 }}>
//               <button type='submit' className={classes.save}>
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//         <Space className={classes.content} direction='vertical' size={25}>
//           <div>
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 position: 'relative',
//               }}
//             >
//               <img
//                 src={coverImageUrl}
//                 style={{
//                   opacity: 0.5,
//                   borderRadius: '6px',
//                   height: '150px',
//                   width: '100%',
//                 }}
//               />
//               <input
//                 type='file'
//                 name='coverImage'
//                 accept='image/jpg, image/jpeg, image/png, .heic'
//                 ref={(ref) => {
//                   coverImageUpload.current = ref;
//                   register(ref);
//                 }}
//                 style={{ display: 'none' }}
//                 onChange={handleCoverImageChange}
//               />

//               <Button
//                 icon={<FaCamera />}
//                 type='ghost'
//                 shape='circle'
//                 className={classes.imageUpload}
//                 onClick={() => coverImageUpload.current?.click()}
//               />
//             </div>
//           </div>
//           <div style={{ padding: '0 24px' }}>
//             <div className={classes.container}>
//               <span className={classes.label}>Topic Title</span>
//               <input
//                 type='text'
//                 name='title'
//                 ref={register}
//                 className={classes.textField}
//                 style={{ backgroundColor: topicColor }}
//               />
//             </div>
//             <div style={{ marginLeft: '20px' }}>
//               <GithubPicker
//                 colors={colors}
//                 width='112px'
//                 onChangeComplete={(color) => setTopicColor(color.hex)}
//               />
//             </div>
//           </div>

//           <div style={{ padding: '0 24px' }}>
//             <div className={classes.container}>
//               <span className={classes.label}>Notes</span>
//               <input
//                 type='text'
//                 name='notes'
//                 ref={register}
//                 className={classes.textField}
//               />
//             </div>
//           </div>
//           <div style={{ padding: '0 24px' }}>
//             <Popconfirm
//               title='Are you sure you want to delete this topic?'
//               okText='Yes'
//               cancelText='No'
//               onConfirm={onDelete}
//             >
//               <Button danger type='primary'>
//                 Delete Topic
//               </Button>
//             </Popconfirm>
//           </div>
//         </Space>
//       </form>
//     </Modal>
//   );
// };

// const EditTopicButton = (props: any) => {
//   const { topicTitle, username } = useParams<Params>();
//   const [visible, setVisible] = useState(false);
//   const { loading, error, data } = useCurrentUserIdQuery();
//   const [updateTopic] = useUpdateTopicByTitleAndUserId();
//   const [deleteTopic] = useDeleteTopicByTitleAndUserId();
//   const [deletePost] = useDeletePostByPostId();
//   const history = useHistory();

//   interface Params {
//     topicTitle: string;
//     username: string;
//   }

//   const topic = useTopicByTitleAndUserId({
//     variables: {
//       title: topicTitle,
//       userId: data?.currentUserId,
//     },
//   });

//   const onDelete = async () => {
//     try {
//       const deletedTopic = await deleteTopic({
//         variables: {
//           input: {
//             title: topicTitle,
//             userId: data?.currentUserId,
//           },
//         },
//       });
//       if (
//         deletedTopic &&
//         deletedTopic.data &&
//         deletedTopic.data?.deleteTopicByTitleAndUserId
//       ) {
//         setVisible(false);
//         history.push('/' + username);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const onSave = async (values: any, topicColor: string) => {
//     try {
//       // Create form data for multi-part/form spec
//       let formData = new FormData();

//       let urls = [];
//       let coverImageSent = false;
//       if (values.coverImage[0] !== undefined) {
//         if (values.coverImage[0] !== undefined) {
//           coverImageSent = true;
//           formData.append(
//             'images',
//             values.coverImage[0],
//             values.coverImage[0].name
//           );
//         }
//         const response = await fetch('/upload', {
//           method: 'POST',
//           body: formData,
//         });
//         urls = await response.json();
//       }

//       // Send POST request to store images in s3 and generate urls

//       // Save newly generated urls in contents json
//       const updatedTopic = await updateTopic({
//         variables: {
//           input: {
//             userId: data?.currentUserId,
//             title: topicTitle,
//             topicPatch: {
//               title: values.title,
//               notes: values.notes,
//               updatedAt: new Date(
//                 Date.now() + 1000 * 60 * -new Date().getTimezoneOffset()
//               )
//                 .toISOString()
//                 .replace('T', ' ')
//                 .replace('Z', ''),
//               coverImage: coverImageSent ? urls[0] : undefined,
//               topicColor,
//             },
//           },
//         },
//       });
//       if (
//         updatedTopic &&
//         updatedTopic.data &&
//         updatedTopic.data.updateTopicByTitleAndUserId
//       ) {
//         if (values.title !== props.title) {
//           history.push(
//             '/' +
//               username +
//               '/' +
//               updatedTopic.data.updateTopicByTitleAndUserId.topic?.title
//           );
//         } else {
//           props.refetch();
//           setVisible(false);
//         }
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <>
//       <Button
//         style={{ position: 'absolute', top: 10, right: 10 }}
//         onClick={() => {
//           setVisible(true);
//         }}
//       >
//         Edit Topic
//       </Button>
//       <EditTopicForm
//         props={props}
//         visible={visible}
//         onSave={onSave}
//         onCancel={() => {
//           setVisible(false);
//         }}
//         onDelete={onDelete}
//       />
//     </>
//   );
// };

// export default EditTopicButton;
export {};
