import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Incomeex = () => {
  const { transactions } = useContext(GlobalContext);
  const positive = transactions
    .filter((i) => {
      if (i.amount > 0) {
        return i.amount;
      } else return;
    })
    .map((i) => i.amount);

  const negative = transactions
    .filter((i) => i.amount < 0)
    .map((i) => i.amount);

  const totalPositive = positive.reduce((a, b) => (a += b), 0).toFixed(2);
  const totalNegative = Math.abs(
    negative.reduce((a, b) => (a += b), 0).toFixed(2)
  );
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${numberWithCommas(totalPositive)}</p>
      </div>

      <div>
        <h4>Expense</h4>
        <p className="money minus">${numberWithCommas(totalNegative)}</p>
      </div>
    </div>
  );
};
