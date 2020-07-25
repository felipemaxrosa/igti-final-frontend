import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import MonthFilter from "./components/MonthFilter/MonthFilter";
import Resume from "./components/Resume/Resume";
import Actions from "./components/Actions/Actions";
import Entries from "./components/Entries/Entries";
import transactionService from "./services/transactionService";
import ModalEntry from "./components/ModalEntry/ModalEntry";

import "./styles.css";

export default function App() {
  const allMonths = [
    { year: "2019", month: "01", monthName: "Jan" },
    { year: "2019", month: "02", monthName: "Fev" },
    { year: "2019", month: "03", monthName: "Mar" },
    { year: "2019", month: "04", monthName: "Abr" },
    { year: "2019", month: "05", monthName: "Mai" },
    { year: "2019", month: "06", monthName: "Jun" },
    { year: "2019", month: "07", monthName: "Jul" },
    { year: "2019", month: "08", monthName: "Ago" },
    { year: "2019", month: "09", monthName: "Set" },
    { year: "2019", month: "10", monthName: "Out" },
    { year: "2019", month: "11", monthName: "Nov" },
    { year: "2019", month: "12", monthName: "Dez" },
    { year: "2020", month: "01", monthName: "Jan" },
    { year: "2020", month: "02", monthName: "Fev" },
    { year: "2020", month: "03", monthName: "Mar" },
    { year: "2020", month: "04", monthName: "Abr" },
    { year: "2020", month: "05", monthName: "Mai" },
    { year: "2020", month: "06", monthName: "Jun" },
    { year: "2020", month: "07", monthName: "Jul" },
    { year: "2020", month: "08", monthName: "Ago" },
    { year: "2020", month: "09", monthName: "Set" },
    { year: "2020", month: "10", monthName: "Out" },
    { year: "2020", month: "11", monthName: "Nov" },
    { year: "2020", month: "12", monthName: "Dez" },
    { year: "2021", month: "01", monthName: "Jan" },
    { year: "2021", month: "02", monthName: "Fev" },
    { year: "2021", month: "03", monthName: "Mar" },
    { year: "2021", month: "04", monthName: "Abr" },
    { year: "2021", month: "05", monthName: "Mai" },
    { year: "2021", month: "06", monthName: "Jun" },
    { year: "2021", month: "07", monthName: "Jul" },
    { year: "2021", month: "08", monthName: "Ago" },
    { year: "2021", month: "09", monthName: "Set" },
    { year: "2021", month: "10", monthName: "Out" },
    { year: "2021", month: "11", monthName: "Nov" },
    { year: "2021", month: "12", monthName: "Dez" },
  ];

  const [current, setCurrent] = useState("2020-07");
  const [currentMonthYear, setCurrentMonthYear] = useState("Jul/2020");
  const [months, setMonths] = useState(allMonths);
  const [entries, setEntries] = useState([]);
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [textFilter, setTextFilter] = useState("");
  const [isModalNewEntryOpen, setIsModalNewEntryOpen] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await transactionService.getAll(current);
      const transactions = data.data.transactions;

      const filtered = transactions
        .map(
          ({
            _id,
            description,
            value,
            category,
            year,
            month,
            day,
            yearMonth,
            yearMonthDay,
            type,
          }) => {
            return {
              id: _id,
              description,
              filterDescription: description.toLowerCase(),
              value,
              category,
              year,
              month,
              day,
              yearMonth,
              yearMonthDay,
              type,
            };
          }
        )
        .sort((a, b) => a.day - b.day);
      setEntries(filtered);
      setFilteredEntries(filtered);
    };

    getData();
  }, [current]);

  const handleChangeMonth = (newMonth) => {
    setCurrent(newMonth);

    const newMonthYear = getCurrentMonthYear(newMonth);
    setCurrentMonthYear(newMonthYear);
  };

  const getCurrentMonthYear = (cur) => {
    const arrayMonthYear = cur.split("-");
    const month = arrayMonthYear[1];
    const year = arrayMonthYear[0];

    let monthName = "";

    switch (month) {
      case "01":
        monthName = "Jan";
        break;
      case "02":
        monthName = "Fev";
        break;
      case "03":
        monthName = "Mar";
        break;
      case "04":
        monthName = "Abr";
        break;
      case "05":
        monthName = "Mai";
        break;
      case "06":
        monthName = "Jun";
        break;
      case "07":
        monthName = "Jul";
        break;
      case "08":
        monthName = "Ago";
        break;
      case "09":
        monthName = "Set";
        break;
      case "10":
        monthName = "Out";
        break;
      case "11":
        monthName = "Nov";
        break;
      case "12":
        monthName = "Dez";
        break;
    }

    const monthYear = `${monthName}/${year}`;

    return monthYear;
  };

  const handleOpenModal = (type) => {
    setIsModalNewEntryOpen(true);
    setTypeModal(type);
  };

  const handleCloseModal = () => {
    setIsModalNewEntryOpen(false);
    setSelectedEntry(null);
  };

  const handleChangeFilter = (newText) => {
    setTextFilter(newText);
    const filterLowerCase = newText.toLowerCase();
    const filtered = entries.filter((entry) => {
      return entry.filterDescription.includes(filterLowerCase);
    });

    setFilteredEntries(filtered);
  };

  const handleChangeSelectedEntry = (entry) => {
    setSelectedEntry(entry);
  };

  const handlePersistData = async (entry) => {
    if (typeModal === "new") {
      await transactionService.create(entry.data);
    } else {
      await transactionService.update(entry.id, entry.data);
    }

    let newEntries = Object.assign([], filteredEntries);

    if (typeModal === "new") {
      const dataFiltered = {
        ...entry.data,
        filterDescription: entry.data.description.toLowerCase(),
      };

      newEntries.push(dataFiltered);
    } else {
      let dataFiltered = {
        ...entry.data,
        filterDescription: entry.data.description.toLowerCase(),
      };

      const indexEntryToUpdate = newEntries.findIndex(
        (cur) => cur.id === entry.id
      );

      newEntries[indexEntryToUpdate] = {
        id: newEntries[indexEntryToUpdate].id,
        ...dataFiltered,
      };
    }
    newEntries.sort((a, b) => a.day - b.day);
    setFilteredEntries(newEntries);
  };

  const handleDeleteEntry = async (entry) => {
    let newEntries = Object.assign([], filteredEntries);

    await transactionService.remove(entry.id);

    newEntries = filteredEntries.filter((cur) => cur.id !== entry.id);
    setFilteredEntries(newEntries);
  };

  return (
    <div className="container">
      <Header />
      <hr />
      <MonthFilter
        months={months}
        current={current}
        onChangeCurrentMonth={handleChangeMonth}
      />
      <Resume entries={filteredEntries} />
      <Actions
        onChangeFilter={handleChangeFilter}
        filter={textFilter}
        onOpen={handleOpenModal}
      />
      <Entries
        values={filteredEntries}
        onOpen={handleOpenModal}
        onDelete={handleDeleteEntry}
        onChangeSelectedEntry={handleChangeSelectedEntry}
      />
      {isModalNewEntryOpen && (
        <ModalEntry
          type={typeModal}
          isOpen={isModalNewEntryOpen}
          onClose={handleCloseModal}
          onSubmit={handlePersistData}
          entry={selectedEntry}
        />
      )}
    </div>
  );
}
