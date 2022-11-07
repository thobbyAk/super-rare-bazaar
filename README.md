# SuperRareBazaar

contract address: 0x6D7c44773C52D396F43c2D511B81aa168E9a7a42
startBlock: 	14166744
Name: SuperRareBazaar

#### Things to note. 
The SuperRareBazaar.sol is the implementation contract . the proxy contract that speaks to the implementatopn contract is the superRareMarketplace contract. Hence all states are maintained in the superRareMarcket place contract

## Events

      event Sold(
        address indexed _originContract,
        address indexed _buyer,
        address indexed _seller,
        address _currencyAddress,
        uint256 _amount,
        uint256 _tokenId
    );

    event SetSalePrice(
        address indexed _originContract,
        address indexed _currencyAddress,
        address _target,
        uint256 _amount,
        uint256 _tokenId,
        address payable[] _splitRecipients,
        uint8[] _splitRatios
    );

    event OfferPlaced(
        address indexed _originContract,
        address indexed _bidder,
        address indexed _currencyAddress,
        uint256 _amount,
        uint256 _tokenId,
        bool _convertible
    );

    event AcceptOffer(
        address indexed _originContract,
        address indexed _bidder,
        address indexed _seller,
        address _currencyAddress,
        uint256 _amount,
        uint256 _tokenId,
        address payable[] _splitAddresses,
        uint8[] _splitRatios
    );

    event CancelOffer(
        address indexed _originContract,
        address indexed _bidder,
        address indexed _currencyAddress,
        uint256 _amount,
        uint256 _tokenId
    );

    event NewAuction(
        address indexed _contractAddress,
        uint256 indexed _tokenId,
        address indexed _auctionCreator,
        address _currencyAddress,
        uint256 _startingTime,
        uint256 _minimumBid,
        uint256 _lengthOfAuction
    );

    event CancelAuction(
        address indexed _contractAddress,
        uint256 indexed _tokenId,
        address indexed _auctionCreator
    );

    event AuctionBid(
        address indexed _contractAddress,
        address indexed _bidder,
        uint256 indexed _tokenId,
        address _currencyAddress,
        uint256 _amount,
        bool _startedAuction,
        uint256 _newAuctionLength,
        address _previousBidder
    );

    event AuctionSettled(
        address indexed _contractAddress,
        address indexed _bidder,
        address _seller,
        uint256 indexed _tokenId,
        address _currencyAddress,
        uint256 _amount
    );


# key functions(state changing functions)
1.   `function acceptOffer(
        address _originContract,
        uint256 _tokenId,
        address _currencyAddress,
        uint256 _amount,
        address payable[] calldata _splitAddresses,
        uint8[] calldata _splitRatios
    ) external override`
2.  @notice Purchases the token for the current sale price.
    @dev Covers use of any currency (0 address is eth).
    @dev Need to verify that the buyer (if not using eth) has the marketplace approved for _currencyContract.
    @dev Need to verify that the seller has the marketplace approved for _originContract.
    @param _originContract Contract address for asset being bought.
    @param _tokenId TokenId of asset being bought.
    @param _currencyAddress Currency address of asset being used to buy.
    @param _amount Amount the piece if being bought for (including marketplace fee).
    `function buy(
        address _originContract,
        uint256 _tokenId,
        address _currencyAddress,
        uint256 _amount
    ) external payable override {`
    
3.  @notice Place an offer for a given asset
    @dev Notice we need to verify that the msg sender has approved us to move funds on their behalf.
    @dev Covers use of any currency (0 address is eth).
    @dev _amount is the amount of the offer excluding the marketplace fee.
    @dev There can be multiple offers of different currencies, but only 1 per currency.
    @param _originContract Contract address of the asset being listed.
    @param _tokenId Token Id of the asset.
    @param _currencyAddress Address of the token being offered.
    @param _amount Amount being offered.
    @param _convertible If the offer can be converted into an auction
    `function offer(
        address _originContract,
        uint256 _tokenId,
        address _currencyAddress,
        uint256 _amount,
        bool _convertible
    ) external payable override` 

4. @notice Cancels an existing offer the sender has placed on a piece.
   @param _originContract Contract address of token.
   @param _tokenId TokenId that has an offer.
   @param _currencyAddress Currency address of the offer.
    `function cancelOffer(
        address _originContract,
        uint256 _tokenId,
        address _currencyAddress
    ) external override {`

### Roles 
    Admin
    Buyer
    seller
    AuctionCreator
    Bidder

### Entities
### states i want to track
    Auctions
    Bids
    Sales/ offers
    
#### Offer Creation
    who creates an offer
    when an offer is created/placed
    when an offer is accepted 
    when an offer is cancelled
#### Auctions
    when an auction is created 
    who creates an auction 
    when an auction is cancelled 
    when an auction is settled
    when a bid is submmitted for an action
#### Bids
    who submittted a bid 
    when a bid is created 
#### Sold
    when an NFT is sold
