import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp } from "../../helpers";
export const protobufPackage = "tendermint.p2p";
export interface ProtocolVersion {
  p2p: bigint;
  block: bigint;
  app: bigint;
}
export interface ProtocolVersionSDKType {
  p2p: bigint;
  block: bigint;
  app: bigint;
}
export interface NodeInfo {
  protocolVersion?: ProtocolVersion;
  nodeId: string;
  listenAddr: string;
  network: string;
  version: string;
  channels: Uint8Array;
  moniker: string;
  other?: NodeInfoOther;
}
export interface NodeInfoSDKType {
  protocol_version?: ProtocolVersionSDKType;
  node_id: string;
  listen_addr: string;
  network: string;
  version: string;
  channels: Uint8Array;
  moniker: string;
  other?: NodeInfoOtherSDKType;
}
export interface NodeInfoOther {
  txIndex: string;
  rpcAddress: string;
}
export interface NodeInfoOtherSDKType {
  tx_index: string;
  rpc_address: string;
}
export interface PeerInfo {
  id: string;
  addressInfo: PeerAddressInfo[];
  lastConnected?: Date;
}
export interface PeerInfoSDKType {
  id: string;
  address_info: PeerAddressInfoSDKType[];
  last_connected?: Date;
}
export interface PeerAddressInfo {
  address: string;
  lastDialSuccess?: Date;
  lastDialFailure?: Date;
  dialFailures: number;
}
export interface PeerAddressInfoSDKType {
  address: string;
  last_dial_success?: Date;
  last_dial_failure?: Date;
  dial_failures: number;
}
function createBaseProtocolVersion(): ProtocolVersion {
  return {
    p2p: BigInt(0),
    block: BigInt(0),
    app: BigInt(0)
  };
}
export const ProtocolVersion = {
  encode(message: ProtocolVersion, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.p2p !== BigInt(0)) {
      writer.uint32(8).uint64(message.p2p);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(16).uint64(message.block);
    }
    if (message.app !== BigInt(0)) {
      writer.uint32(24).uint64(message.app);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProtocolVersion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocolVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p2p = reader.uint64();
          break;
        case 2:
          message.block = reader.uint64();
          break;
        case 3:
          message.app = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProtocolVersion {
    return {
      p2p: isSet(object.p2p) ? BigInt(object.p2p.toString()) : BigInt(0),
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0),
      app: isSet(object.app) ? BigInt(object.app.toString()) : BigInt(0)
    };
  },
  toJSON(message: ProtocolVersion): unknown {
    const obj: any = {};
    message.p2p !== undefined && (obj.p2p = (message.p2p || BigInt(0)).toString());
    message.block !== undefined && (obj.block = (message.block || BigInt(0)).toString());
    message.app !== undefined && (obj.app = (message.app || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ProtocolVersion>): ProtocolVersion {
    const message = createBaseProtocolVersion();
    message.p2p = object.p2p !== undefined && object.p2p !== null ? BigInt(object.p2p.toString()) : BigInt(0);
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: ProtocolVersionSDKType): ProtocolVersion {
    return {
      p2p: object?.p2p,
      block: object?.block,
      app: object?.app
    };
  },
  fromSDKJSON(object: any): ProtocolVersionSDKType {
    return {
      p2p: isSet(object.p2p) ? BigInt(object.p2p.toString()) : BigInt(0),
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0),
      app: isSet(object.app) ? BigInt(object.app.toString()) : BigInt(0)
    };
  },
  toSDK(message: ProtocolVersion): ProtocolVersionSDKType {
    const obj: any = {};
    obj.p2p = message.p2p;
    obj.block = message.block;
    obj.app = message.app;
    return obj;
  }
};
function createBaseNodeInfo(): NodeInfo {
  return {
    protocolVersion: undefined,
    nodeId: "",
    listenAddr: "",
    network: "",
    version: "",
    channels: new Uint8Array(),
    moniker: "",
    other: undefined
  };
}
export const NodeInfo = {
  encode(message: NodeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.protocolVersion !== undefined) {
      ProtocolVersion.encode(message.protocolVersion, writer.uint32(10).fork()).ldelim();
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.listenAddr !== "") {
      writer.uint32(26).string(message.listenAddr);
    }
    if (message.network !== "") {
      writer.uint32(34).string(message.network);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.channels.length !== 0) {
      writer.uint32(50).bytes(message.channels);
    }
    if (message.moniker !== "") {
      writer.uint32(58).string(message.moniker);
    }
    if (message.other !== undefined) {
      NodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NodeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocolVersion = ProtocolVersion.decode(reader, reader.uint32());
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.listenAddr = reader.string();
          break;
        case 4:
          message.network = reader.string();
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.channels = reader.bytes();
          break;
        case 7:
          message.moniker = reader.string();
          break;
        case 8:
          message.other = NodeInfoOther.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NodeInfo {
    return {
      protocolVersion: isSet(object.protocolVersion) ? ProtocolVersion.fromJSON(object.protocolVersion) : undefined,
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      listenAddr: isSet(object.listenAddr) ? String(object.listenAddr) : "",
      network: isSet(object.network) ? String(object.network) : "",
      version: isSet(object.version) ? String(object.version) : "",
      channels: isSet(object.channels) ? bytesFromBase64(object.channels) : new Uint8Array(),
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      other: isSet(object.other) ? NodeInfoOther.fromJSON(object.other) : undefined
    };
  },
  toJSON(message: NodeInfo): unknown {
    const obj: any = {};
    message.protocolVersion !== undefined && (obj.protocolVersion = message.protocolVersion ? ProtocolVersion.toJSON(message.protocolVersion) : undefined);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.listenAddr !== undefined && (obj.listenAddr = message.listenAddr);
    message.network !== undefined && (obj.network = message.network);
    message.version !== undefined && (obj.version = message.version);
    message.channels !== undefined && (obj.channels = base64FromBytes(message.channels !== undefined ? message.channels : new Uint8Array()));
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.other !== undefined && (obj.other = message.other ? NodeInfoOther.toJSON(message.other) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<NodeInfo>): NodeInfo {
    const message = createBaseNodeInfo();
    message.protocolVersion = object.protocolVersion !== undefined && object.protocolVersion !== null ? ProtocolVersion.fromPartial(object.protocolVersion) : undefined;
    message.nodeId = object.nodeId ?? "";
    message.listenAddr = object.listenAddr ?? "";
    message.network = object.network ?? "";
    message.version = object.version ?? "";
    message.channels = object.channels ?? new Uint8Array();
    message.moniker = object.moniker ?? "";
    message.other = object.other !== undefined && object.other !== null ? NodeInfoOther.fromPartial(object.other) : undefined;
    return message;
  },
  fromSDK(object: NodeInfoSDKType): NodeInfo {
    return {
      protocolVersion: object.protocol_version ? ProtocolVersion.fromSDK(object.protocol_version) : undefined,
      nodeId: object?.node_id,
      listenAddr: object?.listen_addr,
      network: object?.network,
      version: object?.version,
      channels: object?.channels,
      moniker: object?.moniker,
      other: object.other ? NodeInfoOther.fromSDK(object.other) : undefined
    };
  },
  fromSDKJSON(object: any): NodeInfoSDKType {
    return {
      protocol_version: isSet(object.protocol_version) ? ProtocolVersion.fromSDKJSON(object.protocol_version) : undefined,
      node_id: isSet(object.node_id) ? String(object.node_id) : "",
      listen_addr: isSet(object.listen_addr) ? String(object.listen_addr) : "",
      network: isSet(object.network) ? String(object.network) : "",
      version: isSet(object.version) ? String(object.version) : "",
      channels: isSet(object.channels) ? bytesFromBase64(object.channels) : new Uint8Array(),
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      other: isSet(object.other) ? NodeInfoOther.fromSDKJSON(object.other) : undefined
    };
  },
  toSDK(message: NodeInfo): NodeInfoSDKType {
    const obj: any = {};
    message.protocolVersion !== undefined && (obj.protocol_version = message.protocolVersion ? ProtocolVersion.toSDK(message.protocolVersion) : undefined);
    obj.node_id = message.nodeId;
    obj.listen_addr = message.listenAddr;
    obj.network = message.network;
    obj.version = message.version;
    obj.channels = message.channels;
    obj.moniker = message.moniker;
    message.other !== undefined && (obj.other = message.other ? NodeInfoOther.toSDK(message.other) : undefined);
    return obj;
  }
};
function createBaseNodeInfoOther(): NodeInfoOther {
  return {
    txIndex: "",
    rpcAddress: ""
  };
}
export const NodeInfoOther = {
  encode(message: NodeInfoOther, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txIndex !== "") {
      writer.uint32(10).string(message.txIndex);
    }
    if (message.rpcAddress !== "") {
      writer.uint32(18).string(message.rpcAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NodeInfoOther {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeInfoOther();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txIndex = reader.string();
          break;
        case 2:
          message.rpcAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NodeInfoOther {
    return {
      txIndex: isSet(object.txIndex) ? String(object.txIndex) : "",
      rpcAddress: isSet(object.rpcAddress) ? String(object.rpcAddress) : ""
    };
  },
  toJSON(message: NodeInfoOther): unknown {
    const obj: any = {};
    message.txIndex !== undefined && (obj.txIndex = message.txIndex);
    message.rpcAddress !== undefined && (obj.rpcAddress = message.rpcAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<NodeInfoOther>): NodeInfoOther {
    const message = createBaseNodeInfoOther();
    message.txIndex = object.txIndex ?? "";
    message.rpcAddress = object.rpcAddress ?? "";
    return message;
  },
  fromSDK(object: NodeInfoOtherSDKType): NodeInfoOther {
    return {
      txIndex: object?.tx_index,
      rpcAddress: object?.rpc_address
    };
  },
  fromSDKJSON(object: any): NodeInfoOtherSDKType {
    return {
      tx_index: isSet(object.tx_index) ? String(object.tx_index) : "",
      rpc_address: isSet(object.rpc_address) ? String(object.rpc_address) : ""
    };
  },
  toSDK(message: NodeInfoOther): NodeInfoOtherSDKType {
    const obj: any = {};
    obj.tx_index = message.txIndex;
    obj.rpc_address = message.rpcAddress;
    return obj;
  }
};
function createBasePeerInfo(): PeerInfo {
  return {
    id: "",
    addressInfo: [],
    lastConnected: undefined
  };
}
export const PeerInfo = {
  encode(message: PeerInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.addressInfo) {
      PeerAddressInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastConnected !== undefined) {
      Timestamp.encode(toTimestamp(message.lastConnected), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PeerInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.addressInfo.push(PeerAddressInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.lastConnected = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PeerInfo {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      addressInfo: Array.isArray(object?.addressInfo) ? object.addressInfo.map((e: any) => PeerAddressInfo.fromJSON(e)) : [],
      lastConnected: isSet(object.lastConnected) ? new Date(object.lastConnected) : undefined
    };
  },
  toJSON(message: PeerInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.addressInfo) {
      obj.addressInfo = message.addressInfo.map(e => e ? PeerAddressInfo.toJSON(e) : undefined);
    } else {
      obj.addressInfo = [];
    }
    message.lastConnected !== undefined && (obj.lastConnected = message.lastConnected.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<PeerInfo>): PeerInfo {
    const message = createBasePeerInfo();
    message.id = object.id ?? "";
    message.addressInfo = object.addressInfo?.map(e => PeerAddressInfo.fromPartial(e)) || [];
    message.lastConnected = object.lastConnected ?? undefined;
    return message;
  },
  fromSDK(object: PeerInfoSDKType): PeerInfo {
    return {
      id: object?.id,
      addressInfo: Array.isArray(object?.address_info) ? object.address_info.map((e: any) => PeerAddressInfo.fromSDK(e)) : [],
      lastConnected: object.last_connected ?? undefined
    };
  },
  fromSDKJSON(object: any): PeerInfoSDKType {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      address_info: Array.isArray(object?.address_info) ? object.address_info.map((e: any) => PeerAddressInfo.fromSDKJSON(e)) : [],
      last_connected: isSet(object.last_connected) ? new Date(object.last_connected) : undefined
    };
  },
  toSDK(message: PeerInfo): PeerInfoSDKType {
    const obj: any = {};
    obj.id = message.id;
    if (message.addressInfo) {
      obj.address_info = message.addressInfo.map(e => e ? PeerAddressInfo.toSDK(e) : undefined);
    } else {
      obj.address_info = [];
    }
    message.lastConnected !== undefined && (obj.last_connected = message.lastConnected ?? undefined);
    return obj;
  }
};
function createBasePeerAddressInfo(): PeerAddressInfo {
  return {
    address: "",
    lastDialSuccess: undefined,
    lastDialFailure: undefined,
    dialFailures: 0
  };
}
export const PeerAddressInfo = {
  encode(message: PeerAddressInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.lastDialSuccess !== undefined) {
      Timestamp.encode(toTimestamp(message.lastDialSuccess), writer.uint32(18).fork()).ldelim();
    }
    if (message.lastDialFailure !== undefined) {
      Timestamp.encode(toTimestamp(message.lastDialFailure), writer.uint32(26).fork()).ldelim();
    }
    if (message.dialFailures !== 0) {
      writer.uint32(32).uint32(message.dialFailures);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PeerAddressInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerAddressInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.lastDialSuccess = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.lastDialFailure = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.dialFailures = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PeerAddressInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      lastDialSuccess: isSet(object.lastDialSuccess) ? new Date(object.lastDialSuccess) : undefined,
      lastDialFailure: isSet(object.lastDialFailure) ? new Date(object.lastDialFailure) : undefined,
      dialFailures: isSet(object.dialFailures) ? Number(object.dialFailures) : 0
    };
  },
  toJSON(message: PeerAddressInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.lastDialSuccess !== undefined && (obj.lastDialSuccess = message.lastDialSuccess.toISOString());
    message.lastDialFailure !== undefined && (obj.lastDialFailure = message.lastDialFailure.toISOString());
    message.dialFailures !== undefined && (obj.dialFailures = Math.round(message.dialFailures));
    return obj;
  },
  fromPartial(object: DeepPartial<PeerAddressInfo>): PeerAddressInfo {
    const message = createBasePeerAddressInfo();
    message.address = object.address ?? "";
    message.lastDialSuccess = object.lastDialSuccess ?? undefined;
    message.lastDialFailure = object.lastDialFailure ?? undefined;
    message.dialFailures = object.dialFailures ?? 0;
    return message;
  },
  fromSDK(object: PeerAddressInfoSDKType): PeerAddressInfo {
    return {
      address: object?.address,
      lastDialSuccess: object.last_dial_success ?? undefined,
      lastDialFailure: object.last_dial_failure ?? undefined,
      dialFailures: object?.dial_failures
    };
  },
  fromSDKJSON(object: any): PeerAddressInfoSDKType {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      last_dial_success: isSet(object.last_dial_success) ? new Date(object.last_dial_success) : undefined,
      last_dial_failure: isSet(object.last_dial_failure) ? new Date(object.last_dial_failure) : undefined,
      dial_failures: isSet(object.dial_failures) ? Number(object.dial_failures) : 0
    };
  },
  toSDK(message: PeerAddressInfo): PeerAddressInfoSDKType {
    const obj: any = {};
    obj.address = message.address;
    message.lastDialSuccess !== undefined && (obj.last_dial_success = message.lastDialSuccess ?? undefined);
    message.lastDialFailure !== undefined && (obj.last_dial_failure = message.lastDialFailure ?? undefined);
    obj.dial_failures = message.dialFailures;
    return obj;
  }
};