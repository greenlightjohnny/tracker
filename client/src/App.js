import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/header";
import { Balance } from "./components/balance";
import { Incomeex } from "./components/incomeex";
import { TransactionList } from "./components/transactionList";
import { AddTransaction } from "./components/addTransaction";

import { GlobalProvider } from "./context/GlobalState";
import "./App.css";
import { Main } from "./Main";
import { Register } from "./Register";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
