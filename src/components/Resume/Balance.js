import React from "react";
import { formatNumber } from "../../helpers/formatHelpers";

export default function Balance({ value }) {
  const sumExpenses = value
    .filter((cur) => cur.type === "-")
    .reduce((acc, cur) => (acc += cur.value), 0);

  const sumRevenues = value
    .filter((cur) => cur.type === "+")
    .reduce((acc, cur) => (acc += cur.value), 0);

  return (
    <div>
      <span>
        <strong>Saldo: </strong>
      </span>
      <span>
        <strong
          style={
            sumRevenues - sumExpenses > 0 ? styles.textGreen : styles.textRed
          }
        >
          {formatNumber(sumRevenues - sumExpenses)}
        </strong>
      </span>
    </div>
  );
}

const styles = {
  textRed: {
    color: "red",
  },
  textGreen: {
    color: "green",
  },
};
