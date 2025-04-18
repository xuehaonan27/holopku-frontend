/**
 * @fileoverview gRPC-Web generated client stub for hello
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.20.0
// source: hello.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as hello_pb from './hello_pb'; // proto import: "hello.proto"


export class HelloClient {
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

  methodDescriptorSayHello = new grpcWeb.MethodDescriptor(
    '/hello.Hello/SayHello',
    grpcWeb.MethodType.UNARY,
    hello_pb.HelloRequest,
    hello_pb.HelloResponse,
    (request: hello_pb.HelloRequest) => {
      return request.serializeBinary();
    },
    hello_pb.HelloResponse.deserializeBinary
  );

  sayHello(
    request: hello_pb.HelloRequest,
    metadata?: grpcWeb.Metadata | null): Promise<hello_pb.HelloResponse>;

  sayHello(
    request: hello_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: hello_pb.HelloResponse) => void): grpcWeb.ClientReadableStream<hello_pb.HelloResponse>;

  sayHello(
    request: hello_pb.HelloRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: hello_pb.HelloResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/hello.Hello/SayHello',
        request,
        metadata || {},
        this.methodDescriptorSayHello,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/hello.Hello/SayHello',
    request,
    metadata || {},
    this.methodDescriptorSayHello);
  }

}

