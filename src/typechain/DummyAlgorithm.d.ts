/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface DummyAlgorithmInterface extends ethers.utils.Interface {
  functions: {
    "verify(bytes,bytes,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "verify",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;

  events: {};
}

export class DummyAlgorithm extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DummyAlgorithmInterface;

  functions: {
    verify(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "verify(bytes,bytes,bytes)"(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  verify(
    arg0: BytesLike,
    arg1: BytesLike,
    arg2: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "verify(bytes,bytes,bytes)"(
    arg0: BytesLike,
    arg1: BytesLike,
    arg2: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    verify(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verify(bytes,bytes,bytes)"(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    verify(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verify(bytes,bytes,bytes)"(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    verify(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verify(bytes,bytes,bytes)"(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}