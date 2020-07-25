import React from "react";
import css from "./actions.module.css";
import ButtonNewEntry from "./ButtonNewEntry";
import InputFilter from "./InputFilter";

export default function Actions({ filter, onChangeFilter, onOpen }) {
  const handleButtonClick = (type) => {
    onOpen(type);
  };

  return (
    <div className={`${css.flexRow} ${css.margin} ${css.border}`}>
      <ButtonNewEntry onButtonClick={handleButtonClick} />
      <InputFilter filter={filter} onChangeFilter={onChangeFilter} />
    </div>
  );
}
