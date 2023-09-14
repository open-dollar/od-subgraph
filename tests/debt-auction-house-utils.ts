import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AddAuthorization,
  DecreaseSoldAmount,
  DisableContract,
  ModifyParameters,
  RemoveAuthorization,
  RestartAuction,
  SettleAuction,
  StartAuction,
  TerminateAuctionPrematurely
} from "../generated/debtAuctionHouse/debtAuctionHouse"

export function createAddAuthorizationEvent(
  _account: Address
): AddAuthorization {
  let addAuthorizationEvent = changetype<AddAuthorization>(newMockEvent())

  addAuthorizationEvent.parameters = new Array()

  addAuthorizationEvent.parameters.push(
    new ethereum.EventParam("_account", ethereum.Value.fromAddress(_account))
  )

  return addAuthorizationEvent
}

export function createDecreaseSoldAmountEvent(
  _id: BigInt,
  _bidder: Address,
  _blockTimestamp: BigInt,
  _raisedAmount: BigInt,
  _soldAmount: BigInt,
  _bidExpiry: BigInt
): DecreaseSoldAmount {
  let decreaseSoldAmountEvent = changetype<DecreaseSoldAmount>(newMockEvent())

  decreaseSoldAmountEvent.parameters = new Array()

  decreaseSoldAmountEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  decreaseSoldAmountEvent.parameters.push(
    new ethereum.EventParam("_bidder", ethereum.Value.fromAddress(_bidder))
  )
  decreaseSoldAmountEvent.parameters.push(
    new ethereum.EventParam(
      "_blockTimestamp",
      ethereum.Value.fromUnsignedBigInt(_blockTimestamp)
    )
  )
  decreaseSoldAmountEvent.parameters.push(
    new ethereum.EventParam(
      "_raisedAmount",
      ethereum.Value.fromUnsignedBigInt(_raisedAmount)
    )
  )
  decreaseSoldAmountEvent.parameters.push(
    new ethereum.EventParam(
      "_soldAmount",
      ethereum.Value.fromUnsignedBigInt(_soldAmount)
    )
  )
  decreaseSoldAmountEvent.parameters.push(
    new ethereum.EventParam(
      "_bidExpiry",
      ethereum.Value.fromUnsignedBigInt(_bidExpiry)
    )
  )

  return decreaseSoldAmountEvent
}

export function createDisableContractEvent(): DisableContract {
  let disableContractEvent = changetype<DisableContract>(newMockEvent())

  disableContractEvent.parameters = new Array()

  return disableContractEvent
}

export function createModifyParametersEvent(
  _param: Bytes,
  _cType: Bytes,
  _data: Bytes
): ModifyParameters {
  let modifyParametersEvent = changetype<ModifyParameters>(newMockEvent())

  modifyParametersEvent.parameters = new Array()

  modifyParametersEvent.parameters.push(
    new ethereum.EventParam("_param", ethereum.Value.fromFixedBytes(_param))
  )
  modifyParametersEvent.parameters.push(
    new ethereum.EventParam("_cType", ethereum.Value.fromFixedBytes(_cType))
  )
  modifyParametersEvent.parameters.push(
    new ethereum.EventParam("_data", ethereum.Value.fromBytes(_data))
  )

  return modifyParametersEvent
}

export function createRemoveAuthorizationEvent(
  _account: Address
): RemoveAuthorization {
  let removeAuthorizationEvent = changetype<RemoveAuthorization>(newMockEvent())

  removeAuthorizationEvent.parameters = new Array()

  removeAuthorizationEvent.parameters.push(
    new ethereum.EventParam("_account", ethereum.Value.fromAddress(_account))
  )

  return removeAuthorizationEvent
}

export function createRestartAuctionEvent(
  _id: BigInt,
  _blockTimestamp: BigInt,
  _auctionDeadline: BigInt
): RestartAuction {
  let restartAuctionEvent = changetype<RestartAuction>(newMockEvent())

  restartAuctionEvent.parameters = new Array()

  restartAuctionEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  restartAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_blockTimestamp",
      ethereum.Value.fromUnsignedBigInt(_blockTimestamp)
    )
  )
  restartAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_auctionDeadline",
      ethereum.Value.fromUnsignedBigInt(_auctionDeadline)
    )
  )

  return restartAuctionEvent
}

export function createSettleAuctionEvent(
  _id: BigInt,
  _blockTimestamp: BigInt,
  _highBidder: Address,
  _raisedAmount: BigInt
): SettleAuction {
  let settleAuctionEvent = changetype<SettleAuction>(newMockEvent())

  settleAuctionEvent.parameters = new Array()

  settleAuctionEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  settleAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_blockTimestamp",
      ethereum.Value.fromUnsignedBigInt(_blockTimestamp)
    )
  )
  settleAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_highBidder",
      ethereum.Value.fromAddress(_highBidder)
    )
  )
  settleAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_raisedAmount",
      ethereum.Value.fromUnsignedBigInt(_raisedAmount)
    )
  )

  return settleAuctionEvent
}

export function createStartAuctionEvent(
  _id: BigInt,
  _blockTimestamp: BigInt,
  _amountToSell: BigInt,
  _amountToRaise: BigInt,
  _auctionDeadline: BigInt
): StartAuction {
  let startAuctionEvent = changetype<StartAuction>(newMockEvent())

  startAuctionEvent.parameters = new Array()

  startAuctionEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  startAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_blockTimestamp",
      ethereum.Value.fromUnsignedBigInt(_blockTimestamp)
    )
  )
  startAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_amountToSell",
      ethereum.Value.fromUnsignedBigInt(_amountToSell)
    )
  )
  startAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_amountToRaise",
      ethereum.Value.fromUnsignedBigInt(_amountToRaise)
    )
  )
  startAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_auctionDeadline",
      ethereum.Value.fromUnsignedBigInt(_auctionDeadline)
    )
  )

  return startAuctionEvent
}

export function createTerminateAuctionPrematurelyEvent(
  _id: BigInt,
  _blockTimestamp: BigInt,
  _highBidder: Address,
  _raisedAmount: BigInt
): TerminateAuctionPrematurely {
  let terminateAuctionPrematurelyEvent = changetype<
    TerminateAuctionPrematurely
  >(newMockEvent())

  terminateAuctionPrematurelyEvent.parameters = new Array()

  terminateAuctionPrematurelyEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  terminateAuctionPrematurelyEvent.parameters.push(
    new ethereum.EventParam(
      "_blockTimestamp",
      ethereum.Value.fromUnsignedBigInt(_blockTimestamp)
    )
  )
  terminateAuctionPrematurelyEvent.parameters.push(
    new ethereum.EventParam(
      "_highBidder",
      ethereum.Value.fromAddress(_highBidder)
    )
  )
  terminateAuctionPrematurelyEvent.parameters.push(
    new ethereum.EventParam(
      "_raisedAmount",
      ethereum.Value.fromUnsignedBigInt(_raisedAmount)
    )
  )

  return terminateAuctionPrematurelyEvent
}
