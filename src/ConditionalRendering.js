import { useState } from 'react';

export default function ConditionalRendering() {
  const [condition, setCondition] = useState(true);

  // if (condition) {
  //   return (
  //     <div>
  //       if true
  //       <button onClick={() => setCondition(false)}>to false</button>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       if false
  //       <button onClick={() => setCondition(true)}>to true</button>
  //     </div>
  //   );
  // }

  return (
    <div>
      {/* Boolean operator */}
      {condition && 'On'}
      <button onClick={() => setCondition(!condition)}>
        {/* Ternary operator */}
        {condition ? 'to false' : 'to true'}
      </button>
    </div>
  );
}
