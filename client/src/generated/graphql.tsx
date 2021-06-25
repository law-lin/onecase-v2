import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
  /** A JavaScript object encoded in the JSON format as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /**
   * A JSON Web Token defined by [RFC 7519](https://tools.ietf.org/html/rfc7519)
   * which securely represents claims between two parties.
   */
  JwtToken: any;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `CaseComment`. */
  allCaseComments?: Maybe<CaseCommentsConnection>;
  /** Reads and enables pagination through a set of `CaseLike`. */
  allCaseLikes?: Maybe<CaseLikesConnection>;
  /** Reads and enables pagination through a set of `Comment`. */
  allComments?: Maybe<CommentsConnection>;
  /** Reads and enables pagination through a set of `Journal`. */
  allJournals?: Maybe<JournalsConnection>;
  /** Reads and enables pagination through a set of `Like`. */
  allLikes?: Maybe<LikesConnection>;
  /** Reads and enables pagination through a set of `Tool`. */
  allTools?: Maybe<ToolsConnection>;
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UsersConnection>;
  /** Reads and enables pagination through a set of `UserFollower`. */
  allUserFollowers?: Maybe<UserFollowersConnection>;
  /** Reads and enables pagination through a set of `UserToolLike`. */
  allUserToolLikes?: Maybe<UserToolLikesConnection>;
  caseCommentById?: Maybe<CaseComment>;
  caseLikeByLikeId?: Maybe<CaseLike>;
  commentByCommentId?: Maybe<Comment>;
  journalById?: Maybe<Journal>;
  likeByLikeId?: Maybe<Like>;
  toolById?: Maybe<Tool>;
  userByUserId?: Maybe<User>;
  userByUsername?: Maybe<User>;
  userFollowerByUserIdAndFollowerId?: Maybe<UserFollower>;
  userToolLikeByUserIdAndToolId?: Maybe<UserToolLike>;
  /** Reads and enables pagination through a set of `Tool`. */
  casesFeed?: Maybe<ToolsConnection>;
  currentUser?: Maybe<User>;
  currentUserId?: Maybe<Scalars['UUID']>;
  currentUserRole?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Tool`. */
  profileCases?: Maybe<ToolsConnection>;
  /** Reads a single `CaseComment` using its globally unique `ID`. */
  caseComment?: Maybe<CaseComment>;
  /** Reads a single `CaseLike` using its globally unique `ID`. */
  caseLike?: Maybe<CaseLike>;
  /** Reads a single `Comment` using its globally unique `ID`. */
  comment?: Maybe<Comment>;
  /** Reads a single `Journal` using its globally unique `ID`. */
  journal?: Maybe<Journal>;
  /** Reads a single `Like` using its globally unique `ID`. */
  like?: Maybe<Like>;
  /** Reads a single `Tool` using its globally unique `ID`. */
  tool?: Maybe<Tool>;
  /** Reads a single `User` using its globally unique `ID`. */
  user?: Maybe<User>;
  /** Reads a single `UserFollower` using its globally unique `ID`. */
  userFollower?: Maybe<UserFollower>;
  /** Reads a single `UserToolLike` using its globally unique `ID`. */
  userToolLike?: Maybe<UserToolLike>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCaseCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CaseCommentsOrderBy>>;
  condition?: Maybe<CaseCommentCondition>;
  filter?: Maybe<CaseCommentFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCaseLikesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CaseLikesOrderBy>>;
  condition?: Maybe<CaseLikeCondition>;
  filter?: Maybe<CaseLikeFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CommentsOrderBy>>;
  condition?: Maybe<CommentCondition>;
  filter?: Maybe<CommentFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllJournalsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<JournalsOrderBy>>;
  condition?: Maybe<JournalCondition>;
  filter?: Maybe<JournalFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllLikesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LikesOrderBy>>;
  condition?: Maybe<LikeCondition>;
  filter?: Maybe<LikeFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllToolsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ToolsOrderBy>>;
  condition?: Maybe<ToolCondition>;
  filter?: Maybe<ToolFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UsersOrderBy>>;
  condition?: Maybe<UserCondition>;
  filter?: Maybe<UserFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUserFollowersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UserFollowersOrderBy>>;
  condition?: Maybe<UserFollowerCondition>;
  filter?: Maybe<UserFollowerFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUserToolLikesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UserToolLikesOrderBy>>;
  condition?: Maybe<UserToolLikeCondition>;
  filter?: Maybe<UserToolLikeFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCaseCommentByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCaseLikeByLikeIdArgs = {
  likeId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCommentByCommentIdArgs = {
  commentId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryJournalByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLikeByLikeIdArgs = {
  likeId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryToolByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByUserIdArgs = {
  userId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByUsernameArgs = {
  username: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserFollowerByUserIdAndFollowerIdArgs = {
  userId: Scalars['UUID'];
  followerId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserToolLikeByUserIdAndToolIdArgs = {
  userId: Scalars['UUID'];
  toolId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCasesFeedArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ToolFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryProfileCasesArgs = {
  uId?: Maybe<Scalars['UUID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ToolFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCaseCommentArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCaseLikeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCommentArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryJournalArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLikeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryToolArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserFollowerArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserToolLikeArgs = {
  nodeId: Scalars['ID'];
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** A connection to a list of `CaseComment` values. */
export type CaseCommentsConnection = {
  __typename?: 'CaseCommentsConnection';
  /** A list of `CaseComment` objects. */
  nodes: Array<Maybe<CaseComment>>;
  /** A list of edges which contains the `CaseComment` and cursor to aid in pagination. */
  edges: Array<CaseCommentsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CaseComment` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type CaseComment = Node & {
  __typename?: 'CaseComment';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  comment: Scalars['String'];
  likes: Scalars['Int'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  userId: Scalars['UUID'];
  toolId: Scalars['UUID'];
  parentCommentId?: Maybe<Scalars['UUID']>;
  /** Reads a single `User` that is related to this `CaseComment`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Tool` that is related to this `CaseComment`. */
  toolByToolId?: Maybe<Tool>;
  /** Reads a single `CaseComment` that is related to this `CaseComment`. */
  caseCommentByParentCommentId?: Maybe<CaseComment>;
  /** Reads and enables pagination through a set of `CaseComment`. */
  caseCommentsByParentCommentId: CaseCommentsConnection;
  /** Reads and enables pagination through a set of `CaseLike`. */
  caseLikesByCaseCommentId: CaseLikesConnection;
};


export type CaseCommentCaseCommentsByParentCommentIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CaseCommentsOrderBy>>;
  condition?: Maybe<CaseCommentCondition>;
  filter?: Maybe<CaseCommentFilter>;
};


export type CaseCommentCaseLikesByCaseCommentIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CaseLikesOrderBy>>;
  condition?: Maybe<CaseLikeCondition>;
  filter?: Maybe<CaseLikeFilter>;
};



export type User = Node & {
  __typename?: 'User';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  userId: Scalars['UUID'];
  name: Scalars['String'];
  username: Scalars['String'];
  profilePicture?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  accountVerified: Scalars['Boolean'];
  isAdmin: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  /** Reads and enables pagination through a set of `Journal`. */
  journalsByUserId: JournalsConnection;
  /** Reads and enables pagination through a set of `Tool`. */
  toolsByUserId: ToolsConnection;
  /** Reads and enables pagination through a set of `UserToolLike`. */
  userToolLikesByUserId: UserToolLikesConnection;
  /** Reads and enables pagination through a set of `Comment`. */
  commentsByUserId: CommentsConnection;
  /** Reads and enables pagination through a set of `Like`. */
  likesByUserId: LikesConnection;
  /** Reads and enables pagination through a set of `CaseComment`. */
  caseCommentsByUserId: CaseCommentsConnection;
  /** Reads and enables pagination through a set of `CaseLike`. */
  caseLikesByUserId: CaseLikesConnection;
  /** Reads and enables pagination through a set of `UserFollower`. */
  userFollowersByUserId: UserFollowersConnection;
  /** Reads and enables pagination through a set of `UserFollower`. */
  userFollowersByFollowerId: UserFollowersConnection;
};


export type UserJournalsByUserIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<JournalsOrderBy>>;
  condition?: Maybe<JournalCondition>;
  filter?: Maybe<JournalFilter>;
};


export type UserToolsByUserIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ToolsOrderBy>>;
  condition?: Maybe<ToolCondition>;
  filter?: Maybe<ToolFilter>;
};


export type UserUserToolLikesByUserIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UserToolLikesOrderBy>>;
  condition?: Maybe<UserToolLikeCondition>;
  filter?: Maybe<UserToolLikeFilter>;
};


export type UserCommentsByUserIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CommentsOrderBy>>;
  condition?: Maybe<CommentCondition>;
  filter?: Maybe<CommentFilter>;
};


export type UserLikesByUserIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LikesOrderBy>>;
  condition?: Maybe<LikeCondition>;
  filter?: Maybe<LikeFilter>;
};


export type UserCaseCommentsByUserIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CaseCommentsOrderBy>>;
  condition?: Maybe<CaseCommentCondition>;
  filter?: Maybe<CaseCommentFilter>;
};


export type UserCaseLikesByUserIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CaseLikesOrderBy>>;
  condition?: Maybe<CaseLikeCondition>;
  filter?: Maybe<CaseLikeFilter>;
};


export type UserUserFollowersByUserIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UserFollowersOrderBy>>;
  condition?: Maybe<UserFollowerCondition>;
  filter?: Maybe<UserFollowerFilter>;
};


export type UserUserFollowersByFollowerIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UserFollowersOrderBy>>;
  condition?: Maybe<UserFollowerCondition>;
  filter?: Maybe<UserFollowerFilter>;
};

/** A connection to a list of `Journal` values. */
export type JournalsConnection = {
  __typename?: 'JournalsConnection';
  /** A list of `Journal` objects. */
  nodes: Array<Maybe<Journal>>;
  /** A list of edges which contains the `Journal` and cursor to aid in pagination. */
  edges: Array<JournalsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Journal` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Journal = Node & {
  __typename?: 'Journal';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  title: Scalars['String'];
  color?: Maybe<Scalars['String']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  toolbox?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  userId: Scalars['UUID'];
  /** Reads a single `User` that is related to this `Journal`. */
  userByUserId?: Maybe<User>;
  /** Reads and enables pagination through a set of `Tool`. */
  toolsByJournalId: ToolsConnection;
  /** Reads and enables pagination through a set of `Comment`. */
  commentsByJournalId: CommentsConnection;
};


export type JournalToolsByJournalIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ToolsOrderBy>>;
  condition?: Maybe<ToolCondition>;
  filter?: Maybe<ToolFilter>;
};


export type JournalCommentsByJournalIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CommentsOrderBy>>;
  condition?: Maybe<CommentCondition>;
  filter?: Maybe<CommentFilter>;
};


/** A connection to a list of `Tool` values. */
export type ToolsConnection = {
  __typename?: 'ToolsConnection';
  /** A list of `Tool` objects. */
  nodes: Array<Maybe<Tool>>;
  /** A list of edges which contains the `Tool` and cursor to aid in pagination. */
  edges: Array<ToolsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Tool` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Tool = Node & {
  __typename?: 'Tool';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  content?: Maybe<Scalars['JSON']>;
  likes: Scalars['Int'];
  createdAt?: Maybe<Scalars['Datetime']>;
  userId: Scalars['UUID'];
  journalId: Scalars['UUID'];
  /** Reads a single `User` that is related to this `Tool`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Journal` that is related to this `Tool`. */
  journalByJournalId?: Maybe<Journal>;
  /** Reads and enables pagination through a set of `UserToolLike`. */
  userToolLikesByToolId: UserToolLikesConnection;
  /** Reads and enables pagination through a set of `CaseComment`. */
  caseCommentsByToolId: CaseCommentsConnection;
};


export type ToolUserToolLikesByToolIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UserToolLikesOrderBy>>;
  condition?: Maybe<UserToolLikeCondition>;
  filter?: Maybe<UserToolLikeFilter>;
};


export type ToolCaseCommentsByToolIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CaseCommentsOrderBy>>;
  condition?: Maybe<CaseCommentCondition>;
  filter?: Maybe<CaseCommentFilter>;
};

/** A connection to a list of `UserToolLike` values. */
export type UserToolLikesConnection = {
  __typename?: 'UserToolLikesConnection';
  /** A list of `UserToolLike` objects. */
  nodes: Array<Maybe<UserToolLike>>;
  /** A list of edges which contains the `UserToolLike` and cursor to aid in pagination. */
  edges: Array<UserToolLikesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `UserToolLike` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type UserToolLike = Node & {
  __typename?: 'UserToolLike';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  isLiked: Scalars['Boolean'];
  userId: Scalars['UUID'];
  toolId: Scalars['UUID'];
  /** Reads a single `User` that is related to this `UserToolLike`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Tool` that is related to this `UserToolLike`. */
  toolByToolId?: Maybe<Tool>;
};

/** A `UserToolLike` edge in the connection. */
export type UserToolLikesEdge = {
  __typename?: 'UserToolLikesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `UserToolLike` at the end of the edge. */
  node?: Maybe<UserToolLike>;
};


/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
};

/** Methods to use when ordering `UserToolLike`. */
export enum UserToolLikesOrderBy {
  Natural = 'NATURAL',
  IsLikedAsc = 'IS_LIKED_ASC',
  IsLikedDesc = 'IS_LIKED_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  ToolIdAsc = 'TOOL_ID_ASC',
  ToolIdDesc = 'TOOL_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/**
 * A condition to be used against `UserToolLike` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type UserToolLikeCondition = {
  /** Checks for equality with the object’s `isLiked` field. */
  isLiked?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `toolId` field. */
  toolId?: Maybe<Scalars['UUID']>;
};

/** A filter to be used against `UserToolLike` object types. All fields are combined with a logical ‘and.’ */
export type UserToolLikeFilter = {
  /** Filter by the object’s `isLiked` field. */
  isLiked?: Maybe<BooleanFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: Maybe<UuidFilter>;
  /** Filter by the object’s `toolId` field. */
  toolId?: Maybe<UuidFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<UserToolLikeFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<UserToolLikeFilter>>;
  /** Negates the expression. */
  not?: Maybe<UserToolLikeFilter>;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Boolean']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Boolean']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Boolean']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Boolean']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Boolean']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Boolean']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Boolean']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Boolean']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Boolean']>;
};

/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
export type UuidFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['UUID']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['UUID']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['UUID']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['UUID']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['UUID']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['UUID']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['UUID']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['UUID']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['UUID']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['UUID']>;
};

/** Methods to use when ordering `CaseComment`. */
export enum CaseCommentsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CommentAsc = 'COMMENT_ASC',
  CommentDesc = 'COMMENT_DESC',
  LikesAsc = 'LIKES_ASC',
  LikesDesc = 'LIKES_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  ToolIdAsc = 'TOOL_ID_ASC',
  ToolIdDesc = 'TOOL_ID_DESC',
  ParentCommentIdAsc = 'PARENT_COMMENT_ID_ASC',
  ParentCommentIdDesc = 'PARENT_COMMENT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/**
 * A condition to be used against `CaseComment` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CaseCommentCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `comment` field. */
  comment?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `likes` field. */
  likes?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `toolId` field. */
  toolId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `parentCommentId` field. */
  parentCommentId?: Maybe<Scalars['UUID']>;
};

/** A filter to be used against `CaseComment` object types. All fields are combined with a logical ‘and.’ */
export type CaseCommentFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>;
  /** Filter by the object’s `comment` field. */
  comment?: Maybe<StringFilter>;
  /** Filter by the object’s `likes` field. */
  likes?: Maybe<IntFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: Maybe<UuidFilter>;
  /** Filter by the object’s `toolId` field. */
  toolId?: Maybe<UuidFilter>;
  /** Filter by the object’s `parentCommentId` field. */
  parentCommentId?: Maybe<UuidFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<CaseCommentFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<CaseCommentFilter>>;
  /** Negates the expression. */
  not?: Maybe<CaseCommentFilter>;
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['String']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['String']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['String']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Contains the specified string (case-sensitive). */
  includes?: Maybe<Scalars['String']>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: Maybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: Maybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: Maybe<Scalars['String']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: Maybe<Scalars['String']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: Maybe<Scalars['String']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: Maybe<Scalars['String']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: Maybe<Scalars['String']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: Maybe<Scalars['String']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: Maybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: Maybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: Maybe<Scalars['String']>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: Maybe<Array<Scalars['String']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: Maybe<Array<Scalars['String']>>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: Maybe<Scalars['String']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: Maybe<Scalars['String']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: Maybe<Scalars['String']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: Maybe<Scalars['String']>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Int']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Int']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Int']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Int']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Int']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Int']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Int']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Int']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Int']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Int']>;
};

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Datetime']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Datetime']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Datetime']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Datetime']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Datetime']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Datetime']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Datetime']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Datetime']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Datetime']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Datetime']>;
};

/** A `Tool` edge in the connection. */
export type ToolsEdge = {
  __typename?: 'ToolsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Tool` at the end of the edge. */
  node?: Maybe<Tool>;
};

/** Methods to use when ordering `Tool`. */
export enum ToolsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ContentAsc = 'CONTENT_ASC',
  ContentDesc = 'CONTENT_DESC',
  LikesAsc = 'LIKES_ASC',
  LikesDesc = 'LIKES_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  JournalIdAsc = 'JOURNAL_ID_ASC',
  JournalIdDesc = 'JOURNAL_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Tool` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ToolCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `content` field. */
  content?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `likes` field. */
  likes?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `journalId` field. */
  journalId?: Maybe<Scalars['UUID']>;
};

/** A filter to be used against `Tool` object types. All fields are combined with a logical ‘and.’ */
export type ToolFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>;
  /** Filter by the object’s `content` field. */
  content?: Maybe<JsonFilter>;
  /** Filter by the object’s `likes` field. */
  likes?: Maybe<IntFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: Maybe<UuidFilter>;
  /** Filter by the object’s `journalId` field. */
  journalId?: Maybe<UuidFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ToolFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ToolFilter>>;
  /** Negates the expression. */
  not?: Maybe<ToolFilter>;
};

/** A filter to be used against JSON fields. All fields are combined with a logical ‘and.’ */
export type JsonFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['JSON']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['JSON']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['JSON']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['JSON']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['JSON']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['JSON']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['JSON']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['JSON']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['JSON']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['JSON']>;
  /** Contains the specified JSON. */
  contains?: Maybe<Scalars['JSON']>;
  /** Contains the specified key. */
  containsKey?: Maybe<Scalars['String']>;
  /** Contains all of the specified keys. */
  containsAllKeys?: Maybe<Array<Scalars['String']>>;
  /** Contains any of the specified keys. */
  containsAnyKeys?: Maybe<Array<Scalars['String']>>;
  /** Contained by the specified JSON. */
  containedBy?: Maybe<Scalars['JSON']>;
};

/** A connection to a list of `Comment` values. */
export type CommentsConnection = {
  __typename?: 'CommentsConnection';
  /** A list of `Comment` objects. */
  nodes: Array<Maybe<Comment>>;
  /** A list of edges which contains the `Comment` and cursor to aid in pagination. */
  edges: Array<CommentsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Comment` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Comment = Node & {
  __typename?: 'Comment';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  commentId: Scalars['UUID'];
  comment: Scalars['String'];
  likes: Scalars['Int'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  userId: Scalars['UUID'];
  journalId: Scalars['UUID'];
  parentCommentId?: Maybe<Scalars['UUID']>;
  /** Reads a single `User` that is related to this `Comment`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Journal` that is related to this `Comment`. */
  journalByJournalId?: Maybe<Journal>;
  /** Reads a single `Comment` that is related to this `Comment`. */
  commentByParentCommentId?: Maybe<Comment>;
  /** Reads and enables pagination through a set of `Comment`. */
  commentsByParentCommentId: CommentsConnection;
  /** Reads and enables pagination through a set of `Like`. */
  likesByCommentId: LikesConnection;
};


export type CommentCommentsByParentCommentIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CommentsOrderBy>>;
  condition?: Maybe<CommentCondition>;
  filter?: Maybe<CommentFilter>;
};


export type CommentLikesByCommentIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LikesOrderBy>>;
  condition?: Maybe<LikeCondition>;
  filter?: Maybe<LikeFilter>;
};

/** Methods to use when ordering `Comment`. */
export enum CommentsOrderBy {
  Natural = 'NATURAL',
  CommentIdAsc = 'COMMENT_ID_ASC',
  CommentIdDesc = 'COMMENT_ID_DESC',
  CommentAsc = 'COMMENT_ASC',
  CommentDesc = 'COMMENT_DESC',
  LikesAsc = 'LIKES_ASC',
  LikesDesc = 'LIKES_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  JournalIdAsc = 'JOURNAL_ID_ASC',
  JournalIdDesc = 'JOURNAL_ID_DESC',
  ParentCommentIdAsc = 'PARENT_COMMENT_ID_ASC',
  ParentCommentIdDesc = 'PARENT_COMMENT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Comment` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CommentCondition = {
  /** Checks for equality with the object’s `commentId` field. */
  commentId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `comment` field. */
  comment?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `likes` field. */
  likes?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `journalId` field. */
  journalId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `parentCommentId` field. */
  parentCommentId?: Maybe<Scalars['UUID']>;
};

/** A filter to be used against `Comment` object types. All fields are combined with a logical ‘and.’ */
export type CommentFilter = {
  /** Filter by the object’s `commentId` field. */
  commentId?: Maybe<UuidFilter>;
  /** Filter by the object’s `comment` field. */
  comment?: Maybe<StringFilter>;
  /** Filter by the object’s `likes` field. */
  likes?: Maybe<IntFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: Maybe<UuidFilter>;
  /** Filter by the object’s `journalId` field. */
  journalId?: Maybe<UuidFilter>;
  /** Filter by the object’s `parentCommentId` field. */
  parentCommentId?: Maybe<UuidFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<CommentFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<CommentFilter>>;
  /** Negates the expression. */
  not?: Maybe<CommentFilter>;
};

/** A connection to a list of `Like` values. */
export type LikesConnection = {
  __typename?: 'LikesConnection';
  /** A list of `Like` objects. */
  nodes: Array<Maybe<Like>>;
  /** A list of edges which contains the `Like` and cursor to aid in pagination. */
  edges: Array<LikesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Like` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Like = Node & {
  __typename?: 'Like';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  likeId: Scalars['UUID'];
  isLiked: Scalars['Boolean'];
  userId: Scalars['UUID'];
  commentId: Scalars['UUID'];
  /** Reads a single `User` that is related to this `Like`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Comment` that is related to this `Like`. */
  commentByCommentId?: Maybe<Comment>;
};

/** A `Like` edge in the connection. */
export type LikesEdge = {
  __typename?: 'LikesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Like` at the end of the edge. */
  node?: Maybe<Like>;
};

/** Methods to use when ordering `Like`. */
export enum LikesOrderBy {
  Natural = 'NATURAL',
  LikeIdAsc = 'LIKE_ID_ASC',
  LikeIdDesc = 'LIKE_ID_DESC',
  IsLikedAsc = 'IS_LIKED_ASC',
  IsLikedDesc = 'IS_LIKED_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  CommentIdAsc = 'COMMENT_ID_ASC',
  CommentIdDesc = 'COMMENT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Like` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type LikeCondition = {
  /** Checks for equality with the object’s `likeId` field. */
  likeId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `isLiked` field. */
  isLiked?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `commentId` field. */
  commentId?: Maybe<Scalars['UUID']>;
};

/** A filter to be used against `Like` object types. All fields are combined with a logical ‘and.’ */
export type LikeFilter = {
  /** Filter by the object’s `likeId` field. */
  likeId?: Maybe<UuidFilter>;
  /** Filter by the object’s `isLiked` field. */
  isLiked?: Maybe<BooleanFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: Maybe<UuidFilter>;
  /** Filter by the object’s `commentId` field. */
  commentId?: Maybe<UuidFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<LikeFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<LikeFilter>>;
  /** Negates the expression. */
  not?: Maybe<LikeFilter>;
};

/** A `Comment` edge in the connection. */
export type CommentsEdge = {
  __typename?: 'CommentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Comment` at the end of the edge. */
  node?: Maybe<Comment>;
};

/** A `Journal` edge in the connection. */
export type JournalsEdge = {
  __typename?: 'JournalsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Journal` at the end of the edge. */
  node?: Maybe<Journal>;
};

/** Methods to use when ordering `Journal`. */
export enum JournalsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  ColorAsc = 'COLOR_ASC',
  ColorDesc = 'COLOR_DESC',
  IsPrivateAsc = 'IS_PRIVATE_ASC',
  IsPrivateDesc = 'IS_PRIVATE_DESC',
  ContentAsc = 'CONTENT_ASC',
  ContentDesc = 'CONTENT_DESC',
  ToolboxAsc = 'TOOLBOX_ASC',
  ToolboxDesc = 'TOOLBOX_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Journal` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type JournalCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `color` field. */
  color?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `isPrivate` field. */
  isPrivate?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `content` field. */
  content?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Checks for equality with the object’s `toolbox` field. */
  toolbox?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: Maybe<Scalars['UUID']>;
};

/** A filter to be used against `Journal` object types. All fields are combined with a logical ‘and.’ */
export type JournalFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<UuidFilter>;
  /** Filter by the object’s `title` field. */
  title?: Maybe<StringFilter>;
  /** Filter by the object’s `color` field. */
  color?: Maybe<StringFilter>;
  /** Filter by the object’s `isPrivate` field. */
  isPrivate?: Maybe<BooleanFilter>;
  /** Filter by the object’s `content` field. */
  content?: Maybe<JsonListFilter>;
  /** Filter by the object’s `toolbox` field. */
  toolbox?: Maybe<JsonListFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: Maybe<UuidFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<JournalFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<JournalFilter>>;
  /** Negates the expression. */
  not?: Maybe<JournalFilter>;
};

/** A filter to be used against JSON List fields. All fields are combined with a logical ‘and.’ */
export type JsonListFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Contains the specified list of values. */
  contains?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Contained by the specified list of values. */
  containedBy?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Overlaps the specified list of values. */
  overlaps?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Any array item is equal to the specified value. */
  anyEqualTo?: Maybe<Scalars['JSON']>;
  /** Any array item is not equal to the specified value. */
  anyNotEqualTo?: Maybe<Scalars['JSON']>;
  /** Any array item is less than the specified value. */
  anyLessThan?: Maybe<Scalars['JSON']>;
  /** Any array item is less than or equal to the specified value. */
  anyLessThanOrEqualTo?: Maybe<Scalars['JSON']>;
  /** Any array item is greater than the specified value. */
  anyGreaterThan?: Maybe<Scalars['JSON']>;
  /** Any array item is greater than or equal to the specified value. */
  anyGreaterThanOrEqualTo?: Maybe<Scalars['JSON']>;
};

/** A connection to a list of `CaseLike` values. */
export type CaseLikesConnection = {
  __typename?: 'CaseLikesConnection';
  /** A list of `CaseLike` objects. */
  nodes: Array<Maybe<CaseLike>>;
  /** A list of edges which contains the `CaseLike` and cursor to aid in pagination. */
  edges: Array<CaseLikesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CaseLike` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type CaseLike = Node & {
  __typename?: 'CaseLike';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  likeId: Scalars['UUID'];
  isLiked: Scalars['Boolean'];
  userId: Scalars['UUID'];
  caseCommentId: Scalars['UUID'];
  /** Reads a single `User` that is related to this `CaseLike`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `CaseComment` that is related to this `CaseLike`. */
  caseCommentByCaseCommentId?: Maybe<CaseComment>;
};

/** A `CaseLike` edge in the connection. */
export type CaseLikesEdge = {
  __typename?: 'CaseLikesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `CaseLike` at the end of the edge. */
  node?: Maybe<CaseLike>;
};

/** Methods to use when ordering `CaseLike`. */
export enum CaseLikesOrderBy {
  Natural = 'NATURAL',
  LikeIdAsc = 'LIKE_ID_ASC',
  LikeIdDesc = 'LIKE_ID_DESC',
  IsLikedAsc = 'IS_LIKED_ASC',
  IsLikedDesc = 'IS_LIKED_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  CaseCommentIdAsc = 'CASE_COMMENT_ID_ASC',
  CaseCommentIdDesc = 'CASE_COMMENT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/**
 * A condition to be used against `CaseLike` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CaseLikeCondition = {
  /** Checks for equality with the object’s `likeId` field. */
  likeId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `isLiked` field. */
  isLiked?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `caseCommentId` field. */
  caseCommentId?: Maybe<Scalars['UUID']>;
};

/** A filter to be used against `CaseLike` object types. All fields are combined with a logical ‘and.’ */
export type CaseLikeFilter = {
  /** Filter by the object’s `likeId` field. */
  likeId?: Maybe<UuidFilter>;
  /** Filter by the object’s `isLiked` field. */
  isLiked?: Maybe<BooleanFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: Maybe<UuidFilter>;
  /** Filter by the object’s `caseCommentId` field. */
  caseCommentId?: Maybe<UuidFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<CaseLikeFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<CaseLikeFilter>>;
  /** Negates the expression. */
  not?: Maybe<CaseLikeFilter>;
};

/** A connection to a list of `UserFollower` values. */
export type UserFollowersConnection = {
  __typename?: 'UserFollowersConnection';
  /** A list of `UserFollower` objects. */
  nodes: Array<Maybe<UserFollower>>;
  /** A list of edges which contains the `UserFollower` and cursor to aid in pagination. */
  edges: Array<UserFollowersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `UserFollower` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type UserFollower = Node & {
  __typename?: 'UserFollower';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  userId: Scalars['UUID'];
  followerId: Scalars['UUID'];
  /** Reads a single `User` that is related to this `UserFollower`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `User` that is related to this `UserFollower`. */
  userByFollowerId?: Maybe<User>;
};

/** A `UserFollower` edge in the connection. */
export type UserFollowersEdge = {
  __typename?: 'UserFollowersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `UserFollower` at the end of the edge. */
  node?: Maybe<UserFollower>;
};

/** Methods to use when ordering `UserFollower`. */
export enum UserFollowersOrderBy {
  Natural = 'NATURAL',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  FollowerIdAsc = 'FOLLOWER_ID_ASC',
  FollowerIdDesc = 'FOLLOWER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/**
 * A condition to be used against `UserFollower` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type UserFollowerCondition = {
  /** Checks for equality with the object’s `userId` field. */
  userId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `followerId` field. */
  followerId?: Maybe<Scalars['UUID']>;
};

/** A filter to be used against `UserFollower` object types. All fields are combined with a logical ‘and.’ */
export type UserFollowerFilter = {
  /** Filter by the object’s `userId` field. */
  userId?: Maybe<UuidFilter>;
  /** Filter by the object’s `followerId` field. */
  followerId?: Maybe<UuidFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<UserFollowerFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<UserFollowerFilter>>;
  /** Negates the expression. */
  not?: Maybe<UserFollowerFilter>;
};

/** A `CaseComment` edge in the connection. */
export type CaseCommentsEdge = {
  __typename?: 'CaseCommentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `CaseComment` at the end of the edge. */
  node?: Maybe<CaseComment>;
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  Natural = 'NATURAL',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  ProfilePictureAsc = 'PROFILE_PICTURE_ASC',
  ProfilePictureDesc = 'PROFILE_PICTURE_DESC',
  CoverImageAsc = 'COVER_IMAGE_ASC',
  CoverImageDesc = 'COVER_IMAGE_DESC',
  BiographyAsc = 'BIOGRAPHY_ASC',
  BiographyDesc = 'BIOGRAPHY_DESC',
  AccountVerifiedAsc = 'ACCOUNT_VERIFIED_ASC',
  AccountVerifiedDesc = 'ACCOUNT_VERIFIED_DESC',
  IsAdminAsc = 'IS_ADMIN_ASC',
  IsAdminDesc = 'IS_ADMIN_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `userId` field. */
  userId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `profilePicture` field. */
  profilePicture?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `coverImage` field. */
  coverImage?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `biography` field. */
  biography?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `accountVerified` field. */
  accountVerified?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `isAdmin` field. */
  isAdmin?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Filter by the object’s `userId` field. */
  userId?: Maybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>;
  /** Filter by the object’s `username` field. */
  username?: Maybe<StringFilter>;
  /** Filter by the object’s `profilePicture` field. */
  profilePicture?: Maybe<StringFilter>;
  /** Filter by the object’s `coverImage` field. */
  coverImage?: Maybe<StringFilter>;
  /** Filter by the object’s `biography` field. */
  biography?: Maybe<StringFilter>;
  /** Filter by the object’s `accountVerified` field. */
  accountVerified?: Maybe<BooleanFilter>;
  /** Filter by the object’s `isAdmin` field. */
  isAdmin?: Maybe<BooleanFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<UserFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<UserFilter>>;
  /** Negates the expression. */
  not?: Maybe<UserFilter>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `CaseComment`. */
  createCaseComment?: Maybe<CreateCaseCommentPayload>;
  /** Creates a single `CaseLike`. */
  createCaseLike?: Maybe<CreateCaseLikePayload>;
  /** Creates a single `Comment`. */
  createComment?: Maybe<CreateCommentPayload>;
  /** Creates a single `Journal`. */
  createJournal?: Maybe<CreateJournalPayload>;
  /** Creates a single `Like`. */
  createLike?: Maybe<CreateLikePayload>;
  /** Creates a single `Tool`. */
  createTool?: Maybe<CreateToolPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Creates a single `UserFollower`. */
  createUserFollower?: Maybe<CreateUserFollowerPayload>;
  /** Creates a single `UserToolLike`. */
  createUserToolLike?: Maybe<CreateUserToolLikePayload>;
  /** Updates a single `CaseComment` using its globally unique id and a patch. */
  updateCaseComment?: Maybe<UpdateCaseCommentPayload>;
  /** Updates a single `CaseComment` using a unique key and a patch. */
  updateCaseCommentById?: Maybe<UpdateCaseCommentPayload>;
  /** Updates a single `CaseLike` using its globally unique id and a patch. */
  updateCaseLike?: Maybe<UpdateCaseLikePayload>;
  /** Updates a single `CaseLike` using a unique key and a patch. */
  updateCaseLikeByLikeId?: Maybe<UpdateCaseLikePayload>;
  /** Updates a single `Comment` using its globally unique id and a patch. */
  updateComment?: Maybe<UpdateCommentPayload>;
  /** Updates a single `Comment` using a unique key and a patch. */
  updateCommentByCommentId?: Maybe<UpdateCommentPayload>;
  /** Updates a single `Journal` using its globally unique id and a patch. */
  updateJournal?: Maybe<UpdateJournalPayload>;
  /** Updates a single `Journal` using a unique key and a patch. */
  updateJournalById?: Maybe<UpdateJournalPayload>;
  /** Updates a single `Like` using its globally unique id and a patch. */
  updateLike?: Maybe<UpdateLikePayload>;
  /** Updates a single `Like` using a unique key and a patch. */
  updateLikeByLikeId?: Maybe<UpdateLikePayload>;
  /** Updates a single `Tool` using its globally unique id and a patch. */
  updateTool?: Maybe<UpdateToolPayload>;
  /** Updates a single `Tool` using a unique key and a patch. */
  updateToolById?: Maybe<UpdateToolPayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByUserId?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByUsername?: Maybe<UpdateUserPayload>;
  /** Updates a single `UserFollower` using its globally unique id and a patch. */
  updateUserFollower?: Maybe<UpdateUserFollowerPayload>;
  /** Updates a single `UserFollower` using a unique key and a patch. */
  updateUserFollowerByUserIdAndFollowerId?: Maybe<UpdateUserFollowerPayload>;
  /** Updates a single `UserToolLike` using its globally unique id and a patch. */
  updateUserToolLike?: Maybe<UpdateUserToolLikePayload>;
  /** Updates a single `UserToolLike` using a unique key and a patch. */
  updateUserToolLikeByUserIdAndToolId?: Maybe<UpdateUserToolLikePayload>;
  /** Deletes a single `CaseComment` using its globally unique id. */
  deleteCaseComment?: Maybe<DeleteCaseCommentPayload>;
  /** Deletes a single `CaseComment` using a unique key. */
  deleteCaseCommentById?: Maybe<DeleteCaseCommentPayload>;
  /** Deletes a single `CaseLike` using its globally unique id. */
  deleteCaseLike?: Maybe<DeleteCaseLikePayload>;
  /** Deletes a single `CaseLike` using a unique key. */
  deleteCaseLikeByLikeId?: Maybe<DeleteCaseLikePayload>;
  /** Deletes a single `Comment` using its globally unique id. */
  deleteComment?: Maybe<DeleteCommentPayload>;
  /** Deletes a single `Comment` using a unique key. */
  deleteCommentByCommentId?: Maybe<DeleteCommentPayload>;
  /** Deletes a single `Journal` using its globally unique id. */
  deleteJournal?: Maybe<DeleteJournalPayload>;
  /** Deletes a single `Journal` using a unique key. */
  deleteJournalById?: Maybe<DeleteJournalPayload>;
  /** Deletes a single `Like` using its globally unique id. */
  deleteLike?: Maybe<DeleteLikePayload>;
  /** Deletes a single `Like` using a unique key. */
  deleteLikeByLikeId?: Maybe<DeleteLikePayload>;
  /** Deletes a single `Tool` using its globally unique id. */
  deleteTool?: Maybe<DeleteToolPayload>;
  /** Deletes a single `Tool` using a unique key. */
  deleteToolById?: Maybe<DeleteToolPayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByUserId?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByUsername?: Maybe<DeleteUserPayload>;
  /** Deletes a single `UserFollower` using its globally unique id. */
  deleteUserFollower?: Maybe<DeleteUserFollowerPayload>;
  /** Deletes a single `UserFollower` using a unique key. */
  deleteUserFollowerByUserIdAndFollowerId?: Maybe<DeleteUserFollowerPayload>;
  /** Deletes a single `UserToolLike` using its globally unique id. */
  deleteUserToolLike?: Maybe<DeleteUserToolLikePayload>;
  /** Deletes a single `UserToolLike` using a unique key. */
  deleteUserToolLikeByUserIdAndToolId?: Maybe<DeleteUserToolLikePayload>;
  authenticate?: Maybe<AuthenticatePayload>;
  authenticateAdmin?: Maybe<AuthenticateAdminPayload>;
  registerAdmin?: Maybe<RegisterAdminPayload>;
  registerUser?: Maybe<RegisterUserPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCaseCommentArgs = {
  input: CreateCaseCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCaseLikeArgs = {
  input: CreateCaseLikeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateJournalArgs = {
  input: CreateJournalInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLikeArgs = {
  input: CreateLikeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateToolArgs = {
  input: CreateToolInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserFollowerArgs = {
  input: CreateUserFollowerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserToolLikeArgs = {
  input: CreateUserToolLikeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCaseCommentArgs = {
  input: UpdateCaseCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCaseCommentByIdArgs = {
  input: UpdateCaseCommentByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCaseLikeArgs = {
  input: UpdateCaseLikeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCaseLikeByLikeIdArgs = {
  input: UpdateCaseLikeByLikeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCommentByCommentIdArgs = {
  input: UpdateCommentByCommentIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateJournalArgs = {
  input: UpdateJournalInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateJournalByIdArgs = {
  input: UpdateJournalByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLikeArgs = {
  input: UpdateLikeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLikeByLikeIdArgs = {
  input: UpdateLikeByLikeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateToolArgs = {
  input: UpdateToolInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateToolByIdArgs = {
  input: UpdateToolByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByUserIdArgs = {
  input: UpdateUserByUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByUsernameArgs = {
  input: UpdateUserByUsernameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserFollowerArgs = {
  input: UpdateUserFollowerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserFollowerByUserIdAndFollowerIdArgs = {
  input: UpdateUserFollowerByUserIdAndFollowerIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserToolLikeArgs = {
  input: UpdateUserToolLikeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserToolLikeByUserIdAndToolIdArgs = {
  input: UpdateUserToolLikeByUserIdAndToolIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCaseCommentArgs = {
  input: DeleteCaseCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCaseCommentByIdArgs = {
  input: DeleteCaseCommentByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCaseLikeArgs = {
  input: DeleteCaseLikeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCaseLikeByLikeIdArgs = {
  input: DeleteCaseLikeByLikeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCommentByCommentIdArgs = {
  input: DeleteCommentByCommentIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteJournalArgs = {
  input: DeleteJournalInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteJournalByIdArgs = {
  input: DeleteJournalByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLikeArgs = {
  input: DeleteLikeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLikeByLikeIdArgs = {
  input: DeleteLikeByLikeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteToolArgs = {
  input: DeleteToolInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteToolByIdArgs = {
  input: DeleteToolByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByUserIdArgs = {
  input: DeleteUserByUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByUsernameArgs = {
  input: DeleteUserByUsernameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserFollowerArgs = {
  input: DeleteUserFollowerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserFollowerByUserIdAndFollowerIdArgs = {
  input: DeleteUserFollowerByUserIdAndFollowerIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserToolLikeArgs = {
  input: DeleteUserToolLikeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserToolLikeByUserIdAndToolIdArgs = {
  input: DeleteUserToolLikeByUserIdAndToolIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAuthenticateArgs = {
  input: AuthenticateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAuthenticateAdminArgs = {
  input: AuthenticateAdminInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterAdminArgs = {
  input: RegisterAdminInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterUserArgs = {
  input: RegisterUserInput;
};

/** The output of our create `CaseComment` mutation. */
export type CreateCaseCommentPayload = {
  __typename?: 'CreateCaseCommentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CaseComment` that was created by this mutation. */
  caseComment?: Maybe<CaseComment>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `CaseComment`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Tool` that is related to this `CaseComment`. */
  toolByToolId?: Maybe<Tool>;
  /** Reads a single `CaseComment` that is related to this `CaseComment`. */
  caseCommentByParentCommentId?: Maybe<CaseComment>;
  /** An edge for our `CaseComment`. May be used by Relay 1. */
  caseCommentEdge?: Maybe<CaseCommentsEdge>;
};


/** The output of our create `CaseComment` mutation. */
export type CreateCaseCommentPayloadCaseCommentEdgeArgs = {
  orderBy?: Maybe<Array<CaseCommentsOrderBy>>;
};

/** All input for the create `CaseComment` mutation. */
export type CreateCaseCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CaseComment` to be created by this mutation. */
  caseComment: CaseCommentInput;
};

/** An input for mutations affecting `CaseComment` */
export type CaseCommentInput = {
  id?: Maybe<Scalars['UUID']>;
  comment: Scalars['String'];
  likes?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  userId: Scalars['UUID'];
  toolId: Scalars['UUID'];
  parentCommentId?: Maybe<Scalars['UUID']>;
};

/** The output of our create `CaseLike` mutation. */
export type CreateCaseLikePayload = {
  __typename?: 'CreateCaseLikePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CaseLike` that was created by this mutation. */
  caseLike?: Maybe<CaseLike>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `CaseLike`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `CaseComment` that is related to this `CaseLike`. */
  caseCommentByCaseCommentId?: Maybe<CaseComment>;
  /** An edge for our `CaseLike`. May be used by Relay 1. */
  caseLikeEdge?: Maybe<CaseLikesEdge>;
};


/** The output of our create `CaseLike` mutation. */
export type CreateCaseLikePayloadCaseLikeEdgeArgs = {
  orderBy?: Maybe<Array<CaseLikesOrderBy>>;
};

/** All input for the create `CaseLike` mutation. */
export type CreateCaseLikeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CaseLike` to be created by this mutation. */
  caseLike: CaseLikeInput;
};

/** An input for mutations affecting `CaseLike` */
export type CaseLikeInput = {
  likeId?: Maybe<Scalars['UUID']>;
  isLiked?: Maybe<Scalars['Boolean']>;
  userId: Scalars['UUID'];
  caseCommentId: Scalars['UUID'];
};

/** The output of our create `Comment` mutation. */
export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Comment` that was created by this mutation. */
  comment?: Maybe<Comment>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Comment`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Journal` that is related to this `Comment`. */
  journalByJournalId?: Maybe<Journal>;
  /** Reads a single `Comment` that is related to this `Comment`. */
  commentByParentCommentId?: Maybe<Comment>;
  /** An edge for our `Comment`. May be used by Relay 1. */
  commentEdge?: Maybe<CommentsEdge>;
};


/** The output of our create `Comment` mutation. */
export type CreateCommentPayloadCommentEdgeArgs = {
  orderBy?: Maybe<Array<CommentsOrderBy>>;
};

/** All input for the create `Comment` mutation. */
export type CreateCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Comment` to be created by this mutation. */
  comment: CommentInput;
};

/** An input for mutations affecting `Comment` */
export type CommentInput = {
  commentId?: Maybe<Scalars['UUID']>;
  comment: Scalars['String'];
  likes?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  userId: Scalars['UUID'];
  journalId: Scalars['UUID'];
  parentCommentId?: Maybe<Scalars['UUID']>;
};

/** The output of our create `Journal` mutation. */
export type CreateJournalPayload = {
  __typename?: 'CreateJournalPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Journal` that was created by this mutation. */
  journal?: Maybe<Journal>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Journal`. */
  userByUserId?: Maybe<User>;
  /** An edge for our `Journal`. May be used by Relay 1. */
  journalEdge?: Maybe<JournalsEdge>;
};


/** The output of our create `Journal` mutation. */
export type CreateJournalPayloadJournalEdgeArgs = {
  orderBy?: Maybe<Array<JournalsOrderBy>>;
};

/** All input for the create `Journal` mutation. */
export type CreateJournalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Journal` to be created by this mutation. */
  journal: JournalInput;
};

/** An input for mutations affecting `Journal` */
export type JournalInput = {
  id?: Maybe<Scalars['UUID']>;
  title: Scalars['String'];
  color?: Maybe<Scalars['String']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  toolbox?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  userId: Scalars['UUID'];
};

/** The output of our create `Like` mutation. */
export type CreateLikePayload = {
  __typename?: 'CreateLikePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Like` that was created by this mutation. */
  like?: Maybe<Like>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Like`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Comment` that is related to this `Like`. */
  commentByCommentId?: Maybe<Comment>;
  /** An edge for our `Like`. May be used by Relay 1. */
  likeEdge?: Maybe<LikesEdge>;
};


/** The output of our create `Like` mutation. */
export type CreateLikePayloadLikeEdgeArgs = {
  orderBy?: Maybe<Array<LikesOrderBy>>;
};

/** All input for the create `Like` mutation. */
export type CreateLikeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Like` to be created by this mutation. */
  like: LikeInput;
};

/** An input for mutations affecting `Like` */
export type LikeInput = {
  likeId?: Maybe<Scalars['UUID']>;
  isLiked?: Maybe<Scalars['Boolean']>;
  userId: Scalars['UUID'];
  commentId: Scalars['UUID'];
};

/** The output of our create `Tool` mutation. */
export type CreateToolPayload = {
  __typename?: 'CreateToolPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tool` that was created by this mutation. */
  tool?: Maybe<Tool>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Tool`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Journal` that is related to this `Tool`. */
  journalByJournalId?: Maybe<Journal>;
  /** An edge for our `Tool`. May be used by Relay 1. */
  toolEdge?: Maybe<ToolsEdge>;
};


/** The output of our create `Tool` mutation. */
export type CreateToolPayloadToolEdgeArgs = {
  orderBy?: Maybe<Array<ToolsOrderBy>>;
};

/** All input for the create `Tool` mutation. */
export type CreateToolInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tool` to be created by this mutation. */
  tool: ToolInput;
};

/** An input for mutations affecting `Tool` */
export type ToolInput = {
  id?: Maybe<Scalars['UUID']>;
  content?: Maybe<Scalars['JSON']>;
  likes?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  userId: Scalars['UUID'];
  journalId: Scalars['UUID'];
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  userId?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  username: Scalars['String'];
  profilePicture?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  accountVerified?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** The output of our create `UserFollower` mutation. */
export type CreateUserFollowerPayload = {
  __typename?: 'CreateUserFollowerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `UserFollower` that was created by this mutation. */
  userFollower?: Maybe<UserFollower>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserFollower`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `User` that is related to this `UserFollower`. */
  userByFollowerId?: Maybe<User>;
  /** An edge for our `UserFollower`. May be used by Relay 1. */
  userFollowerEdge?: Maybe<UserFollowersEdge>;
};


/** The output of our create `UserFollower` mutation. */
export type CreateUserFollowerPayloadUserFollowerEdgeArgs = {
  orderBy?: Maybe<Array<UserFollowersOrderBy>>;
};

/** All input for the create `UserFollower` mutation. */
export type CreateUserFollowerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `UserFollower` to be created by this mutation. */
  userFollower: UserFollowerInput;
};

/** An input for mutations affecting `UserFollower` */
export type UserFollowerInput = {
  userId: Scalars['UUID'];
  followerId: Scalars['UUID'];
};

/** The output of our create `UserToolLike` mutation. */
export type CreateUserToolLikePayload = {
  __typename?: 'CreateUserToolLikePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `UserToolLike` that was created by this mutation. */
  userToolLike?: Maybe<UserToolLike>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserToolLike`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Tool` that is related to this `UserToolLike`. */
  toolByToolId?: Maybe<Tool>;
  /** An edge for our `UserToolLike`. May be used by Relay 1. */
  userToolLikeEdge?: Maybe<UserToolLikesEdge>;
};


/** The output of our create `UserToolLike` mutation. */
export type CreateUserToolLikePayloadUserToolLikeEdgeArgs = {
  orderBy?: Maybe<Array<UserToolLikesOrderBy>>;
};

/** All input for the create `UserToolLike` mutation. */
export type CreateUserToolLikeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `UserToolLike` to be created by this mutation. */
  userToolLike: UserToolLikeInput;
};

/** An input for mutations affecting `UserToolLike` */
export type UserToolLikeInput = {
  isLiked?: Maybe<Scalars['Boolean']>;
  userId: Scalars['UUID'];
  toolId: Scalars['UUID'];
};

/** The output of our update `CaseComment` mutation. */
export type UpdateCaseCommentPayload = {
  __typename?: 'UpdateCaseCommentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CaseComment` that was updated by this mutation. */
  caseComment?: Maybe<CaseComment>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `CaseComment`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Tool` that is related to this `CaseComment`. */
  toolByToolId?: Maybe<Tool>;
  /** Reads a single `CaseComment` that is related to this `CaseComment`. */
  caseCommentByParentCommentId?: Maybe<CaseComment>;
  /** An edge for our `CaseComment`. May be used by Relay 1. */
  caseCommentEdge?: Maybe<CaseCommentsEdge>;
};


/** The output of our update `CaseComment` mutation. */
export type UpdateCaseCommentPayloadCaseCommentEdgeArgs = {
  orderBy?: Maybe<Array<CaseCommentsOrderBy>>;
};

/** All input for the `updateCaseComment` mutation. */
export type UpdateCaseCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `CaseComment` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `CaseComment` being updated. */
  caseCommentPatch: CaseCommentPatch;
};

/** Represents an update to a `CaseComment`. Fields that are set will be updated. */
export type CaseCommentPatch = {
  id?: Maybe<Scalars['UUID']>;
  comment?: Maybe<Scalars['String']>;
  likes?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  userId?: Maybe<Scalars['UUID']>;
  toolId?: Maybe<Scalars['UUID']>;
  parentCommentId?: Maybe<Scalars['UUID']>;
};

/** All input for the `updateCaseCommentById` mutation. */
export type UpdateCaseCommentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `CaseComment` being updated. */
  caseCommentPatch: CaseCommentPatch;
  id: Scalars['UUID'];
};

/** The output of our update `CaseLike` mutation. */
export type UpdateCaseLikePayload = {
  __typename?: 'UpdateCaseLikePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CaseLike` that was updated by this mutation. */
  caseLike?: Maybe<CaseLike>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `CaseLike`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `CaseComment` that is related to this `CaseLike`. */
  caseCommentByCaseCommentId?: Maybe<CaseComment>;
  /** An edge for our `CaseLike`. May be used by Relay 1. */
  caseLikeEdge?: Maybe<CaseLikesEdge>;
};


/** The output of our update `CaseLike` mutation. */
export type UpdateCaseLikePayloadCaseLikeEdgeArgs = {
  orderBy?: Maybe<Array<CaseLikesOrderBy>>;
};

/** All input for the `updateCaseLike` mutation. */
export type UpdateCaseLikeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `CaseLike` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `CaseLike` being updated. */
  caseLikePatch: CaseLikePatch;
};

/** Represents an update to a `CaseLike`. Fields that are set will be updated. */
export type CaseLikePatch = {
  likeId?: Maybe<Scalars['UUID']>;
  isLiked?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['UUID']>;
  caseCommentId?: Maybe<Scalars['UUID']>;
};

/** All input for the `updateCaseLikeByLikeId` mutation. */
export type UpdateCaseLikeByLikeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `CaseLike` being updated. */
  caseLikePatch: CaseLikePatch;
  likeId: Scalars['UUID'];
};

/** The output of our update `Comment` mutation. */
export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Comment` that was updated by this mutation. */
  comment?: Maybe<Comment>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Comment`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Journal` that is related to this `Comment`. */
  journalByJournalId?: Maybe<Journal>;
  /** Reads a single `Comment` that is related to this `Comment`. */
  commentByParentCommentId?: Maybe<Comment>;
  /** An edge for our `Comment`. May be used by Relay 1. */
  commentEdge?: Maybe<CommentsEdge>;
};


/** The output of our update `Comment` mutation. */
export type UpdateCommentPayloadCommentEdgeArgs = {
  orderBy?: Maybe<Array<CommentsOrderBy>>;
};

/** All input for the `updateComment` mutation. */
export type UpdateCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Comment` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Comment` being updated. */
  commentPatch: CommentPatch;
};

/** Represents an update to a `Comment`. Fields that are set will be updated. */
export type CommentPatch = {
  commentId?: Maybe<Scalars['UUID']>;
  comment?: Maybe<Scalars['String']>;
  likes?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  userId?: Maybe<Scalars['UUID']>;
  journalId?: Maybe<Scalars['UUID']>;
  parentCommentId?: Maybe<Scalars['UUID']>;
};

/** All input for the `updateCommentByCommentId` mutation. */
export type UpdateCommentByCommentIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Comment` being updated. */
  commentPatch: CommentPatch;
  commentId: Scalars['UUID'];
};

/** The output of our update `Journal` mutation. */
export type UpdateJournalPayload = {
  __typename?: 'UpdateJournalPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Journal` that was updated by this mutation. */
  journal?: Maybe<Journal>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Journal`. */
  userByUserId?: Maybe<User>;
  /** An edge for our `Journal`. May be used by Relay 1. */
  journalEdge?: Maybe<JournalsEdge>;
};


/** The output of our update `Journal` mutation. */
export type UpdateJournalPayloadJournalEdgeArgs = {
  orderBy?: Maybe<Array<JournalsOrderBy>>;
};

/** All input for the `updateJournal` mutation. */
export type UpdateJournalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Journal` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Journal` being updated. */
  journalPatch: JournalPatch;
};

/** Represents an update to a `Journal`. Fields that are set will be updated. */
export type JournalPatch = {
  id?: Maybe<Scalars['UUID']>;
  title?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  toolbox?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  userId?: Maybe<Scalars['UUID']>;
};

/** All input for the `updateJournalById` mutation. */
export type UpdateJournalByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Journal` being updated. */
  journalPatch: JournalPatch;
  id: Scalars['UUID'];
};

/** The output of our update `Like` mutation. */
export type UpdateLikePayload = {
  __typename?: 'UpdateLikePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Like` that was updated by this mutation. */
  like?: Maybe<Like>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Like`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Comment` that is related to this `Like`. */
  commentByCommentId?: Maybe<Comment>;
  /** An edge for our `Like`. May be used by Relay 1. */
  likeEdge?: Maybe<LikesEdge>;
};


/** The output of our update `Like` mutation. */
export type UpdateLikePayloadLikeEdgeArgs = {
  orderBy?: Maybe<Array<LikesOrderBy>>;
};

/** All input for the `updateLike` mutation. */
export type UpdateLikeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Like` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Like` being updated. */
  likePatch: LikePatch;
};

/** Represents an update to a `Like`. Fields that are set will be updated. */
export type LikePatch = {
  likeId?: Maybe<Scalars['UUID']>;
  isLiked?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['UUID']>;
  commentId?: Maybe<Scalars['UUID']>;
};

/** All input for the `updateLikeByLikeId` mutation. */
export type UpdateLikeByLikeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Like` being updated. */
  likePatch: LikePatch;
  likeId: Scalars['UUID'];
};

/** The output of our update `Tool` mutation. */
export type UpdateToolPayload = {
  __typename?: 'UpdateToolPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tool` that was updated by this mutation. */
  tool?: Maybe<Tool>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Tool`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Journal` that is related to this `Tool`. */
  journalByJournalId?: Maybe<Journal>;
  /** An edge for our `Tool`. May be used by Relay 1. */
  toolEdge?: Maybe<ToolsEdge>;
};


/** The output of our update `Tool` mutation. */
export type UpdateToolPayloadToolEdgeArgs = {
  orderBy?: Maybe<Array<ToolsOrderBy>>;
};

/** All input for the `updateTool` mutation. */
export type UpdateToolInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Tool` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Tool` being updated. */
  toolPatch: ToolPatch;
};

/** Represents an update to a `Tool`. Fields that are set will be updated. */
export type ToolPatch = {
  id?: Maybe<Scalars['UUID']>;
  content?: Maybe<Scalars['JSON']>;
  likes?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  userId?: Maybe<Scalars['UUID']>;
  journalId?: Maybe<Scalars['UUID']>;
};

/** All input for the `updateToolById` mutation. */
export type UpdateToolByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Tool` being updated. */
  toolPatch: ToolPatch;
  id: Scalars['UUID'];
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  userId?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  accountVerified?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** All input for the `updateUserByUserId` mutation. */
export type UpdateUserByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
  userId: Scalars['UUID'];
};

/** All input for the `updateUserByUsername` mutation. */
export type UpdateUserByUsernameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
  username: Scalars['String'];
};

/** The output of our update `UserFollower` mutation. */
export type UpdateUserFollowerPayload = {
  __typename?: 'UpdateUserFollowerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `UserFollower` that was updated by this mutation. */
  userFollower?: Maybe<UserFollower>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserFollower`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `User` that is related to this `UserFollower`. */
  userByFollowerId?: Maybe<User>;
  /** An edge for our `UserFollower`. May be used by Relay 1. */
  userFollowerEdge?: Maybe<UserFollowersEdge>;
};


/** The output of our update `UserFollower` mutation. */
export type UpdateUserFollowerPayloadUserFollowerEdgeArgs = {
  orderBy?: Maybe<Array<UserFollowersOrderBy>>;
};

/** All input for the `updateUserFollower` mutation. */
export type UpdateUserFollowerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `UserFollower` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `UserFollower` being updated. */
  userFollowerPatch: UserFollowerPatch;
};

/** Represents an update to a `UserFollower`. Fields that are set will be updated. */
export type UserFollowerPatch = {
  userId?: Maybe<Scalars['UUID']>;
  followerId?: Maybe<Scalars['UUID']>;
};

/** All input for the `updateUserFollowerByUserIdAndFollowerId` mutation. */
export type UpdateUserFollowerByUserIdAndFollowerIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `UserFollower` being updated. */
  userFollowerPatch: UserFollowerPatch;
  userId: Scalars['UUID'];
  followerId: Scalars['UUID'];
};

/** The output of our update `UserToolLike` mutation. */
export type UpdateUserToolLikePayload = {
  __typename?: 'UpdateUserToolLikePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `UserToolLike` that was updated by this mutation. */
  userToolLike?: Maybe<UserToolLike>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserToolLike`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Tool` that is related to this `UserToolLike`. */
  toolByToolId?: Maybe<Tool>;
  /** An edge for our `UserToolLike`. May be used by Relay 1. */
  userToolLikeEdge?: Maybe<UserToolLikesEdge>;
};


/** The output of our update `UserToolLike` mutation. */
export type UpdateUserToolLikePayloadUserToolLikeEdgeArgs = {
  orderBy?: Maybe<Array<UserToolLikesOrderBy>>;
};

/** All input for the `updateUserToolLike` mutation. */
export type UpdateUserToolLikeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `UserToolLike` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `UserToolLike` being updated. */
  userToolLikePatch: UserToolLikePatch;
};

/** Represents an update to a `UserToolLike`. Fields that are set will be updated. */
export type UserToolLikePatch = {
  isLiked?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['UUID']>;
  toolId?: Maybe<Scalars['UUID']>;
};

/** All input for the `updateUserToolLikeByUserIdAndToolId` mutation. */
export type UpdateUserToolLikeByUserIdAndToolIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `UserToolLike` being updated. */
  userToolLikePatch: UserToolLikePatch;
  userId: Scalars['UUID'];
  toolId: Scalars['UUID'];
};

/** The output of our delete `CaseComment` mutation. */
export type DeleteCaseCommentPayload = {
  __typename?: 'DeleteCaseCommentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CaseComment` that was deleted by this mutation. */
  caseComment?: Maybe<CaseComment>;
  deletedCaseCommentId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `CaseComment`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Tool` that is related to this `CaseComment`. */
  toolByToolId?: Maybe<Tool>;
  /** Reads a single `CaseComment` that is related to this `CaseComment`. */
  caseCommentByParentCommentId?: Maybe<CaseComment>;
  /** An edge for our `CaseComment`. May be used by Relay 1. */
  caseCommentEdge?: Maybe<CaseCommentsEdge>;
};


/** The output of our delete `CaseComment` mutation. */
export type DeleteCaseCommentPayloadCaseCommentEdgeArgs = {
  orderBy?: Maybe<Array<CaseCommentsOrderBy>>;
};

/** All input for the `deleteCaseComment` mutation. */
export type DeleteCaseCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `CaseComment` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteCaseCommentById` mutation. */
export type DeleteCaseCommentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `CaseLike` mutation. */
export type DeleteCaseLikePayload = {
  __typename?: 'DeleteCaseLikePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CaseLike` that was deleted by this mutation. */
  caseLike?: Maybe<CaseLike>;
  deletedCaseLikeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `CaseLike`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `CaseComment` that is related to this `CaseLike`. */
  caseCommentByCaseCommentId?: Maybe<CaseComment>;
  /** An edge for our `CaseLike`. May be used by Relay 1. */
  caseLikeEdge?: Maybe<CaseLikesEdge>;
};


/** The output of our delete `CaseLike` mutation. */
export type DeleteCaseLikePayloadCaseLikeEdgeArgs = {
  orderBy?: Maybe<Array<CaseLikesOrderBy>>;
};

/** All input for the `deleteCaseLike` mutation. */
export type DeleteCaseLikeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `CaseLike` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteCaseLikeByLikeId` mutation. */
export type DeleteCaseLikeByLikeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  likeId: Scalars['UUID'];
};

/** The output of our delete `Comment` mutation. */
export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Comment` that was deleted by this mutation. */
  comment?: Maybe<Comment>;
  deletedCommentId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Comment`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Journal` that is related to this `Comment`. */
  journalByJournalId?: Maybe<Journal>;
  /** Reads a single `Comment` that is related to this `Comment`. */
  commentByParentCommentId?: Maybe<Comment>;
  /** An edge for our `Comment`. May be used by Relay 1. */
  commentEdge?: Maybe<CommentsEdge>;
};


/** The output of our delete `Comment` mutation. */
export type DeleteCommentPayloadCommentEdgeArgs = {
  orderBy?: Maybe<Array<CommentsOrderBy>>;
};

/** All input for the `deleteComment` mutation. */
export type DeleteCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Comment` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteCommentByCommentId` mutation. */
export type DeleteCommentByCommentIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  commentId: Scalars['UUID'];
};

/** The output of our delete `Journal` mutation. */
export type DeleteJournalPayload = {
  __typename?: 'DeleteJournalPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Journal` that was deleted by this mutation. */
  journal?: Maybe<Journal>;
  deletedJournalId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Journal`. */
  userByUserId?: Maybe<User>;
  /** An edge for our `Journal`. May be used by Relay 1. */
  journalEdge?: Maybe<JournalsEdge>;
};


/** The output of our delete `Journal` mutation. */
export type DeleteJournalPayloadJournalEdgeArgs = {
  orderBy?: Maybe<Array<JournalsOrderBy>>;
};

/** All input for the `deleteJournal` mutation. */
export type DeleteJournalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Journal` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteJournalById` mutation. */
export type DeleteJournalByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `Like` mutation. */
export type DeleteLikePayload = {
  __typename?: 'DeleteLikePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Like` that was deleted by this mutation. */
  like?: Maybe<Like>;
  deletedLikeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Like`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Comment` that is related to this `Like`. */
  commentByCommentId?: Maybe<Comment>;
  /** An edge for our `Like`. May be used by Relay 1. */
  likeEdge?: Maybe<LikesEdge>;
};


/** The output of our delete `Like` mutation. */
export type DeleteLikePayloadLikeEdgeArgs = {
  orderBy?: Maybe<Array<LikesOrderBy>>;
};

/** All input for the `deleteLike` mutation. */
export type DeleteLikeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Like` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteLikeByLikeId` mutation. */
export type DeleteLikeByLikeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  likeId: Scalars['UUID'];
};

/** The output of our delete `Tool` mutation. */
export type DeleteToolPayload = {
  __typename?: 'DeleteToolPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tool` that was deleted by this mutation. */
  tool?: Maybe<Tool>;
  deletedToolId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Tool`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Journal` that is related to this `Tool`. */
  journalByJournalId?: Maybe<Journal>;
  /** An edge for our `Tool`. May be used by Relay 1. */
  toolEdge?: Maybe<ToolsEdge>;
};


/** The output of our delete `Tool` mutation. */
export type DeleteToolPayloadToolEdgeArgs = {
  orderBy?: Maybe<Array<ToolsOrderBy>>;
};

/** All input for the `deleteTool` mutation. */
export type DeleteToolInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Tool` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteToolById` mutation. */
export type DeleteToolByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  deletedUserId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>;
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteUserByUserId` mutation. */
export type DeleteUserByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  userId: Scalars['UUID'];
};

/** All input for the `deleteUserByUsername` mutation. */
export type DeleteUserByUsernameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

/** The output of our delete `UserFollower` mutation. */
export type DeleteUserFollowerPayload = {
  __typename?: 'DeleteUserFollowerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `UserFollower` that was deleted by this mutation. */
  userFollower?: Maybe<UserFollower>;
  deletedUserFollowerId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserFollower`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `User` that is related to this `UserFollower`. */
  userByFollowerId?: Maybe<User>;
  /** An edge for our `UserFollower`. May be used by Relay 1. */
  userFollowerEdge?: Maybe<UserFollowersEdge>;
};


/** The output of our delete `UserFollower` mutation. */
export type DeleteUserFollowerPayloadUserFollowerEdgeArgs = {
  orderBy?: Maybe<Array<UserFollowersOrderBy>>;
};

/** All input for the `deleteUserFollower` mutation. */
export type DeleteUserFollowerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `UserFollower` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteUserFollowerByUserIdAndFollowerId` mutation. */
export type DeleteUserFollowerByUserIdAndFollowerIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  userId: Scalars['UUID'];
  followerId: Scalars['UUID'];
};

/** The output of our delete `UserToolLike` mutation. */
export type DeleteUserToolLikePayload = {
  __typename?: 'DeleteUserToolLikePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `UserToolLike` that was deleted by this mutation. */
  userToolLike?: Maybe<UserToolLike>;
  deletedUserToolLikeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserToolLike`. */
  userByUserId?: Maybe<User>;
  /** Reads a single `Tool` that is related to this `UserToolLike`. */
  toolByToolId?: Maybe<Tool>;
  /** An edge for our `UserToolLike`. May be used by Relay 1. */
  userToolLikeEdge?: Maybe<UserToolLikesEdge>;
};


/** The output of our delete `UserToolLike` mutation. */
export type DeleteUserToolLikePayloadUserToolLikeEdgeArgs = {
  orderBy?: Maybe<Array<UserToolLikesOrderBy>>;
};

/** All input for the `deleteUserToolLike` mutation. */
export type DeleteUserToolLikeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `UserToolLike` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteUserToolLikeByUserIdAndToolId` mutation. */
export type DeleteUserToolLikeByUserIdAndToolIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  userId: Scalars['UUID'];
  toolId: Scalars['UUID'];
};

/** The output of our `authenticate` mutation. */
export type AuthenticatePayload = {
  __typename?: 'AuthenticatePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  jwtToken?: Maybe<Scalars['JwtToken']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** All input for the `authenticate` mutation. */
export type AuthenticateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};

/** The output of our `authenticateAdmin` mutation. */
export type AuthenticateAdminPayload = {
  __typename?: 'AuthenticateAdminPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  jwtToken?: Maybe<Scalars['JwtToken']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `authenticateAdmin` mutation. */
export type AuthenticateAdminInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};

/** The output of our `registerAdmin` mutation. */
export type RegisterAdminPayload = {
  __typename?: 'RegisterAdminPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our `registerAdmin` mutation. */
export type RegisterAdminPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>;
};

/** All input for the `registerAdmin` mutation. */
export type RegisterAdminInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

/** The output of our `registerUser` mutation. */
export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our `registerUser` mutation. */
export type RegisterUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>;
};

/** All input for the `registerUser` mutation. */
export type RegisterUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AuthenticateMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthenticateMutation = (
  { __typename?: 'Mutation' }
  & { authenticate?: Maybe<(
    { __typename?: 'AuthenticatePayload' }
    & Pick<AuthenticatePayload, 'clientMutationId' | 'jwtToken'>
  )> }
);

export type AuthenticateAdminMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthenticateAdminMutation = (
  { __typename?: 'Mutation' }
  & { authenticateAdmin?: Maybe<(
    { __typename?: 'AuthenticateAdminPayload' }
    & Pick<AuthenticateAdminPayload, 'clientMutationId' | 'jwtToken'>
  )> }
);

export type CreateCaseCommentMutationVariables = Exact<{
  comment: Scalars['String'];
  userId: Scalars['UUID'];
  toolId: Scalars['UUID'];
  parentCommentId?: Maybe<Scalars['UUID']>;
}>;


export type CreateCaseCommentMutation = (
  { __typename?: 'Mutation' }
  & { createCaseComment?: Maybe<(
    { __typename?: 'CreateCaseCommentPayload' }
    & { caseComment?: Maybe<(
      { __typename?: 'CaseComment' }
      & Pick<CaseComment, 'comment'>
    )> }
  )> }
);

export type CreateCaseLikeMutationVariables = Exact<{
  userId: Scalars['UUID'];
  caseCommentId: Scalars['UUID'];
  isLiked: Scalars['Boolean'];
}>;


export type CreateCaseLikeMutation = (
  { __typename?: 'Mutation' }
  & { createCaseLike?: Maybe<(
    { __typename?: 'CreateCaseLikePayload' }
    & { caseLike?: Maybe<(
      { __typename?: 'CaseLike' }
      & Pick<CaseLike, 'isLiked'>
    )> }
  )> }
);

export type CreateCommentMutationVariables = Exact<{
  comment: Scalars['String'];
  userId: Scalars['UUID'];
  journalId: Scalars['UUID'];
  parentCommentId?: Maybe<Scalars['UUID']>;
}>;


export type CreateCommentMutation = (
  { __typename?: 'Mutation' }
  & { createComment?: Maybe<(
    { __typename?: 'CreateCommentPayload' }
    & { comment?: Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'comment'>
    )> }
  )> }
);

export type CreateJournalMutationVariables = Exact<{
  userId: Scalars['UUID'];
  title: Scalars['String'];
  color?: Maybe<Scalars['String']>;
}>;


export type CreateJournalMutation = (
  { __typename?: 'Mutation' }
  & { createJournal?: Maybe<(
    { __typename?: 'CreateJournalPayload' }
    & Pick<CreateJournalPayload, 'clientMutationId'>
  )> }
);

export type CreateLikeMutationVariables = Exact<{
  userId: Scalars['UUID'];
  commentId: Scalars['UUID'];
  isLiked: Scalars['Boolean'];
}>;


export type CreateLikeMutation = (
  { __typename?: 'Mutation' }
  & { createLike?: Maybe<(
    { __typename?: 'CreateLikePayload' }
    & { like?: Maybe<(
      { __typename?: 'Like' }
      & Pick<Like, 'isLiked'>
    )> }
  )> }
);

export type CreateToolMutationVariables = Exact<{
  id: Scalars['UUID'];
  journalId: Scalars['UUID'];
  userId: Scalars['UUID'];
  content?: Maybe<Scalars['JSON']>;
}>;


export type CreateToolMutation = (
  { __typename?: 'Mutation' }
  & { createTool?: Maybe<(
    { __typename?: 'CreateToolPayload' }
    & Pick<CreateToolPayload, 'clientMutationId'>
  )> }
);

export type CreateUserToolLikeMutationVariables = Exact<{
  userId: Scalars['UUID'];
  toolId: Scalars['UUID'];
  isLiked: Scalars['Boolean'];
}>;


export type CreateUserToolLikeMutation = (
  { __typename?: 'Mutation' }
  & { createUserToolLike?: Maybe<(
    { __typename?: 'CreateUserToolLikePayload' }
    & { userToolLike?: Maybe<(
      { __typename?: 'UserToolLike' }
      & Pick<UserToolLike, 'isLiked'>
    )> }
  )> }
);

export type DeleteJournalByJournalIdMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type DeleteJournalByJournalIdMutation = (
  { __typename?: 'Mutation' }
  & { deleteJournalById?: Maybe<(
    { __typename?: 'DeleteJournalPayload' }
    & Pick<DeleteJournalPayload, 'clientMutationId'>
  )> }
);

export type DeleteToolByToolIdMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type DeleteToolByToolIdMutation = (
  { __typename?: 'Mutation' }
  & { deleteToolById?: Maybe<(
    { __typename?: 'DeleteToolPayload' }
    & Pick<DeleteToolPayload, 'clientMutationId'>
  )> }
);

export type DeleteUserByUserIdMutationVariables = Exact<{
  userId: Scalars['UUID'];
}>;


export type DeleteUserByUserIdMutation = (
  { __typename?: 'Mutation' }
  & { deleteUserByUserId?: Maybe<(
    { __typename?: 'DeleteUserPayload' }
    & Pick<DeleteUserPayload, 'clientMutationId'>
  )> }
);

export type FollowUserMutationVariables = Exact<{
  userId: Scalars['UUID'];
  followerId: Scalars['UUID'];
}>;


export type FollowUserMutation = (
  { __typename?: 'Mutation' }
  & { createUserFollower?: Maybe<(
    { __typename?: 'CreateUserFollowerPayload' }
    & Pick<CreateUserFollowerPayload, 'clientMutationId'>
  )> }
);

export type RegisterUserMutationVariables = Exact<{
  name: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterUserMutation = (
  { __typename?: 'Mutation' }
  & { registerUser?: Maybe<(
    { __typename?: 'RegisterUserPayload' }
    & Pick<RegisterUserPayload, 'clientMutationId'>
  )> }
);

export type UnfollowUserMutationVariables = Exact<{
  userId: Scalars['UUID'];
  followerId: Scalars['UUID'];
}>;


export type UnfollowUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteUserFollowerByUserIdAndFollowerId?: Maybe<(
    { __typename?: 'DeleteUserFollowerPayload' }
    & Pick<DeleteUserFollowerPayload, 'clientMutationId'>
  )> }
);

export type UpdateCaseLikesByCaseCommentIdMutationVariables = Exact<{
  id: Scalars['UUID'];
  likes: Scalars['Int'];
}>;


export type UpdateCaseLikesByCaseCommentIdMutation = (
  { __typename?: 'Mutation' }
  & { updateCaseCommentById?: Maybe<(
    { __typename?: 'UpdateCaseCommentPayload' }
    & { caseComment?: Maybe<(
      { __typename?: 'CaseComment' }
      & Pick<CaseComment, 'likes'>
    )> }
  )> }
);

export type UpdateHasLikedByCaseLikeIdMutationVariables = Exact<{
  likeId: Scalars['UUID'];
  isLiked: Scalars['Boolean'];
}>;


export type UpdateHasLikedByCaseLikeIdMutation = (
  { __typename?: 'Mutation' }
  & { updateCaseLikeByLikeId?: Maybe<(
    { __typename?: 'UpdateCaseLikePayload' }
    & { caseLike?: Maybe<(
      { __typename?: 'CaseLike' }
      & Pick<CaseLike, 'isLiked'>
    )> }
  )> }
);

export type UpdateHasLikedByLikeIdMutationVariables = Exact<{
  likeId: Scalars['UUID'];
  isLiked: Scalars['Boolean'];
}>;


export type UpdateHasLikedByLikeIdMutation = (
  { __typename?: 'Mutation' }
  & { updateLikeByLikeId?: Maybe<(
    { __typename?: 'UpdateLikePayload' }
    & { like?: Maybe<(
      { __typename?: 'Like' }
      & Pick<Like, 'isLiked'>
    )> }
  )> }
);

export type UpdateHasLikedByUserIdAndToolIdMutationVariables = Exact<{
  userId: Scalars['UUID'];
  toolId: Scalars['UUID'];
  isLiked: Scalars['Boolean'];
}>;


export type UpdateHasLikedByUserIdAndToolIdMutation = (
  { __typename?: 'Mutation' }
  & { updateUserToolLikeByUserIdAndToolId?: Maybe<(
    { __typename?: 'UpdateUserToolLikePayload' }
    & { userToolLike?: Maybe<(
      { __typename?: 'UserToolLike' }
      & Pick<UserToolLike, 'isLiked'>
    )> }
  )> }
);

export type UpdateJournalByJournalIdMutationVariables = Exact<{
  input: UpdateJournalByIdInput;
}>;


export type UpdateJournalByJournalIdMutation = (
  { __typename?: 'Mutation' }
  & { updateJournalById?: Maybe<(
    { __typename?: 'UpdateJournalPayload' }
    & Pick<UpdateJournalPayload, 'clientMutationId'>
  )> }
);

export type UpdateLikesByCommentIdMutationVariables = Exact<{
  commentId: Scalars['UUID'];
  likes: Scalars['Int'];
}>;


export type UpdateLikesByCommentIdMutation = (
  { __typename?: 'Mutation' }
  & { updateCommentByCommentId?: Maybe<(
    { __typename?: 'UpdateCommentPayload' }
    & { comment?: Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'likes'>
    )> }
  )> }
);

export type UpdateLikesByToolIdMutationVariables = Exact<{
  id: Scalars['UUID'];
  likes: Scalars['Int'];
}>;


export type UpdateLikesByToolIdMutation = (
  { __typename?: 'Mutation' }
  & { updateToolById?: Maybe<(
    { __typename?: 'UpdateToolPayload' }
    & Pick<UpdateToolPayload, 'clientMutationId'>
  )> }
);

export type UpdateUserByUserIdMutationVariables = Exact<{
  input: UpdateUserByUserIdInput;
}>;


export type UpdateUserByUserIdMutation = (
  { __typename?: 'Mutation' }
  & { updateUserByUserId?: Maybe<(
    { __typename?: 'UpdateUserPayload' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'name' | 'username' | 'biography' | 'updatedAt' | 'profilePicture' | 'coverImage'>
    )> }
  )> }
);

export type AllJournalsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllJournalsQuery = (
  { __typename?: 'Query' }
  & { allJournals?: Maybe<(
    { __typename?: 'JournalsConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Journal' }
      & Pick<Journal, 'id' | 'title' | 'color' | 'isPrivate' | 'content' | 'toolbox' | 'createdAt' | 'updatedAt' | 'userId'>
      & { userByUserId?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'name' | 'username' | 'profilePicture'>
      )> }
    )>> }
  )> }
);

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { allUsers?: Maybe<(
    { __typename?: 'UsersConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'name' | 'userId' | 'username' | 'createdAt' | 'updatedAt' | 'accountVerified'>
    )>> }
  )> }
);

export type CaseCommentByToolIdQueryVariables = Exact<{
  toolId: Scalars['UUID'];
}>;


export type CaseCommentByToolIdQuery = (
  { __typename?: 'Query' }
  & { allCaseComments?: Maybe<(
    { __typename?: 'CaseCommentsConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'CaseComment' }
      & Pick<CaseComment, 'id' | 'userId' | 'comment' | 'likes'>
    )>> }
  )> }
);

export type CaseRepliesByParentCommentIdQueryVariables = Exact<{
  parentCommentId: Scalars['UUID'];
}>;


export type CaseRepliesByParentCommentIdQuery = (
  { __typename?: 'Query' }
  & { allCaseComments?: Maybe<(
    { __typename?: 'CaseCommentsConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'CaseComment' }
      & Pick<CaseComment, 'id' | 'likes' | 'comment' | 'parentCommentId' | 'userId' | 'toolId'>
    )>> }
  )> }
);

export type CasesFeedQueryVariables = Exact<{
  cursor?: Maybe<Scalars['Cursor']>;
}>;


export type CasesFeedQuery = (
  { __typename?: 'Query' }
  & { casesFeed?: Maybe<(
    { __typename?: 'ToolsConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Tool' }
      & Pick<Tool, 'id' | 'likes' | 'createdAt' | 'content' | 'userId'>
      & { userByUserId?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'username' | 'profilePicture'>
      )>, journalByJournalId?: Maybe<(
        { __typename?: 'Journal' }
        & Pick<Journal, 'id' | 'title' | 'color'>
      )>, caseCommentsByToolId: (
        { __typename?: 'CaseCommentsConnection' }
        & Pick<CaseCommentsConnection, 'totalCount'>
        & { nodes: Array<Maybe<(
          { __typename?: 'CaseComment' }
          & Pick<CaseComment, 'comment' | 'likes'>
          & { userByUserId?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'username' | 'profilePicture'>
          )> }
        )>> }
      ) }
    )>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'endCursor' | 'hasNextPage'>
    ) }
  )> }
);

export type CommentByJournalIdQueryVariables = Exact<{
  journalId: Scalars['UUID'];
}>;


export type CommentByJournalIdQuery = (
  { __typename?: 'Query' }
  & { allComments?: Maybe<(
    { __typename?: 'CommentsConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'userId' | 'comment' | 'commentId' | 'likes'>
    )>> }
  )> }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'username' | 'profilePicture'>
  )> }
);

export type CurrentUserFollowersQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserFollowersQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & { userFollowersByUserId: (
      { __typename?: 'UserFollowersConnection' }
      & { nodes: Array<Maybe<(
        { __typename?: 'UserFollower' }
        & Pick<UserFollower, 'followerId'>
      )>> }
    ) }
  )> }
);

export type CurrentUserFollowingQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserFollowingQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId'>
    & { userFollowersByFollowerId: (
      { __typename?: 'UserFollowersConnection' }
      & { nodes: Array<Maybe<(
        { __typename?: 'UserFollower' }
        & Pick<UserFollower, 'userId'>
      )>> }
    ) }
  )> }
);

export type CurrentUserIdQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserIdQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'currentUserId'>
);

export type CurrentUserRoleQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserRoleQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'currentUserRole'>
);

export type GetUserByUserIdQueryVariables = Exact<{
  userId: Scalars['UUID'];
}>;


export type GetUserByUserIdQuery = (
  { __typename?: 'Query' }
  & { userByUserId?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'username' | 'name' | 'profilePicture'>
  )> }
);

export type HasLikedByUserIdAndCaseCommentIdQueryVariables = Exact<{
  userId: Scalars['UUID'];
  caseCommentId: Scalars['UUID'];
}>;


export type HasLikedByUserIdAndCaseCommentIdQuery = (
  { __typename?: 'Query' }
  & { allCaseLikes?: Maybe<(
    { __typename?: 'CaseLikesConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'CaseLike' }
      & Pick<CaseLike, 'isLiked' | 'likeId'>
    )>> }
  )> }
);

export type HasLikedByUserIdAndCommentIdQueryVariables = Exact<{
  userId: Scalars['UUID'];
  commentId: Scalars['UUID'];
}>;


export type HasLikedByUserIdAndCommentIdQuery = (
  { __typename?: 'Query' }
  & { allLikes?: Maybe<(
    { __typename?: 'LikesConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Like' }
      & Pick<Like, 'isLiked' | 'likeId'>
    )>> }
  )> }
);

export type HasLikedByUserIdAndToolIdQueryVariables = Exact<{
  userId: Scalars['UUID'];
  toolId: Scalars['UUID'];
}>;


export type HasLikedByUserIdAndToolIdQuery = (
  { __typename?: 'Query' }
  & { allUserToolLikes?: Maybe<(
    { __typename?: 'UserToolLikesConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'UserToolLike' }
      & Pick<UserToolLike, 'isLiked'>
    )>> }
  )> }
);

export type IsFollowingQueryVariables = Exact<{
  userId: Scalars['UUID'];
  followerId: Scalars['UUID'];
}>;


export type IsFollowingQuery = (
  { __typename?: 'Query' }
  & { userFollowerByUserIdAndFollowerId?: Maybe<(
    { __typename?: 'UserFollower' }
    & Pick<UserFollower, 'nodeId'>
  )> }
);

export type JournalByJournalIdQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type JournalByJournalIdQuery = (
  { __typename?: 'Query' }
  & { journalById?: Maybe<(
    { __typename?: 'Journal' }
    & Pick<Journal, 'title' | 'color' | 'content' | 'toolbox' | 'createdAt' | 'updatedAt'>
    & { userByUserId?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'username' | 'name' | 'profilePicture'>
    )> }
  )> }
);

export type JournalsByCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type JournalsByCurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & { journalsByUserId: (
      { __typename?: 'JournalsConnection' }
      & { nodes: Array<Maybe<(
        { __typename?: 'Journal' }
        & Pick<Journal, 'id' | 'title' | 'color' | 'isPrivate' | 'content' | 'toolbox' | 'createdAt' | 'updatedAt'>
      )>> }
    ) }
  )> }
);

export type ProfileCasesQueryVariables = Exact<{
  uId: Scalars['UUID'];
  cursor?: Maybe<Scalars['Cursor']>;
}>;


export type ProfileCasesQuery = (
  { __typename?: 'Query' }
  & { profileCases?: Maybe<(
    { __typename?: 'ToolsConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Tool' }
      & Pick<Tool, 'id' | 'likes' | 'createdAt' | 'content' | 'userId'>
      & { userByUserId?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'username' | 'profilePicture'>
      )>, journalByJournalId?: Maybe<(
        { __typename?: 'Journal' }
        & Pick<Journal, 'id' | 'title' | 'color'>
      )>, caseCommentsByToolId: (
        { __typename?: 'CaseCommentsConnection' }
        & Pick<CaseCommentsConnection, 'totalCount'>
        & { nodes: Array<Maybe<(
          { __typename?: 'CaseComment' }
          & Pick<CaseComment, 'comment' | 'likes'>
          & { userByUserId?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'username' | 'profilePicture'>
          )> }
        )>> }
      ) }
    )>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'endCursor' | 'hasNextPage'>
    ) }
  )> }
);

export type RecentJournalsByFollowingQueryVariables = Exact<{ [key: string]: never; }>;


export type RecentJournalsByFollowingQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & { userFollowersByFollowerId: (
      { __typename?: 'UserFollowersConnection' }
      & { nodes: Array<Maybe<(
        { __typename?: 'UserFollower' }
        & { userByUserId?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'name' | 'username' | 'profilePicture'>
          & { journalsByUserId: (
            { __typename?: 'JournalsConnection' }
            & { nodes: Array<Maybe<(
              { __typename?: 'Journal' }
              & Pick<Journal, 'id' | 'title' | 'color' | 'content' | 'createdAt' | 'updatedAt'>
            )>> }
          ) }
        )> }
      )>> }
    ) }
  )> }
);

export type RecentJournalsProfileQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type RecentJournalsProfileQuery = (
  { __typename?: 'Query' }
  & { userByUsername?: Maybe<(
    { __typename?: 'User' }
    & { journalsByUserId: (
      { __typename?: 'JournalsConnection' }
      & { nodes: Array<Maybe<(
        { __typename?: 'Journal' }
        & Pick<Journal, 'id' | 'title' | 'color' | 'content' | 'createdAt' | 'updatedAt'>
      )>> }
    ) }
  )> }
);

export type RepliesByParentCommentIdQueryVariables = Exact<{
  parentCommentId: Scalars['UUID'];
}>;


export type RepliesByParentCommentIdQuery = (
  { __typename?: 'Query' }
  & { allComments?: Maybe<(
    { __typename?: 'CommentsConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'likes' | 'comment' | 'commentId' | 'parentCommentId' | 'userId' | 'journalId'>
    )>> }
  )> }
);

export type SearchUserQueryVariables = Exact<{
  query?: Maybe<Scalars['String']>;
}>;


export type SearchUserQuery = (
  { __typename?: 'Query' }
  & { allUsers?: Maybe<(
    { __typename?: 'UsersConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'name' | 'username' | 'profilePicture' | 'accountVerified'>
    )>>, edges: Array<(
      { __typename?: 'UsersEdge' }
      & Pick<UsersEdge, 'cursor'>
    )>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage'>
    ) }
  )> }
);

export type ToolByToolIdQueryVariables = Exact<{
  journalId: Scalars['UUID'];
  toolId: Scalars['UUID'];
  isPrivate?: Maybe<Scalars['Boolean']>;
}>;


export type ToolByToolIdQuery = (
  { __typename?: 'Query' }
  & { allJournals?: Maybe<(
    { __typename?: 'JournalsConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Journal' }
      & Pick<Journal, 'title' | 'color' | 'isPrivate'>
      & { userByUserId?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'username' | 'profilePicture'>
      )>, toolsByJournalId: (
        { __typename?: 'ToolsConnection' }
        & { nodes: Array<Maybe<(
          { __typename?: 'Tool' }
          & Pick<Tool, 'id' | 'likes' | 'createdAt' | 'content'>
        )>> }
      ) }
    )>> }
  )> }
);

export type UserByUsernameQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type UserByUsernameQuery = (
  { __typename?: 'Query' }
  & { userByUsername?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'username' | 'name' | 'biography' | 'profilePicture' | 'coverImage'>
    & { userFollowersByFollowerId: (
      { __typename?: 'UserFollowersConnection' }
      & Pick<UserFollowersConnection, 'totalCount'>
      & { nodes: Array<Maybe<(
        { __typename?: 'UserFollower' }
        & { userByUserId?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'userId' | 'name' | 'username' | 'profilePicture'>
        )> }
      )>> }
    ), userFollowersByUserId: (
      { __typename?: 'UserFollowersConnection' }
      & Pick<UserFollowersConnection, 'totalCount'>
      & { nodes: Array<Maybe<(
        { __typename?: 'UserFollower' }
        & { userByFollowerId?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'userId' | 'name' | 'username' | 'profilePicture'>
        )> }
      )>> }
    ) }
  )> }
);

export type UserIdByJournalIdQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type UserIdByJournalIdQuery = (
  { __typename?: 'Query' }
  & { journalById?: Maybe<(
    { __typename?: 'Journal' }
    & Pick<Journal, 'userId'>
  )> }
);

export type UserIdByUsernameQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type UserIdByUsernameQuery = (
  { __typename?: 'Query' }
  & { userByUsername?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'name' | 'username' | 'profilePicture'>
  )> }
);


export const AuthenticateDocument = gql`
    mutation authenticate($email: String!, $password: String!) {
  authenticate(input: {email: $email, password: $password}) {
    clientMutationId
    jwtToken
  }
}
    `;
export type AuthenticateMutationFn = Apollo.MutationFunction<AuthenticateMutation, AuthenticateMutationVariables>;

/**
 * __useAuthenticateMutation__
 *
 * To run a mutation, you first call `useAuthenticateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateMutation, { data, loading, error }] = useAuthenticateMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthenticateMutation(baseOptions?: Apollo.MutationHookOptions<AuthenticateMutation, AuthenticateMutationVariables>) {
        return Apollo.useMutation<AuthenticateMutation, AuthenticateMutationVariables>(AuthenticateDocument, baseOptions);
      }
export type AuthenticateMutationHookResult = ReturnType<typeof useAuthenticateMutation>;
export type AuthenticateMutationResult = Apollo.MutationResult<AuthenticateMutation>;
export type AuthenticateMutationOptions = Apollo.BaseMutationOptions<AuthenticateMutation, AuthenticateMutationVariables>;
export const AuthenticateAdminDocument = gql`
    mutation authenticateAdmin($email: String!, $password: String!) {
  authenticateAdmin(input: {email: $email, password: $password}) {
    clientMutationId
    jwtToken
  }
}
    `;
export type AuthenticateAdminMutationFn = Apollo.MutationFunction<AuthenticateAdminMutation, AuthenticateAdminMutationVariables>;

/**
 * __useAuthenticateAdminMutation__
 *
 * To run a mutation, you first call `useAuthenticateAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateAdminMutation, { data, loading, error }] = useAuthenticateAdminMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthenticateAdminMutation(baseOptions?: Apollo.MutationHookOptions<AuthenticateAdminMutation, AuthenticateAdminMutationVariables>) {
        return Apollo.useMutation<AuthenticateAdminMutation, AuthenticateAdminMutationVariables>(AuthenticateAdminDocument, baseOptions);
      }
export type AuthenticateAdminMutationHookResult = ReturnType<typeof useAuthenticateAdminMutation>;
export type AuthenticateAdminMutationResult = Apollo.MutationResult<AuthenticateAdminMutation>;
export type AuthenticateAdminMutationOptions = Apollo.BaseMutationOptions<AuthenticateAdminMutation, AuthenticateAdminMutationVariables>;
export const CreateCaseCommentDocument = gql`
    mutation createCaseComment($comment: String!, $userId: UUID!, $toolId: UUID!, $parentCommentId: UUID) {
  createCaseComment(
    input: {caseComment: {comment: $comment, userId: $userId, toolId: $toolId, parentCommentId: $parentCommentId}}
  ) {
    caseComment {
      comment
    }
  }
}
    `;
export type CreateCaseCommentMutationFn = Apollo.MutationFunction<CreateCaseCommentMutation, CreateCaseCommentMutationVariables>;

/**
 * __useCreateCaseCommentMutation__
 *
 * To run a mutation, you first call `useCreateCaseCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCaseCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCaseCommentMutation, { data, loading, error }] = useCreateCaseCommentMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *      userId: // value for 'userId'
 *      toolId: // value for 'toolId'
 *      parentCommentId: // value for 'parentCommentId'
 *   },
 * });
 */
export function useCreateCaseCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCaseCommentMutation, CreateCaseCommentMutationVariables>) {
        return Apollo.useMutation<CreateCaseCommentMutation, CreateCaseCommentMutationVariables>(CreateCaseCommentDocument, baseOptions);
      }
export type CreateCaseCommentMutationHookResult = ReturnType<typeof useCreateCaseCommentMutation>;
export type CreateCaseCommentMutationResult = Apollo.MutationResult<CreateCaseCommentMutation>;
export type CreateCaseCommentMutationOptions = Apollo.BaseMutationOptions<CreateCaseCommentMutation, CreateCaseCommentMutationVariables>;
export const CreateCaseLikeDocument = gql`
    mutation createCaseLike($userId: UUID!, $caseCommentId: UUID!, $isLiked: Boolean!) {
  createCaseLike(
    input: {caseLike: {userId: $userId, caseCommentId: $caseCommentId, isLiked: $isLiked}}
  ) {
    caseLike {
      isLiked
    }
  }
}
    `;
export type CreateCaseLikeMutationFn = Apollo.MutationFunction<CreateCaseLikeMutation, CreateCaseLikeMutationVariables>;

/**
 * __useCreateCaseLikeMutation__
 *
 * To run a mutation, you first call `useCreateCaseLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCaseLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCaseLikeMutation, { data, loading, error }] = useCreateCaseLikeMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      caseCommentId: // value for 'caseCommentId'
 *      isLiked: // value for 'isLiked'
 *   },
 * });
 */
export function useCreateCaseLikeMutation(baseOptions?: Apollo.MutationHookOptions<CreateCaseLikeMutation, CreateCaseLikeMutationVariables>) {
        return Apollo.useMutation<CreateCaseLikeMutation, CreateCaseLikeMutationVariables>(CreateCaseLikeDocument, baseOptions);
      }
export type CreateCaseLikeMutationHookResult = ReturnType<typeof useCreateCaseLikeMutation>;
export type CreateCaseLikeMutationResult = Apollo.MutationResult<CreateCaseLikeMutation>;
export type CreateCaseLikeMutationOptions = Apollo.BaseMutationOptions<CreateCaseLikeMutation, CreateCaseLikeMutationVariables>;
export const CreateCommentDocument = gql`
    mutation createComment($comment: String!, $userId: UUID!, $journalId: UUID!, $parentCommentId: UUID) {
  createComment(
    input: {comment: {comment: $comment, userId: $userId, journalId: $journalId, parentCommentId: $parentCommentId}}
  ) {
    comment {
      comment
    }
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *      userId: // value for 'userId'
 *      journalId: // value for 'journalId'
 *      parentCommentId: // value for 'parentCommentId'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, baseOptions);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const CreateJournalDocument = gql`
    mutation createJournal($userId: UUID!, $title: String!, $color: String) {
  createJournal(
    input: {journal: {userId: $userId, title: $title, color: $color, content: "{\\"type\\":\\"text\\", \\"content\\":\\"\\" }"}}
  ) {
    clientMutationId
  }
}
    `;
export type CreateJournalMutationFn = Apollo.MutationFunction<CreateJournalMutation, CreateJournalMutationVariables>;

/**
 * __useCreateJournalMutation__
 *
 * To run a mutation, you first call `useCreateJournalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJournalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJournalMutation, { data, loading, error }] = useCreateJournalMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      title: // value for 'title'
 *      color: // value for 'color'
 *   },
 * });
 */
export function useCreateJournalMutation(baseOptions?: Apollo.MutationHookOptions<CreateJournalMutation, CreateJournalMutationVariables>) {
        return Apollo.useMutation<CreateJournalMutation, CreateJournalMutationVariables>(CreateJournalDocument, baseOptions);
      }
export type CreateJournalMutationHookResult = ReturnType<typeof useCreateJournalMutation>;
export type CreateJournalMutationResult = Apollo.MutationResult<CreateJournalMutation>;
export type CreateJournalMutationOptions = Apollo.BaseMutationOptions<CreateJournalMutation, CreateJournalMutationVariables>;
export const CreateLikeDocument = gql`
    mutation createLike($userId: UUID!, $commentId: UUID!, $isLiked: Boolean!) {
  createLike(
    input: {like: {userId: $userId, commentId: $commentId, isLiked: $isLiked}}
  ) {
    like {
      isLiked
    }
  }
}
    `;
export type CreateLikeMutationFn = Apollo.MutationFunction<CreateLikeMutation, CreateLikeMutationVariables>;

/**
 * __useCreateLikeMutation__
 *
 * To run a mutation, you first call `useCreateLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLikeMutation, { data, loading, error }] = useCreateLikeMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      commentId: // value for 'commentId'
 *      isLiked: // value for 'isLiked'
 *   },
 * });
 */
export function useCreateLikeMutation(baseOptions?: Apollo.MutationHookOptions<CreateLikeMutation, CreateLikeMutationVariables>) {
        return Apollo.useMutation<CreateLikeMutation, CreateLikeMutationVariables>(CreateLikeDocument, baseOptions);
      }
export type CreateLikeMutationHookResult = ReturnType<typeof useCreateLikeMutation>;
export type CreateLikeMutationResult = Apollo.MutationResult<CreateLikeMutation>;
export type CreateLikeMutationOptions = Apollo.BaseMutationOptions<CreateLikeMutation, CreateLikeMutationVariables>;
export const CreateToolDocument = gql`
    mutation createTool($id: UUID!, $journalId: UUID!, $userId: UUID!, $content: JSON) {
  createTool(
    input: {tool: {id: $id, journalId: $journalId, content: $content, userId: $userId}}
  ) {
    clientMutationId
  }
}
    `;
export type CreateToolMutationFn = Apollo.MutationFunction<CreateToolMutation, CreateToolMutationVariables>;

/**
 * __useCreateToolMutation__
 *
 * To run a mutation, you first call `useCreateToolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateToolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createToolMutation, { data, loading, error }] = useCreateToolMutation({
 *   variables: {
 *      id: // value for 'id'
 *      journalId: // value for 'journalId'
 *      userId: // value for 'userId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCreateToolMutation(baseOptions?: Apollo.MutationHookOptions<CreateToolMutation, CreateToolMutationVariables>) {
        return Apollo.useMutation<CreateToolMutation, CreateToolMutationVariables>(CreateToolDocument, baseOptions);
      }
export type CreateToolMutationHookResult = ReturnType<typeof useCreateToolMutation>;
export type CreateToolMutationResult = Apollo.MutationResult<CreateToolMutation>;
export type CreateToolMutationOptions = Apollo.BaseMutationOptions<CreateToolMutation, CreateToolMutationVariables>;
export const CreateUserToolLikeDocument = gql`
    mutation createUserToolLike($userId: UUID!, $toolId: UUID!, $isLiked: Boolean!) {
  createUserToolLike(
    input: {userToolLike: {userId: $userId, toolId: $toolId, isLiked: $isLiked}}
  ) {
    userToolLike {
      isLiked
    }
  }
}
    `;
export type CreateUserToolLikeMutationFn = Apollo.MutationFunction<CreateUserToolLikeMutation, CreateUserToolLikeMutationVariables>;

/**
 * __useCreateUserToolLikeMutation__
 *
 * To run a mutation, you first call `useCreateUserToolLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserToolLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserToolLikeMutation, { data, loading, error }] = useCreateUserToolLikeMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      toolId: // value for 'toolId'
 *      isLiked: // value for 'isLiked'
 *   },
 * });
 */
export function useCreateUserToolLikeMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserToolLikeMutation, CreateUserToolLikeMutationVariables>) {
        return Apollo.useMutation<CreateUserToolLikeMutation, CreateUserToolLikeMutationVariables>(CreateUserToolLikeDocument, baseOptions);
      }
export type CreateUserToolLikeMutationHookResult = ReturnType<typeof useCreateUserToolLikeMutation>;
export type CreateUserToolLikeMutationResult = Apollo.MutationResult<CreateUserToolLikeMutation>;
export type CreateUserToolLikeMutationOptions = Apollo.BaseMutationOptions<CreateUserToolLikeMutation, CreateUserToolLikeMutationVariables>;
export const DeleteJournalByJournalIdDocument = gql`
    mutation deleteJournalByJournalId($id: UUID!) {
  deleteJournalById(input: {id: $id}) {
    clientMutationId
  }
}
    `;
export type DeleteJournalByJournalIdMutationFn = Apollo.MutationFunction<DeleteJournalByJournalIdMutation, DeleteJournalByJournalIdMutationVariables>;

/**
 * __useDeleteJournalByJournalIdMutation__
 *
 * To run a mutation, you first call `useDeleteJournalByJournalIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteJournalByJournalIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteJournalByJournalIdMutation, { data, loading, error }] = useDeleteJournalByJournalIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteJournalByJournalIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteJournalByJournalIdMutation, DeleteJournalByJournalIdMutationVariables>) {
        return Apollo.useMutation<DeleteJournalByJournalIdMutation, DeleteJournalByJournalIdMutationVariables>(DeleteJournalByJournalIdDocument, baseOptions);
      }
export type DeleteJournalByJournalIdMutationHookResult = ReturnType<typeof useDeleteJournalByJournalIdMutation>;
export type DeleteJournalByJournalIdMutationResult = Apollo.MutationResult<DeleteJournalByJournalIdMutation>;
export type DeleteJournalByJournalIdMutationOptions = Apollo.BaseMutationOptions<DeleteJournalByJournalIdMutation, DeleteJournalByJournalIdMutationVariables>;
export const DeleteToolByToolIdDocument = gql`
    mutation deleteToolByToolId($id: UUID!) {
  deleteToolById(input: {id: $id}) {
    clientMutationId
  }
}
    `;
export type DeleteToolByToolIdMutationFn = Apollo.MutationFunction<DeleteToolByToolIdMutation, DeleteToolByToolIdMutationVariables>;

/**
 * __useDeleteToolByToolIdMutation__
 *
 * To run a mutation, you first call `useDeleteToolByToolIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteToolByToolIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteToolByToolIdMutation, { data, loading, error }] = useDeleteToolByToolIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteToolByToolIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteToolByToolIdMutation, DeleteToolByToolIdMutationVariables>) {
        return Apollo.useMutation<DeleteToolByToolIdMutation, DeleteToolByToolIdMutationVariables>(DeleteToolByToolIdDocument, baseOptions);
      }
export type DeleteToolByToolIdMutationHookResult = ReturnType<typeof useDeleteToolByToolIdMutation>;
export type DeleteToolByToolIdMutationResult = Apollo.MutationResult<DeleteToolByToolIdMutation>;
export type DeleteToolByToolIdMutationOptions = Apollo.BaseMutationOptions<DeleteToolByToolIdMutation, DeleteToolByToolIdMutationVariables>;
export const DeleteUserByUserIdDocument = gql`
    mutation deleteUserByUserId($userId: UUID!) {
  deleteUserByUserId(input: {userId: $userId}) {
    clientMutationId
  }
}
    `;
export type DeleteUserByUserIdMutationFn = Apollo.MutationFunction<DeleteUserByUserIdMutation, DeleteUserByUserIdMutationVariables>;

/**
 * __useDeleteUserByUserIdMutation__
 *
 * To run a mutation, you first call `useDeleteUserByUserIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserByUserIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserByUserIdMutation, { data, loading, error }] = useDeleteUserByUserIdMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteUserByUserIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserByUserIdMutation, DeleteUserByUserIdMutationVariables>) {
        return Apollo.useMutation<DeleteUserByUserIdMutation, DeleteUserByUserIdMutationVariables>(DeleteUserByUserIdDocument, baseOptions);
      }
export type DeleteUserByUserIdMutationHookResult = ReturnType<typeof useDeleteUserByUserIdMutation>;
export type DeleteUserByUserIdMutationResult = Apollo.MutationResult<DeleteUserByUserIdMutation>;
export type DeleteUserByUserIdMutationOptions = Apollo.BaseMutationOptions<DeleteUserByUserIdMutation, DeleteUserByUserIdMutationVariables>;
export const FollowUserDocument = gql`
    mutation followUser($userId: UUID!, $followerId: UUID!) {
  createUserFollower(
    input: {userFollower: {userId: $userId, followerId: $followerId}}
  ) {
    clientMutationId
  }
}
    `;
export type FollowUserMutationFn = Apollo.MutationFunction<FollowUserMutation, FollowUserMutationVariables>;

/**
 * __useFollowUserMutation__
 *
 * To run a mutation, you first call `useFollowUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followUserMutation, { data, loading, error }] = useFollowUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      followerId: // value for 'followerId'
 *   },
 * });
 */
export function useFollowUserMutation(baseOptions?: Apollo.MutationHookOptions<FollowUserMutation, FollowUserMutationVariables>) {
        return Apollo.useMutation<FollowUserMutation, FollowUserMutationVariables>(FollowUserDocument, baseOptions);
      }
export type FollowUserMutationHookResult = ReturnType<typeof useFollowUserMutation>;
export type FollowUserMutationResult = Apollo.MutationResult<FollowUserMutation>;
export type FollowUserMutationOptions = Apollo.BaseMutationOptions<FollowUserMutation, FollowUserMutationVariables>;
export const RegisterUserDocument = gql`
    mutation registerUser($name: String!, $username: String!, $email: String!, $password: String!) {
  registerUser(
    input: {name: $name, username: $username, email: $email, password: $password}
  ) {
    clientMutationId
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, baseOptions);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const UnfollowUserDocument = gql`
    mutation unfollowUser($userId: UUID!, $followerId: UUID!) {
  deleteUserFollowerByUserIdAndFollowerId(
    input: {userId: $userId, followerId: $followerId}
  ) {
    clientMutationId
  }
}
    `;
export type UnfollowUserMutationFn = Apollo.MutationFunction<UnfollowUserMutation, UnfollowUserMutationVariables>;

/**
 * __useUnfollowUserMutation__
 *
 * To run a mutation, you first call `useUnfollowUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnfollowUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unfollowUserMutation, { data, loading, error }] = useUnfollowUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      followerId: // value for 'followerId'
 *   },
 * });
 */
export function useUnfollowUserMutation(baseOptions?: Apollo.MutationHookOptions<UnfollowUserMutation, UnfollowUserMutationVariables>) {
        return Apollo.useMutation<UnfollowUserMutation, UnfollowUserMutationVariables>(UnfollowUserDocument, baseOptions);
      }
export type UnfollowUserMutationHookResult = ReturnType<typeof useUnfollowUserMutation>;
export type UnfollowUserMutationResult = Apollo.MutationResult<UnfollowUserMutation>;
export type UnfollowUserMutationOptions = Apollo.BaseMutationOptions<UnfollowUserMutation, UnfollowUserMutationVariables>;
export const UpdateCaseLikesByCaseCommentIdDocument = gql`
    mutation updateCaseLikesByCaseCommentId($id: UUID!, $likes: Int!) {
  updateCaseCommentById(input: {caseCommentPatch: {likes: $likes}, id: $id}) {
    caseComment {
      likes
    }
  }
}
    `;
export type UpdateCaseLikesByCaseCommentIdMutationFn = Apollo.MutationFunction<UpdateCaseLikesByCaseCommentIdMutation, UpdateCaseLikesByCaseCommentIdMutationVariables>;

/**
 * __useUpdateCaseLikesByCaseCommentIdMutation__
 *
 * To run a mutation, you first call `useUpdateCaseLikesByCaseCommentIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCaseLikesByCaseCommentIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCaseLikesByCaseCommentIdMutation, { data, loading, error }] = useUpdateCaseLikesByCaseCommentIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      likes: // value for 'likes'
 *   },
 * });
 */
export function useUpdateCaseLikesByCaseCommentIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCaseLikesByCaseCommentIdMutation, UpdateCaseLikesByCaseCommentIdMutationVariables>) {
        return Apollo.useMutation<UpdateCaseLikesByCaseCommentIdMutation, UpdateCaseLikesByCaseCommentIdMutationVariables>(UpdateCaseLikesByCaseCommentIdDocument, baseOptions);
      }
export type UpdateCaseLikesByCaseCommentIdMutationHookResult = ReturnType<typeof useUpdateCaseLikesByCaseCommentIdMutation>;
export type UpdateCaseLikesByCaseCommentIdMutationResult = Apollo.MutationResult<UpdateCaseLikesByCaseCommentIdMutation>;
export type UpdateCaseLikesByCaseCommentIdMutationOptions = Apollo.BaseMutationOptions<UpdateCaseLikesByCaseCommentIdMutation, UpdateCaseLikesByCaseCommentIdMutationVariables>;
export const UpdateHasLikedByCaseLikeIdDocument = gql`
    mutation updateHasLikedByCaseLikeId($likeId: UUID!, $isLiked: Boolean!) {
  updateCaseLikeByLikeId(
    input: {caseLikePatch: {isLiked: $isLiked}, likeId: $likeId}
  ) {
    caseLike {
      isLiked
    }
  }
}
    `;
export type UpdateHasLikedByCaseLikeIdMutationFn = Apollo.MutationFunction<UpdateHasLikedByCaseLikeIdMutation, UpdateHasLikedByCaseLikeIdMutationVariables>;

/**
 * __useUpdateHasLikedByCaseLikeIdMutation__
 *
 * To run a mutation, you first call `useUpdateHasLikedByCaseLikeIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHasLikedByCaseLikeIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHasLikedByCaseLikeIdMutation, { data, loading, error }] = useUpdateHasLikedByCaseLikeIdMutation({
 *   variables: {
 *      likeId: // value for 'likeId'
 *      isLiked: // value for 'isLiked'
 *   },
 * });
 */
export function useUpdateHasLikedByCaseLikeIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHasLikedByCaseLikeIdMutation, UpdateHasLikedByCaseLikeIdMutationVariables>) {
        return Apollo.useMutation<UpdateHasLikedByCaseLikeIdMutation, UpdateHasLikedByCaseLikeIdMutationVariables>(UpdateHasLikedByCaseLikeIdDocument, baseOptions);
      }
export type UpdateHasLikedByCaseLikeIdMutationHookResult = ReturnType<typeof useUpdateHasLikedByCaseLikeIdMutation>;
export type UpdateHasLikedByCaseLikeIdMutationResult = Apollo.MutationResult<UpdateHasLikedByCaseLikeIdMutation>;
export type UpdateHasLikedByCaseLikeIdMutationOptions = Apollo.BaseMutationOptions<UpdateHasLikedByCaseLikeIdMutation, UpdateHasLikedByCaseLikeIdMutationVariables>;
export const UpdateHasLikedByLikeIdDocument = gql`
    mutation updateHasLikedByLikeId($likeId: UUID!, $isLiked: Boolean!) {
  updateLikeByLikeId(input: {likePatch: {isLiked: $isLiked}, likeId: $likeId}) {
    like {
      isLiked
    }
  }
}
    `;
export type UpdateHasLikedByLikeIdMutationFn = Apollo.MutationFunction<UpdateHasLikedByLikeIdMutation, UpdateHasLikedByLikeIdMutationVariables>;

/**
 * __useUpdateHasLikedByLikeIdMutation__
 *
 * To run a mutation, you first call `useUpdateHasLikedByLikeIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHasLikedByLikeIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHasLikedByLikeIdMutation, { data, loading, error }] = useUpdateHasLikedByLikeIdMutation({
 *   variables: {
 *      likeId: // value for 'likeId'
 *      isLiked: // value for 'isLiked'
 *   },
 * });
 */
export function useUpdateHasLikedByLikeIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHasLikedByLikeIdMutation, UpdateHasLikedByLikeIdMutationVariables>) {
        return Apollo.useMutation<UpdateHasLikedByLikeIdMutation, UpdateHasLikedByLikeIdMutationVariables>(UpdateHasLikedByLikeIdDocument, baseOptions);
      }
export type UpdateHasLikedByLikeIdMutationHookResult = ReturnType<typeof useUpdateHasLikedByLikeIdMutation>;
export type UpdateHasLikedByLikeIdMutationResult = Apollo.MutationResult<UpdateHasLikedByLikeIdMutation>;
export type UpdateHasLikedByLikeIdMutationOptions = Apollo.BaseMutationOptions<UpdateHasLikedByLikeIdMutation, UpdateHasLikedByLikeIdMutationVariables>;
export const UpdateHasLikedByUserIdAndToolIdDocument = gql`
    mutation updateHasLikedByUserIdAndToolId($userId: UUID!, $toolId: UUID!, $isLiked: Boolean!) {
  updateUserToolLikeByUserIdAndToolId(
    input: {userToolLikePatch: {isLiked: $isLiked}, userId: $userId, toolId: $toolId}
  ) {
    userToolLike {
      isLiked
    }
  }
}
    `;
export type UpdateHasLikedByUserIdAndToolIdMutationFn = Apollo.MutationFunction<UpdateHasLikedByUserIdAndToolIdMutation, UpdateHasLikedByUserIdAndToolIdMutationVariables>;

/**
 * __useUpdateHasLikedByUserIdAndToolIdMutation__
 *
 * To run a mutation, you first call `useUpdateHasLikedByUserIdAndToolIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHasLikedByUserIdAndToolIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHasLikedByUserIdAndToolIdMutation, { data, loading, error }] = useUpdateHasLikedByUserIdAndToolIdMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      toolId: // value for 'toolId'
 *      isLiked: // value for 'isLiked'
 *   },
 * });
 */
export function useUpdateHasLikedByUserIdAndToolIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHasLikedByUserIdAndToolIdMutation, UpdateHasLikedByUserIdAndToolIdMutationVariables>) {
        return Apollo.useMutation<UpdateHasLikedByUserIdAndToolIdMutation, UpdateHasLikedByUserIdAndToolIdMutationVariables>(UpdateHasLikedByUserIdAndToolIdDocument, baseOptions);
      }
export type UpdateHasLikedByUserIdAndToolIdMutationHookResult = ReturnType<typeof useUpdateHasLikedByUserIdAndToolIdMutation>;
export type UpdateHasLikedByUserIdAndToolIdMutationResult = Apollo.MutationResult<UpdateHasLikedByUserIdAndToolIdMutation>;
export type UpdateHasLikedByUserIdAndToolIdMutationOptions = Apollo.BaseMutationOptions<UpdateHasLikedByUserIdAndToolIdMutation, UpdateHasLikedByUserIdAndToolIdMutationVariables>;
export const UpdateJournalByJournalIdDocument = gql`
    mutation updateJournalByJournalId($input: UpdateJournalByIdInput!) {
  updateJournalById(input: $input) {
    clientMutationId
  }
}
    `;
export type UpdateJournalByJournalIdMutationFn = Apollo.MutationFunction<UpdateJournalByJournalIdMutation, UpdateJournalByJournalIdMutationVariables>;

/**
 * __useUpdateJournalByJournalIdMutation__
 *
 * To run a mutation, you first call `useUpdateJournalByJournalIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJournalByJournalIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateJournalByJournalIdMutation, { data, loading, error }] = useUpdateJournalByJournalIdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateJournalByJournalIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateJournalByJournalIdMutation, UpdateJournalByJournalIdMutationVariables>) {
        return Apollo.useMutation<UpdateJournalByJournalIdMutation, UpdateJournalByJournalIdMutationVariables>(UpdateJournalByJournalIdDocument, baseOptions);
      }
export type UpdateJournalByJournalIdMutationHookResult = ReturnType<typeof useUpdateJournalByJournalIdMutation>;
export type UpdateJournalByJournalIdMutationResult = Apollo.MutationResult<UpdateJournalByJournalIdMutation>;
export type UpdateJournalByJournalIdMutationOptions = Apollo.BaseMutationOptions<UpdateJournalByJournalIdMutation, UpdateJournalByJournalIdMutationVariables>;
export const UpdateLikesByCommentIdDocument = gql`
    mutation updateLikesByCommentId($commentId: UUID!, $likes: Int!) {
  updateCommentByCommentId(
    input: {commentPatch: {likes: $likes}, commentId: $commentId}
  ) {
    comment {
      likes
    }
  }
}
    `;
export type UpdateLikesByCommentIdMutationFn = Apollo.MutationFunction<UpdateLikesByCommentIdMutation, UpdateLikesByCommentIdMutationVariables>;

/**
 * __useUpdateLikesByCommentIdMutation__
 *
 * To run a mutation, you first call `useUpdateLikesByCommentIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLikesByCommentIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLikesByCommentIdMutation, { data, loading, error }] = useUpdateLikesByCommentIdMutation({
 *   variables: {
 *      commentId: // value for 'commentId'
 *      likes: // value for 'likes'
 *   },
 * });
 */
export function useUpdateLikesByCommentIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLikesByCommentIdMutation, UpdateLikesByCommentIdMutationVariables>) {
        return Apollo.useMutation<UpdateLikesByCommentIdMutation, UpdateLikesByCommentIdMutationVariables>(UpdateLikesByCommentIdDocument, baseOptions);
      }
export type UpdateLikesByCommentIdMutationHookResult = ReturnType<typeof useUpdateLikesByCommentIdMutation>;
export type UpdateLikesByCommentIdMutationResult = Apollo.MutationResult<UpdateLikesByCommentIdMutation>;
export type UpdateLikesByCommentIdMutationOptions = Apollo.BaseMutationOptions<UpdateLikesByCommentIdMutation, UpdateLikesByCommentIdMutationVariables>;
export const UpdateLikesByToolIdDocument = gql`
    mutation updateLikesByToolId($id: UUID!, $likes: Int!) {
  updateToolById(input: {id: $id, toolPatch: {likes: $likes}}) {
    clientMutationId
  }
}
    `;
export type UpdateLikesByToolIdMutationFn = Apollo.MutationFunction<UpdateLikesByToolIdMutation, UpdateLikesByToolIdMutationVariables>;

/**
 * __useUpdateLikesByToolIdMutation__
 *
 * To run a mutation, you first call `useUpdateLikesByToolIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLikesByToolIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLikesByToolIdMutation, { data, loading, error }] = useUpdateLikesByToolIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      likes: // value for 'likes'
 *   },
 * });
 */
export function useUpdateLikesByToolIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLikesByToolIdMutation, UpdateLikesByToolIdMutationVariables>) {
        return Apollo.useMutation<UpdateLikesByToolIdMutation, UpdateLikesByToolIdMutationVariables>(UpdateLikesByToolIdDocument, baseOptions);
      }
export type UpdateLikesByToolIdMutationHookResult = ReturnType<typeof useUpdateLikesByToolIdMutation>;
export type UpdateLikesByToolIdMutationResult = Apollo.MutationResult<UpdateLikesByToolIdMutation>;
export type UpdateLikesByToolIdMutationOptions = Apollo.BaseMutationOptions<UpdateLikesByToolIdMutation, UpdateLikesByToolIdMutationVariables>;
export const UpdateUserByUserIdDocument = gql`
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
export type UpdateUserByUserIdMutationFn = Apollo.MutationFunction<UpdateUserByUserIdMutation, UpdateUserByUserIdMutationVariables>;

/**
 * __useUpdateUserByUserIdMutation__
 *
 * To run a mutation, you first call `useUpdateUserByUserIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserByUserIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserByUserIdMutation, { data, loading, error }] = useUpdateUserByUserIdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserByUserIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserByUserIdMutation, UpdateUserByUserIdMutationVariables>) {
        return Apollo.useMutation<UpdateUserByUserIdMutation, UpdateUserByUserIdMutationVariables>(UpdateUserByUserIdDocument, baseOptions);
      }
export type UpdateUserByUserIdMutationHookResult = ReturnType<typeof useUpdateUserByUserIdMutation>;
export type UpdateUserByUserIdMutationResult = Apollo.MutationResult<UpdateUserByUserIdMutation>;
export type UpdateUserByUserIdMutationOptions = Apollo.BaseMutationOptions<UpdateUserByUserIdMutation, UpdateUserByUserIdMutationVariables>;
export const AllJournalsDocument = gql`
    query allJournals {
  allJournals(orderBy: UPDATED_AT_DESC) {
    nodes {
      id
      title
      color
      isPrivate
      content
      toolbox
      createdAt
      updatedAt
      userId
      userByUserId {
        name
        username
        profilePicture
      }
    }
  }
}
    `;

/**
 * __useAllJournalsQuery__
 *
 * To run a query within a React component, call `useAllJournalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllJournalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllJournalsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllJournalsQuery(baseOptions?: Apollo.QueryHookOptions<AllJournalsQuery, AllJournalsQueryVariables>) {
        return Apollo.useQuery<AllJournalsQuery, AllJournalsQueryVariables>(AllJournalsDocument, baseOptions);
      }
export function useAllJournalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllJournalsQuery, AllJournalsQueryVariables>) {
          return Apollo.useLazyQuery<AllJournalsQuery, AllJournalsQueryVariables>(AllJournalsDocument, baseOptions);
        }
export type AllJournalsQueryHookResult = ReturnType<typeof useAllJournalsQuery>;
export type AllJournalsLazyQueryHookResult = ReturnType<typeof useAllJournalsLazyQuery>;
export type AllJournalsQueryResult = Apollo.QueryResult<AllJournalsQuery, AllJournalsQueryVariables>;
export const AllUsersDocument = gql`
    query allUsers {
  allUsers {
    nodes {
      name
      userId
      username
      createdAt
      updatedAt
      accountVerified
    }
  }
}
    `;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, baseOptions);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, baseOptions);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const CaseCommentByToolIdDocument = gql`
    query caseCommentByToolId($toolId: UUID!) {
  allCaseComments(
    orderBy: [LIKES_DESC, CREATED_AT_ASC]
    condition: {toolId: $toolId, parentCommentId: null}
  ) {
    nodes {
      id
      userId
      comment
      likes
    }
  }
}
    `;

/**
 * __useCaseCommentByToolIdQuery__
 *
 * To run a query within a React component, call `useCaseCommentByToolIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCaseCommentByToolIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCaseCommentByToolIdQuery({
 *   variables: {
 *      toolId: // value for 'toolId'
 *   },
 * });
 */
export function useCaseCommentByToolIdQuery(baseOptions: Apollo.QueryHookOptions<CaseCommentByToolIdQuery, CaseCommentByToolIdQueryVariables>) {
        return Apollo.useQuery<CaseCommentByToolIdQuery, CaseCommentByToolIdQueryVariables>(CaseCommentByToolIdDocument, baseOptions);
      }
export function useCaseCommentByToolIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CaseCommentByToolIdQuery, CaseCommentByToolIdQueryVariables>) {
          return Apollo.useLazyQuery<CaseCommentByToolIdQuery, CaseCommentByToolIdQueryVariables>(CaseCommentByToolIdDocument, baseOptions);
        }
export type CaseCommentByToolIdQueryHookResult = ReturnType<typeof useCaseCommentByToolIdQuery>;
export type CaseCommentByToolIdLazyQueryHookResult = ReturnType<typeof useCaseCommentByToolIdLazyQuery>;
export type CaseCommentByToolIdQueryResult = Apollo.QueryResult<CaseCommentByToolIdQuery, CaseCommentByToolIdQueryVariables>;
export const CaseRepliesByParentCommentIdDocument = gql`
    query caseRepliesByParentCommentId($parentCommentId: UUID!) {
  allCaseComments(condition: {parentCommentId: $parentCommentId}) {
    nodes {
      id
      likes
      comment
      parentCommentId
      userId
      toolId
    }
  }
}
    `;

/**
 * __useCaseRepliesByParentCommentIdQuery__
 *
 * To run a query within a React component, call `useCaseRepliesByParentCommentIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCaseRepliesByParentCommentIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCaseRepliesByParentCommentIdQuery({
 *   variables: {
 *      parentCommentId: // value for 'parentCommentId'
 *   },
 * });
 */
export function useCaseRepliesByParentCommentIdQuery(baseOptions: Apollo.QueryHookOptions<CaseRepliesByParentCommentIdQuery, CaseRepliesByParentCommentIdQueryVariables>) {
        return Apollo.useQuery<CaseRepliesByParentCommentIdQuery, CaseRepliesByParentCommentIdQueryVariables>(CaseRepliesByParentCommentIdDocument, baseOptions);
      }
export function useCaseRepliesByParentCommentIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CaseRepliesByParentCommentIdQuery, CaseRepliesByParentCommentIdQueryVariables>) {
          return Apollo.useLazyQuery<CaseRepliesByParentCommentIdQuery, CaseRepliesByParentCommentIdQueryVariables>(CaseRepliesByParentCommentIdDocument, baseOptions);
        }
export type CaseRepliesByParentCommentIdQueryHookResult = ReturnType<typeof useCaseRepliesByParentCommentIdQuery>;
export type CaseRepliesByParentCommentIdLazyQueryHookResult = ReturnType<typeof useCaseRepliesByParentCommentIdLazyQuery>;
export type CaseRepliesByParentCommentIdQueryResult = Apollo.QueryResult<CaseRepliesByParentCommentIdQuery, CaseRepliesByParentCommentIdQueryVariables>;
export const CasesFeedDocument = gql`
    query casesFeed($cursor: Cursor) {
  casesFeed(first: 10, after: $cursor) {
    nodes {
      id
      likes
      createdAt
      content
      userId
      userByUserId {
        username
        profilePicture
      }
      journalByJournalId {
        id
        title
        color
      }
      caseCommentsByToolId(first: 1, orderBy: [LIKES_DESC, CREATED_AT_DESC]) {
        totalCount
        nodes {
          comment
          likes
          userByUserId {
            username
            profilePicture
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    `;

/**
 * __useCasesFeedQuery__
 *
 * To run a query within a React component, call `useCasesFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCasesFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCasesFeedQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useCasesFeedQuery(baseOptions?: Apollo.QueryHookOptions<CasesFeedQuery, CasesFeedQueryVariables>) {
        return Apollo.useQuery<CasesFeedQuery, CasesFeedQueryVariables>(CasesFeedDocument, baseOptions);
      }
export function useCasesFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CasesFeedQuery, CasesFeedQueryVariables>) {
          return Apollo.useLazyQuery<CasesFeedQuery, CasesFeedQueryVariables>(CasesFeedDocument, baseOptions);
        }
export type CasesFeedQueryHookResult = ReturnType<typeof useCasesFeedQuery>;
export type CasesFeedLazyQueryHookResult = ReturnType<typeof useCasesFeedLazyQuery>;
export type CasesFeedQueryResult = Apollo.QueryResult<CasesFeedQuery, CasesFeedQueryVariables>;
export const CommentByJournalIdDocument = gql`
    query commentByJournalId($journalId: UUID!) {
  allComments(
    orderBy: [LIKES_DESC, CREATED_AT_ASC]
    condition: {journalId: $journalId, parentCommentId: null}
  ) {
    nodes {
      userId
      comment
      commentId
      likes
    }
  }
}
    `;

/**
 * __useCommentByJournalIdQuery__
 *
 * To run a query within a React component, call `useCommentByJournalIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentByJournalIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentByJournalIdQuery({
 *   variables: {
 *      journalId: // value for 'journalId'
 *   },
 * });
 */
export function useCommentByJournalIdQuery(baseOptions: Apollo.QueryHookOptions<CommentByJournalIdQuery, CommentByJournalIdQueryVariables>) {
        return Apollo.useQuery<CommentByJournalIdQuery, CommentByJournalIdQueryVariables>(CommentByJournalIdDocument, baseOptions);
      }
export function useCommentByJournalIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentByJournalIdQuery, CommentByJournalIdQueryVariables>) {
          return Apollo.useLazyQuery<CommentByJournalIdQuery, CommentByJournalIdQueryVariables>(CommentByJournalIdDocument, baseOptions);
        }
export type CommentByJournalIdQueryHookResult = ReturnType<typeof useCommentByJournalIdQuery>;
export type CommentByJournalIdLazyQueryHookResult = ReturnType<typeof useCommentByJournalIdLazyQuery>;
export type CommentByJournalIdQueryResult = Apollo.QueryResult<CommentByJournalIdQuery, CommentByJournalIdQueryVariables>;
export const CurrentUserDocument = gql`
    query currentUser {
  currentUser {
    userId
    username
    profilePicture
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const CurrentUserFollowersDocument = gql`
    query currentUserFollowers {
  currentUser {
    userFollowersByUserId {
      nodes {
        followerId
      }
    }
  }
}
    `;

/**
 * __useCurrentUserFollowersQuery__
 *
 * To run a query within a React component, call `useCurrentUserFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserFollowersQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserFollowersQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserFollowersQuery, CurrentUserFollowersQueryVariables>) {
        return Apollo.useQuery<CurrentUserFollowersQuery, CurrentUserFollowersQueryVariables>(CurrentUserFollowersDocument, baseOptions);
      }
export function useCurrentUserFollowersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserFollowersQuery, CurrentUserFollowersQueryVariables>) {
          return Apollo.useLazyQuery<CurrentUserFollowersQuery, CurrentUserFollowersQueryVariables>(CurrentUserFollowersDocument, baseOptions);
        }
export type CurrentUserFollowersQueryHookResult = ReturnType<typeof useCurrentUserFollowersQuery>;
export type CurrentUserFollowersLazyQueryHookResult = ReturnType<typeof useCurrentUserFollowersLazyQuery>;
export type CurrentUserFollowersQueryResult = Apollo.QueryResult<CurrentUserFollowersQuery, CurrentUserFollowersQueryVariables>;
export const CurrentUserFollowingDocument = gql`
    query currentUserFollowing {
  currentUser {
    userId
    userFollowersByFollowerId {
      nodes {
        userId
      }
    }
  }
}
    `;

/**
 * __useCurrentUserFollowingQuery__
 *
 * To run a query within a React component, call `useCurrentUserFollowingQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserFollowingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserFollowingQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserFollowingQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserFollowingQuery, CurrentUserFollowingQueryVariables>) {
        return Apollo.useQuery<CurrentUserFollowingQuery, CurrentUserFollowingQueryVariables>(CurrentUserFollowingDocument, baseOptions);
      }
export function useCurrentUserFollowingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserFollowingQuery, CurrentUserFollowingQueryVariables>) {
          return Apollo.useLazyQuery<CurrentUserFollowingQuery, CurrentUserFollowingQueryVariables>(CurrentUserFollowingDocument, baseOptions);
        }
export type CurrentUserFollowingQueryHookResult = ReturnType<typeof useCurrentUserFollowingQuery>;
export type CurrentUserFollowingLazyQueryHookResult = ReturnType<typeof useCurrentUserFollowingLazyQuery>;
export type CurrentUserFollowingQueryResult = Apollo.QueryResult<CurrentUserFollowingQuery, CurrentUserFollowingQueryVariables>;
export const CurrentUserIdDocument = gql`
    query currentUserId {
  currentUserId
}
    `;

/**
 * __useCurrentUserIdQuery__
 *
 * To run a query within a React component, call `useCurrentUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserIdQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserIdQuery, CurrentUserIdQueryVariables>) {
        return Apollo.useQuery<CurrentUserIdQuery, CurrentUserIdQueryVariables>(CurrentUserIdDocument, baseOptions);
      }
export function useCurrentUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserIdQuery, CurrentUserIdQueryVariables>) {
          return Apollo.useLazyQuery<CurrentUserIdQuery, CurrentUserIdQueryVariables>(CurrentUserIdDocument, baseOptions);
        }
export type CurrentUserIdQueryHookResult = ReturnType<typeof useCurrentUserIdQuery>;
export type CurrentUserIdLazyQueryHookResult = ReturnType<typeof useCurrentUserIdLazyQuery>;
export type CurrentUserIdQueryResult = Apollo.QueryResult<CurrentUserIdQuery, CurrentUserIdQueryVariables>;
export const CurrentUserRoleDocument = gql`
    query currentUserRole {
  currentUserRole
}
    `;

/**
 * __useCurrentUserRoleQuery__
 *
 * To run a query within a React component, call `useCurrentUserRoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserRoleQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserRoleQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserRoleQuery, CurrentUserRoleQueryVariables>) {
        return Apollo.useQuery<CurrentUserRoleQuery, CurrentUserRoleQueryVariables>(CurrentUserRoleDocument, baseOptions);
      }
export function useCurrentUserRoleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserRoleQuery, CurrentUserRoleQueryVariables>) {
          return Apollo.useLazyQuery<CurrentUserRoleQuery, CurrentUserRoleQueryVariables>(CurrentUserRoleDocument, baseOptions);
        }
export type CurrentUserRoleQueryHookResult = ReturnType<typeof useCurrentUserRoleQuery>;
export type CurrentUserRoleLazyQueryHookResult = ReturnType<typeof useCurrentUserRoleLazyQuery>;
export type CurrentUserRoleQueryResult = Apollo.QueryResult<CurrentUserRoleQuery, CurrentUserRoleQueryVariables>;
export const GetUserByUserIdDocument = gql`
    query getUserByUserId($userId: UUID!) {
  userByUserId(userId: $userId) {
    username
    name
    profilePicture
  }
}
    `;

/**
 * __useGetUserByUserIdQuery__
 *
 * To run a query within a React component, call `useGetUserByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByUserIdQuery, GetUserByUserIdQueryVariables>) {
        return Apollo.useQuery<GetUserByUserIdQuery, GetUserByUserIdQueryVariables>(GetUserByUserIdDocument, baseOptions);
      }
export function useGetUserByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByUserIdQuery, GetUserByUserIdQueryVariables>) {
          return Apollo.useLazyQuery<GetUserByUserIdQuery, GetUserByUserIdQueryVariables>(GetUserByUserIdDocument, baseOptions);
        }
export type GetUserByUserIdQueryHookResult = ReturnType<typeof useGetUserByUserIdQuery>;
export type GetUserByUserIdLazyQueryHookResult = ReturnType<typeof useGetUserByUserIdLazyQuery>;
export type GetUserByUserIdQueryResult = Apollo.QueryResult<GetUserByUserIdQuery, GetUserByUserIdQueryVariables>;
export const HasLikedByUserIdAndCaseCommentIdDocument = gql`
    query hasLikedByUserIdAndCaseCommentId($userId: UUID!, $caseCommentId: UUID!) {
  allCaseLikes(condition: {userId: $userId, caseCommentId: $caseCommentId}) {
    nodes {
      isLiked
      likeId
    }
  }
}
    `;

/**
 * __useHasLikedByUserIdAndCaseCommentIdQuery__
 *
 * To run a query within a React component, call `useHasLikedByUserIdAndCaseCommentIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useHasLikedByUserIdAndCaseCommentIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHasLikedByUserIdAndCaseCommentIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      caseCommentId: // value for 'caseCommentId'
 *   },
 * });
 */
export function useHasLikedByUserIdAndCaseCommentIdQuery(baseOptions: Apollo.QueryHookOptions<HasLikedByUserIdAndCaseCommentIdQuery, HasLikedByUserIdAndCaseCommentIdQueryVariables>) {
        return Apollo.useQuery<HasLikedByUserIdAndCaseCommentIdQuery, HasLikedByUserIdAndCaseCommentIdQueryVariables>(HasLikedByUserIdAndCaseCommentIdDocument, baseOptions);
      }
export function useHasLikedByUserIdAndCaseCommentIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HasLikedByUserIdAndCaseCommentIdQuery, HasLikedByUserIdAndCaseCommentIdQueryVariables>) {
          return Apollo.useLazyQuery<HasLikedByUserIdAndCaseCommentIdQuery, HasLikedByUserIdAndCaseCommentIdQueryVariables>(HasLikedByUserIdAndCaseCommentIdDocument, baseOptions);
        }
export type HasLikedByUserIdAndCaseCommentIdQueryHookResult = ReturnType<typeof useHasLikedByUserIdAndCaseCommentIdQuery>;
export type HasLikedByUserIdAndCaseCommentIdLazyQueryHookResult = ReturnType<typeof useHasLikedByUserIdAndCaseCommentIdLazyQuery>;
export type HasLikedByUserIdAndCaseCommentIdQueryResult = Apollo.QueryResult<HasLikedByUserIdAndCaseCommentIdQuery, HasLikedByUserIdAndCaseCommentIdQueryVariables>;
export const HasLikedByUserIdAndCommentIdDocument = gql`
    query hasLikedByUserIdAndCommentId($userId: UUID!, $commentId: UUID!) {
  allLikes(condition: {userId: $userId, commentId: $commentId}) {
    nodes {
      isLiked
      likeId
    }
  }
}
    `;

/**
 * __useHasLikedByUserIdAndCommentIdQuery__
 *
 * To run a query within a React component, call `useHasLikedByUserIdAndCommentIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useHasLikedByUserIdAndCommentIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHasLikedByUserIdAndCommentIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function useHasLikedByUserIdAndCommentIdQuery(baseOptions: Apollo.QueryHookOptions<HasLikedByUserIdAndCommentIdQuery, HasLikedByUserIdAndCommentIdQueryVariables>) {
        return Apollo.useQuery<HasLikedByUserIdAndCommentIdQuery, HasLikedByUserIdAndCommentIdQueryVariables>(HasLikedByUserIdAndCommentIdDocument, baseOptions);
      }
export function useHasLikedByUserIdAndCommentIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HasLikedByUserIdAndCommentIdQuery, HasLikedByUserIdAndCommentIdQueryVariables>) {
          return Apollo.useLazyQuery<HasLikedByUserIdAndCommentIdQuery, HasLikedByUserIdAndCommentIdQueryVariables>(HasLikedByUserIdAndCommentIdDocument, baseOptions);
        }
export type HasLikedByUserIdAndCommentIdQueryHookResult = ReturnType<typeof useHasLikedByUserIdAndCommentIdQuery>;
export type HasLikedByUserIdAndCommentIdLazyQueryHookResult = ReturnType<typeof useHasLikedByUserIdAndCommentIdLazyQuery>;
export type HasLikedByUserIdAndCommentIdQueryResult = Apollo.QueryResult<HasLikedByUserIdAndCommentIdQuery, HasLikedByUserIdAndCommentIdQueryVariables>;
export const HasLikedByUserIdAndToolIdDocument = gql`
    query hasLikedByUserIdAndToolId($userId: UUID!, $toolId: UUID!) {
  allUserToolLikes(condition: {userId: $userId, toolId: $toolId}) {
    nodes {
      isLiked
    }
  }
}
    `;

/**
 * __useHasLikedByUserIdAndToolIdQuery__
 *
 * To run a query within a React component, call `useHasLikedByUserIdAndToolIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useHasLikedByUserIdAndToolIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHasLikedByUserIdAndToolIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      toolId: // value for 'toolId'
 *   },
 * });
 */
export function useHasLikedByUserIdAndToolIdQuery(baseOptions: Apollo.QueryHookOptions<HasLikedByUserIdAndToolIdQuery, HasLikedByUserIdAndToolIdQueryVariables>) {
        return Apollo.useQuery<HasLikedByUserIdAndToolIdQuery, HasLikedByUserIdAndToolIdQueryVariables>(HasLikedByUserIdAndToolIdDocument, baseOptions);
      }
export function useHasLikedByUserIdAndToolIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HasLikedByUserIdAndToolIdQuery, HasLikedByUserIdAndToolIdQueryVariables>) {
          return Apollo.useLazyQuery<HasLikedByUserIdAndToolIdQuery, HasLikedByUserIdAndToolIdQueryVariables>(HasLikedByUserIdAndToolIdDocument, baseOptions);
        }
export type HasLikedByUserIdAndToolIdQueryHookResult = ReturnType<typeof useHasLikedByUserIdAndToolIdQuery>;
export type HasLikedByUserIdAndToolIdLazyQueryHookResult = ReturnType<typeof useHasLikedByUserIdAndToolIdLazyQuery>;
export type HasLikedByUserIdAndToolIdQueryResult = Apollo.QueryResult<HasLikedByUserIdAndToolIdQuery, HasLikedByUserIdAndToolIdQueryVariables>;
export const IsFollowingDocument = gql`
    query isFollowing($userId: UUID!, $followerId: UUID!) {
  userFollowerByUserIdAndFollowerId(userId: $userId, followerId: $followerId) {
    nodeId
  }
}
    `;

/**
 * __useIsFollowingQuery__
 *
 * To run a query within a React component, call `useIsFollowingQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsFollowingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsFollowingQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      followerId: // value for 'followerId'
 *   },
 * });
 */
export function useIsFollowingQuery(baseOptions: Apollo.QueryHookOptions<IsFollowingQuery, IsFollowingQueryVariables>) {
        return Apollo.useQuery<IsFollowingQuery, IsFollowingQueryVariables>(IsFollowingDocument, baseOptions);
      }
export function useIsFollowingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsFollowingQuery, IsFollowingQueryVariables>) {
          return Apollo.useLazyQuery<IsFollowingQuery, IsFollowingQueryVariables>(IsFollowingDocument, baseOptions);
        }
export type IsFollowingQueryHookResult = ReturnType<typeof useIsFollowingQuery>;
export type IsFollowingLazyQueryHookResult = ReturnType<typeof useIsFollowingLazyQuery>;
export type IsFollowingQueryResult = Apollo.QueryResult<IsFollowingQuery, IsFollowingQueryVariables>;
export const JournalByJournalIdDocument = gql`
    query journalByJournalId($id: UUID!) {
  journalById(id: $id) {
    userByUserId {
      userId
      username
      name
      profilePicture
    }
    title
    color
    content
    toolbox
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useJournalByJournalIdQuery__
 *
 * To run a query within a React component, call `useJournalByJournalIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useJournalByJournalIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJournalByJournalIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useJournalByJournalIdQuery(baseOptions: Apollo.QueryHookOptions<JournalByJournalIdQuery, JournalByJournalIdQueryVariables>) {
        return Apollo.useQuery<JournalByJournalIdQuery, JournalByJournalIdQueryVariables>(JournalByJournalIdDocument, baseOptions);
      }
export function useJournalByJournalIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JournalByJournalIdQuery, JournalByJournalIdQueryVariables>) {
          return Apollo.useLazyQuery<JournalByJournalIdQuery, JournalByJournalIdQueryVariables>(JournalByJournalIdDocument, baseOptions);
        }
export type JournalByJournalIdQueryHookResult = ReturnType<typeof useJournalByJournalIdQuery>;
export type JournalByJournalIdLazyQueryHookResult = ReturnType<typeof useJournalByJournalIdLazyQuery>;
export type JournalByJournalIdQueryResult = Apollo.QueryResult<JournalByJournalIdQuery, JournalByJournalIdQueryVariables>;
export const JournalsByCurrentUserDocument = gql`
    query journalsByCurrentUser {
  currentUser {
    journalsByUserId {
      nodes {
        id
        title
        color
        isPrivate
        content
        toolbox
        createdAt
        updatedAt
      }
    }
  }
}
    `;

/**
 * __useJournalsByCurrentUserQuery__
 *
 * To run a query within a React component, call `useJournalsByCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useJournalsByCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJournalsByCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useJournalsByCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<JournalsByCurrentUserQuery, JournalsByCurrentUserQueryVariables>) {
        return Apollo.useQuery<JournalsByCurrentUserQuery, JournalsByCurrentUserQueryVariables>(JournalsByCurrentUserDocument, baseOptions);
      }
export function useJournalsByCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JournalsByCurrentUserQuery, JournalsByCurrentUserQueryVariables>) {
          return Apollo.useLazyQuery<JournalsByCurrentUserQuery, JournalsByCurrentUserQueryVariables>(JournalsByCurrentUserDocument, baseOptions);
        }
export type JournalsByCurrentUserQueryHookResult = ReturnType<typeof useJournalsByCurrentUserQuery>;
export type JournalsByCurrentUserLazyQueryHookResult = ReturnType<typeof useJournalsByCurrentUserLazyQuery>;
export type JournalsByCurrentUserQueryResult = Apollo.QueryResult<JournalsByCurrentUserQuery, JournalsByCurrentUserQueryVariables>;
export const ProfileCasesDocument = gql`
    query profileCases($uId: UUID!, $cursor: Cursor) {
  profileCases(uId: $uId, first: 10, after: $cursor) {
    nodes {
      id
      likes
      createdAt
      content
      userId
      userByUserId {
        username
        profilePicture
      }
      journalByJournalId {
        id
        title
        color
      }
      caseCommentsByToolId(first: 1, orderBy: [LIKES_DESC, CREATED_AT_DESC]) {
        totalCount
        nodes {
          comment
          likes
          userByUserId {
            username
            profilePicture
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    `;

/**
 * __useProfileCasesQuery__
 *
 * To run a query within a React component, call `useProfileCasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileCasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileCasesQuery({
 *   variables: {
 *      uId: // value for 'uId'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useProfileCasesQuery(baseOptions: Apollo.QueryHookOptions<ProfileCasesQuery, ProfileCasesQueryVariables>) {
        return Apollo.useQuery<ProfileCasesQuery, ProfileCasesQueryVariables>(ProfileCasesDocument, baseOptions);
      }
export function useProfileCasesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileCasesQuery, ProfileCasesQueryVariables>) {
          return Apollo.useLazyQuery<ProfileCasesQuery, ProfileCasesQueryVariables>(ProfileCasesDocument, baseOptions);
        }
export type ProfileCasesQueryHookResult = ReturnType<typeof useProfileCasesQuery>;
export type ProfileCasesLazyQueryHookResult = ReturnType<typeof useProfileCasesLazyQuery>;
export type ProfileCasesQueryResult = Apollo.QueryResult<ProfileCasesQuery, ProfileCasesQueryVariables>;
export const RecentJournalsByFollowingDocument = gql`
    query recentJournalsByFollowing {
  currentUser {
    userFollowersByFollowerId {
      nodes {
        userByUserId {
          name
          username
          profilePicture
          journalsByUserId(orderBy: UPDATED_AT_DESC) {
            nodes {
              id
              title
              color
              content
              createdAt
              updatedAt
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useRecentJournalsByFollowingQuery__
 *
 * To run a query within a React component, call `useRecentJournalsByFollowingQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentJournalsByFollowingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentJournalsByFollowingQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecentJournalsByFollowingQuery(baseOptions?: Apollo.QueryHookOptions<RecentJournalsByFollowingQuery, RecentJournalsByFollowingQueryVariables>) {
        return Apollo.useQuery<RecentJournalsByFollowingQuery, RecentJournalsByFollowingQueryVariables>(RecentJournalsByFollowingDocument, baseOptions);
      }
export function useRecentJournalsByFollowingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecentJournalsByFollowingQuery, RecentJournalsByFollowingQueryVariables>) {
          return Apollo.useLazyQuery<RecentJournalsByFollowingQuery, RecentJournalsByFollowingQueryVariables>(RecentJournalsByFollowingDocument, baseOptions);
        }
export type RecentJournalsByFollowingQueryHookResult = ReturnType<typeof useRecentJournalsByFollowingQuery>;
export type RecentJournalsByFollowingLazyQueryHookResult = ReturnType<typeof useRecentJournalsByFollowingLazyQuery>;
export type RecentJournalsByFollowingQueryResult = Apollo.QueryResult<RecentJournalsByFollowingQuery, RecentJournalsByFollowingQueryVariables>;
export const RecentJournalsProfileDocument = gql`
    query recentJournalsProfile($username: String!) {
  userByUsername(username: $username) {
    journalsByUserId(orderBy: UPDATED_AT_DESC, first: 5) {
      nodes {
        id
        title
        color
        content
        createdAt
        updatedAt
      }
    }
  }
}
    `;

/**
 * __useRecentJournalsProfileQuery__
 *
 * To run a query within a React component, call `useRecentJournalsProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentJournalsProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentJournalsProfileQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useRecentJournalsProfileQuery(baseOptions: Apollo.QueryHookOptions<RecentJournalsProfileQuery, RecentJournalsProfileQueryVariables>) {
        return Apollo.useQuery<RecentJournalsProfileQuery, RecentJournalsProfileQueryVariables>(RecentJournalsProfileDocument, baseOptions);
      }
export function useRecentJournalsProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecentJournalsProfileQuery, RecentJournalsProfileQueryVariables>) {
          return Apollo.useLazyQuery<RecentJournalsProfileQuery, RecentJournalsProfileQueryVariables>(RecentJournalsProfileDocument, baseOptions);
        }
export type RecentJournalsProfileQueryHookResult = ReturnType<typeof useRecentJournalsProfileQuery>;
export type RecentJournalsProfileLazyQueryHookResult = ReturnType<typeof useRecentJournalsProfileLazyQuery>;
export type RecentJournalsProfileQueryResult = Apollo.QueryResult<RecentJournalsProfileQuery, RecentJournalsProfileQueryVariables>;
export const RepliesByParentCommentIdDocument = gql`
    query repliesByParentCommentId($parentCommentId: UUID!) {
  allComments(condition: {parentCommentId: $parentCommentId}) {
    nodes {
      likes
      comment
      commentId
      parentCommentId
      userId
      journalId
    }
  }
}
    `;

/**
 * __useRepliesByParentCommentIdQuery__
 *
 * To run a query within a React component, call `useRepliesByParentCommentIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useRepliesByParentCommentIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRepliesByParentCommentIdQuery({
 *   variables: {
 *      parentCommentId: // value for 'parentCommentId'
 *   },
 * });
 */
export function useRepliesByParentCommentIdQuery(baseOptions: Apollo.QueryHookOptions<RepliesByParentCommentIdQuery, RepliesByParentCommentIdQueryVariables>) {
        return Apollo.useQuery<RepliesByParentCommentIdQuery, RepliesByParentCommentIdQueryVariables>(RepliesByParentCommentIdDocument, baseOptions);
      }
export function useRepliesByParentCommentIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RepliesByParentCommentIdQuery, RepliesByParentCommentIdQueryVariables>) {
          return Apollo.useLazyQuery<RepliesByParentCommentIdQuery, RepliesByParentCommentIdQueryVariables>(RepliesByParentCommentIdDocument, baseOptions);
        }
export type RepliesByParentCommentIdQueryHookResult = ReturnType<typeof useRepliesByParentCommentIdQuery>;
export type RepliesByParentCommentIdLazyQueryHookResult = ReturnType<typeof useRepliesByParentCommentIdLazyQuery>;
export type RepliesByParentCommentIdQueryResult = Apollo.QueryResult<RepliesByParentCommentIdQuery, RepliesByParentCommentIdQueryVariables>;
export const SearchUserDocument = gql`
    query searchUser($query: String) {
  allUsers(
    first: 10
    filter: {or: [{username: {includesInsensitive: $query}}, {name: {includesInsensitive: $query}}]}
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

/**
 * __useSearchUserQuery__
 *
 * To run a query within a React component, call `useSearchUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchUserQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSearchUserQuery(baseOptions?: Apollo.QueryHookOptions<SearchUserQuery, SearchUserQueryVariables>) {
        return Apollo.useQuery<SearchUserQuery, SearchUserQueryVariables>(SearchUserDocument, baseOptions);
      }
export function useSearchUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchUserQuery, SearchUserQueryVariables>) {
          return Apollo.useLazyQuery<SearchUserQuery, SearchUserQueryVariables>(SearchUserDocument, baseOptions);
        }
export type SearchUserQueryHookResult = ReturnType<typeof useSearchUserQuery>;
export type SearchUserLazyQueryHookResult = ReturnType<typeof useSearchUserLazyQuery>;
export type SearchUserQueryResult = Apollo.QueryResult<SearchUserQuery, SearchUserQueryVariables>;
export const ToolByToolIdDocument = gql`
    query toolByToolId($journalId: UUID!, $toolId: UUID!, $isPrivate: Boolean) {
  allJournals(condition: {id: $journalId, isPrivate: $isPrivate}) {
    nodes {
      userByUserId {
        username
        profilePicture
      }
      title
      color
      isPrivate
      toolsByJournalId(condition: {id: $toolId}) {
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

/**
 * __useToolByToolIdQuery__
 *
 * To run a query within a React component, call `useToolByToolIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useToolByToolIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useToolByToolIdQuery({
 *   variables: {
 *      journalId: // value for 'journalId'
 *      toolId: // value for 'toolId'
 *      isPrivate: // value for 'isPrivate'
 *   },
 * });
 */
export function useToolByToolIdQuery(baseOptions: Apollo.QueryHookOptions<ToolByToolIdQuery, ToolByToolIdQueryVariables>) {
        return Apollo.useQuery<ToolByToolIdQuery, ToolByToolIdQueryVariables>(ToolByToolIdDocument, baseOptions);
      }
export function useToolByToolIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ToolByToolIdQuery, ToolByToolIdQueryVariables>) {
          return Apollo.useLazyQuery<ToolByToolIdQuery, ToolByToolIdQueryVariables>(ToolByToolIdDocument, baseOptions);
        }
export type ToolByToolIdQueryHookResult = ReturnType<typeof useToolByToolIdQuery>;
export type ToolByToolIdLazyQueryHookResult = ReturnType<typeof useToolByToolIdLazyQuery>;
export type ToolByToolIdQueryResult = Apollo.QueryResult<ToolByToolIdQuery, ToolByToolIdQueryVariables>;
export const UserByUsernameDocument = gql`
    query userByUsername($username: String!) {
  userByUsername(username: $username) {
    userId
    username
    name
    biography
    profilePicture
    coverImage
    userFollowersByFollowerId {
      totalCount
      nodes {
        userByUserId {
          userId
          name
          username
          profilePicture
        }
      }
    }
    userFollowersByUserId {
      totalCount
      nodes {
        userByFollowerId {
          userId
          name
          username
          profilePicture
        }
      }
    }
  }
}
    `;

/**
 * __useUserByUsernameQuery__
 *
 * To run a query within a React component, call `useUserByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserByUsernameQuery(baseOptions: Apollo.QueryHookOptions<UserByUsernameQuery, UserByUsernameQueryVariables>) {
        return Apollo.useQuery<UserByUsernameQuery, UserByUsernameQueryVariables>(UserByUsernameDocument, baseOptions);
      }
export function useUserByUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserByUsernameQuery, UserByUsernameQueryVariables>) {
          return Apollo.useLazyQuery<UserByUsernameQuery, UserByUsernameQueryVariables>(UserByUsernameDocument, baseOptions);
        }
export type UserByUsernameQueryHookResult = ReturnType<typeof useUserByUsernameQuery>;
export type UserByUsernameLazyQueryHookResult = ReturnType<typeof useUserByUsernameLazyQuery>;
export type UserByUsernameQueryResult = Apollo.QueryResult<UserByUsernameQuery, UserByUsernameQueryVariables>;
export const UserIdByJournalIdDocument = gql`
    query userIdByJournalId($id: UUID!) {
  journalById(id: $id) {
    userId
  }
}
    `;

/**
 * __useUserIdByJournalIdQuery__
 *
 * To run a query within a React component, call `useUserIdByJournalIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserIdByJournalIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserIdByJournalIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserIdByJournalIdQuery(baseOptions: Apollo.QueryHookOptions<UserIdByJournalIdQuery, UserIdByJournalIdQueryVariables>) {
        return Apollo.useQuery<UserIdByJournalIdQuery, UserIdByJournalIdQueryVariables>(UserIdByJournalIdDocument, baseOptions);
      }
export function useUserIdByJournalIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserIdByJournalIdQuery, UserIdByJournalIdQueryVariables>) {
          return Apollo.useLazyQuery<UserIdByJournalIdQuery, UserIdByJournalIdQueryVariables>(UserIdByJournalIdDocument, baseOptions);
        }
export type UserIdByJournalIdQueryHookResult = ReturnType<typeof useUserIdByJournalIdQuery>;
export type UserIdByJournalIdLazyQueryHookResult = ReturnType<typeof useUserIdByJournalIdLazyQuery>;
export type UserIdByJournalIdQueryResult = Apollo.QueryResult<UserIdByJournalIdQuery, UserIdByJournalIdQueryVariables>;
export const UserIdByUsernameDocument = gql`
    query userIdByUsername($username: String!) {
  userByUsername(username: $username) {
    userId
    name
    username
    profilePicture
  }
}
    `;

/**
 * __useUserIdByUsernameQuery__
 *
 * To run a query within a React component, call `useUserIdByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserIdByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserIdByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserIdByUsernameQuery(baseOptions: Apollo.QueryHookOptions<UserIdByUsernameQuery, UserIdByUsernameQueryVariables>) {
        return Apollo.useQuery<UserIdByUsernameQuery, UserIdByUsernameQueryVariables>(UserIdByUsernameDocument, baseOptions);
      }
export function useUserIdByUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserIdByUsernameQuery, UserIdByUsernameQueryVariables>) {
          return Apollo.useLazyQuery<UserIdByUsernameQuery, UserIdByUsernameQueryVariables>(UserIdByUsernameDocument, baseOptions);
        }
export type UserIdByUsernameQueryHookResult = ReturnType<typeof useUserIdByUsernameQuery>;
export type UserIdByUsernameLazyQueryHookResult = ReturnType<typeof useUserIdByUsernameLazyQuery>;
export type UserIdByUsernameQueryResult = Apollo.QueryResult<UserIdByUsernameQuery, UserIdByUsernameQueryVariables>;