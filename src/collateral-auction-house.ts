import {
  AddAuthorization as AddAuthorizationEvent,
  BuyCollateral as BuyCollateralEvent,
  ModifyParameters as ModifyParametersEvent,
  RemoveAuthorization as RemoveAuthorizationEvent,
  SettleAuction as SettleAuctionEvent,
  StartAuction as StartAuctionEvent,
  TerminateAuctionPrematurely as TerminateAuctionPrematurelyEvent,
} from "../generated/templates/collateralAuctionHouse/collateralAuctionHouse";
import {
  AddAuthorization,
  ModifyParameters,
  RemoveAuthorization,
  CollateralAuctionHouseBuyCollateral,
  CollateralAuctionHouseSettleAuction,
  CollateralAuctionHouseStartAuction,
  CollateralAuctionHouseTerminateAuctionPrematurely,
} from "../generated/schema";

export function handleBuyCollateral(event: BuyCollateralEvent): void {
  let entity = new CollateralAuctionHouseBuyCollateral(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.auctionId = event.params._id;
  entity.bidder = event.params._bidder;
  entity.raisedAmount = event.params._raisedAmount;
  entity.soldAmount = event.params._soldAmount;
  entity.address = event.address;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleStartAuction(event: StartAuctionEvent): void {
  let entity = new CollateralAuctionHouseStartAuction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.auctionId = event.params._id;

  entity.auctioneer = event.params._auctioneer;
  entity.amountToSell = event.params._amountToSell;
  entity.amountToRaise = event.params._amountToRaise;
  entity.address = event.address;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSettleAuction(event: SettleAuctionEvent): void {
  let entity = new CollateralAuctionHouseSettleAuction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.auctionId = event.params._id;
  entity.leftoverReceiver = event.params._leftoverReceiver;
  entity.leftoverCollateral = event.params._leftoverCollateral;
  entity.address = event.address;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTerminateAuctionPrematurely(
  event: TerminateAuctionPrematurelyEvent
): void {
  let entity = new CollateralAuctionHouseTerminateAuctionPrematurely(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.auctionId = event.params._id;
  entity.leftoverReceiver = event.params._leftoverReceiver;
  entity.leftoverCollateral = event.params._leftoverCollateral;
  entity.address = event.address;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

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
