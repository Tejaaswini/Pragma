import web3 from "./web3";

const contractAddress = "0x9592cc65b56faE9f08F6E3ac975b5912AaC3Fa64";
const abi = [
  {
    constant: false,
    inputs: [{ name: "hash", type: "string" }],
    name: "setHash",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  { constant: true, inputs: [], name: "owner", outputs: [{ name: "", type: "address" }], payable: false, stateMutability: "view", type: "function" },
  { constant: true, inputs: [], name: "getHash", outputs: [{ name: "hash", type: "string" }], payable: false, stateMutability: "view", type: "function" },
  { inputs: [], payable: false, stateMutability: "nonpayable", type: "constructor" }
];

export default new web3.eth.Contract(abi, contractAddress);
