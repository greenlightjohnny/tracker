import React from "react";
import { Header } from "./components/header";
import { Balance } from "./components/balance";
import { Incomeex } from "./components/incomeex";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <Incomeex />
      </div>
    </div>
  );
}

export default App;
