import { GroupSpec, GroupSpecSDKType } from "../../deployment/v1beta2/groupspec";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "akash.market.v1beta2";
/** State is an enum which refers to state of order */
export enum Order_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** open - OrderOpen denotes state for order open */
  open = 1,
  /** active - OrderMatched denotes state for order matched */
  active = 2,
  /** closed - OrderClosed denotes state for order lost */
  closed = 3,
  UNRECOGNIZED = -1,
}
export const Order_StateSDKType = Order_State;
export function order_StateFromJSON(object: any): Order_State {
  switch (object) {
    case 0:
    case "invalid":
      return Order_State.invalid;
    case 1:
    case "open":
      return Order_State.open;
    case 2:
    case "active":
      return Order_State.active;
    case 3:
    case "closed":
      return Order_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Order_State.UNRECOGNIZED;
  }
}
export function order_StateToJSON(object: Order_State): string {
  switch (object) {
    case Order_State.invalid:
      return "invalid";
    case Order_State.open:
      return "open";
    case Order_State.active:
      return "active";
    case Order_State.closed:
      return "closed";
    case Order_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** OrderID stores owner and all other seq numbers */
export interface OrderID {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
}
/** OrderID stores owner and all other seq numbers */
export interface OrderIDSDKType {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
}
/** Order stores orderID, state of order and other details */
export interface Order {
  orderId?: OrderID;
  state: Order_State;
  spec?: GroupSpec;
  createdAt: bigint;
}
/** Order stores orderID, state of order and other details */
export interface OrderSDKType {
  order_id?: OrderIDSDKType;
  state: Order_State;
  spec?: GroupSpecSDKType;
  created_at: bigint;
}
/** OrderFilters defines flags for order list filter */
export interface OrderFilters {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  state: string;
}
/** OrderFilters defines flags for order list filter */
export interface OrderFiltersSDKType {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  state: string;
}
function createBaseOrderID(): OrderID {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0,
    oseq: 0
  };
}
export const OrderID = {
  encode(message: OrderID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OrderID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
          break;
        case 3:
          message.gseq = reader.uint32();
          break;
        case 4:
          message.oseq = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderID {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0),
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0
    };
  },
  toJSON(message: OrderID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || BigInt(0)).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    message.oseq !== undefined && (obj.oseq = Math.round(message.oseq));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<OrderID>, I>>(object: I): OrderID {
    const message = createBaseOrderID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    return message;
  },
  fromSDK(object: OrderIDSDKType): OrderID {
    return {
      owner: object?.owner,
      dseq: object?.dseq,
      gseq: object?.gseq,
      oseq: object?.oseq
    };
  },
  fromSDKJSON(object: any): OrderIDSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0),
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0
    };
  },
  toSDK(message: OrderID): OrderIDSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq;
    obj.gseq = message.gseq;
    obj.oseq = message.oseq;
    return obj;
  }
};
function createBaseOrder(): Order {
  return {
    orderId: undefined,
    state: 0,
    spec: undefined,
    createdAt: BigInt(0)
  };
}
export const Order = {
  encode(message: Order, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== undefined) {
      OrderID.encode(message.orderId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.spec !== undefined) {
      GroupSpec.encode(message.spec, writer.uint32(26).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Order {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = OrderID.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = (reader.int32() as any);
          break;
        case 3:
          message.spec = GroupSpec.decode(reader, reader.uint32());
          break;
        case 4:
          message.createdAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Order {
    return {
      orderId: isSet(object.orderId) ? OrderID.fromJSON(object.orderId) : undefined,
      state: isSet(object.state) ? order_StateFromJSON(object.state) : 0,
      spec: isSet(object.spec) ? GroupSpec.fromJSON(object.spec) : undefined,
      createdAt: isSet(object.createdAt) ? BigInt(object.createdAt.toString()) : BigInt(0)
    };
  },
  toJSON(message: Order): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId ? OrderID.toJSON(message.orderId) : undefined);
    message.state !== undefined && (obj.state = order_StateToJSON(message.state));
    message.spec !== undefined && (obj.spec = message.spec ? GroupSpec.toJSON(message.spec) : undefined);
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Order>, I>>(object: I): Order {
    const message = createBaseOrder();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? OrderID.fromPartial(object.orderId) : undefined;
    message.state = object.state ?? 0;
    message.spec = object.spec !== undefined && object.spec !== null ? GroupSpec.fromPartial(object.spec) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: OrderSDKType): Order {
    return {
      orderId: object.order_id ? OrderID.fromSDK(object.order_id) : undefined,
      state: isSet(object.state) ? order_StateFromJSON(object.state) : 0,
      spec: object.spec ? GroupSpec.fromSDK(object.spec) : undefined,
      createdAt: object?.created_at
    };
  },
  fromSDKJSON(object: any): OrderSDKType {
    return {
      order_id: isSet(object.order_id) ? OrderID.fromSDKJSON(object.order_id) : undefined,
      state: isSet(object.state) ? order_StateFromJSON(object.state) : 0,
      spec: isSet(object.spec) ? GroupSpec.fromSDKJSON(object.spec) : undefined,
      created_at: isSet(object.created_at) ? BigInt(object.created_at.toString()) : BigInt(0)
    };
  },
  toSDK(message: Order): OrderSDKType {
    const obj: any = {};
    message.orderId !== undefined && (obj.order_id = message.orderId ? OrderID.toSDK(message.orderId) : undefined);
    message.state !== undefined && (obj.state = order_StateToJSON(message.state));
    message.spec !== undefined && (obj.spec = message.spec ? GroupSpec.toSDK(message.spec) : undefined);
    obj.created_at = message.createdAt;
    return obj;
  }
};
function createBaseOrderFilters(): OrderFilters {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0,
    oseq: 0,
    state: ""
  };
}
export const OrderFilters = {
  encode(message: OrderFilters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    if (message.state !== "") {
      writer.uint32(42).string(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OrderFilters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderFilters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
          break;
        case 3:
          message.gseq = reader.uint32();
          break;
        case 4:
          message.oseq = reader.uint32();
          break;
        case 5:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderFilters {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0),
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      state: isSet(object.state) ? String(object.state) : ""
    };
  },
  toJSON(message: OrderFilters): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || BigInt(0)).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    message.oseq !== undefined && (obj.oseq = Math.round(message.oseq));
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<OrderFilters>, I>>(object: I): OrderFilters {
    const message = createBaseOrderFilters();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.state = object.state ?? "";
    return message;
  },
  fromSDK(object: OrderFiltersSDKType): OrderFilters {
    return {
      owner: object?.owner,
      dseq: object?.dseq,
      gseq: object?.gseq,
      oseq: object?.oseq,
      state: object?.state
    };
  },
  fromSDKJSON(object: any): OrderFiltersSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0),
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      state: isSet(object.state) ? String(object.state) : ""
    };
  },
  toSDK(message: OrderFilters): OrderFiltersSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq;
    obj.gseq = message.gseq;
    obj.oseq = message.oseq;
    obj.state = message.state;
    return obj;
  }
};