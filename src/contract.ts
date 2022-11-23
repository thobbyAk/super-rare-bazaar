import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  AcceptOffer,
  AuctionBid,
  AuctionSettled,
  CancelAuction,
  CancelOffer,
  NewAuction,
  OfferPlaced,
  OwnershipTransferred,
  SetSalePrice,
  Sold
} from "../generated/Contract/Contract"
import {OfferLog, AuctionLog, BidLog, OfferLogSnapshot, AuctionLogSnapshot} from "../generated/schema"
import { getOrCreateAccount } from "./entities/account"
import { createAuction, getAuction } from "./entities/auction"
import { createAuctionSnapShot } from "./entities/auctionSnapShot"
import { getOrCreateBid } from "./entities/bid"
import { createOffer, getOffer } from "./entities/offer"
import { createOfferSnapShot } from "./entities/offerSnapShot"
import { store } from "@graphprotocol/graph-ts"
import { createBidSnapShot } from "./entities/bidSnapShot"



//handle offer creation. an offer is created once its accepted
export function handleOfferPlaced(event: OfferPlaced): void {
  let bidder =  getOrCreateAccount(event.params._bidder)
  if(bidder){
    let offer = createOffer (event.params._originContract, event.params._tokenId,bidder, event.params._amount, event.params._convertible)
      if(offer){
        //add offerLogTimeshot
        createOfferSnapShot(offer, event.logIndex, event.block.timestamp)

      }
  }
  
 
   
 
  


}
// adds a new auction to the state
export function handleNewAuction(event: NewAuction): void {
  let auctionCreator =  getOrCreateAccount(event.params._auctionCreator)
  if(auctionCreator){
    let auction = getAuction(event.params._contractAddress,event.params._tokenId)
    if(auction == null){
       auction = createAuction(event.params._contractAddress,auctionCreator,event.params._tokenId, event.params._minimumBid,event.params._currencyAddress)
    }
   
    if(auction){
      createAuctionSnapShot(auction, event.logIndex, event.block.timestamp);
    }
  }
 

    
}
//this updates the sate of an auction
export function handleAuctionSettled(event: AuctionSettled): void {
    let seller = getOrCreateAccount(event.params._seller) 
    let bidder = getOrCreateAccount(event.params._bidder) 
    let auctionLog = getAuction(event.params._contractAddress,event.params._tokenId)
    if(auctionLog !== null){
     
      store.remove("AuctionLog",event.params._contractAddress.toHexString().concat('-').concat(event.params._tokenId.toString()))
      createAuctionSnapShot(auctionLog, event.logIndex, event.block.timestamp)

    }


}

//when a bid is submited for an auction, the sate of the auction is updated
export function handleAuctionBid(event: AuctionBid): void {
  let bidder =  getOrCreateAccount(event.params._bidder)
  let auction = getAuction(event.params._contractAddress, event.params._tokenId)
  auction.startedAuction = event.params._startedAuction
  if(bidder){
    let bid = getOrCreateBid(bidder,event.params._tokenId,event.params._amount, auction)
    if(bid !== null ){
      createBidSnapShot(bid,event.logIndex,event.block.timestamp)
    }
  }

}



export function handleCancelAuction(event: CancelAuction): void {
    let auction = getAuction(event.params._contractAddress, event.params._tokenId)
    if(auction !== null){
      //handle cancel the action
      store.remove("AuctionLog",event.params._contractAddress.toHexString().concat('-').concat(event.params._tokenId.toString()))
      createAuctionSnapShot(auction, event.logIndex, event.block.timestamp)


    }
 
}

export function handleCancelOffer(event: CancelOffer): void {
    let offer = getOffer(event.params._originContract, event.params._tokenId)
    if(offer !== null){
      store.remove("offerLog",event.params._originContract.toHexString().concat('-').concat(event.params._tokenId.toString()))
      createOfferSnapShot(offer,event.logIndex,event.block.timestamp)
    }
}



export function handleAcceptOffer(event: AcceptOffer): void {
  let offer = getOffer(event.params._originContract, event.params._tokenId)
  if(offer !== null){
    store.remove("offerLog",event.params._originContract.toHexString().concat('-').concat(event.params._tokenId.toString()))
    createOfferSnapShot(offer,event.logIndex,event.block.timestamp)
  }
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleSetSalePrice(event: SetSalePrice): void {}

export function handleSold(event: Sold): void {}
