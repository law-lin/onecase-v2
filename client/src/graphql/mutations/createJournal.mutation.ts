import gql from 'graphql-tag';

export default gql`
  mutation createJournal($userId: UUID!, $title: String!, $color: String) {
    createJournal(
      input: { journal: { userId: $userId, title: $title, color: $color, content: "{\"type\":\"text\", \"content\":\"\" }" } }
    ) {
      clientMutationId
    }
  }
`;
