///all the methods used to interact with the database

// @des    Get all transactions
// @route  GET /api/v1/transactions
// @access Public
exports.getTransactions = (req, res, next) => {
  res.send("GET transactions");
};

// @des    Add transaction
// @route  POST /api/v1/transactions
// @access Public
exports.addTransaction = (req, res, next) => {
  res.send("POST transactions");
};

// @des    DELETE transaction
// @route  DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = (req, res, next) => {
  res.send("Delete transaction");
};
