///all the methods used to interact with the database
const Transaction = require("../models/Transaction");
// @des    Get all transactions
// @route  GET /api/v1/transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: "Oppps",
    });
  }
};

// @des    Add transaction
// @route  POST /api/v1/transactions
// @access Public
exports.addTransaction = async (req, res, next) => {
  res.send("POST transactions");
};

// @des    DELETE transaction
// @route  DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = async (req, res, next) => {
  res.send("Delete transaction");
};
