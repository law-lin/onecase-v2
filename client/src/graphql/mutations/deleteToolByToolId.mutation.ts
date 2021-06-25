import gql from 'graphql-tag';

export default gql`
  mutation deleteToolByToolId($id: UUID!) {
    deleteToolById(input: { id: $id }) {
      clientMutationId
    }
  }
`;
