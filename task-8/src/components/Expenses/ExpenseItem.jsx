import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
  const [editedTitle,setTitle]=useState(props.title) 
  const clickHandler=(e)=>{
    e.target.parentNode.remove()
  }
  const editHandler=()=>{
    setTitle("This is the updated title") 
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{editedTitle}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Delete</button>
      <button onClick={editHandler}>Change title </button>
    </Card>
  );
}

export default ExpenseItem;


