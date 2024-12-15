import * as jspb from 'google-protobuf'



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

  getImagesList(): Array<Uint8Array | string>;
  setImagesList(value: Array<Uint8Array | string>): Post;
  clearImagesList(): Post;
  addImages(value: Uint8Array | string, index?: number): Post;

  getPostType(): PostType;
  setPostType(value: PostType): Post;

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
    imagesList: Array<Uint8Array | string>,
    postType: PostType,
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

export enum PostType { 
  FOODPOST = 0,
  SELLPOST = 1,
  AMUSEMENTPOST = 2,
}
