import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { id, text, amount } = transaction;
  const { deleteTransaction } = useContext(GlobalContext);

  const amountType = parseFloat(amount) > 0;

  return (
    <li key={id} className={amountType ? "plus" : "minus"}>
      {text}{" "}
      <span>
        ${amountType ? "+" : ""}
        {amount}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
