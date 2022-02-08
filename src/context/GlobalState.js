import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Showcase some items for now
const initialState = {
  transactions: [
    { id: 1, text: "Flowers", amount: -20 },
    { id: 2, text: "Beer", amount: -15 },
    { id: 3, text: "Paycheck", amount: 450 },
    { id: 4, text: "Netflix", amount: -14.99 },
    { id: 5, text: "Venmo", amount: 15.0 }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  // useReducer( filename, initial state)
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Create your actions then add the action to the GlobalContext prop
  // Payloads are handled in AppReducer
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }

  // Create provider wrapper for our app state
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
