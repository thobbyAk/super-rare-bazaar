import { BigInt } from "@graphprotocol/graph-ts";
import { BidLog, BidLogSnapshot } from "../../generated/schema";

export function createBidSnapShot(bidLog: BidLog,index:BigInt, timeStamp:BigInt):BidLogSnapshot{
    let bidSnapshot = new BidLogSnapshot(index.toString().concat('-').concat(timeStamp.toString()))
    bidSnapshot.bidder = bidLog.bidder
    bidSnapshot.auction = bidLog.auction
    bidSnapshot.tokenId = bidLog.tokenId
    bidSnapshot.amount = bidLog.amount
    bidSnapshot.timestamp = timeStamp
    return bidSnapshot

}