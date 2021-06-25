import gql from 'graphql-tag';

export default gql`
  mutation unfollowUser($userId: UUID!, $followerId: UUID!) {
    deleteUserFollowerByUserIdAndFollowerId(
      input: { userId: $userId, followerId: $followerId }
    ) {
      clientMutationId
    }
  }
`;
