import React from 'react';

import Navbar from './components/Navbar/Navbar';
import HomeContainer from './components/HomeContainer/HomeContainer';
import './App.scss';
import Snackbar from './components/Snackbar/Snackbar';
import SnackbarProvider from './contexts/SnackbarContext';

function App() {
  return (
    <div className="App">
      <SnackbarProvider>
        <Snackbar/>
        <Navbar/>
        <HomeContainer/>
      </SnackbarProvider>
    </div>
  );
}

export default App;
