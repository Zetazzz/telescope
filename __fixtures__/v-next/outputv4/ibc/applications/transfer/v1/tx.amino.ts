import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightSDKType } from "../../../core/client/v1/client";
import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../../helpers";
import { MsgTransfer, MsgTransferSDKType } from "./tx";
export interface MsgTransferAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgTransfer";
  value: {
    source_port: string;
    source_channel: string;
    token: {
      denom: string;
      amount: string;
    };
    sender: string;
    receiver: string;
    timeout_height: AminoHeight;
    timeout_timestamp: string;
  };
}
export const AminoConverter = {
  "/ibc.applications.transfer.v1.MsgTransfer": {
    aminoType: "cosmos-sdk/MsgTransfer",
    toAmino: ({
      sourcePort,
      sourceChannel,
      token,
      sender,
      receiver,
      timeoutHeight,
      timeoutTimestamp
    }: MsgTransfer): MsgTransferAminoType["value"] => {
      return {
        source_port: sourcePort,
        source_channel: sourceChannel,
        token: {
          denom: token.denom,
          amount: token.amount
        },
        sender,
        receiver,
        timeout_height: timeoutHeight ? {
          revision_height: omitDefault(timeoutHeight.revisionHeight)?.toString(),
          revision_number: omitDefault(timeoutHeight.revisionNumber)?.toString()
        } : {},
        timeout_timestamp: timeoutTimestamp.toString()
      };
    },
    fromAmino: ({
      source_port,
      source_channel,
      token,
      sender,
      receiver,
      timeout_height,
      timeout_timestamp
    }: MsgTransferAminoType["value"]): MsgTransfer => {
      return {
        sourcePort: source_port,
        sourceChannel: source_channel,
        token: {
          denom: token.denom,
          amount: token.amount
        },
        sender,
        receiver,
        timeoutHeight: timeout_height ? {
          revisionHeight: BigInt(timeout_height.revision_height || "0", true),
          revisionNumber: BigInt(timeout_height.revision_number || "0", true)
        } : undefined,
        timeoutTimestamp: BigInt(timeout_timestamp)
      };
    }
  }
};