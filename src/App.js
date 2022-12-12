import ExpenseItem from "./components/ExpenseItem";

function App() {
  // regular javascript:
  // imperative
  // const para = document.createElement('p');
  // para.textContent = "This is regular HTLM";
  // document.getElementById('root').append(para);
  // react: declarative
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

  const renderItems = () => {
    return expenses.map((item) => {
      return (
        <ExpenseItem
          expenseTitle={item.title}
          expenseAmount={item.amount}
          expenseDate={item.date}
          key={item.id}
        />
      );
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      {renderItems()}
    </div>
  );
}

export default App;
