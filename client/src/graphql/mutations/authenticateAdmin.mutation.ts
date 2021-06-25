import gql from 'graphql-tag';

export default gql`
  mutation authenticateAdmin($email: String!, $password: String!) {
    authenticateAdmin(input: { email: $email, password: $password }) {
      clientMutationId
      jwtToken
    }
  }
`;
