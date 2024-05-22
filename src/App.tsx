import React from 'react';
import './App.css';
import './all.css';
import { Acceuil } from './Home/Acceuil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Acceuil/>}/>
      </Routes>
    </Router>
  );
}

export default App;
