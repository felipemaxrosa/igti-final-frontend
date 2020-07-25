import React from "react";
import { formatNumber } from "../../helpers/formatHelpers";

export default function EntryValue({ value }) {
  return (
    <span style={{ marginRight: "50px", fontSize: "1.5em" }}>
      <strong>{formatNumber(value)}</strong>
    </span>
  );
}
