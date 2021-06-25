import gql from 'graphql-tag';

export default gql`
  query commentByJournalId($journalId: UUID!) {
    allComments(
      orderBy: [LIKES_DESC, CREATED_AT_ASC]
      condition: { journalId: $journalId, parentCommentId: null }
    ) {
      nodes {
        userId
        comment
        commentId
        likes
      }
    }
  }
`;
