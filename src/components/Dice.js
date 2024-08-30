import React, { useState } from 'react';

// Define the Dice component
const Dice = () => {
  // Function to generate a random integer between 1 and 6
  const getRandomInt = () => Math.floor(Math.random() * 6) + 1;

  // Initialize state with a random dice value
  const [diceValue, setDiceValue] = useState(getRandomInt());

  // Event handler for clicking the div
  const handleClick = () => {
    setDiceValue(getRandomInt());
  };
  
  // Function to determine the text color based on the dice value
  const getTextColor = () => {
    if (diceValue  === 1) 
      return 'red';
    if (diceValue === 6)
      return 'green';
  }
  // Render the component
  return (
    <div
      onClick={handleClick}
      style={{
        border: '2px solid red',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        width: '50px',
        margin: 'auto',
        fontSize: '24px',
        color: getTextColor()
      }}
    >
        {diceValue}
    </div>
  );
};

// Export the component
export default Dice;