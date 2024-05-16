import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { AllowSAFE } from "../generated/schema"
import { AllowSAFE as AllowSAFEEvent } from "../generated/odSafeManager/odSafeManager"
import { handleAllowSAFE } from "../src/od-safe-manager"
import { createAllowSAFEEvent } from "./od-safe-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _safe = BigInt.fromI32(234)
    let _usr = Address.fromString("0x0000000000000000000000000000000000000001")
    let _ok = "boolean Not implemented"
    let newAllowSAFEEvent = createAllowSAFEEvent(_sender, _safe, _usr, _ok)
    handleAllowSAFE(newAllowSAFEEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AllowSAFE created and stored", () => {
    assert.entityCount("AllowSAFE", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AllowSAFE",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_sender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AllowSAFE",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_safe",
      "234"
    )
    assert.fieldEquals(
      "AllowSAFE",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_usr",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AllowSAFE",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_ok",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
