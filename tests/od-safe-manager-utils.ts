import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
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
  TransferSAFEOwnership
} from "../generated/odSafeManager/odSafeManager"

export function createAllowSAFEEvent(
  _sender: Address,
  _safe: BigInt,
  _usr: Address,
  _ok: boolean
): AllowSAFE {
  let allowSafeEvent = changetype<AllowSAFE>(newMockEvent())

  allowSafeEvent.parameters = new Array()

  allowSafeEvent.parameters.push(
    new ethereum.EventParam("_sender", ethereum.Value.fromAddress(_sender))
  )
  allowSafeEvent.parameters.push(
    new ethereum.EventParam("_safe", ethereum.Value.fromUnsignedBigInt(_safe))
  )
  allowSafeEvent.parameters.push(
    new ethereum.EventParam("_usr", ethereum.Value.fromAddress(_usr))
  )
  allowSafeEvent.parameters.push(
    new ethereum.EventParam("_ok", ethereum.Value.fromBoolean(_ok))
  )

  return allowSafeEvent
}

export function createModifySAFECollateralizationEvent(
  _sender: Address,
  _safe: BigInt,
  _deltaCollateral: BigInt,
  _deltaDebt: BigInt
): ModifySAFECollateralization {
  let modifySafeCollateralizationEvent = changetype<
    ModifySAFECollateralization
  >(newMockEvent())

  modifySafeCollateralizationEvent.parameters = new Array()

  modifySafeCollateralizationEvent.parameters.push(
    new ethereum.EventParam("_sender", ethereum.Value.fromAddress(_sender))
  )
  modifySafeCollateralizationEvent.parameters.push(
    new ethereum.EventParam("_safe", ethereum.Value.fromUnsignedBigInt(_safe))
  )
  modifySafeCollateralizationEvent.parameters.push(
    new ethereum.EventParam(
      "_deltaCollateral",
      ethereum.Value.fromSignedBigInt(_deltaCollateral)
    )
  )
  modifySafeCollateralizationEvent.parameters.push(
    new ethereum.EventParam(
      "_deltaDebt",
      ethereum.Value.fromSignedBigInt(_deltaDebt)
    )
  )

  return modifySafeCollateralizationEvent
}

export function createMoveSAFEEvent(
  _sender: Address,
  _safeSrc: BigInt,
  _safeDst: BigInt
): MoveSAFE {
  let moveSafeEvent = changetype<MoveSAFE>(newMockEvent())

  moveSafeEvent.parameters = new Array()

  moveSafeEvent.parameters.push(
    new ethereum.EventParam("_sender", ethereum.Value.fromAddress(_sender))
  )
  moveSafeEvent.parameters.push(
    new ethereum.EventParam(
      "_safeSrc",
      ethereum.Value.fromUnsignedBigInt(_safeSrc)
    )
  )
  moveSafeEvent.parameters.push(
    new ethereum.EventParam(
      "_safeDst",
      ethereum.Value.fromUnsignedBigInt(_safeDst)
    )
  )

  return moveSafeEvent
}

export function createOpenSAFEEvent(
  _sender: Address,
  _own: Address,
  _safe: BigInt
): OpenSAFE {
  let openSafeEvent = changetype<OpenSAFE>(newMockEvent())

  openSafeEvent.parameters = new Array()

  openSafeEvent.parameters.push(
    new ethereum.EventParam("_sender", ethereum.Value.fromAddress(_sender))
  )
  openSafeEvent.parameters.push(
    new ethereum.EventParam("_own", ethereum.Value.fromAddress(_own))
  )
  openSafeEvent.parameters.push(
    new ethereum.EventParam("_safe", ethereum.Value.fromUnsignedBigInt(_safe))
  )

  return openSafeEvent
}

export function createProtectSAFEEvent(
  _sender: Address,
  _safe: BigInt,
  _liquidationEngine: Address,
  _saviour: Address
): ProtectSAFE {
  let protectSafeEvent = changetype<ProtectSAFE>(newMockEvent())

  protectSafeEvent.parameters = new Array()

  protectSafeEvent.parameters.push(
    new ethereum.EventParam("_sender", ethereum.Value.fromAddress(_sender))
  )
  protectSafeEvent.parameters.push(
    new ethereum.EventParam("_safe", ethereum.Value.fromUnsignedBigInt(_safe))
  )
  protectSafeEvent.parameters.push(
    new ethereum.EventParam(
      "_liquidationEngine",
      ethereum.Value.fromAddress(_liquidationEngine)
    )
  )
  protectSafeEvent.parameters.push(
    new ethereum.EventParam("_saviour", ethereum.Value.fromAddress(_saviour))
  )

  return protectSafeEvent
}

export function createQuitSystemEvent(
  _sender: Address,
  _safe: BigInt,
  _dst: Address
): QuitSystem {
  let quitSystemEvent = changetype<QuitSystem>(newMockEvent())

  quitSystemEvent.parameters = new Array()

  quitSystemEvent.parameters.push(
    new ethereum.EventParam("_sender", ethereum.Value.fromAddress(_sender))
  )
  quitSystemEvent.parameters.push(
    new ethereum.EventParam("_safe", ethereum.Value.fromUnsignedBigInt(_safe))
  )
  quitSystemEvent.parameters.push(
    new ethereum.EventParam("_dst", ethereum.Value.fromAddress(_dst))
  )

  return quitSystemEvent
}

export function createTransferCollateralEvent(
  _sender: Address,
  _safe: BigInt,
  _dst: Address,
  _wad: BigInt
): TransferCollateral {
  let transferCollateralEvent = changetype<TransferCollateral>(newMockEvent())

  transferCollateralEvent.parameters = new Array()

  transferCollateralEvent.parameters.push(
    new ethereum.EventParam("_sender", ethereum.Value.fromAddress(_sender))
  )
  transferCollateralEvent.parameters.push(
    new ethereum.EventParam("_safe", ethereum.Value.fromUnsignedBigInt(_safe))
  )
  transferCollateralEvent.parameters.push(
    new ethereum.EventParam("_dst", ethereum.Value.fromAddress(_dst))
  )
  transferCollateralEvent.parameters.push(
    new ethereum.EventParam("_wad", ethereum.Value.fromUnsignedBigInt(_wad))
  )

  return transferCollateralEvent
}

export function createTransferCollateral1Event(
  _sender: Address,
  _cType: Bytes,
  _safe: BigInt,
  _dst: Address,
  _wad: BigInt
): TransferCollateral1 {
  let transferCollateral1Event = changetype<TransferCollateral1>(newMockEvent())

  transferCollateral1Event.parameters = new Array()

  transferCollateral1Event.parameters.push(
    new ethereum.EventParam("_sender", ethereum.Value.fromAddress(_sender))
  )
  transferCollateral1Event.parameters.push(
    new ethereum.EventParam("_cType", ethereum.Value.fromFixedBytes(_cType))
  )
  transferCollateral1Event.parameters.push(
    new ethereum.EventParam("_safe", ethereum.Value.fromUnsignedBigInt(_safe))
  )
  transferCollateral1Event.parameters.push(
    new ethereum.EventParam("_dst", ethereum.Value.fromAddress(_dst))
  )
  transferCollateral1Event.parameters.push(
    new ethereum.EventParam("_wad", ethereum.Value.fromUnsignedBigInt(_wad))
  )

  return transferCollateral1Event
}

export function createTransferInternalCoinsEvent(
  _sender: Address,
  _safe: BigInt,
  _dst: Address,
  _rad: BigInt
): TransferInternalCoins {
  let transferInternalCoinsEvent = changetype<TransferInternalCoins>(
    newMockEvent()
  )

  transferInternalCoinsEvent.parameters = new Array()

  transferInternalCoinsEvent.parameters.push(
    new ethereum.EventParam("_sender", ethereum.Value.fromAddress(_sender))
  )
  transferInternalCoinsEvent.parameters.push(
    new ethereum.EventParam("_safe", ethereum.Value.fromUnsignedBigInt(_safe))
  )
  transferInternalCoinsEvent.parameters.push(
    new ethereum.EventParam("_dst", ethereum.Value.fromAddress(_dst))
  )
  transferInternalCoinsEvent.parameters.push(
    new ethereum.EventParam("_rad", ethereum.Value.fromUnsignedBigInt(_rad))
  )

  return transferInternalCoinsEvent
}

export function createTransferSAFEOwnershipEvent(
  _sender: Address,
  _safe: BigInt,
  _dst: Address
): TransferSAFEOwnership {
  let transferSafeOwnershipEvent = changetype<TransferSAFEOwnership>(
    newMockEvent()
  )

  transferSafeOwnershipEvent.parameters = new Array()

  transferSafeOwnershipEvent.parameters.push(
    new ethereum.EventParam("_sender", ethereum.Value.fromAddress(_sender))
  )
  transferSafeOwnershipEvent.parameters.push(
    new ethereum.EventParam("_safe", ethereum.Value.fromUnsignedBigInt(_safe))
  )
  transferSafeOwnershipEvent.parameters.push(
    new ethereum.EventParam("_dst", ethereum.Value.fromAddress(_dst))
  )

  return transferSafeOwnershipEvent
}
