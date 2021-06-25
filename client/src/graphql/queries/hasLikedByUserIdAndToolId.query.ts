import gql from 'graphql-tag';

export default gql`
  query hasLikedByUserIdAndToolId($userId: UUID!, $toolId: UUID!) {
    allUserToolLikes(condition: { userId: $userId, toolId: $toolId }) {
      nodes {
        isLiked
      }
    }
  }
`;
