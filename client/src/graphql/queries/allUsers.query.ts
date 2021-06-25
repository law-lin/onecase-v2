import gql from 'graphql-tag';

export default gql`
  query allUsers {
    allUsers {
      nodes {
        name
        userId
        username
        createdAt
        updatedAt
        accountVerified
      }
    }
  }
`;
