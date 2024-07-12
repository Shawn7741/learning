import { useState } from 'react';

const useCalculationHistory = () => {
  const [history, setHistory] = useState([]);

  const addToHistory = (expression, result) => {
    const calculation = ${expression} = ${result};
    setHistory((prevHistory) => {
      const newHistory = [...prevHistory, calculation];
      return newHistory.length > 10 ? newHistory.slice(1) : newHistory;
    });
  };

  return [history, addToHistory];
};

export default useCalculationHistory;