import './App.css';
import React from 'react';
import Home from './pages/Home/Home.tsx';
import { Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn/LogIn.tsx';
import Schedule from './pages/Schedule/Schedule.tsx';


const App:React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LogIn />} />
      <Route path="schedule" element={<Schedule />} />
    </Routes>
  );
}

export default App;
