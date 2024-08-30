// Import necessary modules
import React, { useState } from 'react';

// Define the NumberBox component
const NumberBox = ({ initialValue }) => {
  // Initialize state with the initialValue prop
  const [count, setCount] = useState(parseInt(initialValue, 10));

  // Event handlers for buttons
  const handleIncrease = () => {
    if (count<10){
        setCount(count + 1);
        }
    }
  const handleDecrease = () => {
    if (count>-10){
        setCount(count - 1);
    }
    };

  const Reset = ()=> setCount(0)

  // Render the component
  return (
    <div style={{ border: '2px solid green', padding: '20px', textAlign: 'center' }}>
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

// Export the component
export default NumberBox;