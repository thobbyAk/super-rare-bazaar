import { BigInt } from "@graphprotocol/graph-ts";
import { OfferLog, OfferLogSnapshot } from "../../generated/schema";

export function createOfferSnapShot(offerLog: OfferLog, index: BigInt, timeStamp: BigInt): OfferLogSnapshot{
    let offerLogSnapshot = new OfferLogSnapshot(index.toString().concat('-').concat(timeStamp.toString()))
    offerLogSnapshot.amount = offerLog.amount,
    offerLogSnapshot.bidder = offerLog.bidder,
    offerLogSnapshot.convertible = offerLog.convertible,
    offerLogSnapshot.tokenId = offerLog.tokenId
    offerLogSnapshot.timestamp = timeStamp
    offerLogSnapshot.save()
return offerLogSnapshot as OfferLogSnapshot

}