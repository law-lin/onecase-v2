import gql from 'graphql-tag';

export default gql`
  query searchUser($query: String) {
    allUsers(
      first: 10
      filter: {
        or: [
          { username: { includesInsensitive: $query } }
          { name: { includesInsensitive: $query } }
        ]
      }
    ) {
      nodes {
        userId
        name
        username
        profilePicture
        accountVerified
      }
      edges {
        cursor
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;
