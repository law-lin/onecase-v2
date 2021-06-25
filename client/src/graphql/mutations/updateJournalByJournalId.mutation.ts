import gql from 'graphql-tag';

export default gql`
  mutation updateJournalByJournalId($input: UpdateJournalByIdInput!) {
    updateJournalById(input: $input) {
      clientMutationId
    }
  }
`;
