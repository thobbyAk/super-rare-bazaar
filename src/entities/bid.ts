import { Address, BigInt } from "@graphprotocol/graph-ts";

import {  Account, AuctionLog, BidLog} from "../../generated/schema"

export function getOrCreateBid(bidder: Account, tokenId: BigInt, amount: BigInt, auction: AuctionLog): BidLog{
    let id = bidder.address.toHex().concat('-').concat(tokenId.toString())
    let bid = BidLog.load(id)
    if(bid == null){
        bid = new BidLog(bidder.address.toHex().concat('-').concat(tokenId.toString()))
        bid.bidder = bidder.id;
        bid.amount = amount;
        bid.auction = auction.id;
        
        bid.save();
    }
    return bid 

}