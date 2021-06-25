import gql from 'graphql-tag';

export default gql`
  query caseCommentByToolId($toolId: UUID!) {
    allCaseComments(
      orderBy: [LIKES_DESC, CREATED_AT_ASC]
      condition: { toolId: $toolId, parentCommentId: null }
    ) {
      nodes {
        id
        userId
        comment
        likes
      }
    }
  }
`;
