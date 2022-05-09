import { useState } from 'react';

export default function StatefulCounter() {
  // 1. Declare a state variable called "count"
  // with a starting value of 0
  //
  // We receive both of:
  // - count: the current value
  // - setCount: a function to update the value
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* 2. Use the state variable */}
        Count: {count}
      </div>

      <button
        onClick={() =>
          // 3. Update the value using the "setCount" function
          setCount(count + 1)
        }
      >
        +
      </button>

      <button onClick={() => setCount(count - 1)}>-</button>

      <button onClick={() => setCount(17)}>17</button>
    </>
  );
}
