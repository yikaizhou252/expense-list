function ExpenseDate(props) {
  const date = props.date;
  const month = date.toLocaleString("en-CA", { month: "long" });
  const day = date.toLocaleString("en-CA", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div>
      <div>{year}</div>
      <div>{month}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
