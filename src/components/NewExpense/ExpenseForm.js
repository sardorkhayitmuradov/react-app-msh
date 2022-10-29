import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [expenseItemInput , setExpenseItemInput] = useState({
  //     title: '',
  //     amount: '',
  //     date: '',
  // })
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setExpenseItemInput({
    //     ...expenseItemInput,
    //     title: event.target.value,
    // })

    // setExpenseItemInput((prevState)=> {
    //     return {
    //         ...prevState,
    //         title: event.target.value
    //     }
    // })
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setExpenseItemInput({
    //     ...expenseItemInput,
    //     amount: event.target.value,
    // })
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setExpenseItemInput({
    //     ...expenseItemInput,
    //     date: event.target.value,
    // })
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData)

    setEnteredTitle('');
    setEnteredAmount('')
    setEnteredDate('')
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={enteredAmount}
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-31-12'
            max='2022-31-12'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button className='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
