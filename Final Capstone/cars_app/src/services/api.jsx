import axios from 'axios';

// Set base URL for the API
const API_URL = 'https://your-api-endpoint.com/api'; // Replace with your actual API base URL


export const fetchCars = async (searchTerm = '') => {
  try {
    const response = await axios.get(`${API_URL}/cars`, {
      params: {
        search: searchTerm,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

// Function to fetch a single car by ID
export const fetchCarById = async (carId) => {
  try {
    const response = await axios.get(`${API_URL}/cars/${carId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching car:', error);
    throw error;
  }
};

// Function to create a new car (example for POST request)
export const createCar = async (carData) => {
  try {
    const response = await axios.post(`${API_URL}/cars`, carData);
    return response.data;
  } catch (error) {
    console.error('Error creating car:', error);
    throw error;
  }
};
