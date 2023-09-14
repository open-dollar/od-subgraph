import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AddAuthorization,
  BuyCollateral,
  ModifyParameters,
  RemoveAuthorization,
  SettleAuction,
  StartAuction,
  TerminateAuctionPrematurely
} from "../generated/collateralAuctionHouse/collateralAuctionHouse"

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

export function createBuyCollateralEvent(
  _id: BigInt,
  _bidder: Address,
  _blockTimestamp: BigInt,
  _raisedAmount: BigInt,
  _soldAmount: BigInt
): BuyCollateral {
  let buyCollateralEvent = changetype<BuyCollateral>(newMockEvent())

  buyCollateralEvent.parameters = new Array()

  buyCollateralEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  buyCollateralEvent.parameters.push(
    new ethereum.EventParam("_bidder", ethereum.Value.fromAddress(_bidder))
  )
  buyCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "_blockTimestamp",
      ethereum.Value.fromUnsignedBigInt(_blockTimestamp)
    )
  )
  buyCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "_raisedAmount",
      ethereum.Value.fromUnsignedBigInt(_raisedAmount)
    )
  )
  buyCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "_soldAmount",
      ethereum.Value.fromUnsignedBigInt(_soldAmount)
    )
  )

  return buyCollateralEvent
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

export function createSettleAuctionEvent(
  _id: BigInt,
  _blockTimestamp: BigInt,
  _leftoverReceiver: Address,
  _leftoverCollateral: BigInt
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
      "_leftoverReceiver",
      ethereum.Value.fromAddress(_leftoverReceiver)
    )
  )
  settleAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_leftoverCollateral",
      ethereum.Value.fromUnsignedBigInt(_leftoverCollateral)
    )
  )

  return settleAuctionEvent
}

export function createStartAuctionEvent(
  _id: BigInt,
  _blockTimestamp: BigInt,
  _amountToSell: BigInt,
  _amountToRaise: BigInt,
  _initialDiscount: BigInt,
  _maxDiscount: BigInt,
  _perSecondDiscountUpdateRate: BigInt
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
      "_initialDiscount",
      ethereum.Value.fromUnsignedBigInt(_initialDiscount)
    )
  )
  startAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_maxDiscount",
      ethereum.Value.fromUnsignedBigInt(_maxDiscount)
    )
  )
  startAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_perSecondDiscountUpdateRate",
      ethereum.Value.fromUnsignedBigInt(_perSecondDiscountUpdateRate)
    )
  )

  return startAuctionEvent
}

export function createTerminateAuctionPrematurelyEvent(
  _id: BigInt,
  _blockTimestamp: BigInt,
  _leftoverReceiver: Address,
  _leftoverCollateral: BigInt
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
      "_leftoverReceiver",
      ethereum.Value.fromAddress(_leftoverReceiver)
    )
  )
  terminateAuctionPrematurelyEvent.parameters.push(
    new ethereum.EventParam(
      "_leftoverCollateral",
      ethereum.Value.fromUnsignedBigInt(_leftoverCollateral)
    )
  )

  return terminateAuctionPrematurelyEvent
}
