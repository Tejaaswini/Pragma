import Web3 from "web3";
// Need to tackle this. Making sure this doesn't throw error if the user has no metamask.!!
var web3 = new Web3(window.web3.currentProvider);
export default web3;
