import React from "react";

export default function Releases({ count }) {
  return (
    <div>
      <span>
        <strong>Lançamentos: </strong>
      </span>
      <span>{count}</span>
    </div>
  );
}
