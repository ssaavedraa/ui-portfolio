import React from 'react';

import Navbar from './components/Navbar/Navbar';
import HomeContainer from './components/HomeContainer/HomeContainer';
import ContactForm from './components/ContactForm/ContactForm';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomeContainer/>
      <ContactForm/>
    </div>
  );
}

export default App;
