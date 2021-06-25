import gql from 'graphql-tag';

export default gql`
  query caseRepliesByParentCommentId($parentCommentId: UUID!) {
    allCaseComments(condition: { parentCommentId: $parentCommentId }) {
      nodes {
        id
        likes
        comment
        parentCommentId
        userId
        toolId
      }
    }
  }
`;
