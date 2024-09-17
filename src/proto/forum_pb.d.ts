import * as jspb from 'google-protobuf'



export class CreatePostRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): CreatePostRequest;

  getTitle(): string;
  setTitle(value: string): CreatePostRequest;

  getContent(): string;
  setContent(value: string): CreatePostRequest;

  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): CreatePostRequest;
  clearImagesList(): CreatePostRequest;
  addImages(value: string, index?: number): CreatePostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePostRequest): CreatePostRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePostRequest;
  static deserializeBinaryFromReader(message: CreatePostRequest, reader: jspb.BinaryReader): CreatePostRequest;
}

export namespace CreatePostRequest {
  export type AsObject = {
    userId: number,
    title: string,
    content: string,
    imagesList: Array<string>,
  }
}

export class CreatePostResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): CreatePostResponse;

  getPostId(): number;
  setPostId(value: number): CreatePostResponse;

  getMessage(): string;
  setMessage(value: string): CreatePostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePostResponse): CreatePostResponse.AsObject;
  static serializeBinaryToWriter(message: CreatePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePostResponse;
  static deserializeBinaryFromReader(message: CreatePostResponse, reader: jspb.BinaryReader): CreatePostResponse;
}

export namespace CreatePostResponse {
  export type AsObject = {
    success: boolean,
    postId: number,
    message: string,
  }
}

export class DeletePostRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): DeletePostRequest;

  getPostId(): number;
  setPostId(value: number): DeletePostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePostRequest): DeletePostRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePostRequest;
  static deserializeBinaryFromReader(message: DeletePostRequest, reader: jspb.BinaryReader): DeletePostRequest;
}

export namespace DeletePostRequest {
  export type AsObject = {
    userId: number,
    postId: number,
  }
}

export class DeletePostResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeletePostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePostResponse): DeletePostResponse.AsObject;
  static serializeBinaryToWriter(message: DeletePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePostResponse;
  static deserializeBinaryFromReader(message: DeletePostResponse, reader: jspb.BinaryReader): DeletePostResponse;
}

export namespace DeletePostResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class GetPostRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): GetPostRequest;

  getPostId(): number;
  setPostId(value: number): GetPostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostRequest): GetPostRequest.AsObject;
  static serializeBinaryToWriter(message: GetPostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostRequest;
  static deserializeBinaryFromReader(message: GetPostRequest, reader: jspb.BinaryReader): GetPostRequest;
}

export namespace GetPostRequest {
  export type AsObject = {
    userId: number,
    postId: number,
  }
}

export class GetPostResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): GetPostResponse;

  getPost(): Post | undefined;
  setPost(value?: Post): GetPostResponse;
  hasPost(): boolean;
  clearPost(): GetPostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostResponse): GetPostResponse.AsObject;
  static serializeBinaryToWriter(message: GetPostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostResponse;
  static deserializeBinaryFromReader(message: GetPostResponse, reader: jspb.BinaryReader): GetPostResponse;
}

export namespace GetPostResponse {
  export type AsObject = {
    success: boolean,
    post?: Post.AsObject,
  }
}

export class ListPostsRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): ListPostsRequest;

  getPage(): number;
  setPage(value: number): ListPostsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListPostsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPostsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPostsRequest): ListPostsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPostsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPostsRequest;
  static deserializeBinaryFromReader(message: ListPostsRequest, reader: jspb.BinaryReader): ListPostsRequest;
}

export namespace ListPostsRequest {
  export type AsObject = {
    userId: number,
    page: number,
    pageSize: number,
  }
}

export class ListPostsResponse extends jspb.Message {
  getPostsList(): Array<Post>;
  setPostsList(value: Array<Post>): ListPostsResponse;
  clearPostsList(): ListPostsResponse;
  addPosts(value?: Post, index?: number): Post;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPostsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPostsResponse): ListPostsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPostsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPostsResponse;
  static deserializeBinaryFromReader(message: ListPostsResponse, reader: jspb.BinaryReader): ListPostsResponse;
}

export namespace ListPostsResponse {
  export type AsObject = {
    postsList: Array<Post.AsObject>,
  }
}

export class CommentRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): CommentRequest;

  getPostId(): number;
  setPostId(value: number): CommentRequest;

  getContent(): string;
  setContent(value: string): CommentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CommentRequest): CommentRequest.AsObject;
  static serializeBinaryToWriter(message: CommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommentRequest;
  static deserializeBinaryFromReader(message: CommentRequest, reader: jspb.BinaryReader): CommentRequest;
}

export namespace CommentRequest {
  export type AsObject = {
    userId: number,
    postId: number,
    content: string,
  }
}

export class CommentResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): CommentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CommentResponse): CommentResponse.AsObject;
  static serializeBinaryToWriter(message: CommentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommentResponse;
  static deserializeBinaryFromReader(message: CommentResponse, reader: jspb.BinaryReader): CommentResponse;
}

export namespace CommentResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class DeleteCommentRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): DeleteCommentRequest;

  getPostId(): number;
  setPostId(value: number): DeleteCommentRequest;

  getCommentId(): number;
  setCommentId(value: number): DeleteCommentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCommentRequest): DeleteCommentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCommentRequest;
  static deserializeBinaryFromReader(message: DeleteCommentRequest, reader: jspb.BinaryReader): DeleteCommentRequest;
}

export namespace DeleteCommentRequest {
  export type AsObject = {
    userId: number,
    postId: number,
    commentId: number,
  }
}

export class DeleteCommentResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteCommentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCommentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCommentResponse): DeleteCommentResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCommentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCommentResponse;
  static deserializeBinaryFromReader(message: DeleteCommentResponse, reader: jspb.BinaryReader): DeleteCommentResponse;
}

export namespace DeleteCommentResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class LikeRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): LikeRequest;

  getPostId(): number;
  setPostId(value: number): LikeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LikeRequest): LikeRequest.AsObject;
  static serializeBinaryToWriter(message: LikeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeRequest;
  static deserializeBinaryFromReader(message: LikeRequest, reader: jspb.BinaryReader): LikeRequest;
}

export namespace LikeRequest {
  export type AsObject = {
    userId: number,
    postId: number,
  }
}

export class LikeResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): LikeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LikeResponse): LikeResponse.AsObject;
  static serializeBinaryToWriter(message: LikeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeResponse;
  static deserializeBinaryFromReader(message: LikeResponse, reader: jspb.BinaryReader): LikeResponse;
}

export namespace LikeResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class UnlikeRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): UnlikeRequest;

  getPostId(): number;
  setPostId(value: number): UnlikeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlikeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnlikeRequest): UnlikeRequest.AsObject;
  static serializeBinaryToWriter(message: UnlikeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlikeRequest;
  static deserializeBinaryFromReader(message: UnlikeRequest, reader: jspb.BinaryReader): UnlikeRequest;
}

export namespace UnlikeRequest {
  export type AsObject = {
    userId: number,
    postId: number,
  }
}

export class UnlikeResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UnlikeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlikeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnlikeResponse): UnlikeResponse.AsObject;
  static serializeBinaryToWriter(message: UnlikeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlikeResponse;
  static deserializeBinaryFromReader(message: UnlikeResponse, reader: jspb.BinaryReader): UnlikeResponse;
}

export namespace UnlikeResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class FavorateRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): FavorateRequest;

  getPostId(): number;
  setPostId(value: number): FavorateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FavorateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FavorateRequest): FavorateRequest.AsObject;
  static serializeBinaryToWriter(message: FavorateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FavorateRequest;
  static deserializeBinaryFromReader(message: FavorateRequest, reader: jspb.BinaryReader): FavorateRequest;
}

export namespace FavorateRequest {
  export type AsObject = {
    userId: number,
    postId: number,
  }
}

export class FavorateResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): FavorateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FavorateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FavorateResponse): FavorateResponse.AsObject;
  static serializeBinaryToWriter(message: FavorateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FavorateResponse;
  static deserializeBinaryFromReader(message: FavorateResponse, reader: jspb.BinaryReader): FavorateResponse;
}

export namespace FavorateResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class UnfavorateRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): UnfavorateRequest;

  getPostId(): number;
  setPostId(value: number): UnfavorateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnfavorateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnfavorateRequest): UnfavorateRequest.AsObject;
  static serializeBinaryToWriter(message: UnfavorateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnfavorateRequest;
  static deserializeBinaryFromReader(message: UnfavorateRequest, reader: jspb.BinaryReader): UnfavorateRequest;
}

export namespace UnfavorateRequest {
  export type AsObject = {
    userId: number,
    postId: number,
  }
}

export class UnfavorateResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UnfavorateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnfavorateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnfavorateResponse): UnfavorateResponse.AsObject;
  static serializeBinaryToWriter(message: UnfavorateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnfavorateResponse;
  static deserializeBinaryFromReader(message: UnfavorateResponse, reader: jspb.BinaryReader): UnfavorateResponse;
}

export namespace UnfavorateResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class Post extends jspb.Message {
  getId(): number;
  setId(value: number): Post;

  getTitle(): string;
  setTitle(value: string): Post;

  getUserId(): number;
  setUserId(value: number): Post;

  getContent(): string;
  setContent(value: string): Post;

  getLikes(): number;
  setLikes(value: number): Post;

  getFavorates(): number;
  setFavorates(value: number): Post;

  getCreatedAt(): number;
  setCreatedAt(value: number): Post;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Post;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Post;

  getCommentsList(): Array<Comment>;
  setCommentsList(value: Array<Comment>): Post;
  clearCommentsList(): Post;
  addComments(value?: Comment, index?: number): Comment;

  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): Post;
  clearImagesList(): Post;
  addImages(value: string, index?: number): Post;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Post.AsObject;
  static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
  static serializeBinaryToWriter(message: Post, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Post;
  static deserializeBinaryFromReader(message: Post, reader: jspb.BinaryReader): Post;
}

export namespace Post {
  export type AsObject = {
    id: number,
    title: string,
    userId: number,
    content: string,
    likes: number,
    favorates: number,
    createdAt: number,
    updatedAt?: number,
    commentsList: Array<Comment.AsObject>,
    imagesList: Array<string>,
  }

  export enum UpdatedAtCase { 
    _UPDATED_AT_NOT_SET = 0,
    UPDATED_AT = 10,
  }
}

export class Comment extends jspb.Message {
  getId(): number;
  setId(value: number): Comment;

  getPostId(): number;
  setPostId(value: number): Comment;

  getUserId(): number;
  setUserId(value: number): Comment;

  getContent(): string;
  setContent(value: string): Comment;

  getLikes(): number;
  setLikes(value: number): Comment;

  getCreatedAt(): number;
  setCreatedAt(value: number): Comment;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Comment;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Comment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Comment.AsObject;
  static toObject(includeInstance: boolean, msg: Comment): Comment.AsObject;
  static serializeBinaryToWriter(message: Comment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Comment;
  static deserializeBinaryFromReader(message: Comment, reader: jspb.BinaryReader): Comment;
}

export namespace Comment {
  export type AsObject = {
    id: number,
    postId: number,
    userId: number,
    content: string,
    likes: number,
    createdAt: number,
    updatedAt?: number,
  }

  export enum UpdatedAtCase { 
    _UPDATED_AT_NOT_SET = 0,
    UPDATED_AT = 7,
  }
}

export class Topic extends jspb.Message {
  getId(): number;
  setId(value: number): Topic;

  getName(): string;
  setName(value: string): Topic;

  getDescription(): string;
  setDescription(value: string): Topic;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): Topic;

  getPostNum(): number;
  setPostNum(value: number): Topic;

  getPostIdsList(): Array<number>;
  setPostIdsList(value: Array<number>): Topic;
  clearPostIdsList(): Topic;
  addPostIds(value: number, index?: number): Topic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Topic.AsObject;
  static toObject(includeInstance: boolean, msg: Topic): Topic.AsObject;
  static serializeBinaryToWriter(message: Topic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Topic;
  static deserializeBinaryFromReader(message: Topic, reader: jspb.BinaryReader): Topic;
}

export namespace Topic {
  export type AsObject = {
    id: number,
    name: string,
    description: string,
    labelsMap: Array<[string, string]>,
    postNum: number,
    postIdsList: Array<number>,
  }
}

