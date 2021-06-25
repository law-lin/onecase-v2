import gql from 'graphql-tag';

export default gql`
  mutation createLike($userId: UUID!, $commentId: UUID!, $isLiked: Boolean!) {
    createLike(
      input: {
        like: { userId: $userId, commentId: $commentId, isLiked: $isLiked }
      }
    ) {
      like {
        isLiked
      }
    }
  }
`;
