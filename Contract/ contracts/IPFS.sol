pragma solidity >=0.4.17 <0.7.0;

contract IPFS {
    string ipfsHash;
    address public owner;
    constructor() public {
        owner = msg.sender;
    }

    function setHash(string memory hash) public {
        ipfsHash = hash;
    }

    function getHash() public view returns (string memory hash) {
        return ipfsHash;
    }
}
