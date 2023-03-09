import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";

import Card from "../UI/Card";

import "./Expenses.css"

function Expenses(props){
  
  const  [filterYear,setFilteredYear]=useState("2020")

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  let filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear ;
  });
   
  if(filterYear==="All")
  {
  filteredExpenses=props.items
  }

    return (
        <Card className = "expenses">
          <ExpensesFilter selected = {filterYear} onChangeFilter = {filterChangeHandler} />
            {
              filteredExpenses.length === 0 ? (<p>No expenses found.</p>) : (
                  filteredExpenses.map((expense) => (
                    <ExpenseItem
                      key={expense.id}
                      title={expense.title}
                      amount={expense.amount}
                      date={expense.date}
                    />
                  ))
                )
            }
        </Card>
    );
}

export default Expenses;