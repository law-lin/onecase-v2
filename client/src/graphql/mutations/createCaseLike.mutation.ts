import gql from 'graphql-tag';

export default gql`
  mutation createCaseLike(
    $userId: UUID!
    $caseCommentId: UUID!
    $isLiked: Boolean!
  ) {
    createCaseLike(
      input: {
        caseLike: {
          userId: $userId
          caseCommentId: $caseCommentId
          isLiked: $isLiked
        }
      }
    ) {
      caseLike {
        isLiked
      }
    }
  }
`;
