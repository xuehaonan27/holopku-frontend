/**
 * @fileoverview gRPC-Web generated client stub for forum
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v4.25.3
// source: forum.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as forum_pb from './forum_pb'; // proto import: "forum.proto"


export class ForumClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreatePost = new grpcWeb.MethodDescriptor(
    '/forum.Forum/CreatePost',
    grpcWeb.MethodType.UNARY,
    forum_pb.CreatePostRequest,
    forum_pb.CreatePostResponse,
    (request: forum_pb.CreatePostRequest) => {
      return request.serializeBinary();
    },
    forum_pb.CreatePostResponse.deserializeBinary
  );

  createPost(
    request: forum_pb.CreatePostRequest,
    metadata?: grpcWeb.Metadata | null): Promise<forum_pb.CreatePostResponse>;

  createPost(
    request: forum_pb.CreatePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: forum_pb.CreatePostResponse) => void): grpcWeb.ClientReadableStream<forum_pb.CreatePostResponse>;

  createPost(
    request: forum_pb.CreatePostRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: forum_pb.CreatePostResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/forum.Forum/CreatePost',
        request,
        metadata || {},
        this.methodDescriptorCreatePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/forum.Forum/CreatePost',
    request,
    metadata || {},
    this.methodDescriptorCreatePost);
  }

  methodDescriptorDeletePost = new grpcWeb.MethodDescriptor(
    '/forum.Forum/DeletePost',
    grpcWeb.MethodType.UNARY,
    forum_pb.DeletePostRequest,
    forum_pb.DeletePostResponse,
    (request: forum_pb.DeletePostRequest) => {
      return request.serializeBinary();
    },
    forum_pb.DeletePostResponse.deserializeBinary
  );

  deletePost(
    request: forum_pb.DeletePostRequest,
    metadata?: grpcWeb.Metadata | null): Promise<forum_pb.DeletePostResponse>;

  deletePost(
    request: forum_pb.DeletePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: forum_pb.DeletePostResponse) => void): grpcWeb.ClientReadableStream<forum_pb.DeletePostResponse>;

  deletePost(
    request: forum_pb.DeletePostRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: forum_pb.DeletePostResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/forum.Forum/DeletePost',
        request,
        metadata || {},
        this.methodDescriptorDeletePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/forum.Forum/DeletePost',
    request,
    metadata || {},
    this.methodDescriptorDeletePost);
  }

  methodDescriptorGetPost = new grpcWeb.MethodDescriptor(
    '/forum.Forum/GetPost',
    grpcWeb.MethodType.UNARY,
    forum_pb.GetPostRequest,
    forum_pb.GetPostResponse,
    (request: forum_pb.GetPostRequest) => {
      return request.serializeBinary();
    },
    forum_pb.GetPostResponse.deserializeBinary
  );

  getPost(
    request: forum_pb.GetPostRequest,
    metadata?: grpcWeb.Metadata | null): Promise<forum_pb.GetPostResponse>;

  getPost(
    request: forum_pb.GetPostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: forum_pb.GetPostResponse) => void): grpcWeb.ClientReadableStream<forum_pb.GetPostResponse>;

  getPost(
    request: forum_pb.GetPostRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: forum_pb.GetPostResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/forum.Forum/GetPost',
        request,
        metadata || {},
        this.methodDescriptorGetPost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/forum.Forum/GetPost',
    request,
    metadata || {},
    this.methodDescriptorGetPost);
  }

  methodDescriptorListPosts = new grpcWeb.MethodDescriptor(
    '/forum.Forum/ListPosts',
    grpcWeb.MethodType.UNARY,
    forum_pb.ListPostsRequest,
    forum_pb.ListPostsResponse,
    (request: forum_pb.ListPostsRequest) => {
      return request.serializeBinary();
    },
    forum_pb.ListPostsResponse.deserializeBinary
  );

  listPosts(
    request: forum_pb.ListPostsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<forum_pb.ListPostsResponse>;

  listPosts(
    request: forum_pb.ListPostsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: forum_pb.ListPostsResponse) => void): grpcWeb.ClientReadableStream<forum_pb.ListPostsResponse>;

  listPosts(
    request: forum_pb.ListPostsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: forum_pb.ListPostsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/forum.Forum/ListPosts',
        request,
        metadata || {},
        this.methodDescriptorListPosts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/forum.Forum/ListPosts',
    request,
    metadata || {},
    this.methodDescriptorListPosts);
  }

  methodDescriptorComment = new grpcWeb.MethodDescriptor(
    '/forum.Forum/Comment',
    grpcWeb.MethodType.UNARY,
    forum_pb.CommentRequest,
    forum_pb.CommentResponse,
    (request: forum_pb.CommentRequest) => {
      return request.serializeBinary();
    },
    forum_pb.CommentResponse.deserializeBinary
  );

  comment(
    request: forum_pb.CommentRequest,
    metadata?: grpcWeb.Metadata | null): Promise<forum_pb.CommentResponse>;

  comment(
    request: forum_pb.CommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: forum_pb.CommentResponse) => void): grpcWeb.ClientReadableStream<forum_pb.CommentResponse>;

  comment(
    request: forum_pb.CommentRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: forum_pb.CommentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/forum.Forum/Comment',
        request,
        metadata || {},
        this.methodDescriptorComment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/forum.Forum/Comment',
    request,
    metadata || {},
    this.methodDescriptorComment);
  }

  methodDescriptorDeleteComment = new grpcWeb.MethodDescriptor(
    '/forum.Forum/DeleteComment',
    grpcWeb.MethodType.UNARY,
    forum_pb.DeleteCommentRequest,
    forum_pb.DeleteCommentResponse,
    (request: forum_pb.DeleteCommentRequest) => {
      return request.serializeBinary();
    },
    forum_pb.DeleteCommentResponse.deserializeBinary
  );

  deleteComment(
    request: forum_pb.DeleteCommentRequest,
    metadata?: grpcWeb.Metadata | null): Promise<forum_pb.DeleteCommentResponse>;

  deleteComment(
    request: forum_pb.DeleteCommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: forum_pb.DeleteCommentResponse) => void): grpcWeb.ClientReadableStream<forum_pb.DeleteCommentResponse>;

  deleteComment(
    request: forum_pb.DeleteCommentRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: forum_pb.DeleteCommentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/forum.Forum/DeleteComment',
        request,
        metadata || {},
        this.methodDescriptorDeleteComment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/forum.Forum/DeleteComment',
    request,
    metadata || {},
    this.methodDescriptorDeleteComment);
  }

  methodDescriptorLike = new grpcWeb.MethodDescriptor(
    '/forum.Forum/Like',
    grpcWeb.MethodType.UNARY,
    forum_pb.LikeRequest,
    forum_pb.LikeResponse,
    (request: forum_pb.LikeRequest) => {
      return request.serializeBinary();
    },
    forum_pb.LikeResponse.deserializeBinary
  );

  like(
    request: forum_pb.LikeRequest,
    metadata?: grpcWeb.Metadata | null): Promise<forum_pb.LikeResponse>;

  like(
    request: forum_pb.LikeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: forum_pb.LikeResponse) => void): grpcWeb.ClientReadableStream<forum_pb.LikeResponse>;

  like(
    request: forum_pb.LikeRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: forum_pb.LikeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/forum.Forum/Like',
        request,
        metadata || {},
        this.methodDescriptorLike,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/forum.Forum/Like',
    request,
    metadata || {},
    this.methodDescriptorLike);
  }

  methodDescriptorUnlike = new grpcWeb.MethodDescriptor(
    '/forum.Forum/Unlike',
    grpcWeb.MethodType.UNARY,
    forum_pb.UnlikeRequest,
    forum_pb.UnlikeResponse,
    (request: forum_pb.UnlikeRequest) => {
      return request.serializeBinary();
    },
    forum_pb.UnlikeResponse.deserializeBinary
  );

  unlike(
    request: forum_pb.UnlikeRequest,
    metadata?: grpcWeb.Metadata | null): Promise<forum_pb.UnlikeResponse>;

  unlike(
    request: forum_pb.UnlikeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: forum_pb.UnlikeResponse) => void): grpcWeb.ClientReadableStream<forum_pb.UnlikeResponse>;

  unlike(
    request: forum_pb.UnlikeRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: forum_pb.UnlikeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/forum.Forum/Unlike',
        request,
        metadata || {},
        this.methodDescriptorUnlike,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/forum.Forum/Unlike',
    request,
    metadata || {},
    this.methodDescriptorUnlike);
  }

  methodDescriptorFavorate = new grpcWeb.MethodDescriptor(
    '/forum.Forum/Favorate',
    grpcWeb.MethodType.UNARY,
    forum_pb.FavorateRequest,
    forum_pb.FavorateResponse,
    (request: forum_pb.FavorateRequest) => {
      return request.serializeBinary();
    },
    forum_pb.FavorateResponse.deserializeBinary
  );

  favorate(
    request: forum_pb.FavorateRequest,
    metadata?: grpcWeb.Metadata | null): Promise<forum_pb.FavorateResponse>;

  favorate(
    request: forum_pb.FavorateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: forum_pb.FavorateResponse) => void): grpcWeb.ClientReadableStream<forum_pb.FavorateResponse>;

  favorate(
    request: forum_pb.FavorateRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: forum_pb.FavorateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/forum.Forum/Favorate',
        request,
        metadata || {},
        this.methodDescriptorFavorate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/forum.Forum/Favorate',
    request,
    metadata || {},
    this.methodDescriptorFavorate);
  }

  methodDescriptorUnfavorate = new grpcWeb.MethodDescriptor(
    '/forum.Forum/Unfavorate',
    grpcWeb.MethodType.UNARY,
    forum_pb.UnfavorateRequest,
    forum_pb.UnfavorateResponse,
    (request: forum_pb.UnfavorateRequest) => {
      return request.serializeBinary();
    },
    forum_pb.UnfavorateResponse.deserializeBinary
  );

  unfavorate(
    request: forum_pb.UnfavorateRequest,
    metadata?: grpcWeb.Metadata | null): Promise<forum_pb.UnfavorateResponse>;

  unfavorate(
    request: forum_pb.UnfavorateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: forum_pb.UnfavorateResponse) => void): grpcWeb.ClientReadableStream<forum_pb.UnfavorateResponse>;

  unfavorate(
    request: forum_pb.UnfavorateRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: forum_pb.UnfavorateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/forum.Forum/Unfavorate',
        request,
        metadata || {},
        this.methodDescriptorUnfavorate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/forum.Forum/Unfavorate',
    request,
    metadata || {},
    this.methodDescriptorUnfavorate);
  }

}

