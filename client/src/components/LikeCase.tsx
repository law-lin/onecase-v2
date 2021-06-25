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

const LikeCase = (props: any) => {
  const caseItem: Case = props.case;
  const history = useHistory();
  const [createLike] = useCreateUserToolLike();
  const [updateHasLike] = useUpdateHasLikedByUserIdAndToolId();
  const [updateLikes] = useUpdateLikesByToolId();

  const checkLike = useHasLikedByUserIdAndToolId({
    variables: {
      userId: props.currentUserId,
      toolId: caseItem.id,
    },
  });

  const [liked, setLiked] = useState(
    checkLike.data?.allUserToolLikes?.nodes.length === 0
      ? false
      : checkLike.data?.allUserToolLikes?.nodes[0]?.isLiked
  );

  useEffect(() => {
    if (checkLike.loading === false && checkLike.data) {
      setLiked(checkLike.data?.allUserToolLikes?.nodes[0]?.isLiked);
    }
  }, [checkLike.loading, checkLike.data]);

  const [likes, setLikes] = useState(caseItem.likes);

  const onLike = async () => {
    let increment = !liked ? 1 : -1;
    let newLikes = likes + increment;
    setLikes(newLikes);
    await updateLikes({
      variables: {
        id: caseItem.id,
        likes: newLikes,
      },
    });
    if (checkLike.data?.allUserToolLikes?.nodes.length === 0) {
      const createdLiked = await createLike({
        variables: {
          userId: props.currentUserId,
          toolId: caseItem.id,
          isLiked: true,
        },
      });
      if (
        createdLiked &&
        createdLiked.data &&
        createdLiked.data.createUserToolLike
      ) {
        await checkLike.refetch();
      }
    } else {
      await updateHasLike({
        variables: {
          userId: props.currentUserId,
          toolId: caseItem.id,
          isLiked: !liked as boolean,
        },
      });
    }
  };
  return (
    <>
      <div>{likes} likes</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          color: '#fff',
          backgroundColor: '#C4C4C4',
          borderRadius: '6px',
        }}
      >
        <div
          style={{ width: '100%', textAlign: 'center', cursor: 'pointer' }}
          onClick={() => {
            setLiked(!liked);
            onLike();
          }}
        >
          {!liked ? <span>like</span> : <span>unlike</span>}
        </div>
        <div>|</div>
        <div
          style={{ width: '100%', textAlign: 'center', cursor: 'pointer' }}
          onClick={() =>
            history.push({
              pathname: `/j/${props.journalId}/${caseItem.id}`,
              state: { modal: true },
            })
          }
        >
          comment
        </div>
      </div>
    </>
  );
};
export default LikeCase;
