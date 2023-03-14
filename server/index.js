const express = require("express");
const verifyProof = require("../utils/verifyProof");
const MerkleTree = require("../utils/MerkleTree");
const niceList = require("../utils/niceList.json");

const port = 1225;

const app = express();
app.use(express.json());

const MERKLE_ROOT =
  "ddd59a2ffccddd60ff47993312821cd57cf30f7f14fb82937ebe2c4dc78375aa";

app.post("/gift", (req, res) => {
  const { proof, index } = req.body;

  const isInTheList = verifyProof(proof, niceList[index], MERKLE_ROOT);
  if (isInTheList) {
    res.send(`${niceList[index]}, you got a toy robot!`);
  } else {
    res.send("You are not on the list");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
