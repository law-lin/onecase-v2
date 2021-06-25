import React from 'react';
import { useCurrentUser, useUserIdByJournalId } from 'utils/services';

import { Col } from 'antd';

import CaseView from 'components/CaseView';
import { useParams } from 'react-router-dom';

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
function CaseViewPage({ isModal }: CaseViewPageProps) {
  const { journalId } = useParams<Params>();

  const currentUserQuery = useCurrentUser();
  const currentUser = currentUserQuery.data?.currentUser as CurrentUser;

  const { loading, error, data } = useUserIdByJournalId({
    variables: {
      id: journalId,
    },
  });

  if (loading) {
    return null;
  }

  let isOwner = false;
  if (currentUser && data?.journalById?.userId === currentUser.userId) {
    isOwner = true;
  }
  return (
    <>
      <Col span={4} />
      <Col span={8}>
        <CaseView
          currentUser={currentUser}
          isModal={isModal}
          isPrivate={isOwner ? undefined : false}
        />
      </Col>
    </>
  );
}

export default CaseViewPage;
