import {
  AddAuthorization as AddAuthorizationEvent,
  DeployCollateralAuctionHouse as DeployCollateralAuctionHouseEvent,
  DisableContract as DisableContractEvent,
  ModifyParameters as ModifyParametersEvent,
  RemoveAuthorization as RemoveAuthorizationEvent,
} from "../generated/collateralAuctionHouseFactory/collateralAuctionHouseFactory";
import {
  AddAuthorization,
  DeployCollateralAuctionHouse,
  DisableContract,
  ModifyParameters,
  RemoveAuthorization,
} from "../generated/schema";
import { collateralAuctionHouse } from "../generated/templates";

export function handleAddAuthorization(event: AddAuthorizationEvent): void {
  let entity = new AddAuthorization(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.account = event.params._account;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleDeployCollateralAuctionHouse(
  event: DeployCollateralAuctionHouseEvent
): void {
  let entity = new DeployCollateralAuctionHouse(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.cType = event.params._cType;
  entity.collateralAuctionHouse = event.params._collateralAuctionHouse;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  collateralAuctionHouse.create(event.params._collateralAuctionHouse);

  entity.save();
}

export function handleDisableContract(event: DisableContractEvent): void {
  let entity = new DisableContract(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleModifyParameters(event: ModifyParametersEvent): void {
  let entity = new ModifyParameters(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.param = event.params._param;
  entity.cType = event.params._cType;
  entity.data = event.params._data;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRemoveAuthorization(
  event: RemoveAuthorizationEvent
): void {
  let entity = new RemoveAuthorization(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.account = event.params._account;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
