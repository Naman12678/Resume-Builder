import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage'
import ResumeFormPage from './components/ResumeFromPage';
import ResumeDisplayPage from './components/ResumeDisplayPage';

const App = () => {
  const [formData, setFormData] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumeFormPage setFormData={setFormData} />} />
        <Route path="/resumedisplay" element={<ResumeDisplayPage formData={formData} />} />
      </Routes>
    </Router>
  );
};

export default App;
