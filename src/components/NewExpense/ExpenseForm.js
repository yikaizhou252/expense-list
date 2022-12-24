import "./ExpenseForm.css";
import { useState } from "react";

// self closing tag <input />
const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  // use this to group a bunch of states together
  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: new Date().toISOString().slice(0, 10),
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    // event.target.value always returns a string
    // nums stored as string
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  // const titleChangeHandler = (event) => {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   title: event.target.value,
  //   // });
  //   setUserInput((prevState) => {
  //     return {
  //       ...prevState,
  //       title: event.target.value,
  //     };
  //   });
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      amount,
      date: new Date(date), //when using event.target, date is saved as string
    };

    console.log(expenseData);

    //event.target.reset();
    
    setTitle('');
    setAmount('');
    setDate(new Date().toISOString().slice(0, 10));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
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
            value={date}
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
