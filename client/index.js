const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";
const merkleTree = new MerkleTree(niceList);

async function main() {
  for (let i = 0; i < niceList.length; i++) {
    const proof = merkleTree.getProof(i);
    const { data: gift } = await axios.post(`${serverUrl}/gift`, {
      proof,
      index: parseInt(i),
    });

    console.log({ gift });
  }
}

main();
