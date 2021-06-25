import React from 'react';
// import MediaQuery from 'react-responsive';
import { Avatar, Col, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// Components
import NotFoundPage from './NotFoundPage';
import Carousel from 'components/Carousel';
import Comment from 'components/Comment';
import CreateComment from 'components/CreateComment';
import ToolDisplay from 'components/ToolDisplay';
import EditJournalButton from 'components/EditJournalButton';

// Utils
import months from 'constants/months';
import { createUseStyles } from 'react-jss';
import { useParams, useHistory } from 'react-router-dom';
import {
  useCurrentUser,
  useJournalByJournalId,
  useCommentByJournalId,
} from 'utils/services';

const useStyles = createUseStyles({
  root: {
    margin: '80px auto 0 auto',
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
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
  journalContent: {
    marginTop: '25px',
    padding: '15px',
    backgroundColor: '#FFFFFF',
    width: '100%',
    minHeight: '75vh',
    borderRadius: '10px',
    marginBottom: '30px',
  },
  pfp: {
    marginRight: '10px',
  },
  entryHeader: {
    display: 'flex',
    marginBottom: '15px',
  },
  entryText: {
    fontFamily: ['Open Sans', 'sans-serif'],
    color: '#3D3D3D',
    marginBottom: '10px',
  },
  description: {},
});

function JournalViewPage() {
  const classes = useStyles();
  const history = useHistory();

  const { journalId } = useParams<Params>();

  interface Params {
    journalId: string;
  }

  const { loading, error, data } = useJournalByJournalId({
    variables: {
      id: journalId,
    },
  });

  const currentUserQuery = useCurrentUser();

  const currentUser = currentUserQuery.data?.currentUser;

  let isOwner = false;
  if (data?.journalById?.userByUserId?.userId === currentUser?.userId) {
    isOwner = true;
  }

  const user = data?.journalById?.userByUserId;
  const title = data?.journalById?.title;
  const createdAt = new Date(data?.journalById?.createdAt);
  const date = months[createdAt.getMonth()] + ' ' + createdAt.getDate();
  let contents: any[] = [];

  data?.journalById?.content?.forEach((content: any) => {
    contents.push(JSON.parse(content));
  });

  const comments = useCommentByJournalId({
    variables: {
      journalId,
    },
  });

  interface Content {
    type: 'text' | 'image';
    order?: number;
    content?: string | Image[];
  }

  type Image = {
    name: string;
    url: string;
  };

  if (!loading && data?.journalById?.content === undefined) {
    return <NotFoundPage />;
  }

  if (loading || currentUserQuery.loading) return null;
  return (
    <>
      <Col span={10}>
        <div>
          {!loading && (
            <React.Fragment>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: '5px',
                  marginBottom: '5px',
                }}
              >
                {date}
              </div>
              <div className={classes.journalTitle}>{title}</div>
              <div className={classes.journalContent}>
                <div className={classes.entryHeader}>
                  <a href={`/${user?.username}`} style={{ display: 'block' }}>
                    <Avatar
                      size={64}
                      src={user?.profilePicture}
                      icon={<UserOutlined />}
                    />
                  </a>
                  <div
                    style={{
                      display: 'flex',
                      fontWeight: 400,
                      fontSize: '24px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: '10px',
                      flexDirection: 'column',
                    }}
                  >
                    <a href={`/${user?.username}`} style={{ display: 'block' }}>
                      {user?.username}
                    </a>
                  </div>
                </div>
                {contents.map((content) => {
                  if (content.type === 'text') {
                    return (
                      <div className={classes.entryText}>{content.content}</div>
                    );
                  } else if (content.type === 'image') {
                    let images: string[] = [];
                    (content.content as Image[]).forEach((content) => {
                      images.push(content.url);
                    });
                    return (
                      <div>
                        <Carousel images={images}></Carousel>
                      </div>
                    );
                  } else {
                    return (
                      <ToolDisplay
                        currentUser={data?.journalById?.userByUserId}
                        tool={content.content}
                      />
                    );
                  }
                })}
              </div>
            </React.Fragment>
          )}
        </div>

        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            padding: '15px',
          }}
        >
          {currentUser && (
            <CreateComment
              username={currentUser?.username as string}
              refetch={comments.refetch}
              journalId={journalId}
            />
          )}

          {!currentUserQuery.loading && (
            <div>
              {comments.data?.allComments?.nodes?.map((comment: any) => {
                return (
                  <Comment
                    currentUser={currentUser}
                    journalId={journalId}
                    comment={comment}
                    isReply={false}
                    refetch={comments.refetch}
                  />
                );
              })}
            </div>
          )}
        </div>
      </Col>

      <Col span={2}></Col>
      <Col span={8}>{isOwner && <EditJournalButton />}</Col>
      <Col span={4}></Col>
    </>
  );
}

export default JournalViewPage;
