import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp } from "../../helpers";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecord {
  poolId: bigint;
  /**
   * incentive_denom is the denom of the token being distributed as part of this
   * incentive record
   */
  incentiveDenom: string;
  /**
   * incentiveCreator is the address that created the incentive record. This
   * address does not have any special privileges – it is only kept to keep
   * incentive records created by different addresses separate.
   */
  incentiveCreatorAddr: string;
  /** incentive record body holds necessary */
  incentiveRecordBody?: IncentiveRecordBody;
  /**
   * min_uptime is the minimum uptime required for liquidity to qualify for this
   * incentive. It should be always be one of the supported uptimes in
   * types.SupportedUptimes
   */
  minUptime?: Duration;
}
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecordSDKType {
  pool_id: bigint;
  incentive_denom: string;
  incentive_creator_addr: string;
  incentive_record_body?: IncentiveRecordBodySDKType;
  min_uptime?: DurationSDKType;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBody {
  /** remaining_amount is the total amount of incentives to be distributed */
  remainingAmount: string;
  /** emission_rate is the incentive emission rate per second */
  emissionRate: string;
  /** start_time is the time when the incentive starts distributing */
  startTime?: Date;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBodySDKType {
  remaining_amount: string;
  emission_rate: string;
  start_time?: Date;
}
function createBaseIncentiveRecord(): IncentiveRecord {
  return {
    poolId: BigInt(0),
    incentiveDenom: "",
    incentiveCreatorAddr: "",
    incentiveRecordBody: undefined,
    minUptime: undefined
  };
}
export const IncentiveRecord = {
  encode(message: IncentiveRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.incentiveDenom !== "") {
      writer.uint32(18).string(message.incentiveDenom);
    }
    if (message.incentiveCreatorAddr !== "") {
      writer.uint32(26).string(message.incentiveCreatorAddr);
    }
    if (message.incentiveRecordBody !== undefined) {
      IncentiveRecordBody.encode(message.incentiveRecordBody, writer.uint32(34).fork()).ldelim();
    }
    if (message.minUptime !== undefined) {
      Duration.encode(message.minUptime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IncentiveRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentiveRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.incentiveDenom = reader.string();
          break;
        case 3:
          message.incentiveCreatorAddr = reader.string();
          break;
        case 4:
          message.incentiveRecordBody = IncentiveRecordBody.decode(reader, reader.uint32());
          break;
        case 5:
          message.minUptime = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IncentiveRecord {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      incentiveDenom: isSet(object.incentiveDenom) ? String(object.incentiveDenom) : "",
      incentiveCreatorAddr: isSet(object.incentiveCreatorAddr) ? String(object.incentiveCreatorAddr) : "",
      incentiveRecordBody: isSet(object.incentiveRecordBody) ? IncentiveRecordBody.fromJSON(object.incentiveRecordBody) : undefined,
      minUptime: isSet(object.minUptime) ? Duration.fromJSON(object.minUptime) : undefined
    };
  },
  toJSON(message: IncentiveRecord): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.incentiveDenom !== undefined && (obj.incentiveDenom = message.incentiveDenom);
    message.incentiveCreatorAddr !== undefined && (obj.incentiveCreatorAddr = message.incentiveCreatorAddr);
    message.incentiveRecordBody !== undefined && (obj.incentiveRecordBody = message.incentiveRecordBody ? IncentiveRecordBody.toJSON(message.incentiveRecordBody) : undefined);
    message.minUptime !== undefined && (obj.minUptime = message.minUptime ? Duration.toJSON(message.minUptime) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<IncentiveRecord>): IncentiveRecord {
    const message = createBaseIncentiveRecord();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.incentiveDenom = object.incentiveDenom ?? "";
    message.incentiveCreatorAddr = object.incentiveCreatorAddr ?? "";
    message.incentiveRecordBody = object.incentiveRecordBody !== undefined && object.incentiveRecordBody !== null ? IncentiveRecordBody.fromPartial(object.incentiveRecordBody) : undefined;
    message.minUptime = object.minUptime !== undefined && object.minUptime !== null ? Duration.fromPartial(object.minUptime) : undefined;
    return message;
  },
  fromSDK(object: IncentiveRecordSDKType): IncentiveRecord {
    return {
      poolId: object?.pool_id,
      incentiveDenom: object?.incentive_denom,
      incentiveCreatorAddr: object?.incentive_creator_addr,
      incentiveRecordBody: object.incentive_record_body ? IncentiveRecordBody.fromSDK(object.incentive_record_body) : undefined,
      minUptime: object.min_uptime ? Duration.fromSDK(object.min_uptime) : undefined
    };
  },
  fromSDKJSON(object: any): IncentiveRecordSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      incentive_denom: isSet(object.incentive_denom) ? String(object.incentive_denom) : "",
      incentive_creator_addr: isSet(object.incentive_creator_addr) ? String(object.incentive_creator_addr) : "",
      incentive_record_body: isSet(object.incentive_record_body) ? IncentiveRecordBody.fromSDKJSON(object.incentive_record_body) : undefined,
      min_uptime: isSet(object.min_uptime) ? Duration.fromSDKJSON(object.min_uptime) : undefined
    };
  },
  toSDK(message: IncentiveRecord): IncentiveRecordSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.incentive_denom = message.incentiveDenom;
    obj.incentive_creator_addr = message.incentiveCreatorAddr;
    message.incentiveRecordBody !== undefined && (obj.incentive_record_body = message.incentiveRecordBody ? IncentiveRecordBody.toSDK(message.incentiveRecordBody) : undefined);
    message.minUptime !== undefined && (obj.min_uptime = message.minUptime ? Duration.toSDK(message.minUptime) : undefined);
    return obj;
  }
};
function createBaseIncentiveRecordBody(): IncentiveRecordBody {
  return {
    remainingAmount: "",
    emissionRate: "",
    startTime: undefined
  };
}
export const IncentiveRecordBody = {
  encode(message: IncentiveRecordBody, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.remainingAmount !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.remainingAmount, 18).atomics);
    }
    if (message.emissionRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.emissionRate, 18).atomics);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IncentiveRecordBody {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentiveRecordBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remainingAmount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.emissionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IncentiveRecordBody {
    return {
      remainingAmount: isSet(object.remainingAmount) ? String(object.remainingAmount) : "",
      emissionRate: isSet(object.emissionRate) ? String(object.emissionRate) : "",
      startTime: isSet(object.startTime) ? new Date(object.startTime) : undefined
    };
  },
  toJSON(message: IncentiveRecordBody): unknown {
    const obj: any = {};
    message.remainingAmount !== undefined && (obj.remainingAmount = message.remainingAmount);
    message.emissionRate !== undefined && (obj.emissionRate = message.emissionRate);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<IncentiveRecordBody>): IncentiveRecordBody {
    const message = createBaseIncentiveRecordBody();
    message.remainingAmount = object.remainingAmount ?? "";
    message.emissionRate = object.emissionRate ?? "";
    message.startTime = object.startTime ?? undefined;
    return message;
  },
  fromSDK(object: IncentiveRecordBodySDKType): IncentiveRecordBody {
    return {
      remainingAmount: object?.remaining_amount,
      emissionRate: object?.emission_rate,
      startTime: object.start_time ?? undefined
    };
  },
  fromSDKJSON(object: any): IncentiveRecordBodySDKType {
    return {
      remaining_amount: isSet(object.remaining_amount) ? String(object.remaining_amount) : "",
      emission_rate: isSet(object.emission_rate) ? String(object.emission_rate) : "",
      start_time: isSet(object.start_time) ? new Date(object.start_time) : undefined
    };
  },
  toSDK(message: IncentiveRecordBody): IncentiveRecordBodySDKType {
    const obj: any = {};
    obj.remaining_amount = message.remainingAmount;
    obj.emission_rate = message.emissionRate;
    message.startTime !== undefined && (obj.start_time = message.startTime ?? undefined);
    return obj;
  }
};