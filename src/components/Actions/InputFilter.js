import React from "react";

export default function InputFilter({ filter, onChangeFilter }) {
  const handleInputChange = (event) => {
    const newText = event.target.value;
    onChangeFilter(newText);
  };

  return (
    <div>
      <input
        value={filter}
        onChange={handleInputChange}
        style={{
          marginLeft: "20px",
          width: "600px",
        }}
        placeholder="Filtro"
        type="text"
      />
    </div>
  );
}
