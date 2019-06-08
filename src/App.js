import React from 'react';

import CountryList from './components/CountryList';
import Search from './components/Search';

import './App.css';

function App() {
  return (
    <div className="App">
     <Search />
     <CountryList />
    </div>
  );
}

export default App;
