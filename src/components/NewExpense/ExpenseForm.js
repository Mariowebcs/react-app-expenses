import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [selectedCategory, setSelectedCAtegory] = useState(
    "Seleziona la categoria"
  );
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const changeOptionHandler = (event) => {
    setSelectedCAtegory(event.target.value);
  };

  // const date = new Date();
  // const month = date.toLocaleString('en-US', { month: '2-digit' });
  // const day = date.toLocaleString('en-US', { day: '2-digit' });
  // const year = date.getFullYear();

  const selCat = document.getElementById("sel-cat");
  const submitHandler = (event) => {
    event.preventDefault();
    if (selCat.value === "null") {
      alert("Si prega di scegliere una categoria corretta");
    } else {
      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
        category: selectedCategory,
      };
      // localStorage.setItem("expense",JSON.stringify(expenseData));

      props.onSaveExpenseData(expenseData);
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
      setSelectedCAtegory("Seleziona la categoria");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Titolo</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Importo</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Data</label>
          <input
            type="date"
            min="2019-01-01"
            max={`2023-12-31`}
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <select
            name="select-category"
            id="sel-cat"
            value={selectedCategory}
            required
            onChange={changeOptionHandler}
          >
            <option value="null">Seleziona la categoria</option>
            <option value="lavoro">Lavoro</option>
            <option value="casa">Casa</option>
            <option value="svago">Svago</option>
            <option value="ricorrenti">Ricorrenti</option>
          </select>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Annulla
        </button>
        <button type="submit">Aggiungi spesa</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
