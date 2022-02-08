import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState(null);
  const [amount, setAmount] = useState(0);

  const { addTransaction, transactions } = useContext(GlobalContext);

  const submitTransaction = e => {
    e.preventDefault();

    const newTransaction = {
      id: transactions.length + 1,
      text,
      amount: +amount // '+' converts to number
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <form onSubmit={submitTransaction}>
        <h3>Add new transaction</h3>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text || ""}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
};
