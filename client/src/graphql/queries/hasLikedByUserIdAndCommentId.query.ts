import gql from 'graphql-tag';

export default gql`
  query hasLikedByUserIdAndCommentId($userId: UUID!, $commentId: UUID!) {
    allLikes(condition: { userId: $userId, commentId: $commentId }) {
      nodes {
        isLiked
        likeId
      }
    }
  }
`;
