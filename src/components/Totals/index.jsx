import React, { useEffect, useState } from "react";
import { IntlProvider, FormattedNumber } from "react-intl";

const Totals = ({ totalExpense, totalIncome }) => {
  const [netIncome, setNetIncome] = useState(0);
  useEffect(() => {
    setNetIncome(parseFloat(totalIncome - totalExpense));
  }, [totalIncome, totalExpense]);
  return (
    <IntlProvider locale="en">
      <div>
        <h4>
          Average Gross Monthly Income:{" "}
          {
            <FormattedNumber
              value={totalIncome}
              style="currency"
              currency="USD"
            />
          }
        </h4>
        <h4>
          Average Total Monthly Expense:{" "}
          {
            <FormattedNumber
              value={totalExpense}
              style="currency"
              currency="USD"
            />
          }
        </h4>
        <h4>
          Average Net Monthly Income:{" "}
          <span
            className={
              Math.sign(netIncome) === 1
                ? "positive"
                : Math.sign(netIncome) === -1
                ? "negative"
                : null
            }
          >
            {
              <FormattedNumber
                value={netIncome}
                style="currency"
                currency="USD"
              />
            }
          </span>
        </h4>
        <p className="disclaimer">
          Investors should do their own research, get professional advice, and
          conduct due diligence prior to investing. Numbers are approximate and
          should not be construed as a contract for returns. This tool does not
          predict or forecast future earnings.
        </p>
      </div>
    </IntlProvider>
  );
};

export default Totals;
