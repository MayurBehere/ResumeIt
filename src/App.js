import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';
import Home from './components/Home/Home';
import Main from './Main';
import About from './LandComponents/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/Resume-it" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path='/About' element={<About/>} />
        <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
