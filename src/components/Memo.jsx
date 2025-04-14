import React, { useState, useMemo } from "react";

function Memo() {
  const [num1, setNum1] = useState(5);
  const [num2, setNum2] = useState(3);
  const [count, setCount] = useState(0); // Just to trigger rerenders for demo

  // Memoized addition
  const addition = useMemo(() => {
    console.log("Calculating addition...");
    return num1 + num2;
  }, [num1, num2]);

  // Memoized subtraction
  const subtraction = useMemo(() => {
    console.log("Calculating subtraction...");
    return num1 - num2;
  }, [num1, num2]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useMemo Example with Buttons</h2>
      <p>Num1: {num1}</p>
      <p>Num2: {num2}</p>

      <button onClick={() => setNum1(num1 + 1)}>+1 to Num1</button>
      <button onClick={() => setNum2(num2 + 1)}>+1 to Num2</button>

      <div style={{ marginTop: "20px" }}>
        <p><strong>Addition:</strong> {addition}</p>
        <p><strong>Subtraction:</strong> {subtraction}</p>
      </div>

      <button onClick={() => setCount(count + 1)} style={{ marginTop: "10px" }}>
        Rerender App (Count: {count})
      </button>
    </div>
  );
}

export default Memo;
