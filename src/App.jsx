import './App.css';
import React from 'react';
import Home from './pages/Home/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn/LogIn.jsx';
import Schedule from './pages/Schedule/Schedule.jsx';
import Gallery from './pages/gallery/Gallery.jsx';
import Blog from './pages/Blog/Blog.jsx';


function App () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LogIn />} />
      <Route path="schedule" element={<Schedule />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="blog" element={<Blog />} />

    </Routes>
  );
}

export default App;
