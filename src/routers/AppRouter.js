import React from 'react';
import createHistory from 'history/createBrowserHistory';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';

import ExpenseDashbordComponent from './../components/ExpenseDashbordComponent';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';

import LoginPage from '../components/loginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path='/' component={LoginPage} exact={true}/>
        <PrivateRoute path='/dashboard' component={ExpenseDashbordComponent}/>
        <PrivateRoute path='/create' component={AddExpensePage}/>
        <Route path='/help' component={HelpPage}/>
        <PrivateRoute path='/edit/:id' component={EditExpensePage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
