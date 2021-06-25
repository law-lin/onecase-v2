import gql from 'graphql-tag';

export default gql`
  query journalByJournalId($id: UUID!) {
    journalById(id: $id) {
      userByUserId {
        userId
        username
        name
        profilePicture
      }
      title
      color
      content
      toolbox
      createdAt
      updatedAt
    }
  }
`;
