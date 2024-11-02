import * as jspb from 'google-protobuf'

import * as post_pb from './post_pb'; // proto import: "post.proto"


export class SellPost extends jspb.Message {
  getPost(): post_pb.Post | undefined;
  setPost(value?: post_pb.Post): SellPost;
  hasPost(): boolean;
  clearPost(): SellPost;

  getContact(): string;
  setContact(value: string): SellPost;
  hasContact(): boolean;
  clearContact(): SellPost;

  getPrice(): number;
  setPrice(value: number): SellPost;

  getType(): GoodsType;
  setType(value: GoodsType): SellPost;

  getSold(): boolean;
  setSold(value: boolean): SellPost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SellPost.AsObject;
  static toObject(includeInstance: boolean, msg: SellPost): SellPost.AsObject;
  static serializeBinaryToWriter(message: SellPost, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SellPost;
  static deserializeBinaryFromReader(message: SellPost, reader: jspb.BinaryReader): SellPost;
}

export namespace SellPost {
  export type AsObject = {
    post?: post_pb.Post.AsObject,
    contact?: string,
    price: number,
    type: GoodsType,
    sold: boolean,
  }

  export enum ContactCase { 
    _CONTACT_NOT_SET = 0,
    CONTACT = 2,
  }
}

export enum GoodsType { 
  TICKET = 0,
  BOOK = 1,
  DISPLAY = 2,
  COMPUTER = 3,
  OTHER = 4,
}
