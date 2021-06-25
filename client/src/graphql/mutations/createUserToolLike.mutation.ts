import gql from 'graphql-tag';

export default gql`
  mutation createUserToolLike(
    $userId: UUID!
    $toolId: UUID!
    $isLiked: Boolean!
  ) {
    createUserToolLike(
      input: {
        userToolLike: { userId: $userId, toolId: $toolId, isLiked: $isLiked }
      }
    ) {
      userToolLike {
        isLiked
      }
    }
  }
`;
