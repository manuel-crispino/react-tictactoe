import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
} else {
  console.error("Elemento con id 'root' non trovato.");
}
