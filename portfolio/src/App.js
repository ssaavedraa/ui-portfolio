import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar/NavBar.component';
import HomeCards from './components/HomeCards/HomeCards.component';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<HomeCards/>}/>
        <Route exact path='/about-me' />
        <Route exact path='/projects' />
        <Route exact path='/education' />
        <Route exact path='/skills' />
        <Route exact path='/contact' />
      </Routes>
    </Router>
  );
}

export default App;
