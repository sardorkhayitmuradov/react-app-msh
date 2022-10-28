import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import './ExpenseForm';

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseItem(expenseData);
    setEditing(false);
  };
  const startEditingHandler = () => {
    setEditing(true);
  };

  const stopEditingHandler = () => {
    setEditing(false)
  }

  return (
    <div className='new-expense'>
      {!isEditing && (
        <div className='new-expense__actions new-expense__add'>
          <button className='submit' onClick={startEditingHandler}>
            Add New Expense
          </button>
        </div>
      )}
      {
        isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={stopEditingHandler} />
      }
    </div>
  );
};

export default NewExpense;
