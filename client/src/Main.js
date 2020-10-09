import React from "react";
import { Header } from "./components/header";
import { Balance } from "./components/balance";
import { Incomeex } from "./components/incomeex";
import { TransactionList } from "./components/transactionList";
import { AddTransaction } from "./components/addTransaction";

export const Main = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <Incomeex />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
};
