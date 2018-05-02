import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import ExpenseDashbordComponent from './../components/ExpenseDashbordComponent';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';










const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path='/' component={ExpenseDashbordComponent} exact={true}/>
        <Route path='/create' component={AddExpensePage}/>
        <Route path='/help' component={HelpPage}/>
        <Route path='/edit/:id' component={EditExpensePage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
