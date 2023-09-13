import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  AddAuthorization,
  DeployCollateralAuctionHouse,
  DisableContract,
  ModifyParameters,
  RemoveAuthorization
} from "../generated/collateralAuctionHouseFactory/collateralAuctionHouseFactory"

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

export function createDeployCollateralAuctionHouseEvent(
  _cType: Bytes,
  _collateralAuctionHouse: Address
): DeployCollateralAuctionHouse {
  let deployCollateralAuctionHouseEvent = changetype<
    DeployCollateralAuctionHouse
  >(newMockEvent())

  deployCollateralAuctionHouseEvent.parameters = new Array()

  deployCollateralAuctionHouseEvent.parameters.push(
    new ethereum.EventParam("_cType", ethereum.Value.fromFixedBytes(_cType))
  )
  deployCollateralAuctionHouseEvent.parameters.push(
    new ethereum.EventParam(
      "_collateralAuctionHouse",
      ethereum.Value.fromAddress(_collateralAuctionHouse)
    )
  )

  return deployCollateralAuctionHouseEvent
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
