import { BigInt } from "@graphprotocol/graph-ts";
import { AuctionLog, AuctionLogSnapshot } from "../../generated/schema";

export function createAuctionSnapShot(auctionLog: AuctionLog, index: BigInt, timeStamp: BigInt): AuctionLogSnapshot{
        let auctionLogSnapShot = new AuctionLogSnapshot(index.toString().concat('-').concat(timeStamp.toString()))
        auctionLogSnapShot.amount = auctionLog.amount;
        auctionLogSnapShot.auctionCreator = auctionLog.id;
        auctionLogSnapShot.bidder = auctionLog.bidder;
        auctionLogSnapShot.currencyAddress = auctionLog.contractAddress;
        auctionLogSnapShot.currencyAddress = auctionLog.currencyAddress;
        auctionLogSnapShot.tokenId = auctionLog.tokenId;
        auctionLogSnapShot.timestamp = timeStamp;
        auctionLogSnapShot.save();
    return auctionLogSnapShot 
}