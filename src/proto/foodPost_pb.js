// source: foodPost.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var post_pb = require('./post_pb.js');
goog.object.extend(proto, post_pb);
goog.exportSymbol('proto.foodPost.FoodPost', null, global);
goog.exportSymbol('proto.foodPost.Place', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.foodPost.FoodPost = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.foodPost.FoodPost, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.foodPost.FoodPost.displayName = 'proto.foodPost.FoodPost';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.foodPost.FoodPost.prototype.toObject = function(opt_includeInstance) {
  return proto.foodPost.FoodPost.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.foodPost.FoodPost} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.foodPost.FoodPost.toObject = function(includeInstance, msg) {
  var f, obj = {
    post: (f = msg.getPost()) && post_pb.Post.toObject(includeInstance, f),
    place: jspb.Message.getFieldWithDefault(msg, 2, 0),
    score: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.foodPost.FoodPost}
 */
proto.foodPost.FoodPost.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.foodPost.FoodPost;
  return proto.foodPost.FoodPost.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.foodPost.FoodPost} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.foodPost.FoodPost}
 */
proto.foodPost.FoodPost.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new post_pb.Post;
      reader.readMessage(value,post_pb.Post.deserializeBinaryFromReader);
      msg.setPost(value);
      break;
    case 2:
      var value = /** @type {!proto.foodPost.Place} */ (reader.readEnum());
      msg.setPlace(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.foodPost.FoodPost.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.foodPost.FoodPost.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.foodPost.FoodPost} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.foodPost.FoodPost.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPost();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      post_pb.Post.serializeBinaryToWriter
    );
  }
  f = message.getPlace();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getScore();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional post.Post post = 1;
 * @return {?proto.post.Post}
 */
proto.foodPost.FoodPost.prototype.getPost = function() {
  return /** @type{?proto.post.Post} */ (
    jspb.Message.getWrapperField(this, post_pb.Post, 1));
};


/**
 * @param {?proto.post.Post|undefined} value
 * @return {!proto.foodPost.FoodPost} returns this
*/
proto.foodPost.FoodPost.prototype.setPost = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.foodPost.FoodPost} returns this
 */
proto.foodPost.FoodPost.prototype.clearPost = function() {
  return this.setPost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.foodPost.FoodPost.prototype.hasPost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Place place = 2;
 * @return {!proto.foodPost.Place}
 */
proto.foodPost.FoodPost.prototype.getPlace = function() {
  return /** @type {!proto.foodPost.Place} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.foodPost.Place} value
 * @return {!proto.foodPost.FoodPost} returns this
 */
proto.foodPost.FoodPost.prototype.setPlace = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 score = 3;
 * @return {number}
 */
proto.foodPost.FoodPost.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.foodPost.FoodPost} returns this
 */
proto.foodPost.FoodPost.prototype.setScore = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.foodPost.Place = {
  JIAYUAN: 0,
  YIYUAN: 1,
  SHAOYUAN: 2,
  YANNAN: 3,
  NONGYUAN: 4,
  XUEYI: 5,
  XUEWU: 6,
  OTHER: 7
};

goog.object.extend(exports, proto.foodPost);
