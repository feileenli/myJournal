import './App.css'
import React, { useState, useEffect } from 'react'
import Book from './components/Book'

function App() {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('mode');
    return savedMode || 'light-mode';
  });

  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(mode);
  }, [mode]);

  const toggleMode = () => {
    const newMode = mode === 'light-mode' ? 'dark-mode' : 'light-mode';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  return (
    <>
      <button 
        id="toggle-mode-btn"
        onClick={toggleMode}
      >
        <i className={mode === 'dark-mode' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill'}></i>
      </button>
      <div className="container">
        <Book />
      </div>
    </>
  )
}

export default App
