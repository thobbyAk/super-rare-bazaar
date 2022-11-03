import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ExampleEntity } from "../generated/schema"
import { AcceptOffer } from "../generated/Contract/Contract"
import { handleAcceptOffer } from "../src/contract"
import { createAcceptOfferEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _originContract = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _bidder = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _seller = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _currencyAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _amount = BigInt.fromI32(234)
    let _tokenId = BigInt.fromI32(234)
    let _splitAddresses = [
      Address.fromString("0x0000000000000000000000000000000000000001")
    ]
    let _splitRatios = [123]
    let newAcceptOfferEvent = createAcceptOfferEvent(
      _originContract,
      _bidder,
      _seller,
      _currencyAddress,
      _amount,
      _tokenId,
      _splitAddresses,
      _splitRatios
    )
    handleAcceptOffer(newAcceptOfferEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ExampleEntity created and stored", () => {
    assert.entityCount("ExampleEntity", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "_originContract",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "_bidder",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "_seller",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "_currencyAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "_amount",
      "234"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "_tokenId",
      "234"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "_splitAddresses",
      "[0x0000000000000000000000000000000000000001]"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "_splitRatios",
      "[123]"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
