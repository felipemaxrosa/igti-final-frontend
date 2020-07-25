import React from "react";
import css from "./entry.module.css";

export default function Details({ category, description }) {
  return (
    <div className={`${css.flexColumn} ${css.marginL}`}>
      <span>
        <strong style={{ fontSize: "1.1em" }}>{category}</strong>
      </span>
      <span>{description}</span>
    </div>
  );
}
