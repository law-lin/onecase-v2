import gql from 'graphql-tag';

export default gql`
  mutation deleteUserByUserId($userId: UUID!) {
    deleteUserByUserId(input: { userId: $userId }) {
      clientMutationId
    }
  }
`;
