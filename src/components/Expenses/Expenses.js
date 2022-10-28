import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenceFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState('2020');

  const filterChangeHandler = (year) => {
    setYearFilter(year);
  };

  let filteredByYearExpenceItems = props.items.filter(expense =>{
    return expense.date.getFullYear().toString()===yearFilter;
  }
  );

  return (
    <Card className='expenses'>
      <ExpenceFilter
        selectedYear={yearFilter}
        onFilterChange={filterChangeHandler}
      />
      {filteredByYearExpenceItems.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        );
      })}

      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
}

export default Expenses;
