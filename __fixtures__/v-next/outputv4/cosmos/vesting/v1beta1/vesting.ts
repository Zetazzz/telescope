import { BaseAccount, BaseAccountSDKType } from "../../auth/v1beta1/auth";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.vesting.v1beta1";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccount {
  baseAccount?: BaseAccount;
  originalVesting: Coin[];
  delegatedFree: Coin[];
  delegatedVesting: Coin[];
  endTime: bigint;
}
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccountSDKType {
  base_account?: BaseAccountSDKType;
  original_vesting: CoinSDKType[];
  delegated_free: CoinSDKType[];
  delegated_vesting: CoinSDKType[];
  end_time: bigint;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccount {
  baseVestingAccount?: BaseVestingAccount;
  startTime: bigint;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
  start_time: bigint;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccount {
  baseVestingAccount?: BaseVestingAccount;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface Period {
  length: bigint;
  amount: Coin[];
}
/** Period defines a length of time and amount of coins that will vest. */
export interface PeriodSDKType {
  length: bigint;
  amount: CoinSDKType[];
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccount {
  baseVestingAccount?: BaseVestingAccount;
  startTime: bigint;
  vestingPeriods: Period[];
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
  start_time: bigint;
  vesting_periods: PeriodSDKType[];
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccount {
  baseVestingAccount?: BaseVestingAccount;
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
}
function createBaseBaseVestingAccount(): BaseVestingAccount {
  return {
    baseAccount: undefined,
    originalVesting: [],
    delegatedFree: [],
    delegatedVesting: [],
    endTime: BigInt(0)
  };
}
export const BaseVestingAccount = {
  encode(message: BaseVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.originalVesting) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegatedFree) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegatedVesting) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== BigInt(0)) {
      writer.uint32(40).int64(message.endTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BaseVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.originalVesting.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.delegatedFree.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.delegatedVesting.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.endTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BaseVestingAccount {
    return {
      baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : undefined,
      originalVesting: Array.isArray(object?.originalVesting) ? object.originalVesting.map((e: any) => Coin.fromJSON(e)) : [],
      delegatedFree: Array.isArray(object?.delegatedFree) ? object.delegatedFree.map((e: any) => Coin.fromJSON(e)) : [],
      delegatedVesting: Array.isArray(object?.delegatedVesting) ? object.delegatedVesting.map((e: any) => Coin.fromJSON(e)) : [],
      endTime: isSet(object.endTime) ? BigInt(object.endTime.toString()) : BigInt(0)
    };
  },
  toJSON(message: BaseVestingAccount): unknown {
    const obj: any = {};
    message.baseAccount !== undefined && (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
    if (message.originalVesting) {
      obj.originalVesting = message.originalVesting.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.originalVesting = [];
    }
    if (message.delegatedFree) {
      obj.delegatedFree = message.delegatedFree.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.delegatedFree = [];
    }
    if (message.delegatedVesting) {
      obj.delegatedVesting = message.delegatedVesting.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.delegatedVesting = [];
    }
    message.endTime !== undefined && (obj.endTime = (message.endTime || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<BaseVestingAccount>): BaseVestingAccount {
    const message = createBaseBaseVestingAccount();
    message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
    message.originalVesting = object.originalVesting?.map(e => Coin.fromPartial(e)) || [];
    message.delegatedFree = object.delegatedFree?.map(e => Coin.fromPartial(e)) || [];
    message.delegatedVesting = object.delegatedVesting?.map(e => Coin.fromPartial(e)) || [];
    message.endTime = object.endTime !== undefined && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: BaseVestingAccountSDKType): BaseVestingAccount {
    return {
      baseAccount: object.base_account ? BaseAccount.fromSDK(object.base_account) : undefined,
      originalVesting: Array.isArray(object?.original_vesting) ? object.original_vesting.map((e: any) => Coin.fromSDK(e)) : [],
      delegatedFree: Array.isArray(object?.delegated_free) ? object.delegated_free.map((e: any) => Coin.fromSDK(e)) : [],
      delegatedVesting: Array.isArray(object?.delegated_vesting) ? object.delegated_vesting.map((e: any) => Coin.fromSDK(e)) : [],
      endTime: object?.end_time
    };
  },
  fromSDKJSON(object: any): BaseVestingAccountSDKType {
    return {
      base_account: isSet(object.base_account) ? BaseAccount.fromSDKJSON(object.base_account) : undefined,
      original_vesting: Array.isArray(object?.original_vesting) ? object.original_vesting.map((e: any) => Coin.fromSDKJSON(e)) : [],
      delegated_free: Array.isArray(object?.delegated_free) ? object.delegated_free.map((e: any) => Coin.fromSDKJSON(e)) : [],
      delegated_vesting: Array.isArray(object?.delegated_vesting) ? object.delegated_vesting.map((e: any) => Coin.fromSDKJSON(e)) : [],
      end_time: isSet(object.end_time) ? BigInt(object.end_time.toString()) : BigInt(0)
    };
  },
  toSDK(message: BaseVestingAccount): BaseVestingAccountSDKType {
    const obj: any = {};
    message.baseAccount !== undefined && (obj.base_account = message.baseAccount ? BaseAccount.toSDK(message.baseAccount) : undefined);
    if (message.originalVesting) {
      obj.original_vesting = message.originalVesting.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.original_vesting = [];
    }
    if (message.delegatedFree) {
      obj.delegated_free = message.delegatedFree.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.delegated_free = [];
    }
    if (message.delegatedVesting) {
      obj.delegated_vesting = message.delegatedVesting.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.delegated_vesting = [];
    }
    obj.end_time = message.endTime;
    return obj;
  }
};
function createBaseContinuousVestingAccount(): ContinuousVestingAccount {
  return {
    baseVestingAccount: undefined,
    startTime: BigInt(0)
  };
}
export const ContinuousVestingAccount = {
  encode(message: ContinuousVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(16).int64(message.startTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContinuousVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContinuousVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.startTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContinuousVestingAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined,
      startTime: isSet(object.startTime) ? BigInt(object.startTime.toString()) : BigInt(0)
    };
  },
  toJSON(message: ContinuousVestingAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount ? BaseVestingAccount.toJSON(message.baseVestingAccount) : undefined);
    message.startTime !== undefined && (obj.startTime = (message.startTime || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ContinuousVestingAccount>): ContinuousVestingAccount {
    const message = createBaseContinuousVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
    message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: ContinuousVestingAccountSDKType): ContinuousVestingAccount {
    return {
      baseVestingAccount: object.base_vesting_account ? BaseVestingAccount.fromSDK(object.base_vesting_account) : undefined,
      startTime: object?.start_time
    };
  },
  fromSDKJSON(object: any): ContinuousVestingAccountSDKType {
    return {
      base_vesting_account: isSet(object.base_vesting_account) ? BaseVestingAccount.fromSDKJSON(object.base_vesting_account) : undefined,
      start_time: isSet(object.start_time) ? BigInt(object.start_time.toString()) : BigInt(0)
    };
  },
  toSDK(message: ContinuousVestingAccount): ContinuousVestingAccountSDKType {
    const obj: any = {};
    message.baseVestingAccount !== undefined && (obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toSDK(message.baseVestingAccount) : undefined);
    obj.start_time = message.startTime;
    return obj;
  }
};
function createBaseDelayedVestingAccount(): DelayedVestingAccount {
  return {
    baseVestingAccount: undefined
  };
}
export const DelayedVestingAccount = {
  encode(message: DelayedVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelayedVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelayedVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelayedVestingAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined
    };
  },
  toJSON(message: DelayedVestingAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount ? BaseVestingAccount.toJSON(message.baseVestingAccount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<DelayedVestingAccount>): DelayedVestingAccount {
    const message = createBaseDelayedVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
    return message;
  },
  fromSDK(object: DelayedVestingAccountSDKType): DelayedVestingAccount {
    return {
      baseVestingAccount: object.base_vesting_account ? BaseVestingAccount.fromSDK(object.base_vesting_account) : undefined
    };
  },
  fromSDKJSON(object: any): DelayedVestingAccountSDKType {
    return {
      base_vesting_account: isSet(object.base_vesting_account) ? BaseVestingAccount.fromSDKJSON(object.base_vesting_account) : undefined
    };
  },
  toSDK(message: DelayedVestingAccount): DelayedVestingAccountSDKType {
    const obj: any = {};
    message.baseVestingAccount !== undefined && (obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toSDK(message.baseVestingAccount) : undefined);
    return obj;
  }
};
function createBasePeriod(): Period {
  return {
    length: BigInt(0),
    amount: []
  };
}
export const Period = {
  encode(message: Period, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.length !== BigInt(0)) {
      writer.uint32(8).int64(message.length);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Period {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.length = reader.int64();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Period {
    return {
      length: isSet(object.length) ? BigInt(object.length.toString()) : BigInt(0),
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: Period): unknown {
    const obj: any = {};
    message.length !== undefined && (obj.length = (message.length || BigInt(0)).toString());
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Period>): Period {
    const message = createBasePeriod();
    message.length = object.length !== undefined && object.length !== null ? BigInt(object.length.toString()) : BigInt(0);
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: PeriodSDKType): Period {
    return {
      length: object?.length,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): PeriodSDKType {
    return {
      length: isSet(object.length) ? BigInt(object.length.toString()) : BigInt(0),
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Period): PeriodSDKType {
    const obj: any = {};
    obj.length = message.length;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  }
};
function createBasePeriodicVestingAccount(): PeriodicVestingAccount {
  return {
    baseVestingAccount: undefined,
    startTime: BigInt(0),
    vestingPeriods: []
  };
}
export const PeriodicVestingAccount = {
  encode(message: PeriodicVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(16).int64(message.startTime);
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PeriodicVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodicVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.startTime = reader.int64();
          break;
        case 3:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PeriodicVestingAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined,
      startTime: isSet(object.startTime) ? BigInt(object.startTime.toString()) : BigInt(0),
      vestingPeriods: Array.isArray(object?.vestingPeriods) ? object.vestingPeriods.map((e: any) => Period.fromJSON(e)) : []
    };
  },
  toJSON(message: PeriodicVestingAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount ? BaseVestingAccount.toJSON(message.baseVestingAccount) : undefined);
    message.startTime !== undefined && (obj.startTime = (message.startTime || BigInt(0)).toString());
    if (message.vestingPeriods) {
      obj.vestingPeriods = message.vestingPeriods.map(e => e ? Period.toJSON(e) : undefined);
    } else {
      obj.vestingPeriods = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<PeriodicVestingAccount>): PeriodicVestingAccount {
    const message = createBasePeriodicVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
    message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    message.vestingPeriods = object.vestingPeriods?.map(e => Period.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: PeriodicVestingAccountSDKType): PeriodicVestingAccount {
    return {
      baseVestingAccount: object.base_vesting_account ? BaseVestingAccount.fromSDK(object.base_vesting_account) : undefined,
      startTime: object?.start_time,
      vestingPeriods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e: any) => Period.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): PeriodicVestingAccountSDKType {
    return {
      base_vesting_account: isSet(object.base_vesting_account) ? BaseVestingAccount.fromSDKJSON(object.base_vesting_account) : undefined,
      start_time: isSet(object.start_time) ? BigInt(object.start_time.toString()) : BigInt(0),
      vesting_periods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e: any) => Period.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: PeriodicVestingAccount): PeriodicVestingAccountSDKType {
    const obj: any = {};
    message.baseVestingAccount !== undefined && (obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toSDK(message.baseVestingAccount) : undefined);
    obj.start_time = message.startTime;
    if (message.vestingPeriods) {
      obj.vesting_periods = message.vestingPeriods.map(e => e ? Period.toSDK(e) : undefined);
    } else {
      obj.vesting_periods = [];
    }
    return obj;
  }
};
function createBasePermanentLockedAccount(): PermanentLockedAccount {
  return {
    baseVestingAccount: undefined
  };
}
export const PermanentLockedAccount = {
  encode(message: PermanentLockedAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PermanentLockedAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermanentLockedAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PermanentLockedAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined
    };
  },
  toJSON(message: PermanentLockedAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount ? BaseVestingAccount.toJSON(message.baseVestingAccount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<PermanentLockedAccount>): PermanentLockedAccount {
    const message = createBasePermanentLockedAccount();
    message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
    return message;
  },
  fromSDK(object: PermanentLockedAccountSDKType): PermanentLockedAccount {
    return {
      baseVestingAccount: object.base_vesting_account ? BaseVestingAccount.fromSDK(object.base_vesting_account) : undefined
    };
  },
  fromSDKJSON(object: any): PermanentLockedAccountSDKType {
    return {
      base_vesting_account: isSet(object.base_vesting_account) ? BaseVestingAccount.fromSDKJSON(object.base_vesting_account) : undefined
    };
  },
  toSDK(message: PermanentLockedAccount): PermanentLockedAccountSDKType {
    const obj: any = {};
    message.baseVestingAccount !== undefined && (obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toSDK(message.baseVestingAccount) : undefined);
    return obj;
  }
};