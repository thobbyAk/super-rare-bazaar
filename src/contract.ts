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
import {Offer, Auction, Bid} from "../generated/schema"



//handle offer creation. an offer is created once its accepted
export function handleOfferPlaced(event: OfferPlaced): void {
  let id =  event.params._originContract.toHexString().concat('-').concat(event.params._tokenId.toString())
  let offer = Offer.load(id)
 
    //set id of the new offer to origin contract plus token id
    if(offer === null){
      offer = new Offer(event.params._originContract.toHexString().concat('-').concat(event.params._tokenId.toString()));
    }
 
    offer.originContract = event.params._originContract.toHexString()
    offer.bidder = event.params._bidder.toHexString()
    offer.amount = event.params._amount.toI32()
    offer.timestamp = event.block.timestamp.toI32()
    offer.tokenId = event.params._tokenId.toI32()
    offer.save()


}
// adds a new auction to the state
export function handleNewAuction(event: NewAuction): void {
  let id = event.params._contractAddress.toHexString().concat('-').concat(event.params._tokenId.toString())
    let auction = Auction.load(id)

    if(auction == null){
      auction = new Auction(event.params._contractAddress.toHexString().concat('-').concat(event.params._tokenId.toString()))
  
    }
    auction.contractAddress = event.params._contractAddress.toHexString();
    auction.auctionCreator = {
      address: event.params._auctionCreator.toHexString()
    }
    auction.startingTime = event.params._startingTime.toI32()
    auction.lengthOfAuction = event.params._lengthOfAuction.toI32()
    auction.currencyAddress = event.params._currencyAddress.toHexString()
    auction.minimumBid = event.params._minimumBid.toI32()
    auction.tokenId = event.params._tokenId.toI32()
    auction.lengthOfAuction = auction.lengthOfAuction.plus(BigInt.fromI32(1))

      auction.save()
    
}
//this updates the sate of an auction
export function handleAuctionSettled(event: AuctionSettled): void {
  let id =  event.params._contractAddress.toHexString().concat('-').concat(event.params._tokenId.toString())
  let auction = Auction.load(id)

  if(auction === null){
    auction = new Auction(event.params._contractAddress.toHexString().concat('-').concat(event.params._tokenId.toString()))

  }

    auction.contractAddress = event.params._contractAddress.toHexString();
    auction.bidder = {
      address: event.params._bidder.toHexString()
    }
    auction.seller = {
      address: event.params._seller.toHexString()
    }
    auction.tokenId = event.params._tokenId.toI32()
    auction.currencyAddress = event.params._currencyAddress.toHexString()
    auction.amount = event.params._amount.toI32();

    auction.save()
}

//when a bid is submited for an auction, the sate of the auction is updated
export function handleAuctionBid(event: AuctionBid): void {
  let id =  event.params._contractAddress.toHexString().concat('-').concat(event.params._tokenId.toString())
  let auction = Auction.load(id)
  if(auction === null){
    //this should reurn because you shouldnt be submitting an empty bid if the auction doesnt exist
    return
  }
    let BidId = event.params._bidder.toHexString().concat('-').concat(event.params._tokenId.toString())

    let bid = Bid.load(BidId)
    if(bid == null){
      bid = new Bid(event.params._contractAddress.toHexString().concat('-').concat(event.params._tokenId.toString()))

    }

    //i am trying to update the auction entity here . not sure how i am supposed to go about that if you could help
    
      auction.contractAddress = event.params._contractAddress.toHexString(),
      auction.startedAuction = event.params._startedAuction
      auction.bidder = event.params._bidder.toHexString()
    bid.bidder = {
      address : event.params._bidder.toHexString()
    }
    bid.amount = event.params._amount.toI32()

 



}



export function handleCancelAuction(event: CancelAuction): void {}

export function handleCancelOffer(event: CancelOffer): void {}



export function handleAcceptOffer(event: AcceptOffer): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleSetSalePrice(event: SetSalePrice): void {}

export function handleSold(event: Sold): void {}
