import gql from 'graphql-tag';

export default gql`
  mutation updateLikesByCommentId($commentId: UUID!, $likes: Int!) {
    updateCommentByCommentId(
      input: { commentPatch: { likes: $likes }, commentId: $commentId }
    ) {
      comment {
        likes
      }
    }
  }
`;
