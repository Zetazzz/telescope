import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "osmosis.store.v1beta1";
export interface Node {
  children: Child[];
}
export interface NodeSDKType {
  children: ChildSDKType[];
}
export interface Child {
  index: Uint8Array;
  accumulation: string;
}
export interface ChildSDKType {
  index: Uint8Array;
  accumulation: string;
}
export interface Leaf {
  leaf?: Child;
}
export interface LeafSDKType {
  leaf?: ChildSDKType;
}
function createBaseNode(): Node {
  return {
    children: []
  };
}
export const Node = {
  encode(message: Node, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.children) {
      Child.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Node {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.children.push(Child.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Node {
    return {
      children: Array.isArray(object?.children) ? object.children.map((e: any) => Child.fromJSON(e)) : []
    };
  },
  toJSON(message: Node): unknown {
    const obj: any = {};
    if (message.children) {
      obj.children = message.children.map(e => e ? Child.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Node>): Node {
    const message = createBaseNode();
    message.children = object.children?.map(e => Child.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: NodeSDKType): Node {
    return {
      children: Array.isArray(object?.children) ? object.children.map((e: any) => Child.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): NodeSDKType {
    return {
      children: Array.isArray(object?.children) ? object.children.map((e: any) => Child.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Node): NodeSDKType {
    const obj: any = {};
    if (message.children) {
      obj.children = message.children.map(e => e ? Child.toSDK(e) : undefined);
    } else {
      obj.children = [];
    }
    return obj;
  }
};
function createBaseChild(): Child {
  return {
    index: new Uint8Array(),
    accumulation: ""
  };
}
export const Child = {
  encode(message: Child, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index.length !== 0) {
      writer.uint32(10).bytes(message.index);
    }
    if (message.accumulation !== "") {
      writer.uint32(18).string(message.accumulation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Child {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.bytes();
          break;
        case 2:
          message.accumulation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Child {
    return {
      index: isSet(object.index) ? bytesFromBase64(object.index) : new Uint8Array(),
      accumulation: isSet(object.accumulation) ? String(object.accumulation) : ""
    };
  },
  toJSON(message: Child): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = base64FromBytes(message.index !== undefined ? message.index : new Uint8Array()));
    message.accumulation !== undefined && (obj.accumulation = message.accumulation);
    return obj;
  },
  fromPartial(object: DeepPartial<Child>): Child {
    const message = createBaseChild();
    message.index = object.index ?? new Uint8Array();
    message.accumulation = object.accumulation ?? "";
    return message;
  },
  fromSDK(object: ChildSDKType): Child {
    return {
      index: object?.index,
      accumulation: object?.accumulation
    };
  },
  fromSDKJSON(object: any): ChildSDKType {
    return {
      index: isSet(object.index) ? bytesFromBase64(object.index) : new Uint8Array(),
      accumulation: isSet(object.accumulation) ? String(object.accumulation) : ""
    };
  },
  toSDK(message: Child): ChildSDKType {
    const obj: any = {};
    obj.index = message.index;
    obj.accumulation = message.accumulation;
    return obj;
  }
};
function createBaseLeaf(): Leaf {
  return {
    leaf: undefined
  };
}
export const Leaf = {
  encode(message: Leaf, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leaf !== undefined) {
      Child.encode(message.leaf, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Leaf {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaf();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaf = Child.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Leaf {
    return {
      leaf: isSet(object.leaf) ? Child.fromJSON(object.leaf) : undefined
    };
  },
  toJSON(message: Leaf): unknown {
    const obj: any = {};
    message.leaf !== undefined && (obj.leaf = message.leaf ? Child.toJSON(message.leaf) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Leaf>): Leaf {
    const message = createBaseLeaf();
    message.leaf = object.leaf !== undefined && object.leaf !== null ? Child.fromPartial(object.leaf) : undefined;
    return message;
  },
  fromSDK(object: LeafSDKType): Leaf {
    return {
      leaf: object.leaf ? Child.fromSDK(object.leaf) : undefined
    };
  },
  fromSDKJSON(object: any): LeafSDKType {
    return {
      leaf: isSet(object.leaf) ? Child.fromSDKJSON(object.leaf) : undefined
    };
  },
  toSDK(message: Leaf): LeafSDKType {
    const obj: any = {};
    message.leaf !== undefined && (obj.leaf = message.leaf ? Child.toSDK(message.leaf) : undefined);
    return obj;
  }
};