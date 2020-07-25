import React from "react";

export default function ButtonNewEntry({ onButtonClick }) {
  const handleButtonClick = () => {
    onButtonClick("new");
  };

  return (
    <div>
      <button
        className="waves-effect waves-light btn"
        onClick={handleButtonClick}
      >
        <i className="material-icons left">add</i>
        Novo Lançamento
      </button>
    </div>
  );
}
