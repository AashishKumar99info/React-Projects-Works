import "./ExpenseFrom.css"
import {useState} from "react";
const ExpenseForm = () => {
    
    
const [enteredTitle,setEnteredTitle] = useState("")
    
        const titleChangeHandler=(e)=>{
        setEnteredTitle(e.target.value)
    }

const [enteredAmount,setEnteredAmount] = useState("")

    const amountChangeHandler=(e)=>{
        setEnteredAmount(e.target.value)
    }

const [enteredDate,setEnteredDate] = useState("")

    const dateChangeHandler=(e)=>{
        setEnteredDate(e.target.value)
    } 

    const handleSubmission = (e) => {
        e.preventDefault();
        const ExpenseDate={
            Title: enteredTitle,
            Amount: enteredAmount,
            Date: new Date(enteredDate)
        }
        console.log(ExpenseDate)
    }
    
    return (
        <form onSubmit={handleSubmission}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input onChange={titleChangeHandler} type = "text" placeholder="Enter the Title of your Expense"></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input onChange={amountChangeHandler} type = "number" min = "0.01" step= "0.01" placeholder="Enter the Amount of Expense"></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input onChange={dateChangeHandler} type = "date" min="2019-01-01" max="2022-12-31" placeholder="Pick the date of Expense"></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type = "submit">Add Expense</button>
            </div>
        </form>
    )
}; 
export default ExpenseForm;