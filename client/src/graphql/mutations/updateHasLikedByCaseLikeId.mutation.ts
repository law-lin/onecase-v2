import gql from 'graphql-tag';

export default gql`
  mutation updateHasLikedByCaseLikeId($likeId: UUID!, $isLiked: Boolean!) {
    updateCaseLikeByLikeId(
      input: { caseLikePatch: { isLiked: $isLiked }, likeId: $likeId }
    ) {
      caseLike {
        isLiked
      }
    }
  }
`;
