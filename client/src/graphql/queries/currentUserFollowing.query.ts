import gql from 'graphql-tag';

export default gql`
  query currentUserFollowing {
    currentUser {
      userId
      userFollowersByFollowerId {
        nodes {
          userId
        }
      }
    }
  }
`;
