import React from "react";
import css from "./resume.module.css";
import { formatNumber } from "../../helpers/formatHelpers";

export default function Expenses({ value }) {
  const sumExpenses = value
    .filter((cur) => cur.type === "-")
    .reduce((acc, cur) => (acc += cur.value), 0);

  return (
    <div>
      <span>
        <strong>Despesas: </strong>
      </span>
      <span className={css.textRed}>
        <strong>{formatNumber(sumExpenses)}</strong>
      </span>
    </div>
  );
}
