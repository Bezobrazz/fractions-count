import React, { useState } from 'react';
import './App.css';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = (count, setCount) => {
    if (inputValue !== '') {
      setCount(parseInt(inputValue) + count);
      setInputValue('');
    }
  };

  return (
    <>
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <button
        onClick={() => handleButtonClick(count1, setCount1)}
        type="button"
        disabled={inputValue === ''}
      >
        1 Fraction
      </button>
      <button
        onClick={() => handleButtonClick(count2, setCount2)}
        type="button"
        disabled={inputValue === ''}
      >
        2 Fraction
      </button>
      <button
        onClick={() => handleButtonClick(count3, setCount3)}
        type="button"
        disabled={inputValue === ''}
      >
        3 Fraction
      </button>
      <button
        onClick={() => handleButtonClick(count4, setCount4)}
        type="button"
        disabled={inputValue === ''}
      >
        4 Fraction
      </button>
      <button
        onClick={() => handleButtonClick(count5, setCount5)}
        type="button"
        disabled={inputValue === ''}
      >
        5 Fraction
      </button>

      <ul>
        <li>1 fraction Sum: {count1}</li>
        <li>2 fraction Sum: {count2}</li>
        <li>3 fraction Sum: {count3}</li>
        <li>4 fraction Sum: {count4}</li>
        <li>5 fraction Sum: {count5}</li>
      </ul>
    </>
  );
}

export default App;
