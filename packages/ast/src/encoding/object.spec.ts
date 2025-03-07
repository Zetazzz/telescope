import { createObjectWithMethods } from './object';
import { traverse, getNestedProto } from '@osmonauts/proto-parser';
import { ProtoParseContext } from './context';
import { createProtoType } from './proto';
import { getTestProtoStore, expectCode, defaultTelescopeOptions, printCode } from '../../test-utils';

const store = getTestProtoStore();

describe('osmosis/gamm/v1beta1/tx', () => {
    const ref = store.findProto('osmosis/gamm/v1beta1/tx.proto');
    const res = traverse(store, ref);
    it('MsgJoinPool', () => {
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createObjectWithMethods(
            context,
            'MsgJoinPool', getNestedProto(res).MsgJoinPool
        ))
    })
    it('MsgSwapExactAmountOut', () => {
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createObjectWithMethods(
            context,
            'MsgSwapExactAmountOut', getNestedProto(res).MsgSwapExactAmountOut
        ))
    })
    it('MsgSwapExactAmountIn', () => {
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createObjectWithMethods(
            context,
            'MsgSwapExactAmountIn', getNestedProto(res).MsgSwapExactAmountIn
        ))
    })

});

describe('google/api/expr/conformance/v1alpha1/conformance_service', () => {
    const ref = store.findProto('google/api/expr/conformance/v1alpha1/conformance_service.proto');
    const res = traverse(store, ref);
    it('ParseRequest', () => {
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createObjectWithMethods(
            context,
            'ParseRequest', getNestedProto(res).ParseRequest
        ))
    })
});

describe('google/api/servicecontrol/v1/log_entry', () => {
    const ref = store.findProto('google/api/servicecontrol/v1/log_entry.proto');
    const res = traverse(store, ref);
    it('LogEntry', () => {
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createObjectWithMethods(
            context,
            'LogEntry', getNestedProto(res).LogEntry
        ))
    })
});

describe('google/api/expr/v1alpha1/syntax', () => {
    const ref = store.findProto('google/api/expr/v1alpha1/syntax.proto');
    const res = traverse(store, ref);
    it('Constant', () => {
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createObjectWithMethods(
            context,
            'Constant', getNestedProto(res).Constant
        ))
    })
});

describe('google/api/expr/v1alpha1/value', () => {
    const ref = store.findProto('google/api/expr/v1alpha1/value.proto');
    const res = traverse(store, ref);
    it('MapValue', () => {
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createObjectWithMethods(
            context,
            'MapValue',
            getNestedProto(res).MapValue
        ))
        expect(context.imports).toMatchSnapshot();
    })
    it('Entry', () => {
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createObjectWithMethods(
            context,
            'Entry',
            getNestedProto(res).MapValue.nested.Entry
        ))
        expect(context.imports).toMatchSnapshot();
    })
});


describe('cosmos/tx/signing/v1beta1/signing', () => {
    const ref = store.findProto('cosmos/tx/signing/v1beta1/signing.proto');
    const res = traverse(store, ref);
    it('SignatureDescriptors', () => {
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createObjectWithMethods(
            context,
            'SignatureDescriptors', getNestedProto(res).SignatureDescriptors
        ))
    })
    it('SignatureDescriptor', () => {
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createObjectWithMethods(
            context,
            'SignatureDescriptor', getNestedProto(res).SignatureDescriptor
        ))
    })
});

describe('cosmos/tx/v1beta1/tx', () => {
    const ref = store.findProto('cosmos/tx/v1beta1/tx.proto');
    const res = traverse(store, ref);
    it('AuxSignerData', () => {
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createObjectWithMethods(
            context,
            'AuxSignerData', getNestedProto(res).AuxSignerData
        ))
    })
    it('ModeInfo_Multi', () => {
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createObjectWithMethods(
            context,
            'ModeInfo_Multi', getNestedProto(res).ModeInfo
        ))
    })
});

describe('cosmos/staking/v1beta1', () => {
  const ref = store.findProto('cosmos/staking/v1beta1/staking.proto');
  const res = traverse(store, ref);
  it('Delegation', () => {
      const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
      context.options.prototypes!.typingsFormat!.customTypes!.useCosmosSDKDec = true;
      expectCode(createObjectWithMethods(
          context,
          'Delegation', getNestedProto(res).Delegation
      ))
  })
});

describe('google/api/expr/v1alpha1/checked', () => {
    const ref = store.findProto('google/api/expr/v1alpha1/checked.proto');
    const res = traverse(store, ref);
    it('Type', () => {
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createObjectWithMethods(
            context,
            'Type', getNestedProto(res).Type
        ))
    })
    describe('nested', () => {
        it('MapType', () => {
            const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
            expectCode(createObjectWithMethods(
                context,
                'Type_MapType', getNestedProto(res).Type.nested.MapType
            ))
        })
    })
    describe('Decl_FunctionDecl_Overload', () => {
        it('MapType', () => {
            const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
            expectCode(createObjectWithMethods(
                context,
                'Decl_FunctionDecl_Overload', getNestedProto(res).Decl.nested.FunctionDecl.nested.Overload
            ))
        })
    })
    describe('typeHash (Long)', () => {
        it('CheckedExpr', () => {
            const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
            expectCode(createObjectWithMethods(
                context,
                'CheckedExpr', getNestedProto(res).CheckedExpr
            ))
        })
    })
});

it('google/api/expr/v1beta1/source', () => {
    const ref = store.findProto('google/api/expr/v1beta1/source.proto');
    const res = traverse(store, ref);
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);

    expectCode(createObjectWithMethods(
        context,
        'SourceInfo', getNestedProto(res).SourceInfo
    ))
});

it('cosmwasm/wasm/v1/proposal', () => {
    const ref = store.findProto('cosmwasm/wasm/v1/proposal.proto');
    const res = traverse(store, ref);
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);

    expectCode(createObjectWithMethods(
        context,
        'PinCodesProposal', getNestedProto(res).PinCodesProposal
    ))
});

it('cosmwasm/wasm/v1/proposal', () => {
    const ref = store.findProto('cosmwasm/wasm/v1/proposal.proto');
    const res = traverse(store, ref);
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);

    expectCode(createObjectWithMethods(
        context,
        'UnpinCodesProposal', getNestedProto(res).UnpinCodesProposal
    ))
});

it('cosmwasm/wasm/v1/query', () => {
    const ref = store.findProto('cosmwasm/wasm/v1/query.proto');
    const res = traverse(store, ref);
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    expectCode(createObjectWithMethods(
        context,
        'QueryRawContractStateRequest', getNestedProto(res).QueryRawContractStateRequest
    ))
});

it('ibc/core/port/v1/query', () => {
    const ref = store.findProto('ibc/core/port/v1/query.proto');
    const res = traverse(store, ref);
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    expectCode(createObjectWithMethods(
        context,
        'QueryAppVersionRequest',
        getNestedProto(res).QueryAppVersionRequest
    ))
    expect(context.imports).toMatchSnapshot();
    // console.log(context.imports);
});

describe('google/api/quota', () => {
    it('keyType', () => {
        const ref = store.findProto('google/api/quota.proto');
        const res = traverse(store, ref);
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createObjectWithMethods(
            context,
            'MetricRule',
            getNestedProto(res).MetricRule
        ))
        expect(context.imports).toMatchSnapshot();
        // console.log(context.imports);
    });
});

describe('ibc/core/types/v1/genesis', () => {
    it('name collisions', () => {
        store.traverseAll();
        const ref = store.findProto('ibc/core/types/v1/genesis.proto');
        const res = traverse(store, ref);
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        const ast = createProtoType(
            context,
            'GenesisState',
            getNestedProto(res).GenesisState
        )
        expectCode(ast);
        expectCode(createObjectWithMethods(
            context,
            'GenesisState',
            getNestedProto(res).GenesisState
        ))
        expect(context.imports).toMatchSnapshot();
    });
});

describe('google/rpc/error_details', () => {
    it('name collisions', () => {
        store.traverseAll();
        const ref = store.findProto('google/rpc/error_details.proto');
        const res = traverse(store, ref);
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        const ast = createProtoType(
            context,
            'PreconditionFailure',
            getNestedProto(res).PreconditionFailure
        )
        expectCode(ast);
        expectCode(createObjectWithMethods(
            context,
            'PreconditionFailure',
            getNestedProto(res).PreconditionFailure
        ))
    });
});

it('evmos/fees/v1/tx', () => {
    const ref = store.findProto('evmos/fees/v1/tx.proto');
    const res = traverse(store, ref);
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);

    expectCode(createObjectWithMethods(
        context,
        'MsgRegisterDevFeeInfo', getNestedProto(res).MsgRegisterDevFeeInfo
    ))
});

it('osmosis/gamm/v1beta1/query', () => {
    const ref = store.findProto('osmosis/gamm/v1beta1/query.proto');
    const res = traverse(store, ref);
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);

    expectCode(createObjectWithMethods(
        context,
        'QueryPoolsResponse', getNestedProto(res).QueryPoolsResponse
    ))
});