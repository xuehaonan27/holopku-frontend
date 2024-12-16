import * as jspb from 'google-protobuf'

import * as post_pb from './post_pb'; // proto import: "post.proto"
import * as amusementPost_pb from './amusementPost_pb'; // proto import: "amusementPost.proto"
import * as foodPost_pb from './foodPost_pb'; // proto import: "foodPost.proto"
import * as sellPost_pb from './sellPost_pb'; // proto import: "sellPost.proto"


export class CreateFoodPostRequest extends jspb.Message {
  getPost(): foodPost_pb.FoodPost | undefined;
  setPost(value?: foodPost_pb.FoodPost): CreateFoodPostRequest;
  hasPost(): boolean;
  clearPost(): CreateFoodPostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFoodPostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFoodPostRequest): CreateFoodPostRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFoodPostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFoodPostRequest;
  static deserializeBinaryFromReader(message: CreateFoodPostRequest, reader: jspb.BinaryReader): CreateFoodPostRequest;
}

export namespace CreateFoodPostRequest {
  export type AsObject = {
    post?: foodPost_pb.FoodPost.AsObject,
  }
}

export class CreateAmusementPostRequest extends jspb.Message {
  getPost(): amusementPost_pb.AmusementPost | undefined;
  setPost(value?: amusementPost_pb.AmusementPost): CreateAmusementPostRequest;
  hasPost(): boolean;
  clearPost(): CreateAmusementPostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAmusementPostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAmusementPostRequest): CreateAmusementPostRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAmusementPostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAmusementPostRequest;
  static deserializeBinaryFromReader(message: CreateAmusementPostRequest, reader: jspb.BinaryReader): CreateAmusementPostRequest;
}

export namespace CreateAmusementPostRequest {
  export type AsObject = {
    post?: amusementPost_pb.AmusementPost.AsObject,
  }
}

export class CreateSellPostRequest extends jspb.Message {
  getPost(): sellPost_pb.SellPost | undefined;
  setPost(value?: sellPost_pb.SellPost): CreateSellPostRequest;
  hasPost(): boolean;
  clearPost(): CreateSellPostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSellPostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSellPostRequest): CreateSellPostRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSellPostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSellPostRequest;
  static deserializeBinaryFromReader(message: CreateSellPostRequest, reader: jspb.BinaryReader): CreateSellPostRequest;
}

export namespace CreateSellPostRequest {
  export type AsObject = {
    post?: sellPost_pb.SellPost.AsObject,
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
    postId: number,
  }
}

export class GetFoodPostResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): GetFoodPostResponse;

  getPost(): foodPost_pb.FoodPost | undefined;
  setPost(value?: foodPost_pb.FoodPost): GetFoodPostResponse;
  hasPost(): boolean;
  clearPost(): GetFoodPostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFoodPostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFoodPostResponse): GetFoodPostResponse.AsObject;
  static serializeBinaryToWriter(message: GetFoodPostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFoodPostResponse;
  static deserializeBinaryFromReader(message: GetFoodPostResponse, reader: jspb.BinaryReader): GetFoodPostResponse;
}

export namespace GetFoodPostResponse {
  export type AsObject = {
    success: boolean,
    post?: foodPost_pb.FoodPost.AsObject,
  }
}

export class GetSellPostResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): GetSellPostResponse;

  getPost(): sellPost_pb.SellPost | undefined;
  setPost(value?: sellPost_pb.SellPost): GetSellPostResponse;
  hasPost(): boolean;
  clearPost(): GetSellPostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSellPostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSellPostResponse): GetSellPostResponse.AsObject;
  static serializeBinaryToWriter(message: GetSellPostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSellPostResponse;
  static deserializeBinaryFromReader(message: GetSellPostResponse, reader: jspb.BinaryReader): GetSellPostResponse;
}

export namespace GetSellPostResponse {
  export type AsObject = {
    success: boolean,
    post?: sellPost_pb.SellPost.AsObject,
  }
}

export class GetAmusementPostResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): GetAmusementPostResponse;

  getPost(): amusementPost_pb.AmusementPost | undefined;
  setPost(value?: amusementPost_pb.AmusementPost): GetAmusementPostResponse;
  hasPost(): boolean;
  clearPost(): GetAmusementPostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAmusementPostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAmusementPostResponse): GetAmusementPostResponse.AsObject;
  static serializeBinaryToWriter(message: GetAmusementPostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAmusementPostResponse;
  static deserializeBinaryFromReader(message: GetAmusementPostResponse, reader: jspb.BinaryReader): GetAmusementPostResponse;
}

export namespace GetAmusementPostResponse {
  export type AsObject = {
    success: boolean,
    post?: amusementPost_pb.AmusementPost.AsObject,
  }
}

export class ListPersonalPostsRequest extends jspb.Message {
  getPostType(): post_pb.PostType;
  setPostType(value: post_pb.PostType): ListPersonalPostsRequest;

  getUserId(): number;
  setUserId(value: number): ListPersonalPostsRequest;
  hasUserId(): boolean;
  clearUserId(): ListPersonalPostsRequest;

  getType(): ListRequestType;
  setType(value: ListRequestType): ListPersonalPostsRequest;

  getNumber(): number;
  setNumber(value: number): ListPersonalPostsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPersonalPostsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPersonalPostsRequest): ListPersonalPostsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPersonalPostsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPersonalPostsRequest;
  static deserializeBinaryFromReader(message: ListPersonalPostsRequest, reader: jspb.BinaryReader): ListPersonalPostsRequest;
}

export namespace ListPersonalPostsRequest {
  export type AsObject = {
    postType: post_pb.PostType,
    userId?: number,
    type: ListRequestType,
    number: number,
  }

  export enum UserIdCase { 
    _USER_ID_NOT_SET = 0,
    USER_ID = 2,
  }
}

export class ListPersonalPostsResponse extends jspb.Message {
  getFresponse(): ListFoodPostsResponse | undefined;
  setFresponse(value?: ListFoodPostsResponse): ListPersonalPostsResponse;
  hasFresponse(): boolean;
  clearFresponse(): ListPersonalPostsResponse;

  getSresponse(): ListSellPostsResponse | undefined;
  setSresponse(value?: ListSellPostsResponse): ListPersonalPostsResponse;
  hasSresponse(): boolean;
  clearSresponse(): ListPersonalPostsResponse;

  getAresponse(): ListAmusementPostsResponse | undefined;
  setAresponse(value?: ListAmusementPostsResponse): ListPersonalPostsResponse;
  hasAresponse(): boolean;
  clearAresponse(): ListPersonalPostsResponse;

  getMessageCase(): ListPersonalPostsResponse.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPersonalPostsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPersonalPostsResponse): ListPersonalPostsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPersonalPostsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPersonalPostsResponse;
  static deserializeBinaryFromReader(message: ListPersonalPostsResponse, reader: jspb.BinaryReader): ListPersonalPostsResponse;
}

export namespace ListPersonalPostsResponse {
  export type AsObject = {
    fresponse?: ListFoodPostsResponse.AsObject,
    sresponse?: ListSellPostsResponse.AsObject,
    aresponse?: ListAmusementPostsResponse.AsObject,
  }

  export enum MessageCase { 
    MESSAGE_NOT_SET = 0,
    FRESPONSE = 1,
    SRESPONSE = 2,
    ARESPONSE = 3,
  }
}

export class ListFoodPostsRequest extends jspb.Message {
  getFoodPlace(): foodPost_pb.Place;
  setFoodPlace(value: foodPost_pb.Place): ListFoodPostsRequest;
  hasFoodPlace(): boolean;
  clearFoodPlace(): ListFoodPostsRequest;

  getScoreLowbond(): number;
  setScoreLowbond(value: number): ListFoodPostsRequest;

  getRandom(): boolean;
  setRandom(value: boolean): ListFoodPostsRequest;

  getNumber(): number;
  setNumber(value: number): ListFoodPostsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFoodPostsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFoodPostsRequest): ListFoodPostsRequest.AsObject;
  static serializeBinaryToWriter(message: ListFoodPostsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFoodPostsRequest;
  static deserializeBinaryFromReader(message: ListFoodPostsRequest, reader: jspb.BinaryReader): ListFoodPostsRequest;
}

export namespace ListFoodPostsRequest {
  export type AsObject = {
    foodPlace?: foodPost_pb.Place,
    scoreLowbond: number,
    random: boolean,
    number: number,
  }

  export enum FoodPlaceCase { 
    _FOOD_PLACE_NOT_SET = 0,
    FOOD_PLACE = 1,
  }
}

export class ListSellPostsRequest extends jspb.Message {
  getGoodsType(): sellPost_pb.GoodsType;
  setGoodsType(value: sellPost_pb.GoodsType): ListSellPostsRequest;
  hasGoodsType(): boolean;
  clearGoodsType(): ListSellPostsRequest;

  getPriceUpbond(): number;
  setPriceUpbond(value: number): ListSellPostsRequest;

  getNumber(): number;
  setNumber(value: number): ListSellPostsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSellPostsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSellPostsRequest): ListSellPostsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSellPostsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSellPostsRequest;
  static deserializeBinaryFromReader(message: ListSellPostsRequest, reader: jspb.BinaryReader): ListSellPostsRequest;
}

export namespace ListSellPostsRequest {
  export type AsObject = {
    goodsType?: sellPost_pb.GoodsType,
    priceUpbond: number,
    number: number,
  }

  export enum GoodsTypeCase { 
    _GOODS_TYPE_NOT_SET = 0,
    GOODS_TYPE = 1,
  }
}

export class ListAmusementPostsRequest extends jspb.Message {
  getGameType(): amusementPost_pb.GameType;
  setGameType(value: amusementPost_pb.GameType): ListAmusementPostsRequest;
  hasGameType(): boolean;
  clearGameType(): ListAmusementPostsRequest;

  getPeopleAllLowbound(): number;
  setPeopleAllLowbound(value: number): ListAmusementPostsRequest;

  getPeopleAllUpbound(): number;
  setPeopleAllUpbound(value: number): ListAmusementPostsRequest;

  getPeopleDiffUpbound(): number;
  setPeopleDiffUpbound(value: number): ListAmusementPostsRequest;

  getTimeAbout(): number;
  setTimeAbout(value: number): ListAmusementPostsRequest;
  hasTimeAbout(): boolean;
  clearTimeAbout(): ListAmusementPostsRequest;

  getNumber(): number;
  setNumber(value: number): ListAmusementPostsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAmusementPostsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAmusementPostsRequest): ListAmusementPostsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAmusementPostsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAmusementPostsRequest;
  static deserializeBinaryFromReader(message: ListAmusementPostsRequest, reader: jspb.BinaryReader): ListAmusementPostsRequest;
}

export namespace ListAmusementPostsRequest {
  export type AsObject = {
    gameType?: amusementPost_pb.GameType,
    peopleAllLowbound: number,
    peopleAllUpbound: number,
    peopleDiffUpbound: number,
    timeAbout?: number,
    number: number,
  }

  export enum GameTypeCase { 
    _GAME_TYPE_NOT_SET = 0,
    GAME_TYPE = 1,
  }

  export enum TimeAboutCase { 
    _TIME_ABOUT_NOT_SET = 0,
    TIME_ABOUT = 5,
  }
}

export class ListFoodPostsResponse extends jspb.Message {
  getPostsList(): Array<foodPost_pb.FoodPost>;
  setPostsList(value: Array<foodPost_pb.FoodPost>): ListFoodPostsResponse;
  clearPostsList(): ListFoodPostsResponse;
  addPosts(value?: foodPost_pb.FoodPost, index?: number): foodPost_pb.FoodPost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFoodPostsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFoodPostsResponse): ListFoodPostsResponse.AsObject;
  static serializeBinaryToWriter(message: ListFoodPostsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFoodPostsResponse;
  static deserializeBinaryFromReader(message: ListFoodPostsResponse, reader: jspb.BinaryReader): ListFoodPostsResponse;
}

export namespace ListFoodPostsResponse {
  export type AsObject = {
    postsList: Array<foodPost_pb.FoodPost.AsObject>,
  }
}

export class ListSellPostsResponse extends jspb.Message {
  getPostsList(): Array<sellPost_pb.SellPost>;
  setPostsList(value: Array<sellPost_pb.SellPost>): ListSellPostsResponse;
  clearPostsList(): ListSellPostsResponse;
  addPosts(value?: sellPost_pb.SellPost, index?: number): sellPost_pb.SellPost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSellPostsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSellPostsResponse): ListSellPostsResponse.AsObject;
  static serializeBinaryToWriter(message: ListSellPostsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSellPostsResponse;
  static deserializeBinaryFromReader(message: ListSellPostsResponse, reader: jspb.BinaryReader): ListSellPostsResponse;
}

export namespace ListSellPostsResponse {
  export type AsObject = {
    postsList: Array<sellPost_pb.SellPost.AsObject>,
  }
}

export class ListAmusementPostsResponse extends jspb.Message {
  getPostsList(): Array<amusementPost_pb.AmusementPost>;
  setPostsList(value: Array<amusementPost_pb.AmusementPost>): ListAmusementPostsResponse;
  clearPostsList(): ListAmusementPostsResponse;
  addPosts(value?: amusementPost_pb.AmusementPost, index?: number): amusementPost_pb.AmusementPost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAmusementPostsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAmusementPostsResponse): ListAmusementPostsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAmusementPostsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAmusementPostsResponse;
  static deserializeBinaryFromReader(message: ListAmusementPostsResponse, reader: jspb.BinaryReader): ListAmusementPostsResponse;
}

export namespace ListAmusementPostsResponse {
  export type AsObject = {
    postsList: Array<amusementPost_pb.AmusementPost.AsObject>,
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

export class LikePostRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): LikePostRequest;

  getPostId(): number;
  setPostId(value: number): LikePostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LikePostRequest): LikePostRequest.AsObject;
  static serializeBinaryToWriter(message: LikePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikePostRequest;
  static deserializeBinaryFromReader(message: LikePostRequest, reader: jspb.BinaryReader): LikePostRequest;
}

export namespace LikePostRequest {
  export type AsObject = {
    userId: number,
    postId: number,
  }
}

export class LikePostResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): LikePostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LikePostResponse): LikePostResponse.AsObject;
  static serializeBinaryToWriter(message: LikePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikePostResponse;
  static deserializeBinaryFromReader(message: LikePostResponse, reader: jspb.BinaryReader): LikePostResponse;
}

export namespace LikePostResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class UnlikePostRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): UnlikePostRequest;

  getPostId(): number;
  setPostId(value: number): UnlikePostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlikePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnlikePostRequest): UnlikePostRequest.AsObject;
  static serializeBinaryToWriter(message: UnlikePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlikePostRequest;
  static deserializeBinaryFromReader(message: UnlikePostRequest, reader: jspb.BinaryReader): UnlikePostRequest;
}

export namespace UnlikePostRequest {
  export type AsObject = {
    userId: number,
    postId: number,
  }
}

export class UnlikePostResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UnlikePostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlikePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnlikePostResponse): UnlikePostResponse.AsObject;
  static serializeBinaryToWriter(message: UnlikePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlikePostResponse;
  static deserializeBinaryFromReader(message: UnlikePostResponse, reader: jspb.BinaryReader): UnlikePostResponse;
}

export namespace UnlikePostResponse {
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

export class LikeCommentRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): LikeCommentRequest;

  getCommentId(): number;
  setCommentId(value: number): LikeCommentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeCommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LikeCommentRequest): LikeCommentRequest.AsObject;
  static serializeBinaryToWriter(message: LikeCommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeCommentRequest;
  static deserializeBinaryFromReader(message: LikeCommentRequest, reader: jspb.BinaryReader): LikeCommentRequest;
}

export namespace LikeCommentRequest {
  export type AsObject = {
    userId: number,
    commentId: number,
  }
}

export class LikeCommentResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): LikeCommentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeCommentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LikeCommentResponse): LikeCommentResponse.AsObject;
  static serializeBinaryToWriter(message: LikeCommentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeCommentResponse;
  static deserializeBinaryFromReader(message: LikeCommentResponse, reader: jspb.BinaryReader): LikeCommentResponse;
}

export namespace LikeCommentResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class UnlikeCommentRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): UnlikeCommentRequest;

  getCommentId(): number;
  setCommentId(value: number): UnlikeCommentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlikeCommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnlikeCommentRequest): UnlikeCommentRequest.AsObject;
  static serializeBinaryToWriter(message: UnlikeCommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlikeCommentRequest;
  static deserializeBinaryFromReader(message: UnlikeCommentRequest, reader: jspb.BinaryReader): UnlikeCommentRequest;
}

export namespace UnlikeCommentRequest {
  export type AsObject = {
    userId: number,
    commentId: number,
  }
}

export class UnlikeCommentResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UnlikeCommentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlikeCommentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnlikeCommentResponse): UnlikeCommentResponse.AsObject;
  static serializeBinaryToWriter(message: UnlikeCommentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlikeCommentResponse;
  static deserializeBinaryFromReader(message: UnlikeCommentResponse, reader: jspb.BinaryReader): UnlikeCommentResponse;
}

export namespace UnlikeCommentResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class TakePartAmusePostRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): TakePartAmusePostRequest;

  getPostId(): number;
  setPostId(value: number): TakePartAmusePostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TakePartAmusePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TakePartAmusePostRequest): TakePartAmusePostRequest.AsObject;
  static serializeBinaryToWriter(message: TakePartAmusePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TakePartAmusePostRequest;
  static deserializeBinaryFromReader(message: TakePartAmusePostRequest, reader: jspb.BinaryReader): TakePartAmusePostRequest;
}

export namespace TakePartAmusePostRequest {
  export type AsObject = {
    userId: number,
    postId: number,
  }
}

export class TakePartAmusePostResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): TakePartAmusePostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TakePartAmusePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TakePartAmusePostResponse): TakePartAmusePostResponse.AsObject;
  static serializeBinaryToWriter(message: TakePartAmusePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TakePartAmusePostResponse;
  static deserializeBinaryFromReader(message: TakePartAmusePostResponse, reader: jspb.BinaryReader): TakePartAmusePostResponse;
}

export namespace TakePartAmusePostResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class NoTakePartAmusePostRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): NoTakePartAmusePostRequest;

  getPostId(): number;
  setPostId(value: number): NoTakePartAmusePostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoTakePartAmusePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NoTakePartAmusePostRequest): NoTakePartAmusePostRequest.AsObject;
  static serializeBinaryToWriter(message: NoTakePartAmusePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NoTakePartAmusePostRequest;
  static deserializeBinaryFromReader(message: NoTakePartAmusePostRequest, reader: jspb.BinaryReader): NoTakePartAmusePostRequest;
}

export namespace NoTakePartAmusePostRequest {
  export type AsObject = {
    userId: number,
    postId: number,
  }
}

export class NoTakePartAmusePostResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): NoTakePartAmusePostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoTakePartAmusePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NoTakePartAmusePostResponse): NoTakePartAmusePostResponse.AsObject;
  static serializeBinaryToWriter(message: NoTakePartAmusePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NoTakePartAmusePostResponse;
  static deserializeBinaryFromReader(message: NoTakePartAmusePostResponse, reader: jspb.BinaryReader): NoTakePartAmusePostResponse;
}

export namespace NoTakePartAmusePostResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class SetSoldRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): SetSoldRequest;

  getPostId(): number;
  setPostId(value: number): SetSoldRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSoldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetSoldRequest): SetSoldRequest.AsObject;
  static serializeBinaryToWriter(message: SetSoldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSoldRequest;
  static deserializeBinaryFromReader(message: SetSoldRequest, reader: jspb.BinaryReader): SetSoldRequest;
}

export namespace SetSoldRequest {
  export type AsObject = {
    userId: number,
    postId: number,
  }
}

export class SetSoldResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): SetSoldResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSoldResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetSoldResponse): SetSoldResponse.AsObject;
  static serializeBinaryToWriter(message: SetSoldResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSoldResponse;
  static deserializeBinaryFromReader(message: SetSoldResponse, reader: jspb.BinaryReader): SetSoldResponse;
}

export namespace SetSoldResponse {
  export type AsObject = {
    success: boolean,
  }
}

export enum ListRequestType { 
  STAR = 0,
  TAKEPART = 1,
  OWN = 2,
}
