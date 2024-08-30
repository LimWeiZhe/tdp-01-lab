// Import necessary modules
import React, { useState } from 'react';

// Define the TickleBox component
const TickleBox = ({ message }) => {
  // Initialize state to track mouse over status
  const [isMouseOver, setIsMouseOver] = useState(false);

  // Event handlers for mouse enter and leave
  const handleMouseEnter = () => setIsMouseOver(true);
  const handleMouseLeave = () => setIsMouseOver(false);

  // Render the component
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        border: '2px solid blue',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer'
      }}
    >
      {isMouseOver ? message : 'Hover over me!'}
    </div>
  );
};

// Export the component
export default TickleBox;