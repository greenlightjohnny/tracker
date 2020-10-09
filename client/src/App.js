import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components/header";
import { Balance } from "./components/balance";
import { Incomeex } from "./components/incomeex";
import { TransactionList } from "./components/transactionList";
import { AddTransaction } from "./components/addTransaction";

import { GlobalProvider } from "./context/GlobalState";
import "./App.css";
import { Main } from "./Main";
import Register from "./register";

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/register" component={Register} />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
