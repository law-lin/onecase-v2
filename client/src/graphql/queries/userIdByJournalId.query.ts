import gql from 'graphql-tag';

export default gql`
  query userIdByJournalId($id: UUID!) {
    journalById(id: $id) {
      userId
    }
  }
`;
