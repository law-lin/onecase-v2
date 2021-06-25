import gql from 'graphql-tag';

export default gql`
  query currentUserFollowers {
    currentUser {
      userFollowersByUserId {
        nodes {
          followerId
        }
      }
    }
  }
`;
