import gql from 'graphql-tag';

export default gql`
  query getUserByUserId($userId: UUID!) {
    userByUserId(userId: $userId) {
      username
      name
      profilePicture
    }
  }
`;
