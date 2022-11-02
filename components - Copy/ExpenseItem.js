import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = "car insurance";
  //   const expenseAmount = 200.14;
  //   const month = props.date.toLocaleString("en-US", { month: "long" });
  //   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //   const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
