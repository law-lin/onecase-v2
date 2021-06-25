import gql from 'graphql-tag';

export default gql`
  mutation createCaseComment(
    $comment: String!
    $userId: UUID!
    $toolId: UUID!
    $parentCommentId: UUID
  ) {
    createCaseComment(
      input: {
        caseComment: {
          comment: $comment
          userId: $userId
          toolId: $toolId
          parentCommentId: $parentCommentId
        }
      }
    ) {
      caseComment {
        comment
      }
    }
  }
`;
