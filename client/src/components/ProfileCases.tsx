import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ToolDisplay from 'components/ToolDisplay';
import CaseComments from 'components/CaseComments';
import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';
import { createUseStyles } from 'react-jss';
import {
  useProfileCases,
  useToolByToolId,
  useUserByUsername,
} from 'utils/services';
import NotFoundPage from 'pages/NotFoundPage';
import LikeCase from './LikeCase';
import CasesList from './CasesList';

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

interface ProfileCasesProps {
  userId: string;
  isPrivate?: boolean | undefined;
}

interface Case {
  id: string;
  likes: number;
  content: string;
  createdAt: Date;
}

interface Tool {
  id: string;
  content: string;
  createdAt: Date;
  userByUserId: {
    username: string;
    profilePicture: string;
  };
  journalByJournalId: {
    id: string;
    title: string;
    color: string;
  };
  caseCommentsByToolId: {
    totalCount: number;
    nodes: {
      comment: string;
      likes: number;
      userByUserId: {
        username: string;
        profilePicture: string;
      };
    }[];
  };
}

const ProfileCases = ({ userId, isPrivate }: ProfileCasesProps) => {
  const { journalId, toolId } = useParams<Params>();
  const history = useHistory();
  const classes = useStyles();
  const [tools, setTools] = useState<Tool[]>([]);

  const { loading, error, data, refetch } = useProfileCases({
    variables: {
      uId: userId,
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (!loading) {
      let list = [...tools];
      const loadedTools: Tool[] = data?.profileCases?.nodes as Tool[];
      if (loadedTools !== undefined && loadedTools !== null) {
        list = list.concat(loadedTools);
      }
      setTools(list);
    }
  }, [loading]);

  const endCursor = data?.profileCases?.pageInfo.endCursor;
  const hasNextPage = data?.profileCases?.pageInfo.hasNextPage as boolean;

  if (loading) {
    return null;
  }

  return (
    <>
      <CasesList
        tools={tools}
        endCursor={endCursor}
        hasNextPage={hasNextPage}
        refetch={refetch}
      />
    </>
  );
};

export default ProfileCases;
