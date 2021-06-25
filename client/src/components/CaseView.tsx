import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ToolDisplay from 'components/ToolDisplay';
import CaseComments from 'components/CaseComments';
import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';
import { createUseStyles } from 'react-jss';
import { useToolByToolId } from 'utils/services';
import NotFoundPage from 'pages/NotFoundPage';
import LikeCase from './LikeCase';

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
  close: {
    '&:hover': {
      outline: 'none',
      backgroundColor: '#ad2121',
      color: '#fff',
    },
    '&:focus': {
      outline: 'none',
    },
    backgroundColor: 'transparent',
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'middle',
    padding: '6px',
    borderStyle: 'none',
    borderRadius: '9999px',
    cursor: 'pointer',
    alignSelf: 'flex-end',
    marginBottom: '5px',
  },
  options: {
    width: '100%',
    textAlign: 'center',
    cursor: 'pointer',
  },
});

interface Params {
  journalId: string;
  toolId: string;
}

interface CurrentUser {
  userId: string;
  username: string;
  profilePicture: string;
}

interface CaseViewPageProps {
  isModal: boolean;
}
interface CaseViewProps {
  currentUser: any;
  isModal: boolean;
  isPrivate?: boolean | undefined;
}

interface Case {
  id: string;
  likes: number;
  content: string;
  createdAt: Date;
}

const CaseView = ({ currentUser, isModal, isPrivate }: CaseViewProps) => {
  const { journalId, toolId } = useParams<Params>();
  const history = useHistory();
  const classes = useStyles();

  const { loading, data, error } = useToolByToolId({
    variables: {
      journalId,
      toolId,
      isPrivate,
    },
  });

  if (loading) {
    return null;
  }
  if (data?.allJournals?.nodes && data.allJournals.nodes.length <= 0) {
    return <NotFoundPage />;
  }

  const user = data?.allJournals?.nodes[0]?.userByUserId;
  const journal = data?.allJournals?.nodes[0];
  const tool: Case = data?.allJournals?.nodes[0]?.toolsByJournalId
    .nodes[0] as Case;

  const parsedTool = JSON.parse(
    data?.allJournals?.nodes[0]?.toolsByJournalId.nodes[0]?.content
  );

  return (
    <>
      {isModal && (
        <Modal
          isOpen={isModal}
          portalClassName={classes.portal}
          overlayClassName={{
            base: classes.overlayBase,
            afterOpen: classes.overlayAfterOpen,
            beforeClose: classes.overlayBeforeClose,
          }}
          className={classes.modal}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => {
            history.goBack();
          }}
          closeTimeoutMS={225}
          ariaHideApp={false}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#fff',
              padding: '10px',
              borderRadius: '10px',
            }}
          >
            <button
              type='button'
              className={classes.close}
              onClick={() => {
                history.goBack();
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

            <a
              href={`/j/${journalId}`}
              style={{
                paddingLeft: '5px',
                paddingTop: '2px',
                paddingBottom: '2px',
                marginBottom: '10px',
                fontWeight: 700,
                fontFamily: 'Open Sans',
                width: '100%',
                backgroundColor: journal?.color as string,
                borderRadius: '6px',
                color: '#FFFFFF',
              }}
            >
              {journal?.title}
            </a>
            {journal?.isPrivate && (
              <div style={{ fontWeight: 600, fontFamily: 'Open Sans' }}>
                This case belongs to a private journal, so only you can see
                this!
              </div>
            )}
            <ToolDisplay currentUser={user} tool={parsedTool} />
            {/* Since one can like in both the CasesPage and the modal, it causes a disconnect between the two and we'll leave it out of the modal for now */}
            {/* <LikeCase
              currentUserId={currentUser.userId}
              case={tool}
              journalId={journalId}
            /> */}
            <div>
              {currentUser && (
                <CaseComments currentUser={currentUser} toolId={toolId} />
              )}
            </div>
          </div>
        </Modal>
      )}
      {!isModal && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fff',
            padding: '10px',
          }}
        >
          <a
            href={`/j/${journalId}`}
            style={{
              paddingLeft: '5px',
              paddingTop: '2px',
              paddingBottom: '2px',
              marginBottom: '10px',
              fontWeight: 700,
              fontFamily: 'Open Sans',
              width: '100%',
              backgroundColor: journal?.color as string,
              borderRadius: '6px',
              color: '#FFFFFF',
            }}
          >
            {journal?.title}
          </a>
          {journal?.isPrivate && (
            <div style={{ fontWeight: 600, fontFamily: 'Open Sans' }}>
              This case belongs to a private journal, so only you can see this!
            </div>
          )}
          <ToolDisplay currentUser={user} tool={parsedTool} />
          <LikeCase
            currentUserId={currentUser.userId}
            case={tool}
            journalId={journalId}
          />

          <div>
            {currentUser && (
              <CaseComments currentUser={currentUser} toolId={toolId} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CaseView;
