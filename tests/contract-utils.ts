import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
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

export function createAcceptOfferEvent(
  _originContract: Address,
  _bidder: Address,
  _seller: Address,
  _currencyAddress: Address,
  _amount: BigInt,
  _tokenId: BigInt,
  _splitAddresses: Array<Address>,
  _splitRatios: Array<i32>
): AcceptOffer {
  let acceptOfferEvent = changetype<AcceptOffer>(newMockEvent())

  acceptOfferEvent.parameters = new Array()

  acceptOfferEvent.parameters.push(
    new ethereum.EventParam(
      "_originContract",
      ethereum.Value.fromAddress(_originContract)
    )
  )
  acceptOfferEvent.parameters.push(
    new ethereum.EventParam("_bidder", ethereum.Value.fromAddress(_bidder))
  )
  acceptOfferEvent.parameters.push(
    new ethereum.EventParam("_seller", ethereum.Value.fromAddress(_seller))
  )
  acceptOfferEvent.parameters.push(
    new ethereum.EventParam(
      "_currencyAddress",
      ethereum.Value.fromAddress(_currencyAddress)
    )
  )
  acceptOfferEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  acceptOfferEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  acceptOfferEvent.parameters.push(
    new ethereum.EventParam(
      "_splitAddresses",
      ethereum.Value.fromAddressArray(_splitAddresses)
    )
  )
  acceptOfferEvent.parameters.push(
    new ethereum.EventParam(
      "_splitRatios",
      ethereum.Value.fromI32Array(_splitRatios)
    )
  )

  return acceptOfferEvent
}

export function createAuctionBidEvent(
  _contractAddress: Address,
  _bidder: Address,
  _tokenId: BigInt,
  _currencyAddress: Address,
  _amount: BigInt,
  _startedAuction: boolean,
  _newAuctionLength: BigInt,
  _previousBidder: Address
): AuctionBid {
  let auctionBidEvent = changetype<AuctionBid>(newMockEvent())

  auctionBidEvent.parameters = new Array()

  auctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "_contractAddress",
      ethereum.Value.fromAddress(_contractAddress)
    )
  )
  auctionBidEvent.parameters.push(
    new ethereum.EventParam("_bidder", ethereum.Value.fromAddress(_bidder))
  )
  auctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  auctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "_currencyAddress",
      ethereum.Value.fromAddress(_currencyAddress)
    )
  )
  auctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  auctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "_startedAuction",
      ethereum.Value.fromBoolean(_startedAuction)
    )
  )
  auctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "_newAuctionLength",
      ethereum.Value.fromUnsignedBigInt(_newAuctionLength)
    )
  )
  auctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "_previousBidder",
      ethereum.Value.fromAddress(_previousBidder)
    )
  )

  return auctionBidEvent
}

export function createAuctionSettledEvent(
  _contractAddress: Address,
  _bidder: Address,
  _seller: Address,
  _tokenId: BigInt,
  _currencyAddress: Address,
  _amount: BigInt
): AuctionSettled {
  let auctionSettledEvent = changetype<AuctionSettled>(newMockEvent())

  auctionSettledEvent.parameters = new Array()

  auctionSettledEvent.parameters.push(
    new ethereum.EventParam(
      "_contractAddress",
      ethereum.Value.fromAddress(_contractAddress)
    )
  )
  auctionSettledEvent.parameters.push(
    new ethereum.EventParam("_bidder", ethereum.Value.fromAddress(_bidder))
  )
  auctionSettledEvent.parameters.push(
    new ethereum.EventParam("_seller", ethereum.Value.fromAddress(_seller))
  )
  auctionSettledEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  auctionSettledEvent.parameters.push(
    new ethereum.EventParam(
      "_currencyAddress",
      ethereum.Value.fromAddress(_currencyAddress)
    )
  )
  auctionSettledEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return auctionSettledEvent
}

export function createCancelAuctionEvent(
  _contractAddress: Address,
  _tokenId: BigInt,
  _auctionCreator: Address
): CancelAuction {
  let cancelAuctionEvent = changetype<CancelAuction>(newMockEvent())

  cancelAuctionEvent.parameters = new Array()

  cancelAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_contractAddress",
      ethereum.Value.fromAddress(_contractAddress)
    )
  )
  cancelAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  cancelAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_auctionCreator",
      ethereum.Value.fromAddress(_auctionCreator)
    )
  )

  return cancelAuctionEvent
}

export function createCancelOfferEvent(
  _originContract: Address,
  _bidder: Address,
  _currencyAddress: Address,
  _amount: BigInt,
  _tokenId: BigInt
): CancelOffer {
  let cancelOfferEvent = changetype<CancelOffer>(newMockEvent())

  cancelOfferEvent.parameters = new Array()

  cancelOfferEvent.parameters.push(
    new ethereum.EventParam(
      "_originContract",
      ethereum.Value.fromAddress(_originContract)
    )
  )
  cancelOfferEvent.parameters.push(
    new ethereum.EventParam("_bidder", ethereum.Value.fromAddress(_bidder))
  )
  cancelOfferEvent.parameters.push(
    new ethereum.EventParam(
      "_currencyAddress",
      ethereum.Value.fromAddress(_currencyAddress)
    )
  )
  cancelOfferEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  cancelOfferEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return cancelOfferEvent
}

export function createNewAuctionEvent(
  _contractAddress: Address,
  _tokenId: BigInt,
  _auctionCreator: Address,
  _currencyAddress: Address,
  _startingTime: BigInt,
  _minimumBid: BigInt,
  _lengthOfAuction: BigInt
): NewAuction {
  let newAuctionEvent = changetype<NewAuction>(newMockEvent())

  newAuctionEvent.parameters = new Array()

  newAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_contractAddress",
      ethereum.Value.fromAddress(_contractAddress)
    )
  )
  newAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  newAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_auctionCreator",
      ethereum.Value.fromAddress(_auctionCreator)
    )
  )
  newAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_currencyAddress",
      ethereum.Value.fromAddress(_currencyAddress)
    )
  )
  newAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_startingTime",
      ethereum.Value.fromUnsignedBigInt(_startingTime)
    )
  )
  newAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_minimumBid",
      ethereum.Value.fromUnsignedBigInt(_minimumBid)
    )
  )
  newAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "_lengthOfAuction",
      ethereum.Value.fromUnsignedBigInt(_lengthOfAuction)
    )
  )

  return newAuctionEvent
}

export function createOfferPlacedEvent(
  _originContract: Address,
  _bidder: Address,
  _currencyAddress: Address,
  _amount: BigInt,
  _tokenId: BigInt,
  _convertible: boolean
): OfferPlaced {
  let offerPlacedEvent = changetype<OfferPlaced>(newMockEvent())

  offerPlacedEvent.parameters = new Array()

  offerPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "_originContract",
      ethereum.Value.fromAddress(_originContract)
    )
  )
  offerPlacedEvent.parameters.push(
    new ethereum.EventParam("_bidder", ethereum.Value.fromAddress(_bidder))
  )
  offerPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "_currencyAddress",
      ethereum.Value.fromAddress(_currencyAddress)
    )
  )
  offerPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  offerPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  offerPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "_convertible",
      ethereum.Value.fromBoolean(_convertible)
    )
  )

  return offerPlacedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSetSalePriceEvent(
  _originContract: Address,
  _currencyAddress: Address,
  _target: Address,
  _amount: BigInt,
  _tokenId: BigInt,
  _splitRecipients: Array<Address>,
  _splitRatios: Array<i32>
): SetSalePrice {
  let setSalePriceEvent = changetype<SetSalePrice>(newMockEvent())

  setSalePriceEvent.parameters = new Array()

  setSalePriceEvent.parameters.push(
    new ethereum.EventParam(
      "_originContract",
      ethereum.Value.fromAddress(_originContract)
    )
  )
  setSalePriceEvent.parameters.push(
    new ethereum.EventParam(
      "_currencyAddress",
      ethereum.Value.fromAddress(_currencyAddress)
    )
  )
  setSalePriceEvent.parameters.push(
    new ethereum.EventParam("_target", ethereum.Value.fromAddress(_target))
  )
  setSalePriceEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  setSalePriceEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  setSalePriceEvent.parameters.push(
    new ethereum.EventParam(
      "_splitRecipients",
      ethereum.Value.fromAddressArray(_splitRecipients)
    )
  )
  setSalePriceEvent.parameters.push(
    new ethereum.EventParam(
      "_splitRatios",
      ethereum.Value.fromI32Array(_splitRatios)
    )
  )

  return setSalePriceEvent
}

export function createSoldEvent(
  _originContract: Address,
  _buyer: Address,
  _seller: Address,
  _currencyAddress: Address,
  _amount: BigInt,
  _tokenId: BigInt
): Sold {
  let soldEvent = changetype<Sold>(newMockEvent())

  soldEvent.parameters = new Array()

  soldEvent.parameters.push(
    new ethereum.EventParam(
      "_originContract",
      ethereum.Value.fromAddress(_originContract)
    )
  )
  soldEvent.parameters.push(
    new ethereum.EventParam("_buyer", ethereum.Value.fromAddress(_buyer))
  )
  soldEvent.parameters.push(
    new ethereum.EventParam("_seller", ethereum.Value.fromAddress(_seller))
  )
  soldEvent.parameters.push(
    new ethereum.EventParam(
      "_currencyAddress",
      ethereum.Value.fromAddress(_currencyAddress)
    )
  )
  soldEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  soldEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return soldEvent
}
