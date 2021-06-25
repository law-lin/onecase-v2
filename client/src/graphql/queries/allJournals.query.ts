import gql from 'graphql-tag';

export default gql`
  query allJournals {
    allJournals(orderBy: UPDATED_AT_DESC) {
      nodes {
        id
        title
        color
        isPrivate
        content
        toolbox
        createdAt
        updatedAt
        userId
        userByUserId {
          name
          username
          profilePicture
        }
      }
    }
  }
`;
