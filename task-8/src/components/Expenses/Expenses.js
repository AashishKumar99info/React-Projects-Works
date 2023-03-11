import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";

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
      <div>
        <Card className = "expenses">
          <ExpensesFilter selected = {filterYear} onChangeFilter = {filterChangeHandler} />
          <ExpensesChart expenses = {filteredExpenses} />
          <ExpensesList items = {filteredExpenses} />
        </Card>
      </div>
    );
}

export default Expenses;