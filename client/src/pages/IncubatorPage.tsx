import React, { useState, useEffect } from 'react';
// Components
import ImageCropper from 'components/ImageCropper';
import { getOrientation } from 'get-orientation/browser';
import { getCroppedImg, getRotatedImage } from 'utils/canvasUtils';

// Antd
import { Col, Row, Avatar, Switch } from 'antd';
// Icons
import { IoMdImages } from 'react-icons/io';
import { ImArrowRight } from 'react-icons/im';
import { AiFillLock, AiFillUnlock } from 'react-icons/ai';
// Utils
import CreateJournal from 'components/CreateJournal';
import {
  useCurrentUser,
  useAllJournals,
  useUpdateJournalByJournalId,
  useJournalsByCurrentUser,
  useCreateTool,
} from 'utils/services';
import { createUseStyles } from 'react-jss';

import { v4 as uuid } from 'uuid';

import { useHistory } from 'react-router-dom';
import isProd from 'utils/isDev';
import Toolbox from 'components/Toolbox';

const useStyles = createUseStyles({
  textArea: {
    border: '3px solid #9A9A9A',
    borderRadius: '10px',
    padding: '4px 5px 4px 5px',
    backgroundColor: '#FFFFFF',
  },
  input: {
    '&:focus': {
      outline: 'none',
    },
    border: 'none',
    resize: 'none',
    width: '100%',
    height: '125px',
    padding: '4px 11px',
    fontSize: '18px',
  },
  icon: {
    width: '40px',
    height: '40px',
  },
  button: {
    '&:hover': {
      outline: 'none',
      textDecoration: 'none',
      color: '#7DAEB1',
    },
    '&:focus': {
      outline: 'none',
    },
    '&:active': {
      color: '#679194',
    },
    border: 'none',
    backgroundColor: '#FFFFFF',
    borderRadius: '15px',
    color: '#000000',
    fontSize: '20px',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  shipButton: {
    '&:hover': {
      outline: 'none',
      backgroundColor: '#7DAEB1',
    },
    '&:focus': {
      outline: 'none',
    },
    '&:active': {
      backgroundColor: '#679194',
    },
    fontFamily: ['Open Sans', 'sans-serif'],
    alignSelf: 'center',
    textTransform: 'none',
    fontSize: '20px',
    backgroundColor: '#8BBFC2',
    color: '#FFFFFF',
    borderRadius: '15px',
    height: '25%',
    display: 'inline-block',
    verticalAlign: 'middle',
    padding: '3px 10px',
    borderStyle: 'none',
    cursor: 'pointer',
  },
});

interface Journal {
  id: string;
  title: string;
  isPrivate: boolean;
  color?: string;
  content?: any[];
  toolbox?: any[];
}

// interface Tool extends JSON {
//   type: 'text' | 'image';
//   content?: string | Image[];
//   createdAt: Date;
// }

// type Image = {
//   name: string;
//   url: string;
// };

type Textarea = {
  id: string;
  text: string;
};
function IncubatorPage() {
  const [textareas, setTextareas] = useState<Textarea[]>([]);
  const [images, setImages] = useState<any[]>([]);
  const [textareaLoading, setTextareaLoading] = useState(true);
  const [cropVisible, setCropVisible] = useState(false);
  const [inputKeys, setInputKeys] = useState<any[]>([]);
  const { loading, error, data, refetch } = useJournalsByCurrentUser();
  const currentUserQuery = useCurrentUser();
  const [updateJournal] = useUpdateJournalByJournalId();
  const [createTool] = useCreateTool();
  const currentUser = currentUserQuery.data?.currentUser;

  const classes = useStyles();

  const history = useHistory();

  const journals = data?.currentUser?.journalsByUserId?.nodes;
  useEffect(() => {
    let textareaList: Textarea[] = [];
    if (!loading) {
      journals?.forEach((journal) => {
        let textarea = {
          id: journal?.id as string,
          text: '',
        };
        textareaList.push(textarea);
      });
    }
    setTextareas(textareaList);
    setTextareaLoading(false);
  }, [loading, journals?.length]);

  const handleTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    i: number
  ) => {
    const list = [...textareas];
    list[i].text = e.target.value;
    setTextareas(list);
  };

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
    i: number
  ) => {
    if (e.target.files?.length === 1) {
      const file = e.target.files[0];
      if (file.size > 5242880) {
        alert('5 MB file size limit exceeded!');
        return;
      }
      let image: string = await readFile(file);
      // const url = URL.createObjectURL(file);
      const orientation = await getOrientation(file);
      const rotation = ORIENTATION_TO_ANGLE[orientation];
      if (rotation) {
        image = await getRotatedImage(image, rotation);
      }
      const list = [...images];
      list[i] = image;
      setImages(list);
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
      const list = [...images];
      list[parseInt(source)] = croppedImage;
      setImages(list);
      setCropVisible(false);
    } catch (e) {
      console.error(e);
      setCropVisible(false);
    }
  };

  const handleChangeVisibility = async (journal: Journal) => {
    const updatedJournal = await updateJournal({
      variables: {
        input: {
          id: journal.id,
          journalPatch: {
            isPrivate: !journal.isPrivate,
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
      refetch();
    }
  };

  const handleShip = async (journal: Journal, i: number) => {
    // Check if no text or image is attached
    if (
      textareas[i].text === '' &&
      (images[i] === undefined || images[i] === null)
    ) {
      return;
    }
    let tool = {};
    // If there is an image, ship the image and ignore text
    if (images[i] !== undefined && images[i] !== null) {
      let formData = new FormData();
      const res = await fetch(images[i]);
      const blob = await res.blob();
      const file = new File([blob], 'unknown.png', { type: 'image/png' });
      formData.append('images', file);
      const uploadUrl = isProd() ? '/upload' : 'http://localhost:8080/upload';
      // Send POST request to store images in s3 and generate urls
      const response = await fetch(uploadUrl, {
        method: 'POST',
        body: formData,
      });
      const urls = await response.json();
      tool = {
        id: uuid(),
        type: 'image',
        content: urls[0],
        createdAt: Date.now(),
      };
    } else {
      tool = {
        id: uuid(),
        type: 'text',
        content: textareas[i].text,
        createdAt: Date.now(),
      };
    }
    let toolJson = JSON.stringify(tool);
    let journalToolbox = Object.assign([], journal.toolbox);
    if (journalToolbox === null || journalToolbox === undefined) {
      journalToolbox = [];
    }

    journalToolbox.unshift(toolJson);
    const updatedJournal = await updateJournal({
      variables: {
        input: {
          id: journal.id,
          journalPatch: {
            toolbox: journalToolbox,
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
    const createdTool = await createTool({
      variables: {
        id: JSON.parse(toolJson).id,
        userId: currentUser?.userId,
        journalId: journal.id,
        content: toolJson,
      },
    });
    if (
      updatedJournal &&
      updatedJournal.data &&
      updatedJournal.data.updateJournalById &&
      createdTool &&
      createdTool.data &&
      createdTool.data.createTool
    ) {
      refetch();
    }
    if (images[i] !== undefined && images[i] !== null) {
      let list = [...images];
      list[i] = null;
      setImages(list);
    } else {
      let list = [...textareas];
      list[i].text = '';
      setTextareas(list);
    }
  };

  if (loading || currentUserQuery.loading || textareaLoading) {
    return null;
  }
  if (!loading && !textareaLoading && textareas.length === 0) {
    return (
      <div>
        No journals created yet! <CreateJournal refetch={() => history.go(0)} />
      </div>
    );
  }

  return (
    <>
      <Col span={16}>
        {journals?.map((journal, i) => {
          return (
            <Row key={journal?.id} gutter={[0, 32]}>
              <Col span={11}>
                <a href={`/j/${journal?.id}/edit`}>
                  <div
                    style={{
                      color: '#FFFFFF',
                      marginBottom: '12px',
                      backgroundColor: journal?.color as string,
                      borderRadius: '5px',
                      fontWeight: 700,
                      fontSize: '24px',
                      paddingTop: '4px',
                      paddingBottom: '4px',
                      paddingLeft: '10px',
                      paddingRight: '10px',
                      width: '100%',
                    }}
                  >
                    {journal?.title}
                  </div>
                </a>
                <div className={classes.textArea}>
                  <Avatar size={40} src={currentUser?.profilePicture} />
                  {!images[i] && textareas[i] && (
                    <textarea
                      value={textareas[i].text}
                      className={classes.input}
                      placeholder='Anything new?'
                      rows={4}
                      onChange={(e) => handleTextChange(e, i)}
                    />
                  )}
                  {images[i] && !cropVisible && (
                    <img
                      src={images[i]}
                      style={{
                        height: '150px',
                        width: '150px',
                        display: 'block',
                      }}
                    />
                  )}
                  <hr
                    style={{
                      borderTop: '1px solid #C4C4C4',
                      margin: '5px 10px',
                    }}
                  />
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <input
                        type='file'
                        id={`${i}`}
                        key={inputKeys[i]}
                        style={{ display: 'none' }}
                        onChange={(e) => handleImageChange(e, i)}
                      />
                      <label htmlFor={`${i}`} className={classes.button}>
                        <IoMdImages className={classes.icon} />
                      </label>
                      {images[i] && (
                        <ImageCropper
                          visible={cropVisible}
                          source={`${i}`}
                          imageSrcUrl={images[i] as string}
                          onSave={handleImageSave}
                          onCancel={() => {
                            setCropVisible(false);
                            let list = [...inputKeys];
                            list[i] = Date.now();
                            setInputKeys(list);
                            list = [...images];
                            list[i] = null;
                            setImages(list);
                          }}
                        />
                      )}
                      <div style={{ marginLeft: '25px', textAlign: 'center' }}>
                        <Switch
                          style={{ width: '65px' }}
                          checked={journal?.isPrivate as boolean}
                          onChange={() =>
                            handleChangeVisibility(journal as Journal)
                          }
                        />
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <AiFillUnlock
                            style={{ width: '25px', height: '25px' }}
                          />
                          <AiFillLock
                            style={{ width: '25px', height: '25px' }}
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      className={classes.shipButton}
                      onClick={() => handleShip(journal as Journal, i)}
                    >
                      Ship
                    </button>
                  </div>
                </div>
              </Col>
              <Col
                span={2}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ImArrowRight
                  style={{
                    color: journal?.color as string,
                    width: '100px',
                    height: '100px',
                    // backgroundColor: topic?.topicColor as string,
                    // borderRadius: '6px',
                  }}
                />
              </Col>
              <Col span={11}>
                <Toolbox
                  journal={journal}
                  currentUser={currentUser}
                  refetch={refetch}
                />
              </Col>
            </Row>
          );
        })}
      </Col>
      <Col span={4}>
        {/* <div className={classes.shipButton}>Create Journal</div> */}
        <CreateJournal refetch={refetch} />
      </Col>
    </>
  );
}

export default IncubatorPage;
