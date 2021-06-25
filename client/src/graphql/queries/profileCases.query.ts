import gql from 'graphql-tag';

export default gql`
  query profileCases($uId: UUID!, $cursor: Cursor) {
    profileCases(uId: $uId, first: 10, after: $cursor) {
      nodes {
        id
        likes
        createdAt
        content
        userId
        userByUserId {
          username
          profilePicture
        }
        journalByJournalId {
          id
          title
          color
        }
        caseCommentsByToolId(first: 1, orderBy: [LIKES_DESC, CREATED_AT_DESC]) {
          totalCount
          nodes {
            comment
            likes
            userByUserId {
              username
              profilePicture
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
