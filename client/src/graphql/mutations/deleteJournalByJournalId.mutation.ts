import gql from 'graphql-tag';

export default gql`
  mutation deleteJournalByJournalId($id: UUID!) {
    deleteJournalById(input: { id: $id }) {
      clientMutationId
    }
  }
`;
