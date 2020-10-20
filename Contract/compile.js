const path = require("path");
const fs = require("fs");
const solc = require("solc");

//const contractPath = path.resolve(__dirname, "contracts", "IPFS.sol");
const source = fs.readFileSync("./ contracts/IPFS.sol", "utf8");

module.exports = solc.compile(source, 1).contracts[":IPFS"];
