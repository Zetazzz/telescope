import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../helpers";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
/**
 * Position contains position's id, address, pool id, lower tick, upper tick
 * join time, and liquidity.
 */
export interface Position {
  positionId: bigint;
  address: string;
  poolId: bigint;
  lowerTick: bigint;
  upperTick: bigint;
  joinTime?: Date;
  liquidity: string;
}
/**
 * Position contains position's id, address, pool id, lower tick, upper tick
 * join time, and liquidity.
 */
export interface PositionSDKType {
  position_id: bigint;
  address: string;
  pool_id: bigint;
  lower_tick: bigint;
  upper_tick: bigint;
  join_time?: Date;
  liquidity: string;
}
export interface PositionWithUnderlyingAssetBreakdown {
  position?: Position;
  asset0?: Coin;
  asset1?: Coin;
}
export interface PositionWithUnderlyingAssetBreakdownSDKType {
  position?: PositionSDKType;
  asset0?: CoinSDKType;
  asset1?: CoinSDKType;
}
function createBasePosition(): Position {
  return {
    positionId: BigInt(0),
    address: "",
    poolId: BigInt(0),
    lowerTick: BigInt(0),
    upperTick: BigInt(0),
    joinTime: undefined,
    liquidity: ""
  };
}
export const Position = {
  encode(message: Position, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.lowerTick !== BigInt(0)) {
      writer.uint32(32).int64(message.lowerTick);
    }
    if (message.upperTick !== BigInt(0)) {
      writer.uint32(40).int64(message.upperTick);
    }
    if (message.joinTime !== undefined) {
      Timestamp.encode(toTimestamp(message.joinTime), writer.uint32(50).fork()).ldelim();
    }
    if (message.liquidity !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.liquidity, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Position {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.lowerTick = reader.int64();
          break;
        case 5:
          message.upperTick = reader.int64();
          break;
        case 6:
          message.joinTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.liquidity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Position {
    return {
      positionId: isSet(object.positionId) ? BigInt(object.positionId.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lowerTick: isSet(object.lowerTick) ? BigInt(object.lowerTick.toString()) : BigInt(0),
      upperTick: isSet(object.upperTick) ? BigInt(object.upperTick.toString()) : BigInt(0),
      joinTime: isSet(object.joinTime) ? new Date(object.joinTime) : undefined,
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : ""
    };
  },
  toJSON(message: Position): unknown {
    const obj: any = {};
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lowerTick !== undefined && (obj.lowerTick = (message.lowerTick || BigInt(0)).toString());
    message.upperTick !== undefined && (obj.upperTick = (message.upperTick || BigInt(0)).toString());
    message.joinTime !== undefined && (obj.joinTime = message.joinTime.toISOString());
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    return obj;
  },
  fromPartial(object: DeepPartial<Position>): Position {
    const message = createBasePosition();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? BigInt(object.positionId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lowerTick = object.lowerTick !== undefined && object.lowerTick !== null ? BigInt(object.lowerTick.toString()) : BigInt(0);
    message.upperTick = object.upperTick !== undefined && object.upperTick !== null ? BigInt(object.upperTick.toString()) : BigInt(0);
    message.joinTime = object.joinTime ?? undefined;
    message.liquidity = object.liquidity ?? "";
    return message;
  },
  fromSDK(object: PositionSDKType): Position {
    return {
      positionId: object?.position_id,
      address: object?.address,
      poolId: object?.pool_id,
      lowerTick: object?.lower_tick,
      upperTick: object?.upper_tick,
      joinTime: object.join_time ?? undefined,
      liquidity: object?.liquidity
    };
  },
  fromSDKJSON(object: any): PositionSDKType {
    return {
      position_id: isSet(object.position_id) ? BigInt(object.position_id.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      lower_tick: isSet(object.lower_tick) ? BigInt(object.lower_tick.toString()) : BigInt(0),
      upper_tick: isSet(object.upper_tick) ? BigInt(object.upper_tick.toString()) : BigInt(0),
      join_time: isSet(object.join_time) ? new Date(object.join_time) : undefined,
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : ""
    };
  },
  toSDK(message: Position): PositionSDKType {
    const obj: any = {};
    obj.position_id = message.positionId;
    obj.address = message.address;
    obj.pool_id = message.poolId;
    obj.lower_tick = message.lowerTick;
    obj.upper_tick = message.upperTick;
    message.joinTime !== undefined && (obj.join_time = message.joinTime ?? undefined);
    obj.liquidity = message.liquidity;
    return obj;
  }
};
function createBasePositionWithUnderlyingAssetBreakdown(): PositionWithUnderlyingAssetBreakdown {
  return {
    position: undefined,
    asset0: undefined,
    asset1: undefined
  };
}
export const PositionWithUnderlyingAssetBreakdown = {
  encode(message: PositionWithUnderlyingAssetBreakdown, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.asset0 !== undefined) {
      Coin.encode(message.asset0, writer.uint32(18).fork()).ldelim();
    }
    if (message.asset1 !== undefined) {
      Coin.encode(message.asset1, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionWithUnderlyingAssetBreakdown {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionWithUnderlyingAssetBreakdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32());
          break;
        case 2:
          message.asset0 = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.asset1 = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PositionWithUnderlyingAssetBreakdown {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
      asset0: isSet(object.asset0) ? Coin.fromJSON(object.asset0) : undefined,
      asset1: isSet(object.asset1) ? Coin.fromJSON(object.asset1) : undefined
    };
  },
  toJSON(message: PositionWithUnderlyingAssetBreakdown): unknown {
    const obj: any = {};
    message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    message.asset0 !== undefined && (obj.asset0 = message.asset0 ? Coin.toJSON(message.asset0) : undefined);
    message.asset1 !== undefined && (obj.asset1 = message.asset1 ? Coin.toJSON(message.asset1) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<PositionWithUnderlyingAssetBreakdown>): PositionWithUnderlyingAssetBreakdown {
    const message = createBasePositionWithUnderlyingAssetBreakdown();
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    message.asset0 = object.asset0 !== undefined && object.asset0 !== null ? Coin.fromPartial(object.asset0) : undefined;
    message.asset1 = object.asset1 !== undefined && object.asset1 !== null ? Coin.fromPartial(object.asset1) : undefined;
    return message;
  },
  fromSDK(object: PositionWithUnderlyingAssetBreakdownSDKType): PositionWithUnderlyingAssetBreakdown {
    return {
      position: object.position ? Position.fromSDK(object.position) : undefined,
      asset0: object.asset0 ? Coin.fromSDK(object.asset0) : undefined,
      asset1: object.asset1 ? Coin.fromSDK(object.asset1) : undefined
    };
  },
  fromSDKJSON(object: any): PositionWithUnderlyingAssetBreakdownSDKType {
    return {
      position: isSet(object.position) ? Position.fromSDKJSON(object.position) : undefined,
      asset0: isSet(object.asset0) ? Coin.fromSDKJSON(object.asset0) : undefined,
      asset1: isSet(object.asset1) ? Coin.fromSDKJSON(object.asset1) : undefined
    };
  },
  toSDK(message: PositionWithUnderlyingAssetBreakdown): PositionWithUnderlyingAssetBreakdownSDKType {
    const obj: any = {};
    message.position !== undefined && (obj.position = message.position ? Position.toSDK(message.position) : undefined);
    message.asset0 !== undefined && (obj.asset0 = message.asset0 ? Coin.toSDK(message.asset0) : undefined);
    message.asset1 !== undefined && (obj.asset1 = message.asset1 ? Coin.toSDK(message.asset1) : undefined);
    return obj;
  }
};