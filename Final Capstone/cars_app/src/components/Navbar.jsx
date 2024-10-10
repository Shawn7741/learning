import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-lg font-bold">Car Showroom</h1>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/cars" className="text-white hover:text-gray-300">
            Cars
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
