import {
  useCurrentUserQuery,
  useGetUserByUserIdQuery,
  useRegisterUserMutation,
  useAuthenticateMutation,
  useAuthenticateAdminMutation,
  useCurrentUserIdQuery,
  useUserIdByUsernameQuery,
  useUserByUsernameQuery,
  useUpdateUserByUserIdMutation,
  useRepliesByParentCommentIdQuery,
  useCreateCommentMutation,
  useUpdateLikesByCommentIdMutation,
  useCreateLikeMutation,
  useHasLikedByUserIdAndCommentIdQuery,
  useUpdateHasLikedByLikeIdMutation,
  useSearchUserQuery,
  useFollowUserMutation,
  useIsFollowingQuery,
  useUnfollowUserMutation,
  useCurrentUserFollowingQuery,
  useCurrentUserFollowersQuery,
  useAllUsersQuery,
  useDeleteUserByUserIdMutation,
  useCurrentUserRoleQuery,
  useAllJournalsQuery,
  useJournalByJournalIdQuery,
  useJournalsByCurrentUserQuery,
  useRecentJournalsByFollowingQuery,
  useCreateJournalMutation,
  useUpdateJournalByJournalIdMutation,
  useCommentByJournalIdQuery,
  useDeleteJournalByJournalIdMutation,
  useRecentJournalsProfileQuery,
  useCreateToolMutation,
  useCasesFeedQuery,
  useCaseRepliesByParentCommentIdQuery,
  useHasLikedByUserIdAndCaseCommentIdQuery,
  useCreateCaseCommentMutation,
  useCreateCaseLikeMutation,
  useUpdateHasLikedByCaseLikeIdMutation,
  useUpdateCaseLikesByCaseCommentIdMutation,
  useCaseCommentByToolIdQuery,
  useToolByToolIdQuery,
  useUserIdByJournalIdQuery,
  useCreateUserToolLikeMutation,
  useUpdateHasLikedByUserIdAndToolIdMutation,
  useHasLikedByUserIdAndToolIdQuery,
  useUpdateLikesByToolIdMutation,
  useDeleteToolByToolIdMutation,
  useProfileCasesQuery,
} from 'generated/graphql';

// Users
export const useRegisterUser = useRegisterUserMutation;
export const useAuthenticate = useAuthenticateMutation;
export const useAuthenticateAdmin = useAuthenticateAdminMutation;
export const useCurrentUser = useCurrentUserQuery;
export const useCurrentUserId = useCurrentUserIdQuery;
export const useGetUserByUserId = useGetUserByUserIdQuery;
export const useUpdateUserByUserId = useUpdateUserByUserIdMutation;
export const useUserIdByUsername = useUserIdByUsernameQuery;
export const useUserByUsername = useUserByUsernameQuery;
export const useSearchUser = useSearchUserQuery;
export const useAllUsers = useAllUsersQuery;
export const useDeleteUserByUserId = useDeleteUserByUserIdMutation;
export const useCurrentUserRole = useCurrentUserRoleQuery;
// Journals
export const useAllJournals = useAllJournalsQuery;
export const useJournalByJournalId = useJournalByJournalIdQuery;
export const useJournalsByCurrentUser = useJournalsByCurrentUserQuery;
export const useRecentJournalsByFollowing = useRecentJournalsByFollowingQuery;
export const useRecentJournalsProfile = useRecentJournalsProfileQuery;
export const useCreateJournal = useCreateJournalMutation;
export const useUpdateJournalByJournalId = useUpdateJournalByJournalIdMutation;
export const useDeleteJournalByJournalId = useDeleteJournalByJournalIdMutation;

export const useUserIdByJournalId = useUserIdByJournalIdQuery;
export const useCreateTool = useCreateToolMutation;
export const useProfileCases = useProfileCasesQuery;
export const useCasesFeed = useCasesFeedQuery;
export const useUpdateHasLikedByUserIdAndToolId = useUpdateHasLikedByUserIdAndToolIdMutation;
export const useDeleteToolByToolId = useDeleteToolByToolIdMutation;
// Comments
export const useCommentByJournalId = useCommentByJournalIdQuery;
export const useCreateComment = useCreateCommentMutation;
export const useRepliesByParentCommentId = useRepliesByParentCommentIdQuery;
export const useCreateLike = useCreateLikeMutation;
export const useUpdateLikesByCommentId = useUpdateLikesByCommentIdMutation;
export const useHasLikedByUserIdAndCommentId = useHasLikedByUserIdAndCommentIdQuery;
export const useCreateUserToolLike = useCreateUserToolLikeMutation;
export const useUpdateHasLikedByLikeId = useUpdateHasLikedByLikeIdMutation;
export const useHasLikedByUserIdAndToolId = useHasLikedByUserIdAndToolIdQuery;
// Case Comments
export const useCaseRepliesByParentCommentId = useCaseRepliesByParentCommentIdQuery;
export const useHasLikedByUserIdAndCaseCommentId = useHasLikedByUserIdAndCaseCommentIdQuery;

export const useCaseCommentByToolId = useCaseCommentByToolIdQuery;
export const useCreateCaseComment = useCreateCaseCommentMutation;
export const useCreateCaseLike = useCreateCaseLikeMutation;
export const useUpdateLikesByToolId = useUpdateLikesByToolIdMutation;

export const useUpdateCaseLikesByCaseCommentId = useUpdateCaseLikesByCaseCommentIdMutation;
export const useUpdateHasLikedByCaseLikeId = useUpdateHasLikedByCaseLikeIdMutation;

export const useToolByToolId = useToolByToolIdQuery;
// Followers/following
export const useFollowUser = useFollowUserMutation;
export const useIsFollowing = useIsFollowingQuery;
export const useUnfollowUser = useUnfollowUserMutation;
export const useCurrentUserFollowing = useCurrentUserFollowingQuery;
export const useCurrentUserFollowers = useCurrentUserFollowersQuery;
