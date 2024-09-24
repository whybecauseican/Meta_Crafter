// Create a variable to hold your NFTs, we'll use an array to store multiple NFTs
let NFTs = [];

// This function will take in values as parameters, create an NFT object, 
// and store it in the NFTs array
function mintNFT(name, artist, price) {
    const NFT = {
        name: name,
        artist: artist,
        price: price
    };
    NFTs.push(NFT);
    console.log(`Minted: ${name}`);
}

// This function will loop through the NFTs array and print their metadata
function listNFTs() {
    NFTs.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`  Name: ${nft.name}`);
        console.log(`  Artist: ${nft.artist}`);
        console.log(`  Price: ${nft.price}`);
    });
}

// This function will return the total number of NFTs we have minted
function getTotalSupply() {
    return NFTs.length;
}

// Test the functions
mintNFT("CryptoArt1", "Artist1", "1.5 ETH");
mintNFT("CryptoArt2", "Artist2", "2.0 ETH");
mintNFT("CryptoArt3", "Artist3", "0.8 ETH");

listNFTs();
console.log("Total NFTs minted: " + getTotalSupply());
