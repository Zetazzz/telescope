import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "osmosis.twap.v1beta1";
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
export interface TwapRecord {
  poolId: bigint;
  /** Lexicographically smaller denom of the pair */
  asset0Denom: string;
  /** Lexicographically larger denom of the pair */
  asset1Denom: string;
  /** height this record corresponds to, for debugging purposes */
  height: bigint;
  /**
   * This field should only exist until we have a global registry in the state
   * machine, mapping prior block heights within {TIME RANGE} to times.
   */
  time?: Date;
  /**
   * We store the last spot prices in the struct, so that we can interpolate
   * accumulator values for times between when accumulator records are stored.
   */
  p0LastSpotPrice: string;
  p1LastSpotPrice: string;
  p0ArithmeticTwapAccumulator: string;
  p1ArithmeticTwapAccumulator: string;
  /**
   * This field contains the time in which the last spot price error occured.
   * It is used to alert the caller if they are getting a potentially erroneous
   * TWAP, due to an unforeseen underlying error.
   */
  lastErrorTime?: Date;
}
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
export interface TwapRecordSDKType {
  pool_id: bigint;
  asset0_denom: string;
  asset1_denom: string;
  height: bigint;
  time?: Date;
  p0_last_spot_price: string;
  p1_last_spot_price: string;
  p0_arithmetic_twap_accumulator: string;
  p1_arithmetic_twap_accumulator: string;
  last_error_time?: Date;
}
function createBaseTwapRecord(): TwapRecord {
  return {
    poolId: BigInt(0),
    asset0Denom: "",
    asset1Denom: "",
    height: BigInt(0),
    time: undefined,
    p0LastSpotPrice: "",
    p1LastSpotPrice: "",
    p0ArithmeticTwapAccumulator: "",
    p1ArithmeticTwapAccumulator: "",
    lastErrorTime: undefined
  };
}
export const TwapRecord = {
  encode(message: TwapRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.asset0Denom !== "") {
      writer.uint32(18).string(message.asset0Denom);
    }
    if (message.asset1Denom !== "") {
      writer.uint32(26).string(message.asset1Denom);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(32).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(42).fork()).ldelim();
    }
    if (message.p0LastSpotPrice !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.p0LastSpotPrice, 18).atomics);
    }
    if (message.p1LastSpotPrice !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.p1LastSpotPrice, 18).atomics);
    }
    if (message.p0ArithmeticTwapAccumulator !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.p0ArithmeticTwapAccumulator, 18).atomics);
    }
    if (message.p1ArithmeticTwapAccumulator !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.p1ArithmeticTwapAccumulator, 18).atomics);
    }
    if (message.lastErrorTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastErrorTime), writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TwapRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTwapRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.asset0Denom = reader.string();
          break;
        case 3:
          message.asset1Denom = reader.string();
          break;
        case 4:
          message.height = reader.int64();
          break;
        case 5:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.p0LastSpotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.p1LastSpotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.p0ArithmeticTwapAccumulator = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.p1ArithmeticTwapAccumulator = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.lastErrorTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TwapRecord {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      asset0Denom: isSet(object.asset0Denom) ? String(object.asset0Denom) : "",
      asset1Denom: isSet(object.asset1Denom) ? String(object.asset1Denom) : "",
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      time: isSet(object.time) ? new Date(object.time) : undefined,
      p0LastSpotPrice: isSet(object.p0LastSpotPrice) ? String(object.p0LastSpotPrice) : "",
      p1LastSpotPrice: isSet(object.p1LastSpotPrice) ? String(object.p1LastSpotPrice) : "",
      p0ArithmeticTwapAccumulator: isSet(object.p0ArithmeticTwapAccumulator) ? String(object.p0ArithmeticTwapAccumulator) : "",
      p1ArithmeticTwapAccumulator: isSet(object.p1ArithmeticTwapAccumulator) ? String(object.p1ArithmeticTwapAccumulator) : "",
      lastErrorTime: isSet(object.lastErrorTime) ? new Date(object.lastErrorTime) : undefined
    };
  },
  toJSON(message: TwapRecord): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.asset0Denom !== undefined && (obj.asset0Denom = message.asset0Denom);
    message.asset1Denom !== undefined && (obj.asset1Denom = message.asset1Denom);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.p0LastSpotPrice !== undefined && (obj.p0LastSpotPrice = message.p0LastSpotPrice);
    message.p1LastSpotPrice !== undefined && (obj.p1LastSpotPrice = message.p1LastSpotPrice);
    message.p0ArithmeticTwapAccumulator !== undefined && (obj.p0ArithmeticTwapAccumulator = message.p0ArithmeticTwapAccumulator);
    message.p1ArithmeticTwapAccumulator !== undefined && (obj.p1ArithmeticTwapAccumulator = message.p1ArithmeticTwapAccumulator);
    message.lastErrorTime !== undefined && (obj.lastErrorTime = message.lastErrorTime.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<TwapRecord>): TwapRecord {
    const message = createBaseTwapRecord();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.asset0Denom = object.asset0Denom ?? "";
    message.asset1Denom = object.asset1Denom ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? undefined;
    message.p0LastSpotPrice = object.p0LastSpotPrice ?? "";
    message.p1LastSpotPrice = object.p1LastSpotPrice ?? "";
    message.p0ArithmeticTwapAccumulator = object.p0ArithmeticTwapAccumulator ?? "";
    message.p1ArithmeticTwapAccumulator = object.p1ArithmeticTwapAccumulator ?? "";
    message.lastErrorTime = object.lastErrorTime ?? undefined;
    return message;
  },
  fromSDK(object: TwapRecordSDKType): TwapRecord {
    return {
      poolId: object?.pool_id,
      asset0Denom: object?.asset0_denom,
      asset1Denom: object?.asset1_denom,
      height: object?.height,
      time: object.time ?? undefined,
      p0LastSpotPrice: object?.p0_last_spot_price,
      p1LastSpotPrice: object?.p1_last_spot_price,
      p0ArithmeticTwapAccumulator: object?.p0_arithmetic_twap_accumulator,
      p1ArithmeticTwapAccumulator: object?.p1_arithmetic_twap_accumulator,
      lastErrorTime: object.last_error_time ?? undefined
    };
  },
  fromSDKJSON(object: any): TwapRecordSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      asset0_denom: isSet(object.asset0_denom) ? String(object.asset0_denom) : "",
      asset1_denom: isSet(object.asset1_denom) ? String(object.asset1_denom) : "",
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      time: isSet(object.time) ? new Date(object.time) : undefined,
      p0_last_spot_price: isSet(object.p0_last_spot_price) ? String(object.p0_last_spot_price) : "",
      p1_last_spot_price: isSet(object.p1_last_spot_price) ? String(object.p1_last_spot_price) : "",
      p0_arithmetic_twap_accumulator: isSet(object.p0_arithmetic_twap_accumulator) ? String(object.p0_arithmetic_twap_accumulator) : "",
      p1_arithmetic_twap_accumulator: isSet(object.p1_arithmetic_twap_accumulator) ? String(object.p1_arithmetic_twap_accumulator) : "",
      last_error_time: isSet(object.last_error_time) ? new Date(object.last_error_time) : undefined
    };
  },
  toSDK(message: TwapRecord): TwapRecordSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.asset0_denom = message.asset0Denom;
    obj.asset1_denom = message.asset1Denom;
    obj.height = message.height;
    message.time !== undefined && (obj.time = message.time ?? undefined);
    obj.p0_last_spot_price = message.p0LastSpotPrice;
    obj.p1_last_spot_price = message.p1LastSpotPrice;
    obj.p0_arithmetic_twap_accumulator = message.p0ArithmeticTwapAccumulator;
    obj.p1_arithmetic_twap_accumulator = message.p1ArithmeticTwapAccumulator;
    message.lastErrorTime !== undefined && (obj.last_error_time = message.lastErrorTime ?? undefined);
    return obj;
  }
};