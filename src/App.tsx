import React from 'react';

import Navbar from './components/Navbar/Navbar';
import HomeContainer from './components/HomeContainer/HomeContainer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomeContainer/>
    </div>
  );
}

export default App;
