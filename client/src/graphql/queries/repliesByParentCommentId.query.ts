import gql from 'graphql-tag';

export default gql`
  query repliesByParentCommentId($parentCommentId: UUID!) {
    allComments(condition: { parentCommentId: $parentCommentId }) {
      nodes {
        likes
        comment
        commentId
        parentCommentId
        userId
        journalId
      }
    }
  }
`;
