import gql from 'graphql-tag';

export default gql`
  mutation createComment(
    $comment: String!
    $userId: UUID!
    $journalId: UUID!
    $parentCommentId: UUID
  ) {
    createComment(
      input: {
        comment: {
          comment: $comment
          userId: $userId
          journalId: $journalId
          parentCommentId: $parentCommentId
        }
      }
    ) {
      comment {
        comment
      }
    }
  }
`;
