import React from "react";

export default function ButtonDelete({ id, entry, onDelete }) {
  const handleClick = () => {
    onDelete(entry);
  };

  return (
    <button
      onClick={handleClick}
      className="btn-floating btn-small waves-effect waves-light red"
    >
      <i id={id} className="material-icons">
        delete
      </i>
    </button>
  );
}
