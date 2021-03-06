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
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface DNSSECInterface extends ethers.utils.Interface {
  functions: {
    "anchors()": FunctionFragment;
    "deleteRRSet(uint16,bytes,tuple,bytes)": FunctionFragment;
    "deleteRRSetNSEC3(uint16,bytes,tuple,tuple,bytes)": FunctionFragment;
    "rrdata(uint16,bytes)": FunctionFragment;
    "submitRRSet(tuple,bytes)": FunctionFragment;
    "submitRRSets(bytes,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "anchors", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deleteRRSet",
    values: [
      BigNumberish,
      BytesLike,
      { rrset: BytesLike; sig: BytesLike },
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteRRSetNSEC3",
    values: [
      BigNumberish,
      BytesLike,
      { rrset: BytesLike; sig: BytesLike },
      { rrset: BytesLike; sig: BytesLike },
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "rrdata",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "submitRRSet",
    values: [{ rrset: BytesLike; sig: BytesLike }, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "submitRRSets",
    values: [BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "anchors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deleteRRSet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteRRSetNSEC3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rrdata", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "submitRRSet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitRRSets",
    data: BytesLike
  ): Result;

  events: {
    "AlgorithmUpdated(uint8,address)": EventFragment;
    "DigestUpdated(uint8,address)": EventFragment;
    "NSEC3DigestUpdated(uint8,address)": EventFragment;
    "RRSetUpdated(bytes,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AlgorithmUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DigestUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NSEC3DigestUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RRSetUpdated"): EventFragment;
}

export class DNSSEC extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DNSSECInterface;

  functions: {
    anchors(overrides?: CallOverrides): Promise<[string]>;

    "anchors()"(overrides?: CallOverrides): Promise<[string]>;

    deleteRRSet(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      nsec: { rrset: BytesLike; sig: BytesLike },
      proof: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deleteRRSet(uint16,bytes,tuple,bytes)"(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      nsec: { rrset: BytesLike; sig: BytesLike },
      proof: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    deleteRRSetNSEC3(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      closestEncloser: { rrset: BytesLike; sig: BytesLike },
      nextClosest: { rrset: BytesLike; sig: BytesLike },
      dnskey: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deleteRRSetNSEC3(uint16,bytes,tuple,tuple,bytes)"(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      closestEncloser: { rrset: BytesLike; sig: BytesLike },
      nextClosest: { rrset: BytesLike; sig: BytesLike },
      dnskey: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    rrdata(
      dnstype: BigNumberish,
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber, string]>;

    "rrdata(uint16,bytes)"(
      dnstype: BigNumberish,
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber, string]>;

    submitRRSet(
      input: { rrset: BytesLike; sig: BytesLike },
      proof: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "submitRRSet(tuple,bytes)"(
      input: { rrset: BytesLike; sig: BytesLike },
      proof: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    submitRRSets(
      data: BytesLike,
      proof: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "submitRRSets(bytes,bytes)"(
      data: BytesLike,
      proof: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  anchors(overrides?: CallOverrides): Promise<string>;

  "anchors()"(overrides?: CallOverrides): Promise<string>;

  deleteRRSet(
    deleteType: BigNumberish,
    deleteName: BytesLike,
    nsec: { rrset: BytesLike; sig: BytesLike },
    proof: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deleteRRSet(uint16,bytes,tuple,bytes)"(
    deleteType: BigNumberish,
    deleteName: BytesLike,
    nsec: { rrset: BytesLike; sig: BytesLike },
    proof: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  deleteRRSetNSEC3(
    deleteType: BigNumberish,
    deleteName: BytesLike,
    closestEncloser: { rrset: BytesLike; sig: BytesLike },
    nextClosest: { rrset: BytesLike; sig: BytesLike },
    dnskey: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deleteRRSetNSEC3(uint16,bytes,tuple,tuple,bytes)"(
    deleteType: BigNumberish,
    deleteName: BytesLike,
    closestEncloser: { rrset: BytesLike; sig: BytesLike },
    nextClosest: { rrset: BytesLike; sig: BytesLike },
    dnskey: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  rrdata(
    dnstype: BigNumberish,
    name: BytesLike,
    overrides?: CallOverrides
  ): Promise<[number, BigNumber, string]>;

  "rrdata(uint16,bytes)"(
    dnstype: BigNumberish,
    name: BytesLike,
    overrides?: CallOverrides
  ): Promise<[number, BigNumber, string]>;

  submitRRSet(
    input: { rrset: BytesLike; sig: BytesLike },
    proof: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "submitRRSet(tuple,bytes)"(
    input: { rrset: BytesLike; sig: BytesLike },
    proof: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  submitRRSets(
    data: BytesLike,
    proof: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "submitRRSets(bytes,bytes)"(
    data: BytesLike,
    proof: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    anchors(overrides?: CallOverrides): Promise<string>;

    "anchors()"(overrides?: CallOverrides): Promise<string>;

    deleteRRSet(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      nsec: { rrset: BytesLike; sig: BytesLike },
      proof: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "deleteRRSet(uint16,bytes,tuple,bytes)"(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      nsec: { rrset: BytesLike; sig: BytesLike },
      proof: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    deleteRRSetNSEC3(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      closestEncloser: { rrset: BytesLike; sig: BytesLike },
      nextClosest: { rrset: BytesLike; sig: BytesLike },
      dnskey: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "deleteRRSetNSEC3(uint16,bytes,tuple,tuple,bytes)"(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      closestEncloser: { rrset: BytesLike; sig: BytesLike },
      nextClosest: { rrset: BytesLike; sig: BytesLike },
      dnskey: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    rrdata(
      dnstype: BigNumberish,
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber, string]>;

    "rrdata(uint16,bytes)"(
      dnstype: BigNumberish,
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber, string]>;

    submitRRSet(
      input: { rrset: BytesLike; sig: BytesLike },
      proof: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "submitRRSet(tuple,bytes)"(
      input: { rrset: BytesLike; sig: BytesLike },
      proof: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    submitRRSets(
      data: BytesLike,
      proof: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "submitRRSets(bytes,bytes)"(
      data: BytesLike,
      proof: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    AlgorithmUpdated(id: null, addr: null): EventFilter;

    DigestUpdated(id: null, addr: null): EventFilter;

    NSEC3DigestUpdated(id: null, addr: null): EventFilter;

    RRSetUpdated(name: null, rrset: null): EventFilter;
  };

  estimateGas: {
    anchors(overrides?: CallOverrides): Promise<BigNumber>;

    "anchors()"(overrides?: CallOverrides): Promise<BigNumber>;

    deleteRRSet(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      nsec: { rrset: BytesLike; sig: BytesLike },
      proof: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "deleteRRSet(uint16,bytes,tuple,bytes)"(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      nsec: { rrset: BytesLike; sig: BytesLike },
      proof: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    deleteRRSetNSEC3(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      closestEncloser: { rrset: BytesLike; sig: BytesLike },
      nextClosest: { rrset: BytesLike; sig: BytesLike },
      dnskey: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "deleteRRSetNSEC3(uint16,bytes,tuple,tuple,bytes)"(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      closestEncloser: { rrset: BytesLike; sig: BytesLike },
      nextClosest: { rrset: BytesLike; sig: BytesLike },
      dnskey: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    rrdata(
      dnstype: BigNumberish,
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "rrdata(uint16,bytes)"(
      dnstype: BigNumberish,
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    submitRRSet(
      input: { rrset: BytesLike; sig: BytesLike },
      proof: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "submitRRSet(tuple,bytes)"(
      input: { rrset: BytesLike; sig: BytesLike },
      proof: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    submitRRSets(
      data: BytesLike,
      proof: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "submitRRSets(bytes,bytes)"(
      data: BytesLike,
      proof: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    anchors(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "anchors()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deleteRRSet(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      nsec: { rrset: BytesLike; sig: BytesLike },
      proof: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deleteRRSet(uint16,bytes,tuple,bytes)"(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      nsec: { rrset: BytesLike; sig: BytesLike },
      proof: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    deleteRRSetNSEC3(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      closestEncloser: { rrset: BytesLike; sig: BytesLike },
      nextClosest: { rrset: BytesLike; sig: BytesLike },
      dnskey: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deleteRRSetNSEC3(uint16,bytes,tuple,tuple,bytes)"(
      deleteType: BigNumberish,
      deleteName: BytesLike,
      closestEncloser: { rrset: BytesLike; sig: BytesLike },
      nextClosest: { rrset: BytesLike; sig: BytesLike },
      dnskey: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    rrdata(
      dnstype: BigNumberish,
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rrdata(uint16,bytes)"(
      dnstype: BigNumberish,
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    submitRRSet(
      input: { rrset: BytesLike; sig: BytesLike },
      proof: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "submitRRSet(tuple,bytes)"(
      input: { rrset: BytesLike; sig: BytesLike },
      proof: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    submitRRSets(
      data: BytesLike,
      proof: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "submitRRSets(bytes,bytes)"(
      data: BytesLike,
      proof: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
