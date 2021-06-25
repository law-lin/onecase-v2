import gql from 'graphql-tag';

export default gql`
  query journalsByCurrentUser {
    currentUser {
      journalsByUserId {
        nodes {
          id
          title
          color
          isPrivate
          content
          toolbox
          createdAt
          updatedAt
        }
      }
    }
  }
`;
