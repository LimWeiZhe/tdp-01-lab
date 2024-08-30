// Import necessary modules
import React, { useState } from 'react';

// Define the AlertBox component
const AlertBox = ({initialValue}) => {
  // Initialize state with a message
  const [message, setMessage] = useState(initialValue);

  // Render the component
  return (
    <div style={{ border: '4px solid black', padding: '10px' }}>
      {message}
    </div>
  );
};

// Export the component
export default AlertBox;