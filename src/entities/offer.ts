import { Address, BigInt } from "@graphprotocol/graph-ts";
import { Account, Offer} from "../../generated/schema"

export function createOffer(originContract:Address, tokenId: BigInt, bidder: Account , amount:BigInt, convertible: boolean):Offer{
    let id = originContract.toHexString().concat('-').concat(tokenId.toString())
    let offer = Offer.load(id)
        if(offer == null){
            offer = new Offer(originContract.toHex().concat('-').concat(tokenId.toString()))
            offer.originContract = originContract;
            offer.bidder = bidder.id;
            offer.amount = amount;
            offer.tokenId = tokenId;
            offer.convertible = convertible;
            offer.save();
        }

    return offer
} 

export function getOffer(originContract:Address, tokenId: BigInt):Offer | null{
    let id = originContract.toHexString().concat('-').concat(tokenId.toString())
    let offer = Offer.load(id);

    return offer
}