import React, { useState } from 'react';
import './App.css';
import {Counter} from "../src/components/Counter.jsx"

function App() {
  const [counts, setCounts] = useState([0, 0, 0, 0, 0]);
  const [inputValue, setInputValue] = useState('');
  console.log(useState)

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = (index) => {
    if (inputValue !== '') {
      setCounts((prevCounts) => {
        const newCounts = [...prevCounts];
        newCounts[index] += parseInt(inputValue);
        return newCounts;
      });
      setInputValue('');
    }
  };

  return (
    <>
      <input type="number" value={inputValue} onChange={handleInputChange} />
      {counts.map((count, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(index)}
          type="button"
          disabled={inputValue === ''}
        >
          {index + 1} Fraction
        </button>
      ))}
      <ul>
        {counts.map((count, index) => (
          <li key={index}>{index + 1} fraction Sum: {count}</li>
        ))}
      </ul>
      <Counter/>
    </>
  );
}

export default App;
