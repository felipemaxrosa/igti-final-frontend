import React from "react";
import css from "./resume.module.css";
import { formatNumber } from "../../helpers/formatHelpers";

export default function Revenues({ value }) {

  const filterRevenues = value
    .filter((cur) => cur.type === "+")
    .reduce((acc, cur) => (acc += cur.value), 0);

  return (
    <div>
      <span>
        <strong>Receitas: </strong>
      </span>
      <span className={css.textGreen}>
        <strong>{formatNumber(filterRevenues)}</strong>
      </span>
    </div>
  );
}
