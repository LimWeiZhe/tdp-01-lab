import React, { useState } from "react";

const SimpleCounter = ({ initialValue = 0 }) => {
  const [number, setNumber] = useState(initialValue);

  const change = () => {
    setNumber(prevNumber => prevNumber + 10);
  };

  return (
    <>
      <div
        style={{ border: "1px solid black", width: "50px", height: "50px", margin: "50px", padding : "15px" }}>
        {number}
      </div>
      <button onClick={change}
        style={{ border: "1px solid black", width: "50px", height: "50px", margin: "50px", padding: '15px' }}>
      +10
      </button>
    </>
  );
};

export default SimpleCounter;
