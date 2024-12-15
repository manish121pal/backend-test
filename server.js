const express = require("express");
const dotenv=require('dotenv').config()
const port =process.env.PORT ||5000;
const app = express();
app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`server is listing at ${port}!!`);
});
