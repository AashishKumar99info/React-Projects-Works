import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

function ExpenseItem(props) {
  const handleCLick=(e)=>{
    e.target.parentNode.remove()
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
      <button onClick={handleCLick}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;


