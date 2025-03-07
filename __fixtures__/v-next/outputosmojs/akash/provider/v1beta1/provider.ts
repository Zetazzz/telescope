import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "akash.provider.v1beta1";
/** ProviderInfo */
export interface ProviderInfo {
  email: string;
  website: string;
}
/** ProviderInfo */
export interface ProviderInfoSDKType {
  email: string;
  website: string;
}
/** MsgCreateProvider defines an SDK message for creating a provider */
export interface MsgCreateProvider {
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info?: ProviderInfo;
}
/** MsgCreateProvider defines an SDK message for creating a provider */
export interface MsgCreateProviderSDKType {
  owner: string;
  host_uri: string;
  attributes: AttributeSDKType[];
  info?: ProviderInfoSDKType;
}
/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponse {}
/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponseSDKType {}
/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProvider {
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info?: ProviderInfo;
}
/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProviderSDKType {
  owner: string;
  host_uri: string;
  attributes: AttributeSDKType[];
  info?: ProviderInfoSDKType;
}
/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponse {}
/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponseSDKType {}
/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProvider {
  owner: string;
}
/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProviderSDKType {
  owner: string;
}
/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponse {}
/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponseSDKType {}
/** Provider stores owner and host details */
export interface Provider {
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info?: ProviderInfo;
}
/** Provider stores owner and host details */
export interface ProviderSDKType {
  owner: string;
  host_uri: string;
  attributes: AttributeSDKType[];
  info?: ProviderInfoSDKType;
}
function createBaseProviderInfo(): ProviderInfo {
  return {
    email: "",
    website: ""
  };
}
export const ProviderInfo = {
  encode(message: ProviderInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.website !== "") {
      writer.uint32(18).string(message.website);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProviderInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.website = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProviderInfo {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      website: isSet(object.website) ? String(object.website) : ""
    };
  },
  toJSON(message: ProviderInfo): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.website !== undefined && (obj.website = message.website);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProviderInfo>, I>>(object: I): ProviderInfo {
    const message = createBaseProviderInfo();
    message.email = object.email ?? "";
    message.website = object.website ?? "";
    return message;
  },
  fromSDK(object: ProviderInfoSDKType): ProviderInfo {
    return {
      email: object?.email,
      website: object?.website
    };
  },
  fromSDKJSON(object: any): ProviderInfoSDKType {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      website: isSet(object.website) ? String(object.website) : ""
    };
  },
  toSDK(message: ProviderInfo): ProviderInfoSDKType {
    const obj: any = {};
    obj.email = message.email;
    obj.website = message.website;
    return obj;
  }
};
function createBaseMsgCreateProvider(): MsgCreateProvider {
  return {
    owner: "",
    hostUri: "",
    attributes: [],
    info: undefined
  };
}
export const MsgCreateProvider = {
  encode(message: MsgCreateProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.hostUri !== "") {
      writer.uint32(18).string(message.hostUri);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.hostUri = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateProvider {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      hostUri: isSet(object.hostUri) ? String(object.hostUri) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
      info: isSet(object.info) ? ProviderInfo.fromJSON(object.info) : undefined
    };
  },
  toJSON(message: MsgCreateProvider): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.hostUri !== undefined && (obj.hostUri = message.hostUri);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateProvider>, I>>(object: I): MsgCreateProvider {
    const message = createBaseMsgCreateProvider();
    message.owner = object.owner ?? "";
    message.hostUri = object.hostUri ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    message.info = object.info !== undefined && object.info !== null ? ProviderInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromSDK(object: MsgCreateProviderSDKType): MsgCreateProvider {
    return {
      owner: object?.owner,
      hostUri: object?.host_uri,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : [],
      info: object.info ? ProviderInfo.fromSDK(object.info) : undefined
    };
  },
  fromSDKJSON(object: any): MsgCreateProviderSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      host_uri: isSet(object.host_uri) ? String(object.host_uri) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDKJSON(e)) : [],
      info: isSet(object.info) ? ProviderInfo.fromSDKJSON(object.info) : undefined
    };
  },
  toSDK(message: MsgCreateProvider): MsgCreateProviderSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.host_uri = message.hostUri;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toSDK(message.info) : undefined);
    return obj;
  }
};
function createBaseMsgCreateProviderResponse(): MsgCreateProviderResponse {
  return {};
}
export const MsgCreateProviderResponse = {
  encode(_: MsgCreateProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreateProviderResponse {
    return {};
  },
  toJSON(_: MsgCreateProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateProviderResponse>, I>>(_: I): MsgCreateProviderResponse {
    const message = createBaseMsgCreateProviderResponse();
    return message;
  },
  fromSDK(_: MsgCreateProviderResponseSDKType): MsgCreateProviderResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgCreateProviderResponseSDKType {
    return {};
  },
  toSDK(_: MsgCreateProviderResponse): MsgCreateProviderResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgUpdateProvider(): MsgUpdateProvider {
  return {
    owner: "",
    hostUri: "",
    attributes: [],
    info: undefined
  };
}
export const MsgUpdateProvider = {
  encode(message: MsgUpdateProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.hostUri !== "") {
      writer.uint32(18).string(message.hostUri);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.hostUri = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateProvider {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      hostUri: isSet(object.hostUri) ? String(object.hostUri) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
      info: isSet(object.info) ? ProviderInfo.fromJSON(object.info) : undefined
    };
  },
  toJSON(message: MsgUpdateProvider): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.hostUri !== undefined && (obj.hostUri = message.hostUri);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateProvider>, I>>(object: I): MsgUpdateProvider {
    const message = createBaseMsgUpdateProvider();
    message.owner = object.owner ?? "";
    message.hostUri = object.hostUri ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    message.info = object.info !== undefined && object.info !== null ? ProviderInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromSDK(object: MsgUpdateProviderSDKType): MsgUpdateProvider {
    return {
      owner: object?.owner,
      hostUri: object?.host_uri,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : [],
      info: object.info ? ProviderInfo.fromSDK(object.info) : undefined
    };
  },
  fromSDKJSON(object: any): MsgUpdateProviderSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      host_uri: isSet(object.host_uri) ? String(object.host_uri) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDKJSON(e)) : [],
      info: isSet(object.info) ? ProviderInfo.fromSDKJSON(object.info) : undefined
    };
  },
  toSDK(message: MsgUpdateProvider): MsgUpdateProviderSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.host_uri = message.hostUri;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toSDK(message.info) : undefined);
    return obj;
  }
};
function createBaseMsgUpdateProviderResponse(): MsgUpdateProviderResponse {
  return {};
}
export const MsgUpdateProviderResponse = {
  encode(_: MsgUpdateProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateProviderResponse {
    return {};
  },
  toJSON(_: MsgUpdateProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateProviderResponse>, I>>(_: I): MsgUpdateProviderResponse {
    const message = createBaseMsgUpdateProviderResponse();
    return message;
  },
  fromSDK(_: MsgUpdateProviderResponseSDKType): MsgUpdateProviderResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgUpdateProviderResponseSDKType {
    return {};
  },
  toSDK(_: MsgUpdateProviderResponse): MsgUpdateProviderResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgDeleteProvider(): MsgDeleteProvider {
  return {
    owner: ""
  };
}
export const MsgDeleteProvider = {
  encode(message: MsgDeleteProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteProvider {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toJSON(message: MsgDeleteProvider): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteProvider>, I>>(object: I): MsgDeleteProvider {
    const message = createBaseMsgDeleteProvider();
    message.owner = object.owner ?? "";
    return message;
  },
  fromSDK(object: MsgDeleteProviderSDKType): MsgDeleteProvider {
    return {
      owner: object?.owner
    };
  },
  fromSDKJSON(object: any): MsgDeleteProviderSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toSDK(message: MsgDeleteProvider): MsgDeleteProviderSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  }
};
function createBaseMsgDeleteProviderResponse(): MsgDeleteProviderResponse {
  return {};
}
export const MsgDeleteProviderResponse = {
  encode(_: MsgDeleteProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDeleteProviderResponse {
    return {};
  },
  toJSON(_: MsgDeleteProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteProviderResponse>, I>>(_: I): MsgDeleteProviderResponse {
    const message = createBaseMsgDeleteProviderResponse();
    return message;
  },
  fromSDK(_: MsgDeleteProviderResponseSDKType): MsgDeleteProviderResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgDeleteProviderResponseSDKType {
    return {};
  },
  toSDK(_: MsgDeleteProviderResponse): MsgDeleteProviderResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseProvider(): Provider {
  return {
    owner: "",
    hostUri: "",
    attributes: [],
    info: undefined
  };
}
export const Provider = {
  encode(message: Provider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.hostUri !== "") {
      writer.uint32(18).string(message.hostUri);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Provider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.hostUri = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Provider {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      hostUri: isSet(object.hostUri) ? String(object.hostUri) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
      info: isSet(object.info) ? ProviderInfo.fromJSON(object.info) : undefined
    };
  },
  toJSON(message: Provider): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.hostUri !== undefined && (obj.hostUri = message.hostUri);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Provider>, I>>(object: I): Provider {
    const message = createBaseProvider();
    message.owner = object.owner ?? "";
    message.hostUri = object.hostUri ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    message.info = object.info !== undefined && object.info !== null ? ProviderInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromSDK(object: ProviderSDKType): Provider {
    return {
      owner: object?.owner,
      hostUri: object?.host_uri,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : [],
      info: object.info ? ProviderInfo.fromSDK(object.info) : undefined
    };
  },
  fromSDKJSON(object: any): ProviderSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      host_uri: isSet(object.host_uri) ? String(object.host_uri) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDKJSON(e)) : [],
      info: isSet(object.info) ? ProviderInfo.fromSDKJSON(object.info) : undefined
    };
  },
  toSDK(message: Provider): ProviderSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.host_uri = message.hostUri;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.info !== undefined && (obj.info = message.info ? ProviderInfo.toSDK(message.info) : undefined);
    return obj;
  }
};