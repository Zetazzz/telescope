import { DevFeeInfo, DevFeeInfoSDKType } from "./fees";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "evmos.fees.v1";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** module parameters */
  params?: Params;
  /** active registered contracts */
  devFeeInfos: DevFeeInfo[];
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  dev_fee_infos: DevFeeInfoSDKType[];
}
/** Params defines the fees module params */
export interface Params {
  /** parameter to enable fees */
  enableFees: boolean;
  /**
   * developer_shares defines the proportion of the transaction fees to be
   * distributed to the registered contract owner
   */
  developerShares: string;
  /**
   * developer_shares defines the proportion of the transaction fees to be
   * distributed to validators
   */
  validatorShares: string;
  /**
   * addr_derivation_cost_create defines the cost of address derivation for
   * verifying the contract deployer at fee registration
   */
  addrDerivationCostCreate: bigint;
  /** min_gas_price defines the minimum gas price value for cosmos and eth transactions */
  minGasPrice: string;
}
/** Params defines the fees module params */
export interface ParamsSDKType {
  enable_fees: boolean;
  developer_shares: string;
  validator_shares: string;
  addr_derivation_cost_create: bigint;
  min_gas_price: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    devFeeInfos: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.devFeeInfos) {
      DevFeeInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.devFeeInfos.push(DevFeeInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      devFeeInfos: Array.isArray(object?.devFeeInfos) ? object.devFeeInfos.map((e: any) => DevFeeInfo.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.devFeeInfos) {
      obj.devFeeInfos = message.devFeeInfos.map(e => e ? DevFeeInfo.toJSON(e) : undefined);
    } else {
      obj.devFeeInfos = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.devFeeInfos = object.devFeeInfos?.map(e => DevFeeInfo.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      devFeeInfos: Array.isArray(object?.dev_fee_infos) ? object.dev_fee_infos.map((e: any) => DevFeeInfo.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined,
      dev_fee_infos: Array.isArray(object?.dev_fee_infos) ? object.dev_fee_infos.map((e: any) => DevFeeInfo.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.devFeeInfos) {
      obj.dev_fee_infos = message.devFeeInfos.map(e => e ? DevFeeInfo.toSDK(e) : undefined);
    } else {
      obj.dev_fee_infos = [];
    }
    return obj;
  }
};
function createBaseParams(): Params {
  return {
    enableFees: false,
    developerShares: "",
    validatorShares: "",
    addrDerivationCostCreate: BigInt(0),
    minGasPrice: ""
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enableFees === true) {
      writer.uint32(8).bool(message.enableFees);
    }
    if (message.developerShares !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.developerShares, 18).atomics);
    }
    if (message.validatorShares !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.validatorShares, 18).atomics);
    }
    if (message.addrDerivationCostCreate !== BigInt(0)) {
      writer.uint32(32).uint64(message.addrDerivationCostCreate);
    }
    if (message.minGasPrice !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.minGasPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enableFees = reader.bool();
          break;
        case 2:
          message.developerShares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.validatorShares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.addrDerivationCostCreate = reader.uint64();
          break;
        case 5:
          message.minGasPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      enableFees: isSet(object.enableFees) ? Boolean(object.enableFees) : false,
      developerShares: isSet(object.developerShares) ? String(object.developerShares) : "",
      validatorShares: isSet(object.validatorShares) ? String(object.validatorShares) : "",
      addrDerivationCostCreate: isSet(object.addrDerivationCostCreate) ? BigInt(object.addrDerivationCostCreate.toString()) : BigInt(0),
      minGasPrice: isSet(object.minGasPrice) ? String(object.minGasPrice) : ""
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.enableFees !== undefined && (obj.enableFees = message.enableFees);
    message.developerShares !== undefined && (obj.developerShares = message.developerShares);
    message.validatorShares !== undefined && (obj.validatorShares = message.validatorShares);
    message.addrDerivationCostCreate !== undefined && (obj.addrDerivationCostCreate = (message.addrDerivationCostCreate || BigInt(0)).toString());
    message.minGasPrice !== undefined && (obj.minGasPrice = message.minGasPrice);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.enableFees = object.enableFees ?? false;
    message.developerShares = object.developerShares ?? "";
    message.validatorShares = object.validatorShares ?? "";
    message.addrDerivationCostCreate = object.addrDerivationCostCreate !== undefined && object.addrDerivationCostCreate !== null ? BigInt(object.addrDerivationCostCreate.toString()) : BigInt(0);
    message.minGasPrice = object.minGasPrice ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      enableFees: object?.enable_fees,
      developerShares: object?.developer_shares,
      validatorShares: object?.validator_shares,
      addrDerivationCostCreate: object?.addr_derivation_cost_create,
      minGasPrice: object?.min_gas_price
    };
  },
  fromSDKJSON(object: any): ParamsSDKType {
    return {
      enable_fees: isSet(object.enable_fees) ? Boolean(object.enable_fees) : false,
      developer_shares: isSet(object.developer_shares) ? String(object.developer_shares) : "",
      validator_shares: isSet(object.validator_shares) ? String(object.validator_shares) : "",
      addr_derivation_cost_create: isSet(object.addr_derivation_cost_create) ? BigInt(object.addr_derivation_cost_create.toString()) : BigInt(0),
      min_gas_price: isSet(object.min_gas_price) ? String(object.min_gas_price) : ""
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.enable_fees = message.enableFees;
    obj.developer_shares = message.developerShares;
    obj.validator_shares = message.validatorShares;
    obj.addr_derivation_cost_create = message.addrDerivationCostCreate;
    obj.min_gas_price = message.minGasPrice;
    return obj;
  }
};