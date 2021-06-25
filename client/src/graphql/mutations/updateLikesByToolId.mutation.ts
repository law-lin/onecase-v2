import gql from 'graphql-tag';

export default gql`
  mutation updateLikesByToolId($id: UUID!, $likes: Int!) {
    updateToolById(input: { id: $id, toolPatch: { likes: $likes } }) {
      clientMutationId
    }
  }
`;
