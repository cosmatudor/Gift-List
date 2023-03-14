const niceList = require("../../utils/niceList.json");
const MerkleTree = require("../../utils/MerkleTree");

const merkleTree = new MerkleTree(niceList);
const root = merkleTree.getRoot();
console.log(root);
