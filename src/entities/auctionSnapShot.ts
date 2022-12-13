import { BigInt } from "@graphprotocol/graph-ts";
import { Auction, AuctionLogSnapshot } from "../../generated/schema";

export function createAuctionSnapShot(auctionLog: Auction, index: BigInt, timeStamp: BigInt): AuctionLogSnapshot{
        let auctionLogSnapShot = new AuctionLogSnapshot(index.toString().concat('-').concat(timeStamp.toString()))
        auctionLogSnapShot.amount = auctionLog.closingAmount;
        auctionLogSnapShot.minimumBid = auctionLog.minimumBid
        auctionLogSnapShot.contractAddress = auctionLog.contractAddress;
        auctionLogSnapShot.auctionCreator = auctionLog.auctionCreator;
        auctionLogSnapShot.seller = auctionLog.auctionCreator;
        auctionLogSnapShot.currencyAddress = auctionLog.contractAddress;
        auctionLogSnapShot.currencyAddress = auctionLog.currencyAddress;
        auctionLogSnapShot.tokenId = auctionLog.tokenId;
        auctionLogSnapShot.timestamp = timeStamp;
        auctionLogSnapShot.save();
    return auctionLogSnapShot 
}