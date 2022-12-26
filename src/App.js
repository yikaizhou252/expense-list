import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  // regular javascript:
  // imperative
  // const para = document.createElement('p');
  // para.textContent = "This is regular HTLM";
  // document.getElementById('root').append(para);
  // react: declarative

  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    console.log(expense);
  };

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses className="items" expenses={expenses} />
    </div>
  );

  // React code without JSX ... yikes
  // this does the same thing as the return statement from above
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { className: "items", expenses: expenses })
  // );
};

export default App;
