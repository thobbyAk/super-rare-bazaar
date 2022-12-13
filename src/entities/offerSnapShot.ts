import { BigInt } from "@graphprotocol/graph-ts";
import { Offer, OfferLogSnapshot } from "../../generated/schema";

export function createOfferSnapShot(offerLog: Offer, index: BigInt, timeStamp: BigInt): OfferLogSnapshot{
    let offerLogSnapshot = new OfferLogSnapshot(index.toString().concat('-').concat(timeStamp.toString()))
    offerLogSnapshot.originContract = offerLog.originContract;
    offerLogSnapshot.amount = offerLog.amount;
    offerLogSnapshot.bidder = offerLog.bidder;
    offerLogSnapshot.convertible = offerLog.convertible;
    offerLogSnapshot.tokenId = offerLog.tokenId;
    offerLogSnapshot.timestamp = timeStamp;
    offerLogSnapshot.save();
return offerLogSnapshot 

}