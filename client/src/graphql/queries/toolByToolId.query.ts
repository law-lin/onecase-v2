import gql from 'graphql-tag';

export default gql`
  query toolByToolId($journalId: UUID!, $toolId: UUID!, $isPrivate: Boolean) {
    allJournals(condition: { id: $journalId, isPrivate: $isPrivate }) {
      nodes {
        userByUserId {
          username
          profilePicture
        }
        title
        color
        isPrivate
        toolsByJournalId(condition: { id: $toolId }) {
          nodes {
            id
            likes
            createdAt
            content
          }
        }
      }
    }
  }
`;
