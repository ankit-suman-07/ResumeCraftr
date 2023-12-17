import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Show from './pages/show-resume/Show';
import Create from './pages/create-resume/Create';
import Edit from './pages/edit-resume/Edit';
import Delete from './pages/delete-resume/Delete';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume/create' element={<Create />} />
        <Route path='/resume/show/:id' element={<Show />} />
        <Route path='/resume/edit/:id' element={<Edit />} />
        <Route path='/resume/delete/:id' element={<Delete />} />
      </Routes>
    </Router>
  );
}

export default App;
