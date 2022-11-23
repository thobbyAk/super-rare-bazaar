import { Address, BigInt } from "@graphprotocol/graph-ts";
import {Account, AuctionLog } from "../../generated/schema"

export function createAuction(contractAddress: Address,auctionCreator:Account, tokenId: BigInt, minimumBid: BigInt, currencyAddress: Address): AuctionLog{
    let id = contractAddress.toHexString().concat('-').concat(tokenId.toString())
    let auction = AuctionLog.load(id)
    if(auction == null){
        auction = new AuctionLog(contractAddress.toHexString().concat('-').concat(tokenId.toString()))
        auction.auctionCreator = auctionCreator.id
        auction.contractAddress = contractAddress
        auction.minimumBid = minimumBid
        auction.tokenId = tokenId
        auction.currencyAddress = currencyAddress
        auction.save();
    }

    return auction as AuctionLog
}   

export function getAuction (contractAddress: Address, tokenId:BigInt): AuctionLog{
    let id = contractAddress.toHexString().concat('-').concat(tokenId.toString())
    let auction = AuctionLog.load(id)
    return auction as AuctionLog
}