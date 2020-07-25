import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./styles.css";

Modal.setAppElement("#root");

export default function ModalEntry({ type, isOpen, onClose, onSubmit, entry }) {
  const [typeEntry, setTypeEntry] = useState("-");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(0);
  const [date, setDate] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (type === "edit") {
      setTypeEntry(entry.type);
      setDescription(entry.description);
      setCategory(entry.category);
      setValue(entry.value);
      setDate(entry.yearMonthDay);
      setId(entry.id);
    }
  }, [entry, type]);

  const handleModalClose = () => {
    onClose();
  };

  const handleDespesasClick = () => {
    setTypeEntry("-");
  };

  const handleReceitasClick = (event) => {
    setTypeEntry("+");
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = date.split("-");

    const year = data[0];
    const month = data[1];
    const day = data[2];

    const dataForm = {
      id,
      data: {
        description,
        value: Number(value),
        category,
        year: Number(year),
        month: Number(month),
        day: Number(day),
        yearMonth: `${year}-${month}`,
        yearMonthDay: `${year}-${month}-${day}`,
        type: typeEntry,
      },
    };

    onSubmit(dataForm);
    clearStates();
    onClose();
  };

  const clearStates = () => {
    setDescription("");
    setValue(0);
    setCategory("");
    setDate("");
    setTypeEntry("");
  };

  return (
    <Modal
      className="margin-teste"
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.75)",
        },
        content: {
          width: "500px",
          height: "500px",
          position: "absolute",
          top: "40px",
          left: "40px",
          right: "40px",
          bottom: "40px",
          border: "1px solid #ccc",
          background: "#fff",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
        },
      }}
      isOpen={true}
    >
      <div style={styles.flexRow}>
        <span style={styles.title}>
          {type === "new" ? "Inclusão de Lançamento" : "Edição de Lançamento"}
        </span>
        <button
          className="waves-effect waves-light btn red dark-4"
          onClick={handleModalClose}
        >
          x
        </button>
      </div>

      <form onSubmit={handleSubmit} id="form-entry">
        <div className="radio-group">
          <p>
            <label className="input-radio">
              <input
                value="-"
                className="with-gap"
                name="group3"
                type="radio"
                id="radioDespesa"
                onChange={handleDespesasClick}
                checked={typeEntry === "-"}
                disabled={type === "edit"}
              />
              <span>Despesa</span>
            </label>
          </p>
          <p>
            <label className="input-radio">
              <input
                value="+"
                className="with-gap"
                name="group3"
                id="radioReceita"
                type="radio"
                onChange={handleReceitasClick}
                checked={typeEntry === "+"}
                disabled={type === "edit"}
              />
              <span>Receita</span>
            </label>
          </p>
        </div>

        <div className="input-field">
          <input
            value={description}
            onChange={handleChangeDescription}
            id="inputDescription"
            type="text"
            autoFocus
          />
          <label className="active" htmlFor="inputDescription">
            Descrição:
          </label>
        </div>

        <div className="input-field">
          <input
            value={category}
            id="inputCategory"
            type="text"
            onChange={handleChangeCategory}
          />
          <label className="active" htmlFor="inputCategory">
            Categoria:
          </label>
        </div>

        <div className="input-group">
          <div className="input-field input-space">
            <input
              value={value}
              type="number"
              onChange={handleValueChange}
              min="1"
              step="1"
              onFocus={(event) => event.target.select()}
            />
            <label htmlFor="inputValue" className="active">
              Valor:
            </label>
          </div>

          <div className="input-field input-space">
            <input
              value={date}
              type="date"
              min="10"
              max="100"
              step="1"
              onChange={handleChangeDate}
            />
            <label htmlFor="inputDate" className="active">
              Data:
            </label>
          </div>
        </div>

        <button className="waves-effect waves-light btn">Salvar</button>
      </form>
    </Modal>
  );
}

const styles = {
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "40px",
  },
  flexStart: {
    justifyContent: "flex-start",
  },
  title: {
    fontSize: "1.3rem",
    fontWeight: "bold",
  },
  errorMessage: {
    color: "red",
    fontWeight: "bold",
  },
};
