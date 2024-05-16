import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  CreateProxy as CreateProxyEvent,
  Transfer as TransferEvent,
} from "../generated/vault721/vault721";
import {
  Approval,
  ApprovalForAll,
  CreateProxy,
  Transfer,
} from "../generated/schema";
import { getOrCreateVault } from "./utils";

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.owner = event.params.owner;
  entity.approved = event.params.approved;
  entity.vault = event.params.tokenId.toString();

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.owner = event.params.owner;
  entity.operator = event.params.operator;
  entity.approved = event.params.approved;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleCreateProxy(event: CreateProxyEvent): void {
  let entity = new CreateProxy(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.user = event.params._user;
  entity.proxy = event.params._proxy;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.vault = event.params.tokenId.toString(); // Convert BigInt to string

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let vault = getOrCreateVault(event.params.tokenId.toString());
  vault.owner = event.params.to;

  vault.save();
}
