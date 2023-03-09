import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

// import ExpenseItem from "./ExpenseItem";

import Card from "../UI/Card";

import ExpensesList from "./ExpensesList";

import "./Expenses.css"

function Expenses(props){
  
  const  [filterYear,setFilteredYear]=useState("2020")

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear ;
  });

    return (
        <Card className = "expenses">
          <ExpensesFilter selected = {filterYear} onChangeFilter = {filterChangeHandler} />
          <ExpensesList items = {filteredExpenses} />
        </Card>
    );
}

export default Expenses;