import React from "react";
import Entry from "./Entry";

export default function Entries({
  values,
  onOpen,
  onDelete,
  onChangeSelectedEntry,
}) {
  return (
    <div>
      {values.map((value, index) => {
        return (
          <Entry
            key={index}
            entry={value}
            onOpen={onOpen}
            onDelete={onDelete}
            onChangeSelectedEntry={onChangeSelectedEntry}
          />
        );
      })}
    </div>
  );
}
