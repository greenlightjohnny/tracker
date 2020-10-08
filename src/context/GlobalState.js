import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, tex: "Walk", amount: -30 },
    { id: 2, tex: "Run", amount: 20 },
    { id: 3, tex: "Swim", amount: -40 },
    { id: 4, tex: "Fly", amount: 90 },
  ],
};

////Creat context yes
export const GlobalContext = createContext(initialState);

////Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
