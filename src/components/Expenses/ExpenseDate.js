import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const date = props.date;
  const month = date.toLocaleString("en-CA", { month: "long" });
  const day = date.toLocaleString("en-CA", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
