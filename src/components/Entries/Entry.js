import React from "react";
import css from "./entry.module.css";
import Details from "./Details";
import ButtonDelete from "./ButtonDelete";
import ButtonEdit from "./ButtonEdit";
import EntryValue from "./EntryValue";
import Day from "./Day";

export default function Entry({
  entry,
  onOpen,
  onDelete,
  onChangeSelectedEntry,
}) {
  const { category, day, description, type, value, id } = entry;

  const { minusStyle, plusStyle } = styles;

  let entryStyle = [];
  if (type === "+") {
    entryStyle = plusStyle;
  } else {
    entryStyle = minusStyle;
  }

  const handleUpdate = (id) => {
    onOpen("edit");
  };

  return (
    <div
      className={`${css.flexRow} ${css.padding} ${css.border} ${css.margin}`}
      style={entryStyle}
    >
      <div className={`${css.left} ${css.flexRow}`}>
        <Day day={day.toString().padStart(2, "0")} />
        <Details category={category} description={description} />
      </div>

      <div className={`${css.flexRow} ${css.right}`}>
        <ButtonDelete id={id} entry={entry} onDelete={onDelete} />
        <ButtonEdit
          id={id}
          entry={entry}
          onOpen={handleUpdate}
          onUpdate={handleUpdate}
          onDelete={onDelete}
          onChangeSelectedEntry={onChangeSelectedEntry}
        />
        <EntryValue value={value} />
      </div>
    </div>
  );
}

const styles = {
  minusStyle: {
    backgroundColor: "#f2a654",
  },
  plusStyle: {
    backgroundColor: "#5296a5",
  },
};
