import React, { useState } from 'react';
import { Button, Space, Popconfirm } from 'antd';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { createUseStyles } from 'react-jss';
import { IoMdClose } from 'react-icons/io';

import { useCreateJournal, useCurrentUserId } from 'utils/services';
import { GithubPicker } from 'react-color';
import colors from 'constants/colors';

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
  create: {
    '&:hover': {
      outline: 'none',
      backgroundColor: '#2C8B30',
    },
    '&:focus': {
      outline: 'none',
    },
    '&:active': {
      backgroundColor: '#216A24',
    },
    fontFamily: ['Mukta Mahee', 'sans-serif'],
    alignSelf: 'center',
    textTransform: 'none',
    fontSize: '20px',
    backgroundColor: '#35A739',
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
});

interface CreateJournalFormSettings {
  visible: boolean;
  onCreate: (values: any, color: string) => void;
  onCancel: () => void;
}

type FormInputs = {
  title: string;
  color?: string;
};

// Look in antd Form in Modal docs
const CreateJournalForm = ({
  visible,
  onCreate,
  onCancel,
}: CreateJournalFormSettings) => {
  const {
    register,
    handleSubmit,
    errors,
    reset,
    setValue,
  } = useForm<FormInputs>();
  const [color, setColor] = useState<string>();

  const classes = useStyles();
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
      <form onSubmit={handleSubmit((e) => onCreate(e, color as string))}>
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
              <span className={classes.title}>Create Journal</span>
            </div>
          </div>
        </div>
        <Space className={classes.content} direction='vertical' size={25}>
          <div style={{ padding: '0 24px' }}>
            <div className={classes.container}>
              <span className={classes.label}>Journal Title</span>
              <input
                type='text'
                name='title'
                ref={register({
                  required: true,
                  maxLength: 20,
                  pattern: /^[a-zA-Z0-9!@#$%^&*()_:,.-]+(?: [a-zA-Z0-9!@#$%^&*()_:,.-]+)*$/,
                })}
                className={classes.textField}
                style={{ backgroundColor: color }}
              />
              <div
                style={{
                  textAlign: 'end',
                  marginTop: '10px',
                  fontWeight: 600,
                  color: '#EB4D4D',
                }}
              >
                {errors.title?.type === 'required' && 'Please enter a title!'}
                {errors.title?.type === 'maxLength' &&
                  'Character limit of 20 exceeded!'}
                {errors.title?.type === 'pattern' &&
                  'Invalid character(s) entered!'}
              </div>
            </div>
            <div style={{ marginLeft: '20px' }}>
              <GithubPicker
                colors={colors}
                width='113px'
                onChangeComplete={(color) => setColor(color.hex)}
              />
            </div>
          </div>
          <div style={{ textAlign: 'end' }}>
            <button className={classes.create}>Create</button>
          </div>
        </Space>
      </form>
    </Modal>

    // <Modal
    //   visible={visible}
    //   title='Create a new journal'
    //   okText='Create'
    //   cancelText='Cancel'
    //   onCancel={onCancel}
    //   onOk={() => {
    //     form
    //       .validateFields()
    //       .then((values) => {
    //         form.resetFields();
    //         onCreate(values);
    //       })
    //       .catch((info) => {
    //         console.log('Validate Failed:', info);
    //       });
    //   }}
    // >
    //   <Form form={form} layout='vertical'>
    //     <Form.Item
    //       name='title'
    //       label='Title'
    //       rules={[
    //         {
    //           required: true,
    //           message: 'Please enter a title for the journal!',
    //         },
    //       ]}
    //     >
    //       <Input />
    //     </Form.Item>
    //     <GithubPicker
    //       colors={colors}
    //       width='112px'
    //       onChangeComplete={(color) => setColor(color.hex)}
    //     />
    //     {/* <Form.Item name='notes' label='Notes'>
    //       <Input.TextArea
    //         showCount
    //         maxLength={200}
    //         autoSize={{ minRows: 3, maxRows: 6 }}
    //       />
    //     </Form.Item> */}
    //   </Form>
    // </Modal>
  );
};

const CreateJournal = ({ refetch }: any) => {
  const [visible, setVisible] = useState(false);
  const { loading, data, error } = useCurrentUserId();
  const [createJournal] = useCreateJournal();

  const onCreate = async (values: any, color: string) => {
    try {
      const newJournal = await createJournal({
        variables: {
          userId: data?.currentUserId,
          title: values.title,
          color,
        },
      });
      setVisible(false);
      if (newJournal && newJournal.data && newJournal.data.createJournal) {
        refetch();
      }
    } catch (error) {
      console.error(error);
      setVisible(false);
    }
  };

  return (
    <>
      <Button
        type='primary'
        onClick={() => {
          setVisible(true);
        }}
        style={{ alignSelf: 'flex-end', margin: '20px' }}
      >
        New Journal
      </Button>
      <CreateJournalForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

export default CreateJournal;
