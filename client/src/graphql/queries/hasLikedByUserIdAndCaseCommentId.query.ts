import gql from 'graphql-tag';

export default gql`
  query hasLikedByUserIdAndCaseCommentId(
    $userId: UUID!
    $caseCommentId: UUID!
  ) {
    allCaseLikes(
      condition: { userId: $userId, caseCommentId: $caseCommentId }
    ) {
      nodes {
        isLiked
        likeId
      }
    }
  }
`;
