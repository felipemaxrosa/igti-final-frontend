import React from "react";

export default function ButtonEdit({
  id,
  entry,
  onOpen,
  onUpdate,
  onChangeSelectedEntry,
}) {
  const handleClick = () => {
    onOpen("edit");
    onUpdate(id);
    onChangeSelectedEntry(entry);
  };

  return (
    <button
      onClick={handleClick}
      style={{ marginRight: "15px" }}
      className="btn-floating btn-small waves-effect waves-light black"
    >
      <i id={id} className="material-icons">
        edit
      </i>
    </button>
  );
}
