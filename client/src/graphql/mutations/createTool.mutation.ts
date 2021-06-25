import gql from 'graphql-tag';

export default gql`
  mutation createTool(
    $id: UUID!
    $journalId: UUID!
    $userId: UUID!
    $content: JSON
  ) {
    createTool(
      input: {
        tool: {
          id: $id
          journalId: $journalId
          content: $content
          userId: $userId
        }
      }
    ) {
      clientMutationId
    }
  }
`;
