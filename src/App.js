import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import DefaultPage from './components/DefaultPage';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Verify from './components/Verify'

function App() {
  return (
  <div className="flex justify-center items-center">
    <Router>
      <Switch>
        <Route exact path="/">
          {<DefaultPage />}
        </Route>
        <Route exact path="/register">
          {<Register />}
        </Route>
        <Route exact path="/login">
          {<Login />}
        </Route>
        <Route exact path="/verify">
          {<Verify />}
        </Route>
        <Route exact path="/dashboard">
          {<Dashboard />}
        </Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
