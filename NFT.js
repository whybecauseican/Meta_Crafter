// Create a variable to hold your NFTs
const NFTs = [];

// Function to generate a random transaction ID
function generateTransactionID() {
    return 'TX-' + Math.random().toString(36).substr(2, 9); // Random string
}

// This function will take in values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the NFTs array, along with a transaction ID.
function mintNFT(_name, _eyeColor, _shirtType, _bling) {
    const transactionID = generateTransactionID();
    const NFT = {
        "Name": _name,
        "EyeColor": _eyeColor,
        "ShirtType": _shirtType,
        "Bling": _bling,
        "TransactionID": transactionID // Add transaction ID to the NFT object
    };
    NFTs.push(NFT);
    console.log("Minted: " + _name + " | Transaction ID: " + transactionID);
}

// Create a "loop" that will go through the NFTs array
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("NFT #" + (i + 1));
        console.log("  Name: " + NFTs[i].Name);
        console.log("  Eye Color: " + NFTs[i].EyeColor);
        console.log("  Shirt Type: " + NFTs[i].ShirtType);
        console.log("  Bling: " + NFTs[i].Bling);
        console.log("  Transaction ID: " + NFTs[i].TransactionID); // Output transaction ID
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs minted: " + NFTs.length);
}

// Call your functions below this line
mintNFT("John Rey", "Brown", "Oversized shirt", "ice");
mintNFT("Jane Doe", "Blue", "Jacket", "gold chain");
mintNFT("Sam Smith", "Green", "Hoodie", "diamond ring");

listNFTs();
getTotalSupply();
