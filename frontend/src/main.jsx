// src/main.jsx or src/App.jsx (depending on your project structure)
import React from 'react';
import ReactDOM from 'react-dom/client';  // or ReactDOM.render() for older versions
import './index.css';  // This is where Tailwind CSS is imported

import App from './App'; // Import the main App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
