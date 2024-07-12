// import React, { useState } from 'react';

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
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-white p-6 rounded shadow-lg">
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
          {['1', '2', '3', '-'].map((value) => (
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


// import { useState } from 'react';
// import useCalculationHistory from './calchistory';

// const Calculator = () => {
//   const [input, setInput] = useState('');
//   const [history, addToHistory] = useCalculationHistory();

//   const handleClick = (value) => {
//     setInput(input + value);
//   };

//   const handleClear = () => {
//     setInput('');
//   };

//   const handleEqual = () => {
//     try {
//       const result = eval(input).toString();
//       addToHistory(input, result);
//       setInput(result);
//     } catch (error) {
//       setInput('Error');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-900">
//       <div className="bg-white p-6 rounded shadow-lg">
//         <div className="mb-4 text-right text-2xl font-mono">{input}</div>
//         <div className="grid grid-cols-4 gap-2">
//           {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'].map((value) => (
//             <button
//               key={value}
//               onClick={() => value === '=' ? handleEqual() : value === 'C' ? handleClear() : handleClick(value)}
//               className="p-4 bg-blue-500 text-white rounded"
//             >
//               {value}
//             </button>
//           ))}
//         </div>
//         <div className="mt-4">
//           <h2 className="text-xl font-bold mb-2">History</h2>
//           <ul className="bg-gray-100 p-2 rounded h-40 overflow-y-auto">
//             {history.map((item, index) => (
//               <li key={index} className="border-b py-1">{item}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calculator;