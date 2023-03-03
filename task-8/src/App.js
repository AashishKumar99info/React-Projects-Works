import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: "e1",
      date: new Date(),
      title: "New car",
      amount: "RS 4 Crs",
      location: "Delhi",
    },
    {
      id: "e2",
      date: new Date(),
      title: "Decoratives",
      amount: "RS 1,000",
      location: "Delhi",
    },
    {
      id: "e3",
      date: new Date(),
      title: "Electricity bill",
      amount: "RS 8,000",
      location: "Delhi",
    },
    {
      id: "e4",
      date: new Date(),
      title: "Domestic props",
      amount: "RS 10,000",
      location: "Delhi",
    }
  ];

  return (
    <div>
      <h2> Hey there everyone, Aash is here. </h2>
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
