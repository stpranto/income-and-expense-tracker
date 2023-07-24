// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/income" component={IncomePage} />
          <Route exact path="/expenses" component={ExpensePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
