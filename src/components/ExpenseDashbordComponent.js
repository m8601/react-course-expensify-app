import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensesListFilters from './ExpensesListFilters';


const ExpenseDashbordComponent = () => (
  <div>
    <ExpensesListFilters/>
    <ExpenseList/>
  </div>
);

export default ExpenseDashbordComponent;
