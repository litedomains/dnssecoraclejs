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

interface NSEC3DigestInterface extends ethers.utils.Interface {
  functions: {
    "hash(bytes,bytes,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "hash",
    values: [BytesLike, BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "hash", data: BytesLike): Result;

  events: {};
}

export class NSEC3Digest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: NSEC3DigestInterface;

  functions: {
    hash(
      salt: BytesLike,
      data: BytesLike,
      iterations: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "hash(bytes,bytes,uint256)"(
      salt: BytesLike,
      data: BytesLike,
      iterations: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  hash(
    salt: BytesLike,
    data: BytesLike,
    iterations: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "hash(bytes,bytes,uint256)"(
    salt: BytesLike,
    data: BytesLike,
    iterations: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    hash(
      salt: BytesLike,
      data: BytesLike,
      iterations: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "hash(bytes,bytes,uint256)"(
      salt: BytesLike,
      data: BytesLike,
      iterations: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    hash(
      salt: BytesLike,
      data: BytesLike,
      iterations: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hash(bytes,bytes,uint256)"(
      salt: BytesLike,
      data: BytesLike,
      iterations: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    hash(
      salt: BytesLike,
      data: BytesLike,
      iterations: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hash(bytes,bytes,uint256)"(
      salt: BytesLike,
      data: BytesLike,
      iterations: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
