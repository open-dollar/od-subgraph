import {
  AllowSAFE as AllowSAFEEvent,
  ModifySAFECollateralization as ModifySAFECollateralizationEvent,
  MoveSAFE as MoveSAFEEvent,
  OpenSAFE as OpenSAFEEvent,
  ProtectSAFE as ProtectSAFEEvent,
  QuitSystem as QuitSystemEvent,
  TransferCollateral as TransferCollateralEvent,
  TransferCollateral1 as TransferCollateral1Event,
  TransferInternalCoins as TransferInternalCoinsEvent,
  TransferSAFEOwnership as TransferSAFEOwnershipEvent,
} from "../generated/odSafeManager/odSafeManager";
import {
  AllowSAFE,
  ModifySAFECollateralization,
  MoveSAFE,
  OpenSAFE,
  ProtectSAFE,
  QuitSystem,
  TransferCollateral,
  TransferCollateral1,
  TransferInternalCoins,
  TransferSAFEOwnership,
} from "../generated/schema";
import { getOrCreateVault } from "./utils";

export function handleAllowSAFE(event: AllowSAFEEvent): void {
  let entity = new AllowSAFE(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sender = event.params._sender;
  entity.vault = event.params._safe.toString();
  entity.usr = event.params._usr;
  entity.ok = event.params._ok;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleModifySAFECollateralization(
  event: ModifySAFECollateralizationEvent
): void {
  let entity = new ModifySAFECollateralization(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sender = event.params._sender;
  entity.vault = event.params._safe.toString();
  entity.deltaCollateral = event.params._deltaCollateral;
  entity.deltaDebt = event.params._deltaDebt;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let vault = getOrCreateVault(event.params._safe.toString());

  vault.collateral = vault.collateral.plus(event.params._deltaCollateral);
  vault.debt = vault.debt.plus(event.params._deltaDebt);

  vault.save();
}

export function handleMoveSAFE(event: MoveSAFEEvent): void {
  let entity = new MoveSAFE(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sender = event.params._sender;
  entity.vaultSrc = event.params._safeSrc.toString();
  entity.vaultDst = event.params._safeDst.toString();

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOpenSAFE(event: OpenSAFEEvent): void {
  let entity = new OpenSAFE(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sender = event.params._sender;
  entity.own = event.params._own;
  entity.vault = event.params._safe.toString();

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  // Create a new Vault entity
  let vault = getOrCreateVault(event.params._safe.toString());
  vault.owner = event.transaction.from;

  vault.save();
}

export function handleProtectSAFE(event: ProtectSAFEEvent): void {
  let entity = new ProtectSAFE(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sender = event.params._sender;
  entity.vault = event.params._safe.toString();
  entity.liquidationEngine = event.params._liquidationEngine;
  entity.saviour = event.params._saviour;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let vault = getOrCreateVault(event.params._safe.toString());

  vault.saviour = event.params._saviour;

  vault.save();
}

export function handleQuitSystem(event: QuitSystemEvent): void {
  let entity = new QuitSystem(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sender = event.params._sender;
  entity.vault = event.params._safe.toString();
  entity.dst = event.params._dst;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransferCollateral(event: TransferCollateralEvent): void {
  let entity = new TransferCollateral(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sender = event.params._sender;
  entity.vault = event.params._safe.toString();
  entity.dst = event.params._dst;
  entity.wad = event.params._wad;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransferCollateral1(
  event: TransferCollateral1Event
): void {
  let entity = new TransferCollateral1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sender = event.params._sender;
  entity.cType = event.params._cType;
  entity.vault = event.params._safe.toString();
  entity.dst = event.params._dst;
  entity.wad = event.params._wad;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransferInternalCoins(
  event: TransferInternalCoinsEvent
): void {
  let entity = new TransferInternalCoins(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sender = event.params._sender;
  entity.vault = event.params._safe.toString();
  entity.dst = event.params._dst;
  entity.rad = event.params._rad;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransferSAFEOwnership(
  event: TransferSAFEOwnershipEvent
): void {
  let entity = new TransferSAFEOwnership(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sender = event.params._sender;
  entity.vault = event.params._safe.toString();
  entity.dst = event.params._dst;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
