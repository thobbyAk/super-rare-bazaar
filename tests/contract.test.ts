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
import { Auction, Offer } from "../generated/schema"
import { AcceptOffer } from "../generated/Contract/Contract"
import { handleAcceptOffer, handleAuctionBid, handleNewAuction, handleOfferPlaced } from "../src/contract"
import { createAcceptOfferEvent } from "./contract-utils"
import { createNewAuctionEvent, createNewBidEvent, createOfferPlacedEvent } from "./helper"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

const originContract = Address.fromString("0xa16081f360e3847006db660bae1c6d1b2e17ec2a")
const contractAddress = Address.fromString("0xa16081f360e3847006db660bae1c6d1b2e17ec2a")
const bidder1 = Address.fromString("0x0000000000000000000000000000000000000001")
const bidder2 = Address.fromString("0x0000000000000000000000000000000000000002")
const seller1 = Address.fromString("0x0000000000000000000000000000000000000003")
const seller2 = Address.fromString("0x0000000000000000000000000000000000000004")
const auctionCreator = Address.fromString("0x0000000000000000000000000000000000000005")
const currencyAddress = Address.fromString("0x0000000000000000000000000000000000000006")


describe("Test all events created",()=>{
  describe('HandleNewAuction Event', () => { 
    test("create new auction event",()=>{
        var auction = createNewAuctionEvent(
          contractAddress,
          BigInt.fromString("3"),
          auctionCreator,
          currencyAddress,
          BigInt.fromString("1"),
          BigInt.fromString("2"),
          BigInt.fromString("5")

        )

        handleNewAuction(auction);
       
        assert.fieldEquals("Auction", contractAddress.toHexString().concat('-').concat(BigInt.fromString("1").toString()),"id",contractAddress.toHexString().concat('-').concat(BigInt.fromString("1").toString()))
        assert.fieldEquals("Auction",contractAddress.toHexString().concat('-').concat(BigInt.fromString("1").toString()),"contractAddress",contractAddress.toHexString())
        assert.fieldEquals("Auction",contractAddress.toHexString().concat('-').concat(BigInt.fromString("1").toString()),"auctionCreator",auctionCreator.toHexString())
        assert.fieldEquals("Auction",contractAddress.toHexString().concat('-').concat(BigInt.fromString("1").toString()),"minimumBid",BigInt.fromString("5").toString())
        assert.fieldEquals("Auction",contractAddress.toHexString().concat('-').concat(BigInt.fromString("1").toString()),"tokenId",BigInt.fromString("1").toString())

    })
   })
  describe("handleOfferPlaced Event", () => {
        test("create offer event",()=>{
          var offer = createOfferPlacedEvent(
            originContract,
            bidder1,
            BigInt.fromString("1"),
            BigInt.fromString("2")
          )
          handleOfferPlaced(offer);
          assert.fieldEquals("Account", bidder1.toHexString(),"id",bidder1.toHexString())
          assert.fieldEquals("Offer", originContract.toHexString().concat('-').concat(BigInt.fromString("1").toString()),"id",originContract.toHexString().concat('-').concat(BigInt.fromString("1").toString()))
          assert.fieldEquals("Offer",originContract.toHexString().concat('-').concat(BigInt.fromString("1").toString()),"amount",BigInt.fromString("2").toString())
          assert.fieldEquals("Offer",originContract.toHexString().concat('-').concat(BigInt.fromString("1").toString()),"tokenId",BigInt.fromString("1").toString())

        })
  })
  describe("handleBidPlaced Event",()=>{
    test("create bid event",()=>{
      var bid = createNewBidEvent(
        contractAddress,
        bidder1,
        bidder2,
        currencyAddress,
        BigInt.fromString("1"),
        BigInt.fromString("3"),
        BigInt.fromString("5"),

      )

      handleAuctionBid(bid)
      assert.fieldEquals("Bid", bidder1.toHexString().concat('-').concat(BigInt.fromString("1").toString()),"id",bidder1.toHexString().concat('-').concat(BigInt.fromString("1").toString()))
      assert.fieldEquals("Bid",bidder1.toHexString().concat('-').concat(BigInt.fromString("1").toString()),"tokenId",BigInt.fromString("1").toString())
      assert.fieldEquals("Bid",bidder1.toHexString().concat('-').concat(BigInt.fromString("1").toString()),"amount",BigInt.fromString("5").toString())

    })
  })

})
// describe("handleOfferPlaced", () => {
//   beforeEach(()=>{

//     let offer = new Offer('0xa16081f360e3847006db660bae1c6d1b2e17ec2a'.concat('-').concat(BigInt.fromI32(234).toString()))
//     offer.amount = BigInt.fromI32(234)
//     offer.bidder = '0x0000000000000000000000000000000000000001'
//     offer.originContract = Address.fromString("0xa16081f360e3847006db660bae1c6d1b2e17ec2a")
//     offer.tokenId = BigInt.fromI32(234)
//     offer.convertible = true
//     offer.save()
//   })


//   afterAll(() => {
//     clearStore()
//   })

//   // For more test scenarios, see:
//   // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

//   test("Offer created and stored", () => {
//     assert.entityCount("Offer", 1)

//     // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
//     assert.fieldEquals(
//       "Offer",
//       "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-234",
//       "originContract",
//       "0xa16081f360e3847006db660bae1c6d1b2e17ec2a"
//     )
//     assert.fieldEquals(
//       "Offer",
//       "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-234",
//       "bidder",
//       "0x0000000000000000000000000000000000000001"
//     )
  

//     assert.fieldEquals(
//       "Offer",
//       "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-234",
//       "amount",
//       "234"
//     )
//     assert.fieldEquals(
//       "Offer",
//       "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-234",
//       "tokenId",
//       "234"
//     )
  
//       clearStore()

  
//   })
// })

// describe("handleNewAuction", () => {
//   beforeEach(()=>{
//     let auction = new Auction('0xa16081f360e3847006db660bae1c6d1b2e17ec2a'.concat('-').concat(BigInt.fromI32(234).toString()))
//     auction.closingAmount = BigInt.fromI32(234)
//     auction.contractAddress = Address.fromString('0xa16081f360e3847006db660bae1c6d1b2e17ec2a')
//     auction.auctionCreator = '0x0000000000000000000000000000000000000001'
//     auction.minimumBid = BigInt.fromI32(234)
//     auction.tokenId = BigInt.fromI32(234)
//     auction.currencyAddress = Address.fromString('0x0000000000000000000000000000000000000001')
//     auction.save()
//   })


//   afterAll(() => {
//     clearStore()
//   })

//   // For more test scenarios, see:
//   // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

//   test("Auction created and stored", () => {
//     assert.entityCount("AuctionLog", 1)

//     // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
//     assert.fieldEquals(
//       "Auction",
//       "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-234",
//       "auctionCreator",
//       "0x0000000000000000000000000000000000000001"
//     )
//     assert.fieldEquals(
//       "Auction",
//       "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-234",
//       "minimumBid",
//       "234"
//     )
  

//     assert.fieldEquals(
//       "Auction",
//       "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-234",
//       "amount",
//       "234"
//     )
//     assert.fieldEquals(
//       "Auction",
//       "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-234",
//       "tokenId",
//       "234"
//     )
//     assert.fieldEquals(
//       "Auction",
//       "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-234",
//       "currencyAddress",
//       "0x0000000000000000000000000000000000000001"
//     )
  
  
//       clearStore()

  
//   })
// })