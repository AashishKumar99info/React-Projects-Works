import "./ExpenseFrom.css"
const ExpenseForm = () => {
    
    const handleTitle=(e)=>{
        console.log(e.target.value)
    }

    const handleAmount=(e)=>{
        console.log(e.target.value)
    }

    const handleDate=(e)=>{
        console.log(e.target.value)
    }

    const handleSubmisiion=(e)=>{
        console.log(e.target.value)
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input onChange={handleTitle} type = "text" placeholder="Enter the Title of your Expense"></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input onChange={handleAmount} type = "number" min = "0.01" step= "0.01" placeholder="Enter the Amount of Expense"></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input onChange={handleDate} type = "date" min="2019-01-01" max="2022-12-31" placeholder="Pick the date of Expense"></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onChange={handleSubmisiion} type = "submit">Add Expense</button>
            </div>
        </form>
    )
}; 
export default ExpenseForm;