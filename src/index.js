import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './Router'
import Navbar from './Componentes/Navbar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Router />
  </React.StrictMode>
);

reportWebVitals();
