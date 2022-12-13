import { Address, ethereum, BigInt } from "@graphprotocol/graph-ts";
import { newMockEvent } from "matchstick-as";
import { AuctionBid, NewAuction, OfferPlaced } from "../generated/Contract/Contract";
import { Account, Offer } from "../generated/schema";


export const superRareBazaarAddress1 = Address.fromString(
    "0x6D7c44773C52D396F43c2D511B81aa168E9a7a42"
  );
  export const addressZero = Address.fromString(
    "0x0000000000000000000000000000000000000000"
  );

export function createHandleOfferPlacedEvent(
    originContract: Address,
    bidder: Address,
    tokenId: BigInt,
    amount: BigInt

): OfferPlaced{
    let originContractParam = new ethereum.EventParam("_originContract",ethereum.Value.fromAddress(originContract))
    let bidderParam = new ethereum.EventParam("_bidder",ethereum.Value.fromAddress(bidder))
    let tokenIdParam = new ethereum.EventParam("_tokenId",ethereum.Value.fromSignedBigInt(tokenId))
    let amountParam = new ethereum.EventParam("_amount",ethereum.Value.fromSignedBigInt(amount))
    let convertibleParam = new ethereum.EventParam("_convertible",ethereum.Value.fromBoolean(true))
    let currencyAddressParam = new ethereum.EventParam("_currencyAddress",ethereum.Value.fromAddress(addressZero))
    let mockEvent = newMockEvent()
    let newOfferEvent = new OfferPlaced(
        mockEvent.address,
        mockEvent.logIndex,
        mockEvent.transactionLogIndex,
        mockEvent.logType,
        mockEvent.block,
        mockEvent.transaction,
        [originContractParam,bidderParam,currencyAddressParam,amountParam,tokenIdParam,convertibleParam],
        mockEvent.receipt

    )
    return newOfferEvent

}

export function createHandleNewAuction(
    contractAddress: Address,
    startTime: BigInt,
    auctionCreator: Address,
    currencyAddress: Address,
    tokenId: BigInt,
    lengthOfAuction: BigInt,
    minimumBid: BigInt
): NewAuction{
    let contractAddressParam = new ethereum.EventParam("_contractAddress",ethereum.Value.fromAddress(contractAddress))
    let auctionCreatorParam = new ethereum.EventParam("_auctionCreator",ethereum.Value.fromAddress(auctionCreator))
    let currencyAddressParam = new ethereum.EventParam("_currencyAddress",ethereum.Value.fromAddress(currencyAddress))
    let startTimeParam = new ethereum.EventParam("_startingTime",ethereum.Value.fromSignedBigInt(startTime))
    let lengthOfAuctionParam = new ethereum.EventParam("_lengthOfAuction",ethereum.Value.fromSignedBigInt(lengthOfAuction))
    let tokenIdParam = new ethereum.EventParam("_tokenId",ethereum.Value.fromSignedBigInt(tokenId))
    let minimumBidParam = new ethereum.EventParam("_minimumBid",ethereum.Value.fromSignedBigInt(minimumBid))
    let mockEvent = newMockEvent()
    let newAuctionEvent = new NewAuction(
        mockEvent.address,
        mockEvent.logIndex,
        mockEvent.transactionLogIndex,
        mockEvent.logType,
        mockEvent.block,
        mockEvent.transaction,
        [contractAddressParam,tokenIdParam,auctionCreatorParam,currencyAddressParam,startTimeParam,minimumBidParam,lengthOfAuctionParam],
        null
    )
    return newAuctionEvent
}

export function createHandleNewBid(
    contractAddress: Address,
    bidder: Address,
    previousBidder: Address,
    currencyAddress: Address,
    tokenId: BigInt,
    newAuctuionLength: BigInt,
    amount: BigInt
): AuctionBid{
    let contractAddressParam = new ethereum.EventParam("_contractAddress",ethereum.Value.fromAddress(contractAddress))
    let bidderParam = new ethereum.EventParam("_bidder",ethereum.Value.fromAddress(bidder))
    let previousBidderParam = new ethereum.EventParam("_previousBidder",ethereum.Value.fromAddress(previousBidder))
    let currencyAddressParam = new ethereum.EventParam("_currencyAddress",ethereum.Value.fromAddress(currencyAddress))
    let newAuctionLengthParam = new ethereum.EventParam("_newAuctionLength",ethereum.Value.fromSignedBigInt(newAuctuionLength))
    let startedAuctionParam = new ethereum.EventParam("_startedAuction",ethereum.Value.fromBoolean(true))
    let tokenIdParam = new ethereum.EventParam("_tokenId",ethereum.Value.fromSignedBigInt(tokenId))
    let amountParam = new ethereum.EventParam("_amount",ethereum.Value.fromSignedBigInt(amount))
    let mockEvent = newMockEvent()
    let newAuctionBidEvent = new AuctionBid(
        mockEvent.address,
        mockEvent.logIndex,
        mockEvent.transactionLogIndex,
        mockEvent.logType,
        mockEvent.block,
        mockEvent.transaction,
        [contractAddressParam,bidderParam,tokenIdParam,currencyAddressParam,amountParam,startedAuctionParam,newAuctionLengthParam,previousBidderParam],
     
        null
    )

    return newAuctionBidEvent

}

