import { Params, ParamsSDKType } from "./params";
import { SuperfluidAsset, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordSDKType, SuperfluidIntermediaryAccount, SuperfluidIntermediaryAccountSDKType, LockIdIntermediaryAccountConnection, LockIdIntermediaryAccountConnectionSDKType } from "./superfluid";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../helpers";
export const protobufPackage = "osmosis.superfluid";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  params?: Params;
  /**
   * superfluid_assets defines the registered superfluid assets that have been
   * registered via governance.
   */
  superfluidAssets: SuperfluidAsset[];
  /**
   * osmo_equivalent_multipliers is the records of osmo equivalent amount of
   * each superfluid registered pool, updated every epoch.
   */
  osmoEquivalentMultipliers: OsmoEquivalentMultiplierRecord[];
  /**
   * intermediary_accounts is a secondary account for superfluid staking that
   * plays an intermediary role between validators and the delegators.
   */
  intermediaryAccounts: SuperfluidIntermediaryAccount[];
  intemediaryAccountConnections: LockIdIntermediaryAccountConnection[];
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  superfluid_assets: SuperfluidAssetSDKType[];
  osmo_equivalent_multipliers: OsmoEquivalentMultiplierRecordSDKType[];
  intermediary_accounts: SuperfluidIntermediaryAccountSDKType[];
  intemediary_account_connections: LockIdIntermediaryAccountConnectionSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    superfluidAssets: [],
    osmoEquivalentMultipliers: [],
    intermediaryAccounts: [],
    intemediaryAccountConnections: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.superfluidAssets) {
      SuperfluidAsset.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.osmoEquivalentMultipliers) {
      OsmoEquivalentMultiplierRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.intermediaryAccounts) {
      SuperfluidIntermediaryAccount.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.intemediaryAccountConnections) {
      LockIdIntermediaryAccountConnection.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.superfluidAssets.push(SuperfluidAsset.decode(reader, reader.uint32()));
          break;
        case 3:
          message.osmoEquivalentMultipliers.push(OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32()));
          break;
        case 4:
          message.intermediaryAccounts.push(SuperfluidIntermediaryAccount.decode(reader, reader.uint32()));
          break;
        case 5:
          message.intemediaryAccountConnections.push(LockIdIntermediaryAccountConnection.decode(reader, reader.uint32()));
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
      superfluidAssets: Array.isArray(object?.superfluidAssets) ? object.superfluidAssets.map((e: any) => SuperfluidAsset.fromJSON(e)) : [],
      osmoEquivalentMultipliers: Array.isArray(object?.osmoEquivalentMultipliers) ? object.osmoEquivalentMultipliers.map((e: any) => OsmoEquivalentMultiplierRecord.fromJSON(e)) : [],
      intermediaryAccounts: Array.isArray(object?.intermediaryAccounts) ? object.intermediaryAccounts.map((e: any) => SuperfluidIntermediaryAccount.fromJSON(e)) : [],
      intemediaryAccountConnections: Array.isArray(object?.intemediaryAccountConnections) ? object.intemediaryAccountConnections.map((e: any) => LockIdIntermediaryAccountConnection.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.superfluidAssets) {
      obj.superfluidAssets = message.superfluidAssets.map(e => e ? SuperfluidAsset.toJSON(e) : undefined);
    } else {
      obj.superfluidAssets = [];
    }
    if (message.osmoEquivalentMultipliers) {
      obj.osmoEquivalentMultipliers = message.osmoEquivalentMultipliers.map(e => e ? OsmoEquivalentMultiplierRecord.toJSON(e) : undefined);
    } else {
      obj.osmoEquivalentMultipliers = [];
    }
    if (message.intermediaryAccounts) {
      obj.intermediaryAccounts = message.intermediaryAccounts.map(e => e ? SuperfluidIntermediaryAccount.toJSON(e) : undefined);
    } else {
      obj.intermediaryAccounts = [];
    }
    if (message.intemediaryAccountConnections) {
      obj.intemediaryAccountConnections = message.intemediaryAccountConnections.map(e => e ? LockIdIntermediaryAccountConnection.toJSON(e) : undefined);
    } else {
      obj.intemediaryAccountConnections = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.superfluidAssets = object.superfluidAssets?.map(e => SuperfluidAsset.fromPartial(e)) || [];
    message.osmoEquivalentMultipliers = object.osmoEquivalentMultipliers?.map(e => OsmoEquivalentMultiplierRecord.fromPartial(e)) || [];
    message.intermediaryAccounts = object.intermediaryAccounts?.map(e => SuperfluidIntermediaryAccount.fromPartial(e)) || [];
    message.intemediaryAccountConnections = object.intemediaryAccountConnections?.map(e => LockIdIntermediaryAccountConnection.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      superfluidAssets: Array.isArray(object?.superfluid_assets) ? object.superfluid_assets.map((e: any) => SuperfluidAsset.fromSDK(e)) : [],
      osmoEquivalentMultipliers: Array.isArray(object?.osmo_equivalent_multipliers) ? object.osmo_equivalent_multipliers.map((e: any) => OsmoEquivalentMultiplierRecord.fromSDK(e)) : [],
      intermediaryAccounts: Array.isArray(object?.intermediary_accounts) ? object.intermediary_accounts.map((e: any) => SuperfluidIntermediaryAccount.fromSDK(e)) : [],
      intemediaryAccountConnections: Array.isArray(object?.intemediary_account_connections) ? object.intemediary_account_connections.map((e: any) => LockIdIntermediaryAccountConnection.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.superfluidAssets) {
      obj.superfluid_assets = message.superfluidAssets.map(e => e ? SuperfluidAsset.toSDK(e) : undefined);
    } else {
      obj.superfluid_assets = [];
    }
    if (message.osmoEquivalentMultipliers) {
      obj.osmo_equivalent_multipliers = message.osmoEquivalentMultipliers.map(e => e ? OsmoEquivalentMultiplierRecord.toSDK(e) : undefined);
    } else {
      obj.osmo_equivalent_multipliers = [];
    }
    if (message.intermediaryAccounts) {
      obj.intermediary_accounts = message.intermediaryAccounts.map(e => e ? SuperfluidIntermediaryAccount.toSDK(e) : undefined);
    } else {
      obj.intermediary_accounts = [];
    }
    if (message.intemediaryAccountConnections) {
      obj.intemediary_account_connections = message.intemediaryAccountConnections.map(e => e ? LockIdIntermediaryAccountConnection.toSDK(e) : undefined);
    } else {
      obj.intemediary_account_connections = [];
    }
    return obj;
  }
};