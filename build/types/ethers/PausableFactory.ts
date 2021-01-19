/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Pausable } from "./Pausable";

export class PausableFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Pausable> {
    return super.deploy(overrides || {}) as Promise<Pausable>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Pausable {
    return super.attach(address) as Pausable;
  }
  connect(signer: Signer): PausableFactory {
    return super.connect(signer) as PausableFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Pausable {
    return new Contract(address, _abi, signerOrProvider) as Pausable;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "Paused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "Unpaused",
    type: "event"
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b506000805460ff191690556086806100286000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80635c975abb14602d575b600080fd5b60336047565b604080519115158252519081900360200190f35b60005460ff169056fea2646970667358221220bf3d57d6b310ca82268f90a0311cf6302f09c28efe026cf2309d315007df729364736f6c63430007030033";