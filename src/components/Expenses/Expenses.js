import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  return <Card className="expenses">{renderExpenses(props.expenses)}</Card>;
};

const renderExpenses = (expenses) => {
  return expenses.map((expense) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    );
  });
};

export default Expenses;
