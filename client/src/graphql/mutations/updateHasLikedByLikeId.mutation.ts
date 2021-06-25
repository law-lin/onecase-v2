import gql from 'graphql-tag';

export default gql`
  mutation updateHasLikedByLikeId($likeId: UUID!, $isLiked: Boolean!) {
    updateLikeByLikeId(
      input: { likePatch: { isLiked: $isLiked }, likeId: $likeId }
    ) {
      like {
        isLiked
      }
    }
  }
`;
