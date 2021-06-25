import gql from 'graphql-tag';

export default gql`
  query userByUsername($username: String!) {
    userByUsername(username: $username) {
      userId
      username
      name
      biography
      profilePicture
      coverImage
      userFollowersByFollowerId {
        totalCount
        nodes {
          userByUserId {
            userId
            name
            username
            profilePicture
          }
        }
      }
      userFollowersByUserId {
        totalCount
        nodes {
          userByFollowerId {
            userId
            name
            username
            profilePicture
          }
        }
      }
    }
  }
`;
