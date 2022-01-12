import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: 'Car 1Insurance', amount: 12944.67, date: new Date(2021, 2, 11), key: Math.random() },
    { title: 'Car 2Insurance', amount: 22944.67, date: new Date(2021, 1, 12), key: Math.random() },
    { title: 'Car 3Insurance', amount: 32944.67, date: new Date(2021, 3, 13), key: Math.random() },
    { title: 'Car 4Insurance', amount: 42944.67, date: new Date(2021, 4, 2), key: Math.random() },
    { title: 'Car 5Insurance', amount: 42944.67, date: new Date(2021, 5, 22), key: Math.random() },
  ];


  return (
    <div>
      <h2>Let's get started!</h2>
      <p>
        This is also visible!
      </p>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
