const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const path = require("path");
var cors = require("cors");
const connectDB = require("./config/db.js");

const corsOptions = {
  origin: "https://trakie.netlify.app",
};

dotenv.config({ path: "./config/config.env" });

connectDB();
const transactions = require("./routes/transactions");
const app = express();
app.use(cors(corsOptions));
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//app.get("/", (req, res) => res.send("hello"));
//Replaced with ./routes

///when a request is made to /api/v1/transactions, connect it to the ./routes/transactions route
app.use("/api/v1/transactions", transactions);

//Check for production, below routes
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
//   );
// }
// app.get("/", (req, res) => {
//   res.send("Hello from Express!");
// });
const PORT = process.env.PORT;
console.log(PORT);
app.listen(
  PORT,
  console.log(`server on ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold)
);
