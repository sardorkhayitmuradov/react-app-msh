import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV Station',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// DUMMY_EXPENSES.forEach(el => {
//   console.log(el.date.getFullYear());
// })

function App() {
  const [expenses , setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseItem = expense =>{
    setExpenses(prevExpences => {
      return [expense , ...prevExpences]
    });
  }
  
  return (
    <div className='App'>
      <NewExpense onAddExpenseItem={addExpenseItem} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
