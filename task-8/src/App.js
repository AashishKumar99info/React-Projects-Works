import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: "e1",
      date: new Date(),
      title: "New car",
      amount: "4 Crs",
      location: "Delhi",
    },
    {
      id: "e2",
      date: new Date(),
      title: "Decoratives",
      amount: "1,000",
      location: "Delhi",
    },
    {
      id: "e3",
      date: new Date(),
      title: "Electricity bill",
      amount: "8,000",
      location: "Delhi",
    },
    {
      id: "e4",
      date: new Date(),
      title: "Domestic props",
      amount: "10,000",
      location: "Delhi",
    }
  ];

  return (
    <div>
      <h2> Hey there everyone, Aash is here. </h2>
      <NewExpense></NewExpense>
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
