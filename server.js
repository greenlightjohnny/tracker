const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const { proto } = require("once");

dotenv.config({ path: "./config/config.env" });
const transactions = require("./routes/transactions");
const app = express();

//app.get("/", (req, res) => res.send("hello"));
//Replaced with ./routes

///when a request is made to /api/v1/transactions, connect it to the ./routes/transactions route
app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server on ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold)
);
