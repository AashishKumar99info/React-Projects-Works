import React , { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense'

import Expenses from './components/Expenses/Expenses';

let DUMMY__EXPENSE = [
    {
      id: "e1",
      date: new Date(2023,2,3),
      title: "New car",
      amount: "4 Crs",
      location: "Delhi",
    },
    {   
      id: "e2",
      date: new Date(2020,1,18),
      title: "Decoratives",
      amount: "1,000",
      location: "Delhi",
    },
    {
      id: "e3",
      date: new Date(2019,0,10),
      title: "Electricity bill",
      amount: "8,000",
      location: "Delhi",
    },
    {
      id: "e4",
      date: new Date(2022,9,23),
      title: "Domestic props",
      amount: "10,000",
      location: "Delhi",
    }
  ];


const App = () => {
  const [expenses,setExpenses] = useState(DUMMY__EXPENSE)

  const addExpenseHandler = (expense) => {
    let updatedExpense = [expense, ...expenses]
    setExpenses(updatedExpense)

    console.log("In App.js")
    console.log(expense)
  }
  // instead of above function we can write this arrow function
  // const addExpenseHandler = (expense) => {
  //   setExpenses((prevExpenses) => {
  //     return [expense, ...prevExpenses];
  //   });
  // };

  return (
    <div>
      <h2> Hey there everyone, Aash is here. </h2>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
