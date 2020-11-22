const express = require("express");
const db = require("./db");

const app = express();

// ROUTES HERE 
// CREATE-READ-UPDATE-DELETE




const port = 3000;
app.listen(port, () => {
  console.log(`server is up and listening on port 3000`);
});
