import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // Ensure TailwindCSS is included here
import Home from './pages/Home';
import CarList from './components/CarList';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* The Navbar will be displayed on all pages */}
      <div className="container mx-auto mt-4"> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/cars" element={<CarList />} /> 
        </Routes>
      </div>
    </Router>
  );
};

// Rendering the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
