import gql from 'graphql-tag';

export default gql`
  query userIdByUsername($username: String!) {
    userByUsername(username: $username) {
      userId
      name
      username
      profilePicture
    }
  }
`;
