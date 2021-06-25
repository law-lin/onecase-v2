import gql from 'graphql-tag';

export default gql`
  mutation followUser($userId: UUID!, $followerId: UUID!) {
    createUserFollower(
      input: { userFollower: { userId: $userId, followerId: $followerId } }
    ) {
      clientMutationId
    }
  }
`;
