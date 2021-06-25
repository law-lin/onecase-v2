import gql from 'graphql-tag';

export default gql`
  query isFollowing($userId: UUID!, $followerId: UUID!) {
    userFollowerByUserIdAndFollowerId(
      userId: $userId
      followerId: $followerId
    ) {
      nodeId
    }
  }
`;
