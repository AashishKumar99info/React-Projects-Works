import "./ExpenseIteam.css";

function ExpenseIteam(props) {
//   const d= new Date()
//   const expensetitle = "Car insurance"
//   const amount = 'RS 2000'
//   const location = "delhi"
    return (
    <div className="container">
      <h2>{props.date.toDateString()}</h2>
      <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
        <h2>{props.title}</h2>
        <h2>{props.amount}</h2>
        <h2>{props.location}</h2>
      </div>
    </div>
  );
}

export default ExpenseIteam;
