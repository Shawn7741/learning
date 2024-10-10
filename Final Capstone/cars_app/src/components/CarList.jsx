import React, { useState, useEffect } from 'react';
import { fetchCars } from '../services/api';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getCars = async () => {
      try {
        const carsData = await fetchCars(search);
        setCars(carsData);
      } catch (error) {
        console.error('Failed to fetch cars:', error);
      }
    };
    getCars();
  }, [search]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Cars</h1>
      <input
        type="text"
        placeholder="Search by name or brand"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <ul>
        {cars.map((car) => (
          <li key={car.id} className="p-2 border-b">
            {car.name} - {car.brand} ({car.year}) - ${car.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
