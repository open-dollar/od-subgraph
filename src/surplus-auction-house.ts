import {
  AddAuthorization as AddAuthorizationEvent,
  DisableContract as DisableContractEvent,
  IncreaseBidSize as IncreaseBidSizeEvent,
  ModifyParameters as ModifyParametersEvent,
  RemoveAuthorization as RemoveAuthorizationEvent,
  RestartAuction as RestartAuctionEvent,
  SettleAuction as SettleAuctionEvent,
  StartAuction as StartAuctionEvent,
  TerminateAuctionPrematurely as TerminateAuctionPrematurelyEvent,
} from "../generated/surplusAuctionHouse/surplusAuctionHouse";
import {
  AddAuthorization,
  DisableContract,
  ModifyParameters,
  RemoveAuthorization,
  SurplusAuctionHouseIncreaseBidSize,
  SurplusAuctionHouseRestartAuction,
  SurplusAuctionHouseSettleAuction,
  SurplusAuctionHouseStartAuction,
  SurplusAuctionHouseTerminateAuctionPrematurely,
} from "../generated/schema";

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

export function handleDisableContract(event: DisableContractEvent): void {
  let entity = new DisableContract(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleIncreaseBidSize(event: IncreaseBidSizeEvent): void {
  let entity = new SurplusAuctionHouseIncreaseBidSize(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.auctionId = event.params._id;
  entity.bidder = event.params._bidder;

  entity.raisedAmount = event.params._raisedAmount;
  entity.soldAmount = event.params._soldAmount;
  entity.bidExpiry = event.params._bidExpiry;

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

export function handleRestartAuction(event: RestartAuctionEvent): void {
  let entity = new SurplusAuctionHouseRestartAuction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.auctionId = event.params._id;

  entity.auctionDeadline = event.params._auctionDeadline;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSettleAuction(event: SettleAuctionEvent): void {
  let entity = new SurplusAuctionHouseSettleAuction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.auctionId = event.params._id;

  entity.highBidder = event.params._highBidder;
  entity.raisedAmount = event.params._raisedAmount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleStartAuction(event: StartAuctionEvent): void {
  let entity = new SurplusAuctionHouseStartAuction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.auctionId = event.params._id;
  entity.amountToSell = event.params._amountToSell;
  entity.amountToRaise = event.params._amountToRaise;
  entity.auctionDeadline = event.params._auctionDeadline;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTerminateAuctionPrematurely(
  event: TerminateAuctionPrematurelyEvent
): void {
  let entity = new SurplusAuctionHouseTerminateAuctionPrematurely(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.auctionId = event.params._id;

  entity.highBidder = event.params._highBidder;
  entity.raisedAmount = event.params._raisedAmount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
