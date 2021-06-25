import gql from 'graphql-tag';

export default gql`
  mutation updateUserByUserId($input: UpdateUserByUserIdInput!) {
    updateUserByUserId(input: $input) {
      user {
        userId
        name
        username
        biography
        updatedAt
        profilePicture
        coverImage
      }
    }
  }
`;
