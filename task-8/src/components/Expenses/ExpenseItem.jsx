import React from "react";

import "./ExpenseItem.css";

import ExpenseDate from './ExpenseDate';

import Card from "../UI/Card";
// import { useState } from "react";

function ExpenseItem(props){
  // const [editedTitle,setTitle]=useState(props.title) 
  // const clickHandler=(e)=>{
  //   e.target.parentNode.remove()
  // }
  // const editHandler=()=>{
  //   setTitle("This is the updated title") 
  // }
  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{`${"RS "+props.amount}`}</div>
      </div>
      {/* <button onClick={clickHandler}>Delete</button> */}
      {/* <button onClick={editHandler}>Change title </button> */}
    </Card>
    </li>
  );
}

export default ExpenseItem;


