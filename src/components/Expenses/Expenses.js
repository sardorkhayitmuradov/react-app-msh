/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenceFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState('2020');

  const filterChangeHandler = (year) => {
    setYearFilter(year);
  };

  let filteredByYearExpenceItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });

  return (
    <Card className='expenses'>
      <ExpenceFilter
        selectedYear={yearFilter}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesList items={filteredByYearExpenceItems}/>
      {/* Pastdagi kodlar alternative variantlar va shu yerda joylashishi mumkin edi  */}
    </Card>
  );
}

export default Expenses;

// eslint-disable-next-line no-lone-blocks
{/* {filteredByYearExpenceItems === 0 && (
        <p className='expenses-not-found'>No Expenses Found !</p>
      )}
      {filteredByYearExpenceItems.length > 0 &&
        filteredByYearExpenceItems.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          );
        })} */}
      {/* {
        filteredByYearExpenceItems.length === 0 ? <p className='expenses-not-found'>No Expenses Found !</p> : filteredByYearExpenceItems.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          );
        })
      } */}
