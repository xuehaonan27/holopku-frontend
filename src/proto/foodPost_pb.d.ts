import * as jspb from 'google-protobuf'

import * as post_pb from './post_pb'; // proto import: "post.proto"


export class FoodPost extends jspb.Message {
  getPost(): post_pb.Post | undefined;
  setPost(value?: post_pb.Post): FoodPost;
  hasPost(): boolean;
  clearPost(): FoodPost;

  getFoodPlace(): Place;
  setFoodPlace(value: Place): FoodPost;

  getScore(): number;
  setScore(value: number): FoodPost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FoodPost.AsObject;
  static toObject(includeInstance: boolean, msg: FoodPost): FoodPost.AsObject;
  static serializeBinaryToWriter(message: FoodPost, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FoodPost;
  static deserializeBinaryFromReader(message: FoodPost, reader: jspb.BinaryReader): FoodPost;
}

export namespace FoodPost {
  export type AsObject = {
    post?: post_pb.Post.AsObject,
    foodPlace: Place,
    score: number,
  }
}

export enum Place { 
  JIAYUAN = 0,
  YIYUAN = 1,
  SHAOYUAN = 2,
  YANNAN = 3,
  NONGYUAN = 4,
  XUEYI = 5,
  XUEWU = 6,
  OTHER = 7,
}
