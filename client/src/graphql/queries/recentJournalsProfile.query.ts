import gql from 'graphql-tag';

export default gql`
  query recentJournalsProfile($username: String!) {
    userByUsername(username: $username) {
      journalsByUserId(orderBy: UPDATED_AT_DESC, first: 5) {
        nodes {
          id
          title
          color
          content
          createdAt
          updatedAt
        }
      }
    }
  }
`;
