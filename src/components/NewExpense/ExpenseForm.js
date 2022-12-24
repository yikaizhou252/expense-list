import "./ExpenseForm.css";
import { useState } from "react";

// self closing tag <input />
const ExpenseForm = () => {
  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState("");
  // const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  // use this to group a bunch of states together
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: new Date().toISOString().slice(0, 10),
  });

  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      title: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    // event.target.value always returns a string
    // nums stored as string
    setUserInput({
      ...userInput,
      amount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      date: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Yoo", userInput.title, userInput.amount, userInput.date);
    event.target.reset();
    // setTitle('');
    // setAmount(null);
    // setDate(new Date().toISOString().slice(0, 10));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            defaultValue={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2026-12-31"
            defaultValue={userInput.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
