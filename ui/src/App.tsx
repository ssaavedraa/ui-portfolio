import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HomeContainer from './components/HomeContainer/HomeContainer';
import ContactForm from './components/ContactForm/ContactForm';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomeContainer/>}/>
          <Route path='/about' />
          <Route path='/projects' />
          <Route path='/education' />
          <Route path='/skills' />
          <Route path='/contact' element={<ContactForm/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
