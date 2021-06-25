import React, { useEffect, useState, useRef } from 'react';
import { createUseStyles } from 'react-jss';

// import Creatable, { makeCreatableSelect } from 'react-select/creatable';

import { Col, Input, Upload, Button, Space, Row, Popconfirm } from 'antd';
import { RcFile } from 'antd/lib/upload';

import TextareaAutoSize from 'react-textarea-autosize';
import {
  useUpdateJournalByJournalId,
  useCurrentUserId,
  useJournalByJournalId,
  useDeleteJournalByJournalId,
  useCurrentUser,
} from 'utils/services';
import { useParams, useHistory } from 'react-router-dom';
import isProd from 'utils/isDev';
import Toolbox from 'components/Toolbox';
import DropArea from 'components/DropArea';
import ToolDisplay from 'components/ToolDisplay';

// import ReactImageUploadComponent from 'react-images-upload';

const useStyles = createUseStyles({
  root: {
    margin: '80px auto 0 auto',
    minWidth: '1250px',
    maxWidth: '1250px',
    display: 'flex',
    padding: 0,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textTransform: 'none',
    fontFamily: ['Montserrat', 'sans-serif'],
    backgroundColor: '#000000',
    color: '#FFFFFF',
    fontSize: '24px',
    fontWeight: 800,
    borderRadius: '15px',
    alignSelf: 'center',
    width: '50%',
    textAlign: 'center',
    margin: '10px',
    boxShadow: 'none',
  },
  journalTitle: {
    textAlign: 'left',
    paddingLeft: '15px',
    paddingTop: '8px',
    paddingBottom: '7px',
    fontFamily: ['Open Sans', 'sans-serif'],
    fontWeight: 'bolder',
    color: 'white',
    width: '100%',
    backgroundColor: '#404040',
    // borderWidth: '30px',
    borderRadius: '10px',
  },
  textarea: {
    overflow: 'hidden',
    border: 'none',
    borderRadius: '8px',
    resize: 'none',
    display: 'block',
    padding: '4px 11px',
    width: '100%',
    '&::placeholder': {
      color: '#bfbfbf',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
  },
  hoverable: {
    '&:hover $upload': {
      display: 'flex',
      justifyContent: 'center',
    },
    height: '32px',
  },
  multipleImages: {
    '&:hover $upload': {
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    display: 'inline-block',
    width: '100%',
    height: '100%',
  },
  upload: {
    display: 'none',
  },
});

function JournalEditPage() {
  const classes = useStyles();
  const history = useHistory();

  const { journalId } = useParams<Params>();
  interface Params {
    journalId: string;
  }

  const journal = useJournalByJournalId({
    variables: {
      id: journalId,
    },
  });

  const currentUser = useCurrentUser();

  const [index, setIndex] = useState(0);

  const [numberOfTextAreas, setNumberOfTextAreas] = useState(1);

  const [contents, setContents] = useState<Array<Content>>([
    { type: 'text', content: '' },
  ]);
  const [files, setFiles] = useState<IndexedFile[]>([]);

  const [updateJournal] = useUpdateJournalByJournalId();
  const [deleteJournal] = useDeleteJournalByJournalId();

  useEffect(() => {
    if (journal.loading === false && journal.data) {
      let journalInfo = journal.data?.journalById?.content;
      let numTextAreas = 0;

      journalInfo?.forEach((content) => {
        let input = JSON.parse(content);
        if (input.type === 'text') {
          numTextAreas++;
        }
        contents.push(input);
      });
      contents.splice(0, 1);

      setIndex(contents.length - 1);
    }
  }, [journal.loading, journal.data]);

  interface Topic {
    value: string;
    label: string;
  }

  interface IndexedFile {
    i: number;
    j: number;
    file: RcFile;
  }

  const refs: any = useRef([React.createRef()]);

  interface Content {
    type: 'text' | 'image' | 'tool';
    order?: number;
    content?: string | Image[] | Tool;
  }

  type Image = {
    name: string;
    url: string;
  };

  type Tool = {
    id: string;
    type: string;
    content: string;
    createdAt: Date;
  };

  useEffect(() => {
    if (refs.current[index].current) {
      refs.current[index].current.focus();
    }
  }, [numberOfTextAreas]);

  if (
    !currentUser.loading &&
    !journal.loading &&
    currentUser.data?.currentUser?.userId !==
      journal.data?.journalById?.userByUserId?.userId
  ) {
    window.location.href = '/home';
    return null;
  }

  const handleTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const list = [...contents];
    list[index].content = e.target.value;
    setContents(list);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    i: number
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // prevent new line in a text area

      setIndex(i + 1); // keep track of input index
      // Create a new text area instead
      const list = [...contents];
      let newTextArea: Content = {
        type: 'text',
        content: '',
      };
      list.splice(i + 1, 0, newTextArea);
      refs.current = [...Array(list.length)].map((item) => React.createRef());
      setContents(list);
      setNumberOfTextAreas(numberOfTextAreas + 1);
    } else if (
      (e.key === 'Backspace' || e.key === 'Delete') &&
      i !== 0 &&
      contents[i - 1].type !== 'image' &&
      contents[i - 1].type !== 'tool' &&
      contents[i].content === ''
    ) {
      e.preventDefault();
      const list = [...contents];
      setIndex(i - 1);
      list.splice(i, 1);
      refs.current = [...Array(list.length)].map((item) => React.createRef());
      setContents(list);
      setNumberOfTextAreas(numberOfTextAreas - 1);
    }
  };

  const handleUpload = (file: RcFile, i: number) => {
    if (file.size > 5242880) {
      alert('5 MB file size limit exceeded!');
      return false;
    }
    const newFile = {
      i: i + 1,
      j: 0,
      file,
    };
    setFiles([...files, newFile]);
    let url = URL.createObjectURL(file); // create the URL for the new image preview

    const list = [...contents];
    let newImage: Content = {
      type: 'image',
      content: [
        {
          name: file.name,
          url,
        },
      ],
    };
    list.splice(i + 1, 0, newImage);

    // Add new text area if the image is the last in the journal
    if (i === contents.length - 1) {
      let newTextArea: Content = {
        type: 'text',
        content: '',
      };
      list.splice(i + 2, 0, newTextArea);
      refs.current = [...Array(list.length)].map((item) => React.createRef());
    }
    setContents(list);
    return true;
  };
  interface Indices {
    i: number;
    j: number;
  }

  const handleDelete = ({ i, j }: Indices) => {
    const list = [...contents];
    let imageArray = list[i].content as Image[];
    imageArray.splice(j, 1);
    if (imageArray.length === 0) {
      list.splice(i, 1);
    }
    // Remove deleted images from files to be uploaded
    let fileList = [...files];
    for (let index = fileList.length - 1; index >= 0; index--) {
      let file = fileList[index];
      if (file.i === i) {
        if (file.j === j) {
          fileList.splice(index, 1);
        } else if (file.j > j) {
          let newFile = {
            i: file.i,
            j: file.j - 1,
            file: file.file,
          };
          fileList[index] = newFile;
        }
      }
    }
    setFiles(fileList);
    setContents(list);
  };

  const handleSlidableImages = (file: RcFile, i: number) => {
    if (file.size > 5242880) {
      alert('5 MB file size limit exceeded!');
      return false;
    }
    const list = [...contents];
    const newFile = {
      i,
      j: (list[i].content as Image[])?.length as number,
      file,
    };
    setFiles([...files, newFile]);

    if (Array.isArray(list[i].content)) {
      let url = URL.createObjectURL(file);
      let newImage: Image = {
        name: file.name,
        url,
      };
      (list[i].content as Image[]).push(newImage);
    }
    setContents(list);

    return true;
  };

  const handleDrop = (item: any, index: number) => {
    console.log(item);
    const list = [...contents];
    const newTool: Content = {
      type: 'tool',
      content: item.tool,
    };
    list.splice(index + 1, 0, newTool);
    // Add new text area if the tool is the last in the journal
    if (index === contents.length - 1) {
      let newTextArea: Content = {
        type: 'text',
        content: '',
      };
      list.splice(index + 2, 0, newTextArea);
      refs.current = [...Array(list.length)].map((item) => React.createRef());
    }
    setContents(list);
  };

  const handleToolDisplayDelete = (i: number) => {
    const list = [...contents];
    list.splice(i, 1);
    setContents(list);
  };

  const handleSubmit = async () => {
    try {
      // Create form data for multi-part/form spec
      let formData = new FormData();
      files.forEach((file) => {
        formData.append('images', file.file, file.file.name);
      });
      const uploadUrl = isProd() ? '/upload' : 'http://localhost:8080/upload';
      // Send POST request to store images in s3 and generate urls
      const response = await fetch(uploadUrl, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      // Save newly generated urls in contents json
      const newContents = [...contents];
      files.forEach((file, i) => {
        (newContents[file.i].content as Image[])[file.j].url = data[i];
      });

      let array: any[] = [];
      newContents.forEach((content) => {
        array.push(JSON.stringify(content));
      });

      const updatedJournal = await updateJournal({
        variables: {
          input: {
            id: journalId,
            journalPatch: {
              content: array,
              updatedAt: new Date(
                Date.now() + 1000 * 60 * -new Date().getTimezoneOffset()
              )
                .toISOString()
                .replace('T', ' ')
                .replace('Z', ''),
            },
          },
        },
      });
      if (
        updatedJournal &&
        updatedJournal.data &&
        updatedJournal.data.updateJournalById
      ) {
        window.location.href = `/j/${journalId}`;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteJournal = async () => {
    const deletedJournal = await deleteJournal({
      variables: {
        id: journalId,
      },
    });
    if (
      deletedJournal &&
      deletedJournal.data &&
      deletedJournal.data.deleteJournalById
    ) {
      history.push('');
    }
  };

  if (journal.loading) return null;
  return (
    <>
      <Col span={10}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={classes.header}>Edit Journal</div>
        </div>
        <div className={classes.journalTitle}>
          {journal.data?.journalById?.title}
        </div>
        <div>
          <div
            style={{
              border: '3px solid black',
              borderRadius: '8px',
              margin: '8px 0',
              minHeight: '600px',
              backgroundColor: '#FFFFFF',
            }}
          >
            {contents.map((content, i) => {
              if (content.type === 'text') {
                if (contents[i] === contents[contents.length - 1]) {
                  return (
                    <>
                      <TextareaAutoSize
                        autoFocus={true}
                        placeholder='Type here'
                        className={classes.textarea}
                        value={contents[i].content as string}
                        ref={refs.current[i]}
                        onChange={(e) => handleTextChange(e, i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                      />
                      <DropArea
                        index={i}
                        showAddImage
                        onDrop={(item) => handleDrop(item, i)}
                        handleUpload={handleUpload}
                      />
                    </>
                  );
                } else if (
                  contents[i + 1] !== undefined &&
                  contents[i + 1].type === 'text'
                ) {
                  return (
                    <>
                      <TextareaAutoSize
                        autoFocus={true}
                        placeholder='Type here'
                        className={classes.textarea}
                        value={contents[i].content as string}
                        ref={refs.current[i]}
                        onChange={(e) => handleTextChange(e, i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                      />
                      <DropArea
                        index={i}
                        onDrop={(item) => handleDrop(item, i)}
                        handleUpload={handleUpload}
                      />
                    </>
                  );
                } else {
                  return (
                    <>
                      <TextareaAutoSize
                        autoFocus={true}
                        placeholder='Type here'
                        className={classes.textarea}
                        value={contents[i].content as string}
                        ref={refs.current[i]}
                        onChange={(e) => handleTextChange(e, i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                      />
                    </>
                  );
                }
              } else if (contents[i].type === 'image') {
                return (
                  <Row gutter={8}>
                    {(content.content as Image[]).map((image, j) => {
                      return (
                        <Col span={4}>
                          <img src={image.url} width='100%' />
                          <Button
                            style={{
                              position: 'absolute',
                              top: '5px',
                              right: '5px',
                            }}
                            onClick={(e) => handleDelete({ i, j })}
                          >
                            Delete
                          </Button>
                        </Col>
                      );
                    })}
                    {(content.content as Image[]).length < 5 && (
                      <Col flex='auto'>
                        <div className={classes.multipleImages}>
                          <Upload
                            showUploadList={false}
                            className={classes.upload}
                            beforeUpload={(file) =>
                              handleSlidableImages(file, i)
                            }
                          >
                            <Button>Add Image</Button>
                          </Upload>
                        </div>
                      </Col>
                    )}
                  </Row>
                );
              } else {
                return (
                  <ToolDisplay
                    currentUser={currentUser.data?.currentUser}
                    tool={contents[i].content}
                    editing
                    handleToolDisplayDelete={() => handleToolDisplayDelete(i)}
                  />
                );
              }
            })}
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={() => history.push(`/j/${journalId}`)}>
              Cancel
            </Button>
            <Button
              style={{
                backgroundColor: '#08e1ae',
                color: 'white',
                backgroundImage:
                  'linear-gradient(315deg, #08e1ae 0%, #98de5b 74%)',
                marginLeft: '5px',
              }}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </div>
        </div>
      </Col>
      <Col span={1} />
      <Col span={9}>
        <div
          style={{
            display: 'flex',
            width: '100%',
            marginTop: '100px',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Toolbox
            journal={journal.data?.journalById}
            currentUser={currentUser.data?.currentUser}
            refetch={journal.refetch}
          />
          <Popconfirm
            title='Are you sure you want to delete this journal?'
            okText='Yes'
            cancelText='No'
            onConfirm={handleDeleteJournal}
          >
            <Button
              style={{
                backgroundColor: 'red',
                color: 'white',
                marginTop: '10px',
              }}
            >
              Delete Journal
            </Button>
          </Popconfirm>
        </div>
      </Col>
    </>
  );
}

export default JournalEditPage;
