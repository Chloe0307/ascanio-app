// NPM imports
import React from 'react';

// Components imports 
import Header from '../Header';
import Search from '../Search';
import CreateList from '../CreateList';

// Styles imports
import './App.css';


function App() {

  return (
    <div className="app-content">
      <Header />
      <CreateList />
      <Search />
    </div>

  );
}

export default App;
