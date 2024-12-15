import * as jspb from 'google-protobuf'



export class RegisterRequest extends jspb.Message {
  getAuthProvider(): LoginProvider;
  setAuthProvider(value: LoginProvider): RegisterRequest;

  getUsername(): string;
  setUsername(value: string): RegisterRequest;

  getPassword(): string;
  setPassword(value: string): RegisterRequest;

  getEmail(): string;
  setEmail(value: string): RegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    authProvider: LoginProvider,
    username: string,
    password: string,
    email: string,
  }
}

export class RegisterResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): RegisterResponse;

  getMessage(): string;
  setMessage(value: string): RegisterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class LoginRequest extends jspb.Message {
  getAuthProvider(): LoginProvider;
  setAuthProvider(value: LoginProvider): LoginRequest;

  getIaaaToken(): string;
  setIaaaToken(value: string): LoginRequest;

  getUsername(): string;
  setUsername(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  getIpAddress(): string;
  setIpAddress(value: string): LoginRequest;
  hasIpAddress(): boolean;
  clearIpAddress(): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    authProvider: LoginProvider,
    iaaaToken: string,
    username: string,
    password: string,
    ipAddress?: string,
  }

  export enum IpAddressCase { 
    _IP_ADDRESS_NOT_SET = 0,
    IP_ADDRESS = 5,
  }
}

export class LoginResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): LoginResponse;

  getUser(): User | undefined;
  setUser(value?: User): LoginResponse;
  hasUser(): boolean;
  clearUser(): LoginResponse;

  getToken(): Uint8Array | string;
  getToken_asU8(): Uint8Array;
  getToken_asB64(): string;
  setToken(value: Uint8Array | string): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    success: boolean,
    user?: User.AsObject,
    token: Uint8Array | string,
  }
}

export class GetUserRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): GetUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    userId: number,
  }
}

export class GetUserResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): GetUserResponse;

  getUser(): User | undefined;
  setUser(value?: User): GetUserResponse;
  hasUser(): boolean;
  clearUser(): GetUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    success: boolean,
    user?: User.AsObject,
  }
}

export class ChangeIconRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): ChangeIconRequest;

  getNewIcon(): Uint8Array | string;
  getNewIcon_asU8(): Uint8Array;
  getNewIcon_asB64(): string;
  setNewIcon(value: Uint8Array | string): ChangeIconRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeIconRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeIconRequest): ChangeIconRequest.AsObject;
  static serializeBinaryToWriter(message: ChangeIconRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeIconRequest;
  static deserializeBinaryFromReader(message: ChangeIconRequest, reader: jspb.BinaryReader): ChangeIconRequest;
}

export namespace ChangeIconRequest {
  export type AsObject = {
    userId: number,
    newIcon: Uint8Array | string,
  }
}

export class ChangeIconResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ChangeIconResponse;

  getUser(): User | undefined;
  setUser(value?: User): ChangeIconResponse;
  hasUser(): boolean;
  clearUser(): ChangeIconResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeIconResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeIconResponse): ChangeIconResponse.AsObject;
  static serializeBinaryToWriter(message: ChangeIconResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeIconResponse;
  static deserializeBinaryFromReader(message: ChangeIconResponse, reader: jspb.BinaryReader): ChangeIconResponse;
}

export namespace ChangeIconResponse {
  export type AsObject = {
    success: boolean,
    user?: User.AsObject,
  }
}

export class ChangeUsernameRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): ChangeUsernameRequest;

  getNewName(): string;
  setNewName(value: string): ChangeUsernameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeUsernameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeUsernameRequest): ChangeUsernameRequest.AsObject;
  static serializeBinaryToWriter(message: ChangeUsernameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeUsernameRequest;
  static deserializeBinaryFromReader(message: ChangeUsernameRequest, reader: jspb.BinaryReader): ChangeUsernameRequest;
}

export namespace ChangeUsernameRequest {
  export type AsObject = {
    userId: number,
    newName: string,
  }
}

export class ChangeUsernameResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ChangeUsernameResponse;

  getUser(): User | undefined;
  setUser(value?: User): ChangeUsernameResponse;
  hasUser(): boolean;
  clearUser(): ChangeUsernameResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeUsernameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeUsernameResponse): ChangeUsernameResponse.AsObject;
  static serializeBinaryToWriter(message: ChangeUsernameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeUsernameResponse;
  static deserializeBinaryFromReader(message: ChangeUsernameResponse, reader: jspb.BinaryReader): ChangeUsernameResponse;
}

export namespace ChangeUsernameResponse {
  export type AsObject = {
    success: boolean,
    user?: User.AsObject,
  }
}

export class User extends jspb.Message {
  getId(): number;
  setId(value: number): User;

  getUsername(): string;
  setUsername(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;
  hasEmail(): boolean;
  clearEmail(): User;

  getLoginProvider(): LoginProvider;
  setLoginProvider(value: LoginProvider): User;

  getNickname(): string;
  setNickname(value: string): User;

  getCreatedAt(): number;
  setCreatedAt(value: number): User;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): User;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): User;

  getIcon(): Uint8Array | string;
  getIcon_asU8(): Uint8Array;
  getIcon_asB64(): string;
  setIcon(value: Uint8Array | string): User;

  getFavoritePostsList(): Array<number>;
  setFavoritePostsList(value: Array<number>): User;
  clearFavoritePostsList(): User;
  addFavoritePosts(value: number, index?: number): User;

  getLikedPostsList(): Array<number>;
  setLikedPostsList(value: Array<number>): User;
  clearLikedPostsList(): User;
  addLikedPosts(value: number, index?: number): User;

  getTakePartPostsList(): Array<number>;
  setTakePartPostsList(value: Array<number>): User;
  clearTakePartPostsList(): User;
  addTakePartPosts(value: number, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: number,
    username: string,
    email?: string,
    loginProvider: LoginProvider,
    nickname: string,
    createdAt: number,
    updatedAt?: number,
    icon: Uint8Array | string,
    favoritePostsList: Array<number>,
    likedPostsList: Array<number>,
    takePartPostsList: Array<number>,
  }

  export enum EmailCase { 
    _EMAIL_NOT_SET = 0,
    EMAIL = 3,
  }

  export enum UpdatedAtCase { 
    _UPDATED_AT_NOT_SET = 0,
    UPDATED_AT = 7,
  }
}

export enum LoginProvider { 
  IAAA = 0,
  PASSWORD = 1,
}
