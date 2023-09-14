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
  BuyCollateral,
  ModifyParameters,
  RemoveAuthorization,
  collateralAuctionHouseSettleAuction,
  collateralAuctionHouseStartAuction,
  collateralAuctionHouseTerminateAuctionPrematurely,
} from "../generated/schema";

export function handleAddAuthorization(event: AddAuthorizationEvent): void {
  let entity = new AddAuthorization(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._account = event.params._account;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleBuyCollateral(event: BuyCollateralEvent): void {
  let entity = new BuyCollateral(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._auctionId = event.params._id;
  entity._bidder = event.params._bidder;

  entity._raisedAmount = event.params._raisedAmount;
  entity._soldAmount = event.params._soldAmount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleModifyParameters(event: ModifyParametersEvent): void {
  let entity = new ModifyParameters(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._param = event.params._param;
  entity._cType = event.params._cType;
  entity._data = event.params._data;

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
  entity._account = event.params._account;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSettleAuction(event: SettleAuctionEvent): void {
  let entity = new collateralAuctionHouseSettleAuction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._auctionId = event.params._id;
  entity._leftoverReceiver = event.params._leftoverReceiver;
  entity._leftoverCollateral = event.params._leftoverCollateral;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleStartAuction(event: StartAuctionEvent): void {
  let entity = new collateralAuctionHouseStartAuction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._auctionId = event.params._id;

  entity._amountToSell = event.params._amountToSell;
  entity._amountToRaise = event.params._amountToRaise;
  entity._initialDiscount = event.params._initialDiscount;
  entity._maxDiscount = event.params._maxDiscount;
  entity._perSecondDiscountUpdateRate =
    event.params._perSecondDiscountUpdateRate;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTerminateAuctionPrematurely(
  event: TerminateAuctionPrematurelyEvent
): void {
  let entity = new collateralAuctionHouseTerminateAuctionPrematurely(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._auctionId = event.params._id;
  entity._leftoverReceiver = event.params._leftoverReceiver;
  entity._leftoverCollateral = event.params._leftoverCollateral;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
