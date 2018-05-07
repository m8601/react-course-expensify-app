import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensesListFilters from './ExpensesListFilters';
import ExpensesSummary from './ExpensesSummary';


const ExpenseDashbordComponent = () => (
  <div>
    <ExpensesListFilters/>
    <ExpenseList/>
    <ExpensesSummary/>
  </div>
);

export default ExpenseDashbordComponent;
