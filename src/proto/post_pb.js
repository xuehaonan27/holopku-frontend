// source: post.proto
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

goog.exportSymbol('proto.post.Comment', null, global);
goog.exportSymbol('proto.post.Post', null, global);
goog.exportSymbol('proto.post.PostType', null, global);
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
proto.post.Post = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.post.Post.repeatedFields_, null);
};
goog.inherits(proto.post.Post, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.post.Post.displayName = 'proto.post.Post';
}
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
proto.post.Comment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.post.Comment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.post.Comment.displayName = 'proto.post.Comment';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.post.Post.repeatedFields_ = [8,5];



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
proto.post.Post.prototype.toObject = function(opt_includeInstance) {
  return proto.post.Post.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.post.Post} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.post.Post.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    content: jspb.Message.getFieldWithDefault(msg, 4, ""),
    likes: jspb.Message.getFieldWithDefault(msg, 6, 0),
    favorates: jspb.Message.getFieldWithDefault(msg, 7, 0),
    createdAt: jspb.Message.getFieldWithDefault(msg, 9, 0),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 10, 0),
    commentsList: jspb.Message.toObjectList(msg.getCommentsList(),
    proto.post.Comment.toObject, includeInstance),
    imagesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    postType: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.post.Post}
 */
proto.post.Post.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.post.Post;
  return proto.post.Post.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.post.Post} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.post.Post}
 */
proto.post.Post.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLikes(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFavorates(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedAt(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUpdatedAt(value);
      break;
    case 8:
      var value = new proto.post.Comment;
      reader.readMessage(value,proto.post.Comment.deserializeBinaryFromReader);
      msg.addComments(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addImages(value);
      break;
    case 11:
      var value = /** @type {!proto.post.PostType} */ (reader.readEnum());
      msg.setPostType(value);
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
proto.post.Post.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.post.Post.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.post.Post} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.post.Post.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLikes();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getFavorates();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getCommentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.post.Comment.serializeBinaryToWriter
    );
  }
  f = message.getImagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getPostType();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.post.Post.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.post.Post} returns this
 */
proto.post.Post.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.post.Post.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.post.Post} returns this
 */
proto.post.Post.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 user_id = 3;
 * @return {number}
 */
proto.post.Post.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.post.Post} returns this
 */
proto.post.Post.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.post.Post.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.post.Post} returns this
 */
proto.post.Post.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 likes = 6;
 * @return {number}
 */
proto.post.Post.prototype.getLikes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.post.Post} returns this
 */
proto.post.Post.prototype.setLikes = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 favorates = 7;
 * @return {number}
 */
proto.post.Post.prototype.getFavorates = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.post.Post} returns this
 */
proto.post.Post.prototype.setFavorates = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 created_at = 9;
 * @return {number}
 */
proto.post.Post.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.post.Post} returns this
 */
proto.post.Post.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 updated_at = 10;
 * @return {number}
 */
proto.post.Post.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.post.Post} returns this
 */
proto.post.Post.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.post.Post} returns this
 */
proto.post.Post.prototype.clearUpdatedAt = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.post.Post.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated Comment comments = 8;
 * @return {!Array<!proto.post.Comment>}
 */
proto.post.Post.prototype.getCommentsList = function() {
  return /** @type{!Array<!proto.post.Comment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.post.Comment, 8));
};


/**
 * @param {!Array<!proto.post.Comment>} value
 * @return {!proto.post.Post} returns this
*/
proto.post.Post.prototype.setCommentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.post.Comment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.post.Comment}
 */
proto.post.Post.prototype.addComments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.post.Comment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.post.Post} returns this
 */
proto.post.Post.prototype.clearCommentsList = function() {
  return this.setCommentsList([]);
};


/**
 * repeated string images = 5;
 * @return {!Array<string>}
 */
proto.post.Post.prototype.getImagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.post.Post} returns this
 */
proto.post.Post.prototype.setImagesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.post.Post} returns this
 */
proto.post.Post.prototype.addImages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.post.Post} returns this
 */
proto.post.Post.prototype.clearImagesList = function() {
  return this.setImagesList([]);
};


/**
 * optional PostType post_type = 11;
 * @return {!proto.post.PostType}
 */
proto.post.Post.prototype.getPostType = function() {
  return /** @type {!proto.post.PostType} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.post.PostType} value
 * @return {!proto.post.Post} returns this
 */
proto.post.Post.prototype.setPostType = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};





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
proto.post.Comment.prototype.toObject = function(opt_includeInstance) {
  return proto.post.Comment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.post.Comment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.post.Comment.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    postId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    content: jspb.Message.getFieldWithDefault(msg, 4, ""),
    likes: jspb.Message.getFieldWithDefault(msg, 5, 0),
    createdAt: jspb.Message.getFieldWithDefault(msg, 6, 0),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.post.Comment}
 */
proto.post.Comment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.post.Comment;
  return proto.post.Comment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.post.Comment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.post.Comment}
 */
proto.post.Comment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPostId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLikes(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedAt(value);
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
proto.post.Comment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.post.Comment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.post.Comment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.post.Comment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPostId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLikes();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.post.Comment.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.post.Comment} returns this
 */
proto.post.Comment.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 post_id = 2;
 * @return {number}
 */
proto.post.Comment.prototype.getPostId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.post.Comment} returns this
 */
proto.post.Comment.prototype.setPostId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 user_id = 3;
 * @return {number}
 */
proto.post.Comment.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.post.Comment} returns this
 */
proto.post.Comment.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.post.Comment.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.post.Comment} returns this
 */
proto.post.Comment.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 likes = 5;
 * @return {number}
 */
proto.post.Comment.prototype.getLikes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.post.Comment} returns this
 */
proto.post.Comment.prototype.setLikes = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 created_at = 6;
 * @return {number}
 */
proto.post.Comment.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.post.Comment} returns this
 */
proto.post.Comment.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 updated_at = 7;
 * @return {number}
 */
proto.post.Comment.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.post.Comment} returns this
 */
proto.post.Comment.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.post.Comment} returns this
 */
proto.post.Comment.prototype.clearUpdatedAt = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.post.Comment.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * @enum {number}
 */
proto.post.PostType = {
  FOODPOST: 0,
  SELLPOST: 1,
  AMUSEMENTPOST: 2
};

goog.object.extend(exports, proto.post);
