import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes } from "@graphprotocol/graph-ts"
import { AddAuthorization } from "../generated/schema"
import { AddAuthorization as AddAuthorizationEvent } from "../generated/collateralAuctionHouseFactory/collateralAuctionHouseFactory"
import { handleAddAuthorization } from "../src/collateral-auction-house-factory"
import { createAddAuthorizationEvent } from "./collateral-auction-house-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _account = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAddAuthorizationEvent = createAddAuthorizationEvent(_account)
    handleAddAuthorization(newAddAuthorizationEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddAuthorization created and stored", () => {
    assert.entityCount("AddAuthorization", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddAuthorization",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_account",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
