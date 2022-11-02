import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
function Expenses(props) {
  return (
    <div className="expense">
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
