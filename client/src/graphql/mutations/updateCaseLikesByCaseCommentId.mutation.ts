import gql from 'graphql-tag';

export default gql`
  mutation updateCaseLikesByCaseCommentId($id: UUID!, $likes: Int!) {
    updateCaseCommentById(
      input: { caseCommentPatch: { likes: $likes }, id: $id }
    ) {
      caseComment {
        likes
      }
    }
  }
`;
