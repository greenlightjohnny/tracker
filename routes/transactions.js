const express = require("express");

const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transcontroller");

// sends requests to the transactionController module, for GET
//router.get("/", getTransactions); changed to router.route()

// Remember, the '/' is actually referring to /api/v1/transactions. It was linked here in the server.js file as"
// app.use("/api/v1/transactions", transactions);
// YOu can attach methods to the route below, calls the function called getTransactions in the /transcontroller module.
router.route("/").get(getTransactions).post(addTransaction);

router.route("/:id").delete(deleteTransaction);

module.exports = router;
