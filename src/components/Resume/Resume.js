import React from "react";
import Releases from "./Releases";
import Revenues from "./Revenues";
import Expenses from "./Expenses";
import Balance from "./Balance";
import css from "./resume.module.css";

export default function Resume({ entries }) {
  return (
    <div className={`${css.border} ${css.margin} ${css.flexR}`}>
      <Releases count={entries.length} />
      <Revenues value={entries} />
      <Expenses value={entries} />
      <Balance value={entries} />
    </div>
  );
}
