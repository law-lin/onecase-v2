import gql from 'graphql-tag';

export default gql`
  query recentJournalsByFollowing {
    currentUser {
      userFollowersByFollowerId {
        nodes {
          userByUserId {
            name
            username
            profilePicture
            journalsByUserId(orderBy: UPDATED_AT_DESC) {
              nodes {
                id
                title
                color
                content
                createdAt
                updatedAt
              }
            }
          }
        }
      }
    }
  }
`;
