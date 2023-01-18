import React, { useEffect, useState } from "react";

const Totals = ({ totalExpense, totalIncome }) => {
  const [netIncome, setNetIncome] = useState();
  useEffect(() => {
    setNetIncome(parseFloat(totalIncome - totalExpense).toFixed(2));
  }, [totalIncome, totalExpense]);
  return (
    <div>
      <p className="disclaimer">
        Investors should do their own research, get professional advice, and
        conduct due diligence prior to investing. Numbers are approximate and
        should not be construed as a contract for returns.
      </p>
      <h3>Total Income: ${totalIncome}</h3>
      <h3>Total Expense: ${totalExpense}</h3>
      <h3>Net Income: ${netIncome}</h3>
    </div>
  );
};

export default Totals;
