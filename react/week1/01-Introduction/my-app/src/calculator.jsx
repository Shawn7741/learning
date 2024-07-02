// import { useState } from "react";

import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-900">
      <div className="bg-slate-500 p-6 rounded shadow-lg">
        <div className="mb-4 text-right text-2xl font-mono">{input}</div>
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/'].map((value) => (
            <button key={value} onClick={() => handleClick(value)} className="p-4 bg-cyan-100 hover:bg-cyan-300 rounded">
              {value}
            </button>
          ))}
          {['4', '5', '6', '*'].map((value) => (
            <button key={value} onClick={() => handleClick(value)} className="p-4 bg-cyan-100 hover:bg-cyan-300 rounded">
              {value}
            </button>
          ))}
        
          {['0', '.', '=', '+'].map((value) => (
            <button key={value} onClick={() => (value === '=' ? handleEqual() : handleClick(value))} className="p-4 bg-cyan-100 hover:bg-cyan-300 rounded">
              {value}
            </button>
          ))}
          <button onClick={handleClear} className="col-span-4 p-4 bg-gray-400 hover:bg-gray-600 rounded">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;