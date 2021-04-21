// NPM imports
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Components imports 
import Header from '../Header';
import CreateList from '../CreateList';
import List from '../List';
// Styles imports
import './App.css';


function App() {

  return (
    <div className="app-content">
      <Header />
      
      <Switch>
        <Route exact path="/" component={CreateList} />
        <Route exact path="/my-list" component={List} />
      </Switch>
    </div>

  );
}

export default App;
