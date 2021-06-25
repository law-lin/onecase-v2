import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  useCreateUserToolLike,
  useHasLikedByUserIdAndToolId,
  useUpdateHasLikedByUserIdAndToolId,
  useUpdateLikesByToolId,
} from 'utils/services';
import ToolDisplay from 'components/ToolDisplay';
import { UserOutlined, LikeOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { createUseStyles } from 'react-jss';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FaRegComment } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import LikeCase from './LikeCase';

const useStyles = createUseStyles({
  options: {
    width: '100%',
    textAlign: 'center',
    cursor: 'pointer',
  },
});

interface Case {
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

const Case = (props: any) => {
  const caseItem: Case = props.case;
  const history = useHistory();
  const classes = useStyles();

  const tool = JSON.parse(caseItem.content);
  const journalId = caseItem.journalByJournalId.id;
  const title = caseItem.journalByJournalId?.title;
  const color = caseItem.journalByJournalId?.color as string;

  return (
    <div
      key={caseItem.id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '10px auto',
        fontFamily: 'Open Sans',
        // color: '#787070',
        border: '1px solid #cbd4db',
        padding: '10px',
        borderRadius: '10px',
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
          backgroundColor: color,
          borderRadius: '6px',
          color: '#FFFFFF',
        }}
      >
        {title}
      </a>
      <Link
        style={{ color: '#000' }}
        to={{
          pathname: `/j/${journalId}/${caseItem.id}`,
          state: { modal: true },
        }}
      >
        <ToolDisplay
          currentUser={caseItem.userByUserId}
          tool={tool}
          noBorder={true}
        />
      </Link>

      {/* <div>
    {currentUser && (
      <CaseComments currentUser={currentUser} toolId={caseItem.id} />
    )}
  </div> */}
      {/* <div style={{ display: 'flex', alignItems: 'center' }}>
    <FaRegComment />
    {caseItem.caseCommentsByToolId.totalCount}
  </div> */}
      <LikeCase
        currentUserId={props.currentUserId}
        case={caseItem}
        journalId={journalId}
      />
      {caseItem.caseCommentsByToolId.nodes.length > 0 && (
        <div
          style={{
            padding: '10px',
          }}
        >
          <a
            href={`/${caseItem.caseCommentsByToolId.nodes[0].userByUserId.username}`}
          >
            <Avatar
              src={
                caseItem.caseCommentsByToolId.nodes[0].userByUserId
                  .profilePicture
              }
              icon={<UserOutlined />}
            />
          </a>
          <a
            href={`/${caseItem.caseCommentsByToolId.nodes[0].userByUserId.username}`}
            style={{ marginLeft: '5px' }}
          >
            {caseItem.caseCommentsByToolId.nodes[0].userByUserId.username}
          </a>
          <div> {caseItem.caseCommentsByToolId.nodes[0].comment}</div>
          <div>
            {caseItem.caseCommentsByToolId.nodes[0].likes}
            <LikeOutlined style={{ marginLeft: '5px' }} />
          </div>
          <div
            style={{
              textAlign: 'center',
              color: '#2244BE',
              cursor: 'pointer',
            }}
            onClick={() =>
              history.push({
                pathname: `/j/${journalId}/${caseItem.id}`,
                state: { modal: true },
              })
            }
          >
            view all
          </div>
        </div>
      )}
    </div>
  );
};
export default Case;
