import {
  AddAuthorization as AddAuthorizationEvent,
  DeployCollateralAuctionHouse as DeployCollateralAuctionHouseEvent,
  DisableContract as DisableContractEvent,
  ModifyParameters as ModifyParametersEvent,
  RemoveAuthorization as RemoveAuthorizationEvent
} from "../generated/collateralAuctionHouseFactory/collateralAuctionHouseFactory"
import {
  AddAuthorization,
  DeployCollateralAuctionHouse,
  DisableContract,
  ModifyParameters,
  RemoveAuthorization
} from "../generated/schema"

export function handleAddAuthorization(event: AddAuthorizationEvent): void {
  let entity = new AddAuthorization(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._account = event.params._account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeployCollateralAuctionHouse(
  event: DeployCollateralAuctionHouseEvent
): void {
  let entity = new DeployCollateralAuctionHouse(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._cType = event.params._cType
  entity._collateralAuctionHouse = event.params._collateralAuctionHouse

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDisableContract(event: DisableContractEvent): void {
  let entity = new DisableContract(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModifyParameters(event: ModifyParametersEvent): void {
  let entity = new ModifyParameters(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._param = event.params._param
  entity._cType = event.params._cType
  entity._data = event.params._data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRemoveAuthorization(
  event: RemoveAuthorizationEvent
): void {
  let entity = new RemoveAuthorization(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._account = event.params._account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
