import styles from './App.module.css';
import React from 'react';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn/LogIn';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LogIn />} />
    </Routes>
  );
}

export default App;
