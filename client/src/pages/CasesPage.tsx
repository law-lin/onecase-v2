import React, { useState, useEffect } from 'react';

import { Col } from 'antd';
import CasesList from 'components/CasesList';
import { useCasesFeed, useCurrentUser } from 'utils/services';

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

interface Params {
  username: string;
}

interface CurrentUser {
  userId: string;
  username: string;
  profilePicture: string;
}

function CasesPage() {
  const [tools, setTools] = useState<Tool[]>([]);
  const { loading, error, data, refetch } = useCasesFeed({
    notifyOnNetworkStatusChange: true,
  });

  const currentUserQuery = useCurrentUser();
  const currentUser = currentUserQuery.data?.currentUser as CurrentUser;

  useEffect(() => {
    if (!loading) {
      let list = [...tools];
      const loadedTools: Tool[] = data?.casesFeed?.nodes as Tool[];
      if (loadedTools !== undefined && loadedTools !== null) {
        list = list.concat(loadedTools);
      }
      setTools(list);
    }
  }, [loading]);

  const endCursor = data?.casesFeed?.pageInfo.endCursor;
  const hasNextPage = data?.casesFeed?.pageInfo.hasNextPage as boolean;

  return (
    <>
      <Col span={4} />
      <Col span={8}>
        <CasesList
          tools={tools}
          endCursor={endCursor}
          hasNextPage={hasNextPage}
          refetch={refetch}
        />
      </Col>
      <Col flex={10}></Col>
    </>
  );
}

export default CasesPage;
