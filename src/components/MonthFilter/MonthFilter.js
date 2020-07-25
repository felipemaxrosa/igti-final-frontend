import React from "react";
import css from "./monthFilter.module.css";

export default function MonthFilter({ months, current, onChangeCurrentMonth }) {
  const handleChangeSelect = (event) => {
    const selectedMonth = event.target.value;

    onChangeCurrentMonth(selectedMonth);
  };

  const getNewMonth = (type) => {
    const data = current.split("-");
    const currYear = data[0];
    const currMonth = data[1];
    let findedNext = false;

    // const current = months.findIndex(
    //   (cur) => cur.year == currYear && cur.month == currMonth
    // );

    if (type === "next") {
      const selectedMonth = months.find((cur) => {
        const { year, month } = cur;

        if (!findedNext) {
          if (year === currYear && month === currMonth) {
            findedNext = true;
          }
        } else {
          return cur;
        }
        return selectedMonth;
      });
    }
  };

  const handleButtonNextClick = () => {
    console.log(getNewMonth("next"));
  };

  const handleButtonPreviousClick = () => {
    console.log(getNewMonth("previous"));
  };

  return (
    <div className={css.flexRow}>
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
        onClick={handleButtonPreviousClick}
      >
        <i className="material-icons center">chevron_left</i>
      </button>

      <select
        name="months"
        value={current}
        onChange={handleChangeSelect}
        className={`${css.mfSelect} + browser-default`}
      >
        {months.map((cur, index) => {
          const { year, month, monthName } = cur;
          const curMonth = `${year}-${month}`;
          const monthYear = `${monthName}/${year}`;

          return (
            <option key={index} value={curMonth}>
              {`${monthYear}`}
            </option>
          );
        })}
      </select>

      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
        onClick={handleButtonNextClick}
      >
        <i className="material-icons center">chevron_right</i>
      </button>
    </div>
  );
}
