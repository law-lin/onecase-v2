import gql from 'graphql-tag';

export default gql`
  mutation updateHasLikedByUserIdAndToolId(
    $userId: UUID!
    $toolId: UUID!
    $isLiked: Boolean!
  ) {
    updateUserToolLikeByUserIdAndToolId(
      input: {
        userToolLikePatch: { isLiked: $isLiked }
        userId: $userId
        toolId: $toolId
      }
    ) {
      userToolLike {
        isLiked
      }
    }
  }
`;
