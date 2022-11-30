import { Address, BigInt } from "@graphprotocol/graph-ts";
import { Account, OfferLog} from "../../generated/schema"

export function createOffer(originContract:Address, tokenId: BigInt, bidder: Account , amount:BigInt, convertible: boolean):OfferLog{
    let id = originContract.toHexString().concat('-').concat(tokenId.toString())
    let offer = OfferLog.load(id)
        if(offer == null){
            offer = new OfferLog(originContract.toHex().concat('-').concat(tokenId.toString()))
            offer.originContract = originContract;
            offer.bidder = bidder.id;
            offer.amount = amount;
            offer.tokenId = tokenId;
            offer.convertible = convertible;
            offer.save();
        }

    return offer
} 

export function getOffer(originContract:Address, tokenId: BigInt):OfferLog | null{
    let id = originContract.toHexString().concat('-').concat(tokenId.toString())
    let offer = OfferLog.load(id);

    return offer
}