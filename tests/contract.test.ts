import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
  beforeEach
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AuctionLog, OfferLog } from "../generated/schema"
import { AcceptOffer } from "../generated/Contract/Contract"
import { handleAcceptOffer, handleOfferPlaced } from "../src/contract"
import { createAcceptOfferEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("handleOfferPlaced", () => {
  beforeEach(()=>{
    let offer = new OfferLog('0xa16081f360e3847006db660bae1c6d1b2e17ec2a'.concat('-').concat(BigInt.fromI32(234).toString()))
    offer.amount = BigInt.fromI32(234)
    offer.bidder = '0x0000000000000000000000000000000000000001'
    offer.originContract = Address.fromString("0xa16081f360e3847006db660bae1c6d1b2e17ec2a")
    offer.tokenId = BigInt.fromI32(234)
    offer.convertible = true
    offer.save()
  })
  // beforeAll(() => {
  //   let _originContract = Address.fromString(
  //     "0x0000000000000000000000000000000000000001"
  //   )
  //   let _bidder = Address.fromString(
  //     "0x0000000000000000000000000000000000000001"
  //   )
  //   let _seller = Address.fromString(
  //     "0x0000000000000000000000000000000000000001"
  //   )
  //   let _currencyAddress = Address.fromString(
  //     "0x0000000000000000000000000000000000000001"
  //   )
  //   let _amount = BigInt.fromI32(234)
  //   let _tokenId = BigInt.fromI32(234)
  //   let _splitAddresses = [
  //     Address.fromString("0x0000000000000000000000000000000000000001")
  //   ]
  //   let _splitRatios = [123]
  //   let newAcceptOfferEvent = createAcceptOfferEvent(
  //     _originContract,
  //     _bidder,
  //     _seller,
  //     _currencyAddress,
  //     _amount,
  //     _tokenId,
  //     _splitAddresses,
  //     _splitRatios
  //   )
  //   handleAcceptOffer(newAcceptOfferEvent)
  // })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("OfferLog created and stored", () => {
    assert.entityCount("OfferLog", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "OfferLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-234",
      "originContract",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a"
    )
    assert.fieldEquals(
      "OfferLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-234",
      "bidder",
      "0x0000000000000000000000000000000000000001"
    )
  

    assert.fieldEquals(
      "OfferLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-234",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "OfferLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-234",
      "tokenId",
      "234"
    )
  
      clearStore()

  
  })
})

describe("handleNewAuction", () => {
  beforeEach(()=>{
    let auction = new AuctionLog('0xa16081f360e3847006db660bae1c6d1b2e17ec2a'.concat('-').concat(BigInt.fromI32(234).toString()))
    auction.amount = BigInt.fromI32(234)
    auction.contractAddress = Address.fromString('0xa16081f360e3847006db660bae1c6d1b2e17ec2a')
    auction.auctionCreator = '0x0000000000000000000000000000000000000001'
    auction.minimumBid = BigInt.fromI32(234)
    auction.tokenId = BigInt.fromI32(234)
    auction.currencyAddress = Address.fromString('0x0000000000000000000000000000000000000001')
    auction.save()
  })


  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AuctionLog created and stored", () => {
    assert.entityCount("AuctionLog", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AuctionLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-234",
      "auctionCreator",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AuctionLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-234",
      "minimumBid",
      "234"
    )
  

    assert.fieldEquals(
      "AuctionLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-234",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "AuctionLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-234",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "AuctionLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-234",
      "currencyAddress",
      "0x0000000000000000000000000000000000000001"
    )
  
  
      clearStore()

  
  })
})