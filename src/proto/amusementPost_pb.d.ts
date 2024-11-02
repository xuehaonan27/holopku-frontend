import * as jspb from 'google-protobuf'

import * as post_pb from './post_pb'; // proto import: "post.proto"


export class AmusementPost extends jspb.Message {
  getPost(): post_pb.Post | undefined;
  setPost(value?: post_pb.Post): AmusementPost;
  hasPost(): boolean;
  clearPost(): AmusementPost;

  getPeopleAll(): number;
  setPeopleAll(value: number): AmusementPost;

  getPeopleAlready(): number;
  setPeopleAlready(value: number): AmusementPost;

  getType(): GameType;
  setType(value: GameType): AmusementPost;

  getTime(): number;
  setTime(value: number): AmusementPost;

  getPlace(): string;
  setPlace(value: string): AmusementPost;

  getContact(): string;
  setContact(value: string): AmusementPost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AmusementPost.AsObject;
  static toObject(includeInstance: boolean, msg: AmusementPost): AmusementPost.AsObject;
  static serializeBinaryToWriter(message: AmusementPost, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AmusementPost;
  static deserializeBinaryFromReader(message: AmusementPost, reader: jspb.BinaryReader): AmusementPost;
}

export namespace AmusementPost {
  export type AsObject = {
    post?: post_pb.Post.AsObject,
    peopleAll: number,
    peopleAlready: number,
    type: GameType,
    time: number,
    place: string,
    contact: string,
  }
}

export enum GameType { 
  WOLFKILL = 0,
  JVBEN = 1,
  BLOODTOWER = 2,
  KARAOK = 3,
  BOARDGAME = 4,
  SPORTS = 5,
  RIDING = 6,
  OTHER = 7,
}
