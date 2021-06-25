import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  useCreateUserToolLike,
  useCurrentUserId,
  useUpdateHasLikedByUserIdAndToolId,
} from 'utils/services';
import ToolDisplay from 'components/ToolDisplay';
import { UserOutlined, LikeOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { createUseStyles } from 'react-jss';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FaRegComment } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Case from './Case';

const useStyles = createUseStyles({
  toolList: {
    borderRadius: '6px',
    // border: '1px solid black',
    height: '100%',
    width: '100%',
    backgroundColor: '#FFF',
    padding: '10px',
    fontFamily: 'Open Sans',
    color: '#403B3B',
    overflowY: 'auto',
    maxHeight: '90vh',
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#C4C4C4',
      borderRadius: '5px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#9E9E9E',
    },
    '&::-webkit-scrollbar-thumb:active': {
      backgroundColor: '#737373',
    },
  },
  options: {
    width: '100%',
    textAlign: 'center',
    cursor: 'pointer',
  },
});

interface Tool {
  id: string;
  likes: number;
  content: string;
  createdAt: Date;
  userByUserId: {
    name: string;
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

interface Params {
  username: string;
}

interface CurrentUser {
  userId: string;
  username: string;
  profilePicture: string;
}

interface CasesListProps {
  tools: any;
  endCursor: string;
  hasNextPage: boolean;
  refetch: any;
}

const CasesList = ({
  tools,
  endCursor,
  hasNextPage,
  refetch,
}: CasesListProps) => {
  const history = useHistory();
  const classes = useStyles();
  const { loading, error, data } = useCurrentUserId();
  const [createLike] = useCreateUserToolLike();
  const [updateHasLike] = useUpdateHasLikedByUserIdAndToolId();

  const currentUserId = data?.currentUserId;

  return (
    <>
      <div id='scrollableDiv' className={classes.toolList}>
        {tools.length === 0 && (
          <div
            style={{
              fontWeight: 700,
              fontFamily: 'Open Sans',
              fontSize: '24px',
            }}
          >
            No cases to see here.
          </div>
        )}
        <InfiniteScroll
          dataLength={tools.length as number}
          next={() => refetch({ cursor: endCursor })}
          hasMore={hasNextPage}
          loader={<h4>Loading</h4>}
          scrollableTarget='scrollableDiv'
        >
          {tools &&
            tools.length > 0 &&
            tools?.map((t: Tool) => {
              return <Case case={t} currentUserId={currentUserId} />;
            })}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default CasesList;
