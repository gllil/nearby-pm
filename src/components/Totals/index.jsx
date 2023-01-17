import React, { useEffect, useState } from "react";

const Totals = ({ totalExpense, totalIncome }) => {
  const [netIncome, setNetIncome] = useState();
  useEffect(() => {
    setNetIncome(totalIncome - totalExpense);
  }, [totalIncome, totalExpense]);
  return (
    <div>
      <h3>Total Income: ${totalIncome}</h3>
      <h3>Total Expense: ${totalExpense}</h3>
      <h3>Net Income: ${netIncome}</h3>
    </div>
  );
};

export default Totals;
