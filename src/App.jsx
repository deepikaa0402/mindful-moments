import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoginSignUp from './components/LoginSignUp';
import MoodQuestionnaire from './components/MoodQuestionnaire';
import Journaling from './components/Journaling';
import './styles.css'; 
import './login.css'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/mood" element={<MoodQuestionnaire />} />
          <Route path="/journaling" element={<Journaling />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

